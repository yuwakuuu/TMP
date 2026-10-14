// Builds the minified files the page loads (dist/). Run `npm run build` after editing
// styles.css, script.js, js/game.js or anything under js/.
// Output names carry a content hash and index.html is updated to match.
//   dist/styles.*.min.css  styles.css, minified
//   dist/app.*.min.js      Motion + script.js + js/game.js + js/grass.js + js/respect.js + js/ambient.js
//   dist/3d/*.js         js/main3d.js and the 3D scenes with only the parts of three.js
//                        they use (loaded on demand, split into chunks)
import { build, transform } from 'esbuild';
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = (p) => readFile(root + p, 'utf8');
await rm(root + 'dist', { recursive: true, force: true });
await mkdir(root + 'dist', { recursive: true });

const css = await transform(await read('styles.css'), { loader: 'css', minify: true, target: ['safari15', 'chrome100', 'firefox100'] });
const hash = (text) => createHash('sha1').update(text).digest('hex').slice(0, 10);
// file names carry a content hash, so browsers and GitHub's cache always fetch new code
const cssName = `styles.${hash(css.code)}.min.css`;
await writeFile(root + 'dist/' + cssName, css.code);

const app = [
  await read('node_modules/motion/dist/motion.js'),
  await read('script.js'),
  await read('js/game.js'),
  await read('js/grass.js'),
  await read('js/respect.js'),
  await read('js/ambient.js'),
].join(';\n');
const appMin = await transform(app, { loader: 'js', minify: true, target: 'es2020', legalComments: 'eof' });
const appName = `app.${hash(appMin.code)}.min.js`;
await writeFile(root + 'dist/' + appName, appMin.code);

const result = await build({
  entryPoints: [root + 'js/main3d.js'],
  outdir: root + 'dist/3d',
  bundle: true,
  splitting: true,
  format: 'esm',
  minify: true,
  target: 'es2020',
  legalComments: 'eof',
  entryNames: '[name]-[hash]',
  metafile: true,
  chunkNames: '[name]-[hash]',
});

const entry = Object.entries(result.metafile.outputs).find(([, o]) => o.entryPoint)[0].split('dist/3d/')[1];

// point index.html at the new files
let html = await read('index.html');
html = html
  .replace(/dist\/styles(\.[a-f0-9]+)?\.min\.css/g, 'dist/' + cssName)
  .replace(/dist\/app(\.[a-f0-9]+)?\.min\.js/g, 'dist/' + appName)
  .replace(/dist\/3d\/main3d(-[A-Z0-9]+)?\.js/g, 'dist/3d/' + entry);
await writeFile(root + 'index.html', html);

for (const f of ['dist/' + cssName, 'dist/' + appName, 'dist/3d/' + entry]) {
  console.log(f, ((await readFile(root + f)).length / 1024).toFixed(1) + ' KB');
}
