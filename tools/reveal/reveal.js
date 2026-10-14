// TMP logo reveal: a deterministic, frame-by-frame scene for rendering a video.
// window.renderAt(seconds) draws exactly that moment, so frames can be captured one by one
// (see tools/render-reveal.mjs). Uses the site's own wordmark mesh, chrome and studio light.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { chromeMaterials, buildStudio, radialTexture } from '../../js/chrome-stage.js';
import { buildWordmark } from '../../js/scenes.js';

const W = innerWidth, H = innerHeight, portrait = H > W;
document.documentElement.style.setProperty('--u', Math.min(W, H * 1.4) / 100 + 'px');
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(W, H, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(32, W / H, 0.1, 100);
camera.position.set(0, 0, 8.2);

// reflections: the site's soft studio, rendered sharp
const pmrem = new THREE.PMREMGenerator(renderer);
const studio = buildStudio('soft');
const cubeRT = new THREE.WebGLCubeRenderTarget(1024, { type: THREE.HalfFloatType });
new THREE.CubeCamera(0.1, 100, cubeRT).update(renderer, studio);
scene.environment = pmrem.fromCubemap(cubeRT.texture).texture;

const { chrome, rim, uniforms, rimUniforms } = chromeMaterials();
const fit = new THREE.Group(), spin = new THREE.Group(), pop = new THREE.Group();
scene.add(fit); fit.add(spin); spin.add(pop);
fit.scale.setScalar(Math.min(1, (W / H) / 1.7) * (portrait ? 1.08 : 1));
fit.position.y = portrait ? 0.9 : 0.55;

const l1 = new THREE.DirectionalLight('#a9c8ff', 2.6); l1.position.set(-4, 1.5, -3);
const l2 = new THREE.DirectionalLight('#d6ccff', 2.6); l2.position.set(4, -1, -3);
const l3 = new THREE.DirectionalLight('#ffffff', 1.1); l3.position.set(1, 4, 5);
scene.add(l1, l2, l3);

const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
halo.scale.setScalar(6); halo.position.z = -2.5;
fit.add(halo);

const ring = new THREE.Mesh(new THREE.RingGeometry(0.97, 1, 160), new THREE.MeshBasicMaterial({ color: 0xd8e6ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
fit.add(ring);

// slow dust in the dark, for depth
const N = 700, dust = new Float32Array(N * 3), seed = (i) => { const x = Math.sin(i * 127.1) * 43758.5453; return x - Math.floor(x); };
for (let i = 0; i < N; i++) { dust[i * 3] = (seed(i) - 0.5) * 22; dust[i * 3 + 1] = (seed(i + 9e3) - 0.5) * 13; dust[i * 3 + 2] = -seed(i + 2e4) * 14 + 2; }
const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute('position', new THREE.BufferAttribute(dust, 3));
const dustMat = new THREE.PointsMaterial({ size: 0.035, color: 0xbfd2ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, map: radialTexture() });
const points = new THREE.Points(dustGeo, dustMat);
scene.add(points);

const composer = new EffectComposer(renderer);
composer.setSize(W, H);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(W, H), 0.25, 0.4, 0.92);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// text
const nameEl = document.getElementById('name'), neonEl = document.getElementById('neon');
const NAME = 'THE MARKETING PARTNER';
nameEl.innerHTML = [...NAME].map((c) => `<span>${c === ' ' ? '&nbsp;' : c}</span>`).join('');
const letters = [...nameEl.children];
nameEl.style.top = (portrait ? 56 : 62) + '%';
neonEl.style.top = (portrait ? 61 : 68) + '%';

// easing
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const prog = (t, a, b) => clamp((t - a) / (b - a));
const outExpo = (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));
const outCubic = (x) => 1 - Math.pow(1 - x, 3);
const inOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
// a damped spring after the landing: 0 at impact, settles to 0
const springAt = (dt) => (dt < 0 ? 0 : Math.exp(-dt * 6) * Math.sin(dt * 22));

const LAND = 3.4;
// neon switch-on stutter (seconds, on/off pairs), then a lone buzz later
const NEON = [[5.0, 5.08], [5.16, 5.2], [5.3, 5.55], [5.62, 99]];
const neonOn = (t) => NEON.some(([a, b]) => t >= a && t < b) && !(t > 7.1 && t < 7.16);

window.ready = (async () => {
  const { geometry } = await buildWordmark();
  pop.add(new THREE.Mesh(geometry, chrome));
  const rimMesh = new THREE.Mesh(geometry, rim); rimMesh.renderOrder = 1; pop.add(rimMesh);
  await document.fonts.ready;
  return true;
})();

window.renderAt = (t) => {
  // fly in from the dark, spinning, and land facing the camera
  const fly = outExpo(prog(t, 0.6, LAND));
  const z = -16 * (1 - fly);
  const turns = -4 * Math.PI - 0.5;
  const sway = Math.sin(Math.max(0, t - LAND) * 0.9) * 0.12 * prog(t, LAND, LAND + 1.2);
  spin.position.set(0, (1 - fly) * -0.6, z);
  spin.rotation.set(0.25 * (1 - fly) + Math.sin(t * 0.7) * 0.03, turns * (1 - fly) + sway, 0);
  const s = 1 - springAt(t - LAND) * 0.07;
  pop.scale.set(1 / Math.sqrt(s), s, 1 / Math.sqrt(s));

  // reflections wake up, then a light sweep crosses the chrome twice
  chrome.envMapIntensity = 1.35 * outCubic(prog(t, 0.4, 2.2));
  const sweep = inOut(prog(t, 3.9, 5.4)) * 1.4 + inOut(prog(t, 7.0, 8.2)) * 1.4;
  scene.environmentRotation.set(0, -0.7 + sweep, 0);

  // impact: flash, halo and shockwave
  const hit = Math.max(0, 1 - Math.abs(t - LAND) / 0.12) ** 2;
  const after = t - LAND;
  uniforms.uPulse.value = after > 0 ? Math.exp(-after * 3) * 0.6 : 0;
  uniforms.uTime.value = t;
  rimUniforms.uIntensity.value = 0.35 + Math.max(hit, after > 0 ? Math.exp(-after * 3) : 0) * 0.6;
  halo.material.opacity = 0.14 * outCubic(prog(t, 1.5, LAND)) + (after > 0 ? Math.exp(-after * 3) * 0.12 : 0);
  halo.material.color.setHSL(0.62, 0.45, 0.62);
  const r = prog(t, LAND, LAND + 1.3);
  ring.visible = after > 0 && r < 1;
  ring.scale.setScalar(1.3 + outCubic(r) * 4.2);
  ring.material.opacity = (1 - r) * 0.5;
  bloom.strength = 0.22 + hit * 0.35 + (after > 0 ? Math.exp(-after * 4) * 0.15 : 0);

  dustMat.opacity = 0.55 * outCubic(prog(t, 0, 1.2));
  points.position.z = t * 0.35;
  points.rotation.z = t * 0.01;

  // camera: a slow push in
  camera.position.z = 8.6 - outCubic(prog(t, 0, 9)) * 0.5;
  camera.position.x = Math.sin(t * 0.3) * 0.08;
  camera.lookAt(0, 0, 0);

  // name: letters rise in one after another
  letters.forEach((el, i) => {
    const p = outCubic(prog(t, 4.1 + i * 0.035, 4.75 + i * 0.035));
    el.style.opacity = p.toFixed(3);
    el.style.transform = `translateY(${((1 - p) * 0.6).toFixed(3)}em)`;
    el.style.filter = `blur(${((1 - p) * 6).toFixed(2)}px)`;
  });
  neonEl.classList.toggle('off', !neonOn(t));
  neonEl.style.opacity = t < 4.9 ? 0 : 1;

  composer.render();
};
