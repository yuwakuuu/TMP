// Renders tools/reveal/ frame by frame and encodes MP4s with ffmpeg.
// Usage: node tools/render-reveal.mjs [landscape|portrait] (needs a local server on :8200)
import { createRequire } from 'module';
import { mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const require = createRequire('/opt/node22/lib/node_modules/');
const { chromium } = require(process.env.PW);
const mode = process.argv[2] || 'landscape';
const [W, H] = mode === 'portrait' ? [1080, 1920] : [1920, 1080];
const FPS = 30, SECONDS = 9;
const out = process.env.OUT;
const frames = `${out}/frames-${mode}`;
await rm(frames, { recursive: true, force: true });
await mkdir(frames, { recursive: true });
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--proxy-server=' + process.env.HTTPS_PROXY, '--proxy-bypass-list=127.0.0.1', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
p.on('pageerror', (e) => console.log('pageerror', e.message));
await p.goto('http://127.0.0.1:8200/tools/reveal/');
await p.waitForFunction(() => window.ready, null, { timeout: 60000 });
await p.evaluate(() => window.ready);
const t0 = Date.now();
for (let f = 0; f < FPS * SECONDS; f++) {
  await p.evaluate((t) => window.renderAt(t), f / FPS);
  await p.screenshot({ path: `${frames}/${String(f).padStart(4, '0')}.png` });
  if (f % 30 === 0) console.log(mode, 'frame', f, ((Date.now() - t0) / 1000).toFixed(0) + 's');
}
await b.close();
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', `${frames}/%04d.png`,
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', `${out}/tmp-reveal-${mode}-silent.mp4`]);
console.log('done', mode);
