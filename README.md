# The Marketing Partner (TMP)

Marketing site for The Marketing Partner. It is plain HTML, CSS and JavaScript with no build step.

- `index.html`: page content
- `styles.css`: design
- `script.js`: navigation, scroll animations, project showcase and contact form
- `assets/work/`: screenshots of example projects

## Things to update

- **Contact email:** set `data-email` on the `<form id="contact-form">` in `index.html`. The form opens the visitor's email app addressed to this inbox.
- **Example project links:** the `href` on each `.card-work` card and in the footer "Work" column. The address shown in the hero's laptop is in the `projects` list at the top of the showcase code in `script.js`.

## Preview locally

    python3 -m http.server 8000

Then open http://localhost:8000.

## Publish

Works on any static host. For GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.
