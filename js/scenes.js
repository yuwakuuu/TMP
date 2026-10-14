import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { createChromeStage, inertia, TAU } from './chrome-stage.js';
import { MeshoptDecoder } from 'meshoptimizer/meshopt_decoder.module.js';

const WORDMARK_URL = new URL('assets/3d/tmp-wordmark.bin', document.baseURI);

// Two chrome objects share one look: the liquid "TMP" wordmark (hero and loading screen)
// and the infinity loop in Sammy's section. Both spin on their own, drag with
// inertia, tilt toward the pointer and pulse on tap / Enter.

// Resting spin, rad/s: slow while face-on so it reads, quicker through the edge-on part.
const lingerSpin = (s, slow, fast) => slow + (fast - slow) * Math.abs(Math.sin(s.rotY));

export function initWordmark(canvas, opts = {}) {
  const { reduced = false, spin = false } = opts;
  // A steady showroom turn for the loading screen, slower while the word faces you.
  const spinPose = (s, t, dt) => {
    inertia(s, dt, reduced ? 0 : lingerSpin(s, 0.9, 2.6));
    s.rotX += (0.1 - s.rotX) * (1 - Math.exp(-dt * 1.4));
    return true;
  };
  // Hero: sways gently so the word stays readable, then every few seconds does a full
  // spin. A drag or fling spins it freely; it settles back to face-on afterwards.
  const heroPose = (s, t, dt) => {
    inertia(s, dt, 0);
    if (!reduced) {
      if (Math.abs(s.velY) > 0.6) s.turn = Math.round(s.rotY / TAU);
      else if (t > s.nextFlip) { s.turn += 1; s.nextFlip = t + 9; }
      const target = s.turn * TAU + Math.sin(t * 0.55) * 0.42;
      s.rotY += (target - s.rotY) * (1 - Math.exp(-dt * 1.5));
    }
    const bob = reduced ? 0.12 : 0.12 + Math.sin(t * 0.7) * 0.08;
    s.rotX += (bob - s.rotX) * (1 - Math.exp(-dt * 1.4));
    return Math.abs(s.rotX - bob) < 0.002;
  };
  const stage = createChromeStage(canvas, {
    ...opts,
    build: buildWordmark,
    initial: { rotY: reduced ? -0.25 : -TAU - 0.9, rotX: 0.12, turn: 0, nextFlip: 12 },
    fitAspect: 1.7,
    studio: 'soft',
    halo: 0.62,
    haloSize: 6,
    pose: spin ? spinPose : heroPose,
  });
  // after the loading screen: keep spinning to the next whole turn, then sway as the hero
  stage.toHero = () => stage.setPose(heroPose, (s, t) => {
    s.velY = 0;
    s.turn = Math.ceil(s.rotY / TAU);   // finish the current turn forwards, never rewind
    s.nextFlip = t + 9;
  });
  return stage;
}

// Sammy's section: the same weave in liquid chrome, turning slowly and calmly.
export function initEternal(canvas, opts = {}) {
  const { reduced = false } = opts;
  return createChromeStage(canvas, {
    ...opts,
    build: buildChromeLoop,
    initial: { rotY: reduced ? -0.35 : -2.4, rotX: 0.1 },
    fitAspect: 1.3,
    halo: 0.62,
    haloSize: 5.2,
    pose(s, t, dt) {
      inertia(s, dt, reduced ? 0 : lingerSpin(s, 0.16, 0.6));
      const bob = reduced ? 0.1 : 0.1 + Math.sin(t * 0.5) * 0.06;
      s.rotX += (bob - s.rotX) * (1 - Math.exp(-dt * 1.4));
      return Math.abs(s.rotX - bob) < 0.002;
    },
  });
}

// ---- geometry ---------------------------------------------------------------------------

