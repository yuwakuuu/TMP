# Crystals & Crosses: website demo

One-page site for Crystals & Crosses, Linda Huss's crystal shop in Apache Junction, AZ.
Built to live at https://tmpbizz.com/demo/crystalscrosses/ (the share tags already point there).

Plain HTML, CSS and JavaScript in `index.html`, no build step. Fonts (Marcellus, Figtree, both
SIL Open Font License) load from Google Fonts.

## On the page
- Hero: an amethyst crystal cluster drawn live on a canvas, in front of the Superstition Mountains
  at dusk. Drag to turn it; tap a point (or press Enter) to ring it like a crystal singing bowl.
  Each point plays a different note. It stops animating when off screen and holds still for
  visitors who ask for reduced motion.
- Live "Open now / Opens at" status in Arizona time, in the hero and the hours card
- Sessions with prices; every "Text to book" button opens a text to Linda with the session filled in
- Sound healing circle: works out the next third Thursday automatically
- Crystal finder: pick an intention, see three stones, text Linda for a custom set
- On the shelves, rock club discount, crystal re-tune, Meet Linda with her certifications
- Contact form that opens a text or email to Linda with the message filled in (no server needed)
- "Powered by TMP" footer credit

## Things to confirm with Linda
- **Hours:** her current site lists two different schedules. The home page says Wed to Fri
  9 to noon and 2 to 5, Sat 10 to 1. The contact page says Wed to Fri 10 to 3, Sat 10 to 1.
  This demo uses the home page hours. Edit the `HOURS` object in `index.html` to change them.
- **Address:** her site says 185 N Apache Trail, Suite 8. An older VisitAJ listing says
  320 W Superstition Blvd, Suite 109.
- **OPUS SoundBed:** her site still says "Coming June 2024". Check it's bookable.
- **Life coaching:** listed with "Ask" for the price since her site doesn't give one.
- **Email:** uses CrystalClearChoicesAZ@gmail.com from her site. Directories also list
  goodvibes@crystalsandcrossesaz.com.

## Images
No photos yet; her site and Instagram had none we could pull. The crystals, mountains and logo
mark are drawn in code. `og.png` is the link-preview image, `favicon.svg` and
`apple-touch-icon.png` are the tab and home-screen icons. Shop and session photos from Linda would
go well in the Shop and Meet Linda sections.
