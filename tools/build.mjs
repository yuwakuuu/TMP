// Builds the minified files the page loads (dist/). Run `npm run build` after editing
// styles.css, script.js, js/game.js or anything under js/.
//   dist/styles.min.css  styles.css, minified
//   dist/app.min.js      Motion + script.js + js/game.js, one classic script
//   dist/3d/*.js         js/main3d.js and the 3D scenes with only the parts of three.js
//                        they use (loaded on demand, split into chunks)
import { build, transform } from 'esbuild';
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';

const root = new URL('..', import.meta.url).pathname;
const read = (p) => readFile(root + p, 'utf8');
await rm(root + 'dist', { recursive: true, force: true });
await mkdir(root + 'dist', { recursive: true });

const css = await transform(await read('styles.css'), { loader: 'css', minify: true, target: ['safari15', 'chrome100', 'firefox100'] });
await writeFile(root + 'dist/styles.min.css', css.code);

const app = [
  await read('node_modules/motion/dist/motion.js'),
  await read('script.js'),
  await read('js/game.js'),
].join(';\n');
const appMin = await transform(app, { loader: 'js', minify: true, target: 'es2020', legalComments: 'eof' });
await writeFile(root + 'dist/app.min.js', appMin.code);

await build({
  entryPoints: [root + 'js/main3d.js'],
  outdir: root + 'dist/3d',
  bundle: true,
  splitting: true,
  format: 'esm',
  minify: true,
  target: 'es2020',
  legalComments: 'eof',
  entryNames: '[name]',
  chunkNames: '[name]-[hash]',
});

for (const f of ['dist/styles.min.css', 'dist/app.min.js']) {
  console.log(f, ((await readFile(root + f)).length / 1024).toFixed(1) + ' KB');
}