// "TMP" poured in liquid chrome. The mesh is baked ahead of time by tools/bake-mesh.mjs
// (metaballs along the Shrikhand strokes, marching cubes, smoothing, simplification) and
// shipped meshopt-compressed, so the browser only decodes it: no heavy work on phones.
async function buildWordmark() {
  const [res] = await Promise.all([fetch(WORDMARK_URL), MeshoptDecoder.ready]);
  if (!res.ok) throw new Error('wordmark mesh ' + res.status);
  const buf = await res.arrayBuffer();
  const dv = new DataView(buf);
  const vertexCount = dv.getUint32(0, true), indexCount = dv.getUint32(4, true);
  const min = [0, 1, 2].map((a) => dv.getFloat32(8 + a * 4, true));
  const max = [0, 1, 2].map((a) => dv.getFloat32(20 + a * 4, true));
  const vBytes = dv.getUint32(32, true), iBytes = dv.getUint32(36, true);
  const vSrc = new Uint8Array(buf, 40, vBytes), iSrc = new Uint8Array(buf, 40 + vBytes, iBytes);
  const verts = new Uint16Array(vertexCount * 4);
  MeshoptDecoder.decodeVertexBuffer(new Uint8Array(verts.buffer), vertexCount, 8, vSrc);
  const index = new Uint32Array(indexCount);
  MeshoptDecoder.decodeIndexBuffer(new Uint8Array(index.buffer), indexCount, 4, iSrc);
  const pos = new Float32Array(vertexCount * 3);
  for (let v = 0; v < vertexCount; v++) {
    for (let a = 0; a < 3; a++) pos[v * 3 + a] = min[a] + (verts[v * 4 + a] / 65535) * (max[a] - min[a]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(new THREE.BufferAttribute(vertexCount > 65535 ? index : new Uint16Array(index), 1));
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return { geometry: g, source: 'baked' };
}

// A lemniscate swept by a tube whose radius swells and pinches along its length, so the
// loop looks poured from liquid metal: fat lobes, slim necks and a few beads. Used in
// Sammy's section, for eternal life.
function buildChromeLoop({ lite }) {
  const HALF_WIDTH = 1.85, RADIUS = 0.15, WEAVE = 0.26;
  const pts = [];
  const n = 240;
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const s = Math.sin(t), c = Math.cos(t);
    const d = 1 + s * s;
    pts.push(new THREE.Vector3(c / d, (1.5 * s * c) / d, WEAVE * s));
  }
  const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
  const tubular = lite ? 320 : 520, radial = lite ? 28 : 44;
  let g = new THREE.TubeGeometry(curve, tubular, RADIUS, radial, true);

  // radius profile, u in [0, 1): lobes at u = 0 and 0.5, necks where the strands cross
  const bead = (u, at, w) => Math.exp(-((((u - at + 1.5) % 1) - 0.5) ** 2) / (2 * w * w));
  const profile = (u) => {
    const lobe = 0.5 + 0.5 * Math.cos(u * Math.PI * 4);
    let f = 0.78 + 0.62 * lobe * lobe;
    for (const at of [0.1, 0.37, 0.6, 0.86]) f += 0.32 * bead(u, at, 0.018);
    return f;
  };
  const pos = g.attributes.position;
  const c = new THREE.Vector3(), p = new THREE.Vector3();
  for (let i = 0; i <= tubular; i++) {
    const u = (i % tubular) / tubular;
    curve.getPointAt(u, c);
    const f = profile(u);
    for (let j = 0; j <= radial; j++) {
      const k = i * (radial + 1) + j;
      p.fromBufferAttribute(pos, k).sub(c).multiplyScalar(f).add(c);
      pos.setXYZ(k, p.x, p.y, p.z);
    }
  }
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  g = mergeVertices(g, 1e-5);
  g.computeVertexNormals();
  g.scale(HALF_WIDTH, HALF_WIDTH, HALF_WIDTH);
  g.computeBoundingSphere();
  return { geometry: g, source: 'tube' };
}
