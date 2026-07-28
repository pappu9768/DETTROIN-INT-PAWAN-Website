# Evergreen International Academy — Website

A production-ready, dark-themed school website built with React, Vite, Tailwind CSS, and Framer Motion.

This is an **original** site inspired by the general layout of a modern school website (sticky nav,
hero, stats strip, about, program cards, events/gallery grid, footer). All branding — the school name,
logo, contact details, and copy — is placeholder content for you to replace with your own.

## Stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility styling, themed via `tailwind.config.js`
- **Framer Motion** — scroll reveals, hover/tap micro-interactions, mobile menu transitions
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Folder structure

```
src/
  components/
    layout/        Navbar, MobileMenu, Footer
    ui/             Button, SectionHeading, Seal (signature motif), Skeleton
    cards/          ProgramCard, EventCard
    sections/       Hero, StatsStrip, About, Programs, EventsGallery, CTASection
  data/             Static content: navigation.js, stats.js, programs.js, events.js
  hooks/            useScrollTop, useLoadingState
  App.jsx           Composes all sections
  main.jsx          React entry point
  index.css         Tailwind layers + base styles
```

## Customizing

- **Branding**: update the school name/tagline in `Navbar.jsx`, `Footer.jsx`, and `Seal.jsx`
  (the circular monogram badge). Replace the "EA" initials and "EST. 1998" text in `Seal.jsx`.
- **Content**: all section copy lives in `src/data/*.js` — edit those instead of the components
  themselves wherever possible.
- **Images**: placeholder images are pulled from `picsum.photos` by seed. Swap the `image` fields in
  `src/data/programs.js` and `src/data/events.js` for your own asset URLs or local imports.
- **Colors/type**: the full palette and font stack are defined once in `tailwind.config.js` under
  `theme.extend.colors` / `theme.extend.fontFamily`.
- **Loading skeletons**: `Programs.jsx` and `EventsGallery.jsx` use `useLoadingState()` to simulate a
  fetch delay before revealing content. Replace that hook's internals with a real API call when you
  wire up a backend, and the skeletons will keep working as-is.

## Accessibility notes

- Skip-to-content link at the top of `App.jsx`
- Visible focus rings (`:focus-visible`) defined globally in `index.css`
- `prefers-reduced-motion` respected globally
- Semantic landmarks (`header`, `main`, `nav`, `footer`) and `aria-label`s on icon-only controls
