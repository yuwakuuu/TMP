# Happy Pets Palace — website redesign (mockup)

Live at https://tmpbizz.com/demo/happypets/

Open `index.html` in a browser (an internet connection is needed for fonts, three.js, maps and booking).

## Editing pages
Page content lives in `_src/pages/*.html`; the shared header, footer, loader and chat live in `_src/layout.html`.
After editing, rebuild the site files in the root:

    python _tools/build.py

## What's where
- `assets/js/core.js` — loader, raining paws, page transitions, sounds hooks, 3D/fur headings, all page features
- First-visit intro (the loader in `_src/layout.html`, styles under "First-visit intro" in `site.css`): Lacy drives the
  Adventure RV through the Arizona desert while the page loads (blue sky, the Superstitions and Four Peaks on the
  horizon, red-rock mesas, saguaros, prickly pear and the open road), the Palace (with the original logo on its sign)
  rolls in, the RV parks and Lacy barks, then the page opens into her chat button. The scenery is inline SVG in
  `site.css` (no image files), and every moving layer slides with transform only, so it stays light on phones. Return visits and Lite mode get the quick
  plum loader instead.
- Hours: `HPP.sched` (live open/closed status) and `hoursRows` (every hours table) in `core.js`, plus the top bar in
  `_src/layout.html`. Saturdays now run weekday hours (6 AM – 6:30 PM); Sundays & holidays (8–10:30 AM, 4–6:30 PM)
  are the only different hours. The top bar shows both, and its NEW news takes turns between the Saturday change and
  the meetups (it holds still on hover, focus and reduced motion). Lacy's hours answers live in `chat.js`.
- `assets/js/puffy3d.js` — real-time three.js puffy 3D lettering (live hero titles + heading words)
- `assets/js/fur.js` — hair-by-hair fluffy fur lettering (heading accent words in `<span class="s">`)
- `assets/js/sfx.js` — synthesized sound effects (Web Audio, no files)
- `assets/js/chat.js` — Lacy, Linda's princess and the AI concierge (FAQ, booking, pre-screen scheduling)
- `assets/fonts/fredoka.js` — Fredoka Bold converted for three.js by `_tools/font2three.py`
- `assets/img/` — photos pulled from the original site at full resolution, resized and sharpened

Homepage extras (in `_src/pages/index.html`, styles at the end of `assets/css/site.css`):
- **Review quotes** at the top (`[[hero_reviews]]` in `_tools/build.py`, from `_src/reviews.json`): one quote at a
  time, no stars, with next and pause buttons (tap a quote for the next one). Above the photo on computers, above
  the headline on phones. Long reviews are cut at the end of a sentence.
- Everything below the hero lives behind eight category buttons (the `.cat-hub`); the photo booth and the
  Adventure RV each have their own (`#cat-booth`, `#cat-rv`). Links to `#photo-booth` or `#adventure-rv` open them.
- **Photo booth** (`#photo-booth`): an emoji pup in the portrait studio's seasonal sets. Every 4 seconds the
  camera counts down, flashes and swaps the backdrop, garland, hat, bandana and props (spring, summer, fall,
  winter and the Royal Birthday add-on). Visitors can tap a season; it pauses on hover, off screen and with
  the pause button, and stays put for reduced motion. The scenes are the `SCENES` list in the script under
  the section.
- **Adventure RV** (`#adventure-rv`): the pet-friendly RV rental, with a postcard of the real RV and a little
  road trip drawing with Lacy in the window.

Phone performance: off-screen sections pause their CSS animations (`.anim-off`, set by core.js), as do the
hidden page-change overlay and the closed chat. On phones the live 3D title and the raining paws draw at about
30 fps and hold still while the page scrolls, the paws canvas draws at 1x, and the nav skips its live blur.
Loops animate transform and opacity only (no box-shadow, border-radius, left or background-position).

Headings: plain words render as puffy 3D, words inside `<span class="s">` render as fur.
`data-color` (plum/teal/pink/white/butter) and `data-fur` (pink/teal/butter/white) on an `h2` change the colours;
`data-plain` on an `h2` keeps it as normal text.
