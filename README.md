# Chibwe Musendeka — Developer Portfolio

A single-page, dark-themed developer portfolio built with **React 19 + Vite +
TypeScript + Tailwind CSS v4 + Motion (Framer Motion)**, pre-rendered to static
HTML with **vite-react-ssg** for SEO and social link previews. Deploys to Netlify.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # pre-renders to /dist (static HTML)
npm run preview    # preview the production build
```

## Project structure

```
src/
  data/          # ← EDIT CONTENT HERE (profile, experience, projects, skills, certs)
  components/    # sections + layout + motion primitives
  App.tsx        # sticky Sidebar + scrolling <main>
  main.tsx       # vite-react-ssg entry
```

All copy lives in `src/data/*.ts` — update those files to refresh content without
touching components.

## TODO — assets & details to supply

Search the codebase for `TODO(Chibwe)` and fill in:

- **Social URLs** — GitHub & LinkedIn in `src/data/profile.ts`.
- **Résumé** — drop your PDF at `public/resume.pdf`.
- **Headshot** — add `public/headshot.webp` (square, ~400×400). A placeholder
  shows until then.
- **Project screenshots** — add `public/projects/next-transit.webp`,
  `mwasue.webp`, `wcfb-erp.webp` (16:10). Placeholders show until then.
- **Project links** — live demo + repo URLs in `src/data/projects.ts`.
- **Metrics** — firm up the case-study Impact lines with real numbers.
- **OG image** — add `public/og-image.png` (1200×630) for social previews.
- **Site URL** — set your final domain in `src/data/profile.ts` (`siteUrl`),
  `public/robots.txt`, and `public/sitemap.xml`.

## Contact form (EmailJS)

Copy `.env.example` to `.env` and add your EmailJS keys. Without them, the form
falls back to a `mailto:` link so it still works.

## Deploy (Netlify)

Push to GitHub and connect the repo to Netlify. Build settings are in
`netlify.toml` (`npm run build` → publish `dist/`). Set the three
`VITE_EMAILJS_*` variables in Netlify's environment settings.
