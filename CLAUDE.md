# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build to `/build`
- `npm test` — CRA/Jest test runner (watch mode). No test files currently exist in `src/`; `npm test -- --watchAll=false` runs once and exits.
- `npm run deploy` — runs `predeploy` (build) then publishes `/build` to the `gh-pages` branch. `homepage` in `package.json` is `https://vinayak2112.github.io/portfolio`, so asset paths are served under `/portfolio/`.

## Deployment workflow

Live at **https://vinayak2112.github.io/portfolio/** via GitHub Pages (serves the `gh-pages` branch).

**Canonical flow (use this):** make changes on `master`, commit + push `master`, then run `npm run deploy` — it builds and force-publishes `/build` to `gh-pages` in one command, no manual branch switching. The 6-step branch dance documented below is a fallback only; you normally never need it.

**Resume-sync rule:** the hosted CV download is `src/images/resume.pdf` (imported directly in `AboutMe.jsx`; `aboutData.cvFileName` is only the suggested download filename). Whenever Vinayak green-lights a new resume PDF, **overwrite `src/images/resume.pdf`** with it, refresh any changed copy in `src/data/information.js`, then commit `master` + run `npm run deploy`. Keep the portfolio's projects/about/skills aligned with the resume's positioning.

---

The live site is hosted at **https://vinayak2112.github.io/portfolio/** via GitHub Pages, which serves the `gh-pages` branch of this repo.

Two branches, two jobs:
- `master` — the **source of truth**. All code changes (JSX, data, CSS, assets) live here. Never commit built output here.
- `gh-pages` — a **deploy-only** branch containing the compiled `/build` output at the repo root. Do not edit by hand.

**Every time we commit changes to `master`, the full deploy flow is:**

1. **Commit and push `master`:**
   ```bash
   git add <changed files>
   git commit -m "<message>"
   git push origin master
   ```

2. **Build from the just-pushed source:**
   ```bash
   npm run build
   ```
   This writes the compiled site to `/build/` (gitignored on `master`).

3. **Switch to `gh-pages`** — `/build/` survives the branch switch because it's gitignored:
   ```bash
   git fetch origin gh-pages
   git checkout gh-pages
   ```

4. **Replace the tracked contents of `gh-pages` with the fresh build:**
   ```bash
   git rm -rf asset-manifest.json index.html static/   # remove the previous deploy
   cp -r build/* .                                     # copy new build output to repo root
   rm -rf build                                        # keep the branch flat (build/ is not tracked)
   ```
   Only the compiled static files (`index.html`, `asset-manifest.json`, `static/...`) — plus a minimal `.gitignore` containing `node_modules` — should end up tracked on `gh-pages`. **Never commit `src/`, `public/`, `package.json`, `node_modules/`, or any source on this branch.**

5. **Commit and push the deploy:**
   ```bash
   git add -A
   git commit -m "deploy: <short note>"
   git push origin gh-pages
   ```

6. **Switch back to `master`:**
   ```bash
   git checkout master
   ```

GitHub Pages will pick up the new commit on `gh-pages` within a minute or two and serve it at https://vinayak2112.github.io/portfolio/.

**Shortcut:** `npm run deploy` automates steps 2–5 via the `gh-pages` npm package (force-pushes `build/` to `gh-pages` without a manual branch switch). Prefer this when you want to deploy without touching branches.

If `homepage` in `package.json` ever changes, rebuild before deploying — asset paths in `/build/` are baked in at build time from that field.

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
