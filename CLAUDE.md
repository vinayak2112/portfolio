# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build to `/build`
- `npm test` — CRA/Jest test runner (watch mode). No test files currently exist in `src/`; `npm test -- --watchAll=false` runs once and exits.
- `npm run deploy` — runs `predeploy` (build) then publishes `/build` to the `gh-pages` branch. `homepage` in `package.json` is `https://vinayak2112.github.io/portfolio`, so asset paths are served under `/portfolio/`.

## Deployment workflow

The live site is hosted at **https://vinayak2112.github.io/portfolio/** via GitHub Pages, which serves the `gh-pages` branch of this repo.

Two branches, two jobs:
- `master` — the **source of truth**. All code changes (JSX, data, CSS, assets) live here. Never commit built output here.
- `gh-pages` — a **deploy-only** branch containing the compiled `/build` output at the repo root. Do not edit by hand.

**Every time we commit changes to `master`, the deploy flow is:**
1. Commit the source changes on `master` and push (`git push origin master`).
2. Run `npm run build` to regenerate `/build` from the latest source.
3. Publish `/build` to `gh-pages` via `npm run deploy` (this uses the `gh-pages` npm package to force-push the build contents to the `gh-pages` branch — no manual branch switching needed).

Shortcut: `npm run deploy` alone runs the `predeploy` hook (`npm run build`) first, so after pushing `master` you only need `npm run deploy`.

If `homepage` in `package.json` ever changes, rebuild — asset paths in `/build` are baked in at build time from that field.

This is an unejected Create React App (react-scripts 5.0.1). No custom webpack/babel config; no linter beyond CRA's built-in ESLint (`react-app`, `react-app/jest`).

## Architecture

Single-page personal portfolio. `src/App.js` renders a fixed sequence of section components: `Header → AboutMe → Skills → Experience → Projects → Achievements → Contact`. All sections render on one scrollable page.

**Content/presentation split** — the single most important pattern in this repo:
- All user-facing copy (bio, experience, projects, achievements, nav labels, contact info) lives in `src/data/information.js` as named exports (`personalInfo`, `aboutData`, `experienceData`, `skillsData`, `projectsData`, `achievementsData`, `navItems`, `contactData`).
- All brand/tech SVG icons live in `src/data/icons.js` as JSX under `TechIcons` / `SocialIcons`.
- Components in `src/components/` import from these two modules and are intentionally thin — they are layout + styling, not data.
- **To update portfolio content (new job, new project, tagline change, etc.), edit `src/data/information.js`, not the components.**

**Scroll navigation** (`src/components/Navbar.jsx`):
- Uses `react-scroll`'s `Link` with `smooth` + `offset={-50}` to jump between sections.
- Active-link highlighting is handled by a manual `scroll` listener that walks `navItems` backwards and picks the last section whose `getBoundingClientRect().top <= 150`. A bottom-of-page check forces `activeSection = "subscribe"`.
- Each section component's root element must have an `id` matching the `to` value in `navItems` — if you add a section, add both the `id` on the component's root and an entry in `navItems`.

**Styling:** a single global stylesheet `src/index.css` (~22KB) — no CSS modules, no styled-components, no Tailwind. Class names referenced from JSX are defined there.

**Assets:** `src/images/` holds profile photo, project screenshots, social icons, and `resume.pdf`. `aboutData.cvFileName` in `information.js` drives the CV download link.
