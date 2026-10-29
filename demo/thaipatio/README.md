# Thai Patio — website redesign (mockup)

Live at https://tmpbizz.com/demo/thaipatio/

Static redesign of http://www.thaipatioaz.com/Thai_Patio/Home.html. Open `index.html` in a browser
(an internet connection is needed for fonts, the map and online ordering).

## Pages
- `index.html` — home: hero, about, house favorites, Google reviews, lunch special, the restaurant, hours & map
- `menu.html` — the full menu with prices, transcribed from the 8 printed menu images, plus the original pages in a viewer
- `gallery.html` — every photo from the original site, with a lightbox

## Images
All images come from the original site; nothing is stock, AI-made or redrawn.
- `images/original/` and `images/SOURCES.md` (byte-identical copies of the old site's images and where each came from) stay in the github.com/yuwakuuu/thaipatio repo; the pages don't load them
- `images/` — what the pages use: the original logo, old GIF logo, favicon and doodles unchanged, and JPEG copies of the photos (resized only when large, never enlarged)

## Google reviews
The home page rotates four short quotes from Thai Patio's Google reviews, next to their overall rating
(4.3 from 541 reviews, as of Oct 29, 2026), with links to read all reviews and write one on Google.
To change the quotes, edit the `.review` figures in `index.html` (the dots and "N of 4" labels go with them).
To show reviews live instead, use a Google reviews widget or the Google Places API with a key restricted to
tmpbizz.com, and show only 4 and 5-star reviews.
