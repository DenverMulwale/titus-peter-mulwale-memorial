# In Loving Memory of Rev. Director Titus Peter Mulwale

Static memorial website (HTML, CSS, JS, no build step).

## Structure
- `index.html`: all the text (tribute, timeline, family, gallery)
- `css/style.css`: colours are variables at the top (`:root`)
- `js/script.js`: date line and photo viewer. Set `DATES_TEXT` to show the date of passing.
- `images/`: photos

## Add a photo
1. Put the file in `images/` (JPG, ideally under 1000px wide / 200 KB).
2. In `index.html`, inside `<div class="grid" id="grid">`, copy one `<figure>` block and change `src`, `alt` and the caption.

## Publish on GitHub Pages
Push to a repository, then Settings > Pages > Deploy from branch > `main` / root.
