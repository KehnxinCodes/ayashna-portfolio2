# Ayashna — Portfolio Website

A premium editorial-style portfolio site for Ayashna, freelance video editor.
Built with **React + Vite**, no backend, ready for **GitHub → Netlify** deployment.

## Getting started locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## Deploying to Netlify

1. Push this project to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project** → connect the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
   (Both are already set in `netlify.toml`, so Netlify should auto-detect them.)
5. Deploy — no environment variables or backend needed.

## Editing content

Everything you'll want to change day-to-day lives in `src/data/`:

| File | What it controls |
|---|---|
| `src/data/siteContent.js` | Hero copy, bio, philosophy, final CTA, contact info, social links, footer |
| `src/data/services.js` | The six services listed in the Services section |
| `src/data/projects.js` | Portfolio projects — **add a new project by copying an object in the array** |
| `src/data/testimonials.js` | Client testimonials (currently placeholder — swap in real quotes) |
| `src/data/process.js` | The 5-step editing process |

### Adding a new portfolio project

Open `src/data/projects.js` and add an object to the `projects` array:

```js
{
  id: "unique-id",
  title: "Project Title",
  category: "UGC", // must match one of PORTFOLIO_CATEGORIES
  client: "Client Name",
  description: "One-line description.",
  thumbnail: null, // path or import, e.g. "/images/my-thumb.jpg"
  video: null,
  year: 2026,
  size: "large" | "tall" | "wide" | "square",
  featured: false, // set true to show in the Featured Edit section
}
```

### Replacing images/videos

Drop files into `public/` (referenced as `/filename.ext`) or `src/assets/` (import them
into a component), then point the relevant `data/*.js` field at the new path.

### Replacing the hero showreel

Set `hero.showreelVideo` in `src/data/siteContent.js` to a video URL or local path.
Until it's set, a placeholder play button is shown.

## Project structure

```
src/
  components/   Nav, Footer (shared across pages)
  sections/     One component per homepage section
  data/         All editable content — start here for changes
  styles/       variables.css (design tokens) + global.css (all styles)
```

## Design system

- Colors, fonts, and spacing tokens are defined in `src/styles/variables.css`
- Palette: Soft Cream, Off White, Warm Taupe, Deep Espresso, Warm Gray, Muted Terracotta
- Fonts: DM Serif Display (headlines), Inter (body)

## Notes

- Fully responsive: desktop, tablet, and mobile (with a dedicated slide-in mobile menu)
- Respects `prefers-reduced-motion`
- No external dependencies beyond React — keeps the site fast and simple to maintain
