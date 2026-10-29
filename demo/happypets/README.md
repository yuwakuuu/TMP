# Happy Pets Palace — website redesign (mockup)

Live at https://tmpbizz.com/demo/happypets/

Open `index.html` in a browser (an internet connection is needed for fonts, three.js, maps and booking).

## Editing pages
Page content lives in `_src/pages/*.html`; the shared header, footer, loader and chat live in `_src/layout.html`.
After editing, rebuild the site files in the root:

    python _tools/build.py

## What's where
- `assets/js/core.js` — loader, raining paws, page transitions, sounds hooks, 3D/fur headings, all page features
- `assets/js/puffy3d.js` — real-time three.js puffy 3D lettering (live hero titles + heading words)
- `assets/js/fur.js` — hair-by-hair fluffy fur lettering (heading accent words in `<span class="s">`)
- `assets/js/sfx.js` — synthesized sound effects (Web Audio, no files)
- `assets/js/chat.js` — Lacy, Linda's princess and the AI concierge (FAQ, booking, pre-screen scheduling)
- `assets/fonts/fredoka.js` — Fredoka Bold converted for three.js by `_tools/font2three.py`
- `assets/img/` — photos pulled from the original site at full resolution, resized and sharpened

Homepage extras (in `_src/pages/index.html`, styles at the end of `assets/css/site.css`):
- **Photo booth** (`#photo-booth`): an emoji pup in the portrait studio's seasonal sets. Every 4 seconds the
  camera counts down, flashes and swaps the backdrop, garland, hat, bandana and props (spring, summer, fall,
  winter and the Royal Birthday add-on). Visitors can tap a season; it pauses on hover, off screen and with
  the pause button, and stays put for reduced motion. The scenes are the `SCENES` list in the script under
  the section.
- **Adventure RV** (`#adventure-rv`): the pet-friendly RV rental, with a postcard of the real RV and a little
  road trip drawing with Lacy in the window.

Headings: plain words render as puffy 3D, words inside `<span class="s">` render as fur.
`data-color` (plum/teal/pink/white/butter) and `data-fur` (pink/teal/butter/white) on an `h2` change the colours;
`data-plain` on an `h2` keeps it as normal text.
