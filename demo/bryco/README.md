# Bryco Asphalt Milling: website demo

One-page site for Bryco Asphalt Milling, Inc., an asphalt milling contractor in the East Valley.
Live at https://tmpbizz.com/demo/bryco/

Plain HTML, CSS and JavaScript in `index.html`, no build step. Fonts (Alfa Slab One, Barlow,
Barlow Condensed, all SIL Open Font License) load from Google Fonts.

## On the page
- Intro: hot mix pours into the road stripe of the logo, the saw-blade "O" rolls it flat, the
  lettering stamps in, a paver screed sweeps the screen and the logo settles into the header.
  A tap, click or key press skips it, and it is off for visitors who ask for reduced motion.
- Hero: a drawn Wirtgen mill loading a dump truck at first light (inline SVG)
- Services, crew, how a job runs, Instagram gallery, bid request form

## Images
- `img/ig-*.webp`, `img/crew-mill.webp`: posts from instagram.com/brycoasphaltmilling
  (snapshot of Oct 29, 2026). Each gallery tile links to its post.
- `favicon.svg`, `apple-touch-icon.png`, `og.png`: the logo's saw blade and the share image

## Things to update
- **Live Instagram feed:** connect @brycoasphaltmilling to a JSON feed service such as
  [Behold](https://behold.so) and paste the feed URL into `IG_FEED_URL` near the bottom of
  `index.html`. Behold and Instagram Graph API responses both work. Until then the snapshot shows.
- **Bid form:** demo only, nothing is sent yet. Point it at Bryco's inbox to take real requests.
