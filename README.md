# The Marketing Partner (TMP)

Marketing site for The Marketing Partner. It is plain HTML, CSS and JavaScript with no build step.

- `index.html`: page content
- `styles.css`: design, including the liquid-chrome lettering and scroll-driven animations
- `script.js`: loading screen, navigation, scroll effects, project showcase, card tilt, price count-up and contact form
- `js/main3d.js`: starts the 3D scenes (falls back to CSS lettering without WebGL)
- `js/scenes.js`: the chrome TMP wordmark (metaballs) and the bubbly infinity loop
- `js/chrome-stage.js`: shared renderer, chrome material, lighting and drag/tap controls
- `js/wordmark-balls.js`: pre-baked shape data for the 3D TMP (regenerate with `tools/bake-wordmark.html`)
- `js/game.js`: Bubble Pop, the playable mini-game in the Playground section
- `vendor/three/`: three.js 0.169.0 (MIT), self-hosted so the site needs no CDN
- `vendor/motion/`: Motion 12.23.24 (MIT): spring reveals, the hero entrance, scroll-linked scenes and press/hover springs
- `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`: launch files
- `assets/work/`: screenshots of example projects
- Fonts: Shrikhand (chrome lettering) and Inter, both SIL Open Font License, loaded from Google Fonts

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
