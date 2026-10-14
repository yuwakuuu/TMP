# The Marketing Partner (TMP)

Marketing site for The Marketing Partner. It is plain HTML, CSS and JavaScript with no build step.

- `index.html`: page content
- `styles.css`: design, including the liquid-chrome lettering
- `script.js`: loading screen, navigation, chrome-lettering sizing, scroll and Motion effects, showcase, card tilt, price count-up and contact form
- `js/game.js`: Bubble Pop, the mini-game in the Playground section
- `js/main3d.js`: starts the 3D scenes; the loading-screen logo hands its renderer to the hero (falls back to CSS lettering without WebGL)
- `js/scenes.js`: the chrome TMP wordmark (metaballs) and the chrome infinity in Sammy's section
- `js/chrome-stage.js`: shared renderer, chrome material, lighting and drag/tap controls
- `assets/3d/tmp-wordmark.bin`: the baked 3D TMP mesh (rebuild with `node tools/bake-mesh.mjs`, from the stroke data in `tools/wordmark-balls.js`)
- `dist/`: the minified files the page actually loads (generated, see below)
- `assets/work/`: screenshots of example projects, in full and half size
- `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`: launch files
- Fonts: Shrikhand (chrome lettering) and Inter, both SIL Open Font License, loaded from Google Fonts

## Building

The page loads minified files from `dist/`. After editing `styles.css`, `script.js` or
anything in `js/`, rebuild and commit `dist/` too:

    npm install
    npm run build

This bundles three.js 0.169.0 and Motion 12.23.24 (both MIT) with only the parts the site uses.

## Things to update

- **Contact email:** set `data-email` on the `<form id="contact-form">` in `index.html`. The form opens the visitor's email app addressed to this inbox.
- **Example project links:** the `href` on each `.card-work` card and in the footer "Work" column. The address shown in the hero's laptop is in the `projects` list at the top of the showcase code in `script.js`.

## Moving to your own domain

The canonical URL, share image, structured data, sitemap and robots file point at
`https://yuwakuuu.github.io/TMP/`, and `404.html` links to `/TMP/`. Search for
`yuwakuuu.github.io/TMP` and `/TMP/` and replace them when a custom domain is connected.

## Preview locally

    python3 -m http.server 8000

Then open http://localhost:8000.

## Publish

Works on any static host. For GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.
