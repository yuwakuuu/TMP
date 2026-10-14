// Bakes the 3D "TMP" wordmark into assets/3d/tmp-wordmark.bin, so phones download a small,
// ready-made mesh instead of running marching cubes (which needs ~100 MB of memory at this
// quality and can make iPhone Safari drop the page's 3D). Run: node tools/bake-mesh.mjs
//
// Pipeline: metaballs along the Shrikhand strokes (tools/wordmark-balls.js) -> marching cubes
// -> weld -> Taubin smoothing -> meshoptimizer simplification -> 16-bit quantisation.
//
// File layout (little endian):
//   Uint32 vertexCount, Uint32 indexCount, Float32 min[3], Float32 max[3],
//   Uint32 vertexBytes, Uint32 indexBytes,
//   meshopt-encoded vertices (8-byte records: Uint16 x, y, z quantised into min..max, pad),
//   meshopt-encoded triangle indices (32-bit).
import * as THREE from 'three';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { MeshoptSimplifier, MeshoptEncoder } from 'meshoptimizer';
import { writeFile, mkdir } from 'node:fs/promises';
import balls from './wordmark-balls.js';

const RES = 220, SMOOTH = 12, TARGET_TRIANGLES = 40000, WIDTH = 6.2;

const mc = new MarchingCubes(RES, new THREE.MeshBasicMaterial(), false, false, 400000);
mc.isolation = 80;
const SUB = 16;
for (let i = 0; i < balls.length; i += 3) {
  const rs = balls[i + 2] * 1.25;
  mc.addBall(0.5 + balls[i], 0.5 + balls[i + 1], 0.5, (mc.isolation + SUB) * rs * rs * 0.3, SUB);
}
mc.update();

let g = new THREE.BufferGeometry();
g.setAttribute('position', new THREE.BufferAttribute(mc.positionArray.slice(0, mc.count * 3), 3));
g = mergeVertices(g, 1e-5);
taubin(g, SMOOTH);
g.center();
g.computeBoundingBox();
const w = g.boundingBox.max.x - g.boundingBox.min.x;
g.scale(WIDTH / w, WIDTH / w, WIDTH / w);

await MeshoptSimplifier.ready;
const pos = g.attributes.position.array;
const idx = new Uint32Array(g.index.array);
const [simplified, error] = MeshoptSimplifier.simplify(idx, new Float32Array(pos), 3, Math.min(idx.length, TARGET_TRIANGLES * 3), 0.0015, []);
console.log(`marching cubes: ${pos.length / 3} vertices, ${idx.length / 3} triangles`);

// keep only the vertices the simplified mesh uses
const remap = new Int32Array(pos.length / 3).fill(-1);
const out = [];
const outIdx = new Uint32Array(simplified.length);
for (let i = 0; i < simplified.length; i++) {
  const v = simplified[i];
  if (remap[v] < 0) { remap[v] = out.length / 3; out.push(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]); }
  outIdx[i] = remap[v];
}
const vertexCount = out.length / 3;
const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
for (let i = 0; i < out.length; i++) { const a = i % 3; min[a] = Math.min(min[a], out[i]); max[a] = Math.max(max[a], out[i]); }
const q = new Uint16Array(out.length);
for (let i = 0; i < out.length; i++) { const a = i % 3; q[i] = Math.round(((out[i] - min[a]) / (max[a] - min[a])) * 65535); }

// meshopt-encode (designed to then be gzipped by the server): vertices as 8-byte records
// (x, y, z, pad as Uint16), triangles as an encoded index buffer.
await MeshoptEncoder.ready;
// reorder triangles and vertices for locality, which is what makes the encoding small
const [vremap] = MeshoptEncoder.reorderMesh(outIdx, true, true);
const verts = new Uint16Array(vertexCount * 4);
for (let v = 0; v < vertexCount; v++) {
  const d = vremap[v];
  if (d === 0xffffffff) continue;
  verts[d * 4] = q[v * 3]; verts[d * 4 + 1] = q[v * 3 + 1]; verts[d * 4 + 2] = q[v * 3 + 2];
}
const vbuf = MeshoptEncoder.encodeVertexBuffer(new Uint8Array(verts.buffer), vertexCount, 8);
const ibuf = MeshoptEncoder.encodeIndexBuffer(new Uint8Array(outIdx.buffer), outIdx.length, 4);
const headerBytes = 8 + 24 + 8;
const buf = new ArrayBuffer(headerBytes + vbuf.length + ibuf.length);
const dv = new DataView(buf);
dv.setUint32(0, vertexCount, true);
dv.setUint32(4, outIdx.length, true);
for (let a = 0; a < 3; a++) { dv.setFloat32(8 + a * 4, min[a], true); dv.setFloat32(20 + a * 4, max[a], true); }
dv.setUint32(32, vbuf.length, true);
dv.setUint32(36, ibuf.length, true);
new Uint8Array(buf, headerBytes, vbuf.length).set(vbuf);
new Uint8Array(buf, headerBytes + vbuf.length, ibuf.length).set(ibuf);

await mkdir(new URL('../assets/3d/', import.meta.url), { recursive: true });
await writeFile(new URL('../assets/3d/tmp-wordmark.bin', import.meta.url), new Uint8Array(buf));
console.log(`vertices ${vertexCount}, triangles ${outIdx.length / 3}, error ${error.toFixed(5)}, ${(buf.byteLength / 1024).toFixed(0)} KB`);

// Taubin smoothing over an indexed mesh: each pass pulls every vertex toward the average
// of its neighbours (λ) and then pushes it back out (μ), smoothing without shrinking.
function taubin(geometry, passes) {
  const p = geometry.attributes.position.array;
  const ix = geometry.index.array;
  const count = p.length / 3;
  const deg = new Uint32Array(count);
  for (let i = 0; i < ix.length; i += 3) { deg[ix[i]] += 2; deg[ix[i + 1]] += 2; deg[ix[i + 2]] += 2; }
  const start = new Uint32Array(count + 1);
  for (let i = 0; i < count; i++) start[i + 1] = start[i] + deg[i];
  const nb = new Uint32Array(start[count]);
  const fill = start.slice(0, count);
  for (let i = 0; i < ix.length; i += 3) {
    const a = ix[i], b = ix[i + 1], c = ix[i + 2];
    nb[fill[a]++] = b; nb[fill[a]++] = c;
    nb[fill[b]++] = a; nb[fill[b]++] = c;
    nb[fill[c]++] = a; nb[fill[c]++] = b;
  }
  const tmp = new Float32Array(p.length);
  const step = (f) => {
    for (let v = 0; v < count; v++) {
      let x = 0, y = 0, z = 0;
      const s0 = start[v], s1 = start[v + 1];
      for (let k = s0; k < s1; k++) { const o = nb[k] * 3; x += p[o]; y += p[o + 1]; z += p[o + 2]; }
      const inv = s1 > s0 ? 1 / (s1 - s0) : 0, o = v * 3;
      tmp[o] = p[o] + f * (x * inv - p[o]);
      tmp[o + 1] = p[o + 1] + f * (y * inv - p[o + 1]);
      tmp[o + 2] = p[o + 2] + f * (z * inv - p[o + 2]);
    }
    p.set(tmp);
  };
  for (let i = 0; i < passes; i++) { step(0.63); step(-0.67); }
}
