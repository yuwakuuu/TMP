// Bakes the centre-line metaballs for the 3D "TMP" wordmark into js/wordmark-balls.js.
// Open tools/bake-wordmark.html through a local web server; the page prints the module
// source, which is saved as js/wordmark-balls.js. Re-run only if the font or tuning changes.
import { Font } from '../vendor/three/addons/loaders/FontLoader.js';
import shrikhand from './shrikhand.js';

export function traceWordmark() {
  const shapes = new Font(shrikhand).generateShapes('TMP', 100);
  const outlines = shapes.flatMap((sh) => [sh.getPoints(20), ...sh.holes.map((h) => h.getPoints(20))]);
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const pts of outlines) for (const p of pts) {
    x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
  }

  // rasterise
  const W = 820, pad = 32;
  const k = (W - pad * 2) / (x1 - x0);
  const H = Math.ceil((y1 - y0) * k + pad * 2);
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  ctx.beginPath();
  for (const pts of outlines) pts.forEach((p, i) => ctx[i ? 'lineTo' : 'moveTo'](pad + (p.x - x0) * k, H - pad - (p.y - y0) * k));
  ctx.fill('evenodd');
  const alpha = ctx.getImageData(0, 0, W, H).data;
  const inside = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) inside[i] = alpha[i * 4 + 3] > 127 ? 1 : 0;
  const dist = distanceTransform(inside, W, H);

  // centre-line points: local maxima of the distance across at least one direction
  const ridge = [];
  const D = (x, y) => dist[y * W + x];
  for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
    const d = D(x, y);
    if (d < 1.5) continue;
    if ((d >= D(x - 1, y) && d >= D(x + 1, y)) || (d >= D(x, y - 1) && d >= D(x, y + 1)) ||
        (d >= D(x - 1, y - 1) && d >= D(x + 1, y + 1)) || (d >= D(x + 1, y - 1) && d >= D(x - 1, y + 1))) ridge.push([x, y, d]);
  }
  // thin them out, thickest first, so balls overlap evenly instead of piling up
  ridge.sort((a, b) => b[2] - a[2]);
  const kept = [];
  const grid = new Map();
  const cell = 8;
  const key = (x, y) => `${Math.floor(x / cell)},${Math.floor(y / cell)}`;
  for (const r of ridge) {
    const spacing = Math.max(3, r[2] * 0.35);
    let ok = true;
    const cx = Math.floor(r[0] / cell), cy = Math.floor(r[1] / cell), reach = Math.ceil(spacing / cell);
    for (let gy = cy - reach; gy <= cy + reach && ok; gy++) for (let gx = cx - reach; gx <= cx + reach && ok; gx++) {
      for (const q of grid.get(`${gx},${gy}`) || []) if ((q[0] - r[0]) ** 2 + (q[1] - r[1]) ** 2 < spacing * spacing) { ok = false; break; }
    }
    if (!ok) continue;
    kept.push(r);
    const kk = key(r[0], r[1]);
    if (!grid.has(kk)) grid.set(kk, []);
    grid.get(kk).push(r);
  }

  // cube coordinates: the word fills 90% of the marching-cubes box width, centred
  const s = 0.9 / W;
  const out = [];
  for (const [x, y, d] of kept) out.push(+((x - W / 2) * s).toFixed(4), +(-(y - H / 2) * s).toFixed(4), +(d * s).toFixed(4));
  return out;
}

// Euclidean distance (in pixels) from each inside pixel to the nearest outside pixel,
// computed exactly with Felzenszwalb & Huttenlocher's two-pass lower-envelope method.
function distanceTransform(inside, W, H) {
  const INF = 1e20;
  const f = new Float64Array(Math.max(W, H));
  const d = new Float64Array(Math.max(W, H));
  const v = new Int32Array(Math.max(W, H));
  const z = new Float64Array(Math.max(W, H) + 1);
  const grid = new Float64Array(W * H);
  for (let i = 0; i < W * H; i++) grid[i] = inside[i] ? INF : 0;
  const pass = (n) => {
    let kk = 0; v[0] = 0; z[0] = -INF; z[1] = INF;
    for (let q = 1; q < n; q++) {
      let sct = ((f[q] + q * q) - (f[v[kk]] + v[kk] * v[kk])) / (2 * q - 2 * v[kk]);
      while (sct <= z[kk]) { kk--; sct = ((f[q] + q * q) - (f[v[kk]] + v[kk] * v[kk])) / (2 * q - 2 * v[kk]); }
      kk++; v[kk] = q; z[kk] = sct; z[kk + 1] = INF;
    }
    kk = 0;
    for (let q = 0; q < n; q++) { while (z[kk + 1] < q) kk++; d[q] = (q - v[kk]) ** 2 + f[v[kk]]; }
  };
  for (let x = 0; x < W; x++) {
    for (let y = 0; y < H; y++) f[y] = grid[y * W + x];
    pass(H);
    for (let y = 0; y < H; y++) grid[y * W + x] = d[y];
  }
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) f[x] = grid[y * W + x];
    pass(W);
    for (let x = 0; x < W; x++) grid[y * W + x] = Math.sqrt(d[x]);
  }
  return grid;
}
