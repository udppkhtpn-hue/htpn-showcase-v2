# CLAUDE.md — HTPN HIO Showcase (v2)

## Project Overview
A showcase website for the **Healthcare Intelligence Office (HIO)** at **Hospital Tengku Permaisuri Norashikin (HTPN), Kajang, Selangor, Malaysia**. It presents homegrown digital health tools built by clinicians and staff, organised by category (Patient's Journey, Doctor's Journey, Management Productivity), plus a Pipeline of future projects and a KIV/In-Development section.

**Working directory:** `/Users/ferwahnfairis/Documents/htpn-showcase-v2/.claude/worktrees/relaxed-hypatia/htpn-showcase-main`

---

## Commands

```bash
# Dev server (always use this path — NOT the old htpn-showcase folder)
cd "/Users/ferwahnfairis/Documents/htpn-showcase-v2/.claude/worktrees/relaxed-hypatia/htpn-showcase-main"
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router DOM v7 (BrowserRouter) |
| Animation | GSAP 3 + ScrollTrigger |
| Motion | Framer Motion 12 |
| 3D / Physics | Three.js + @react-three/fiber + @react-three/drei + @react-three/rapier |
| Styling | Plain CSS with CSS custom properties (no Tailwind, no CSS-in-JS) |
| Fonts | Urbanist (Google Fonts) + Sangbleu Kingdom (local woff/ttf in `/public/fonts/`) |
| Deployment | Netlify (SPA redirect via `netlify.toml`) |

---

## Architecture

### File Structure
```
src/
  App.jsx              # Root: BrowserRouter → Routes (all routes defined here)
  main.jsx             # ReactDOM.createRoot entry
  styles/
    global.css         # CSS variables, resets, scrollbar, body defaults
    home.css           # Landing page (Home.jsx) styles
    navbar.css         # Navbar component styles
    detail.css         # Shared detail page layout (.detail-page, .detail-container)
    project-rich.css   # Rich project detail page styles
    amr.css            # AMR pipeline page styles
    facial-ai.css      # Facial AI pipeline page styles
  components/          # Reusable UI components
  pages/               # One file per route
  data/                # Pure JS data files (no API calls)
```

### Routing Pattern
- All routes declared in `App.jsx`
- Landing page sections are `id`-anchored within `Home.jsx` (no sub-routes)
- Project detail pages: `/projects/:slug` → each project has its own `Project*.jsx` file
- Pipeline detail pages: `/pipeline/:slug` → each pipeline has its own `Pipeline*.jsx` file
- KIV/In-Development: `/in-development/:slug` → `InDevelopmentDetail.jsx`
- Generic fallback: `ProjectDetail.jsx` and `PipelineDetail.jsx` handle catch-all slugs

### Navigation (cross-page scroll)
`Navbar.jsx` uses `sessionStorage.setItem('scrollTo', '#sectionId')` when navigating from a detail page back to the home page. `ScrollToTop` in `App.jsx` reads and clears this on route change.

---

## Data Layer

All content is in `/src/data/` — plain JS `export const` arrays. No API, no CMS.

### `projects.js`
Each project object:
```js
{
  num: '#01',                          // Display badge
  status: 'live',                      // 'live' | 'beta' | 'planned'
  category: 'patient',                 // 'patient' | 'doctor' | 'management'
  categoryLabel: "Patient's Journey",
  icon: '/icon-preconsult.png',        // Path in /public/
  iconType: 'image',                   // 'image' | 'emoji'
  title: 'GynaeClerk — ...',
  desc: '...',
  credit: { by: 'Dr X', dept: 'O&G' },
  tags: ['Patient App', 'Bilingual'],
  accent: '#f06292',                   // Per-project colour used for highlights
  detailPath: '/projects/preconsult-gynae',
  freeToUse: true,                     // Optional — shows badge on card
}
```

### `pipeline.js`
```js
{
  icon: '🤖',
  title: 'AMR — Autonomous Mobile Robot',
  desc: '...',
  tags: [...],
  detailPath: '/pipeline/amr',
  cardImage: '/AMR3.jpg',              // Image shown on landing page card
  video: '/amr.mp4',                   // Video on detail page
  conceptImages: ['/AMR2.PNG'],        // Concept/wireframe images on detail page
}
```

### `inDevelopment.js`
KIV items with `slug`, `num`, `icon`, `title`, `desc`, `tags`.

### `training.js`
Internal training sessions data.

### `journey.js`
Timeline data for the "Our Journey" section.

---

## CSS Conventions

### CSS Variables (defined in `global.css`)
```css
:root {
  --bg: #0a0a0a;
  --fg: #F5F5F0;
  --teal: #00C9A7;
  --muted: rgba(245, 245, 240, 0.75);
  --border: rgba(245, 245, 240, 0.1);
  --font: 'Urbanist', sans-serif;
  --font-heading: 'Urbanist', sans-serif;
}
```

### Key Conventions
- **No Tailwind** — all styles are plain CSS class-based in per-feature CSS files
- **BEM-lite naming**: component prefix + double underscore for children (e.g. `.nav__logo`, `.nav__links`, `.detail-page`, `.detail-container`)
- **Per-project accent colours** — passed as `accent` in project data, used as CSS custom property `--accent` on cards
- **Dark theme only** (this v2 has no light/dark toggle — that was in the old v1)
- Scrollbar: 3px wide, styled via `::-webkit-scrollbar`
- Custom cursor: `cursor: none` on `body`; `CustomCursor.jsx` draws the custom cursor

### Detail Page Layout
All detail pages import `../styles/detail.css` and use this structure:
```jsx
<div className="detail-page">
  <div className="detail-container">
    <button className="detail-back">← Back</button>
    {/* content */}
  </div>
  <Footer />
</div>
```
Background: fixed `/hospital2.png` with `rgba(10,10,10,0.88)` overlay via `::before`.

---

## Key Components

| Component | Purpose |
|---|---|
| `ElectricBorder` | Canvas-drawn animated jagged border around clickable cards. Props: `color` (hex), `className`. |
| `GlitchText` | CSS glitch animation on text. Props: `text`, `speed`, `className`. |
| `AnimatedCounter` | Counts up to a number on scroll intersection. Props: `to`, `suffix`, `duration`. |
| `ScrollRevealText` | GSAP-powered fade-up reveal on scroll. |
| `CustomCursor` | Replaces browser cursor with custom animated dot. |
| `Ticker` | Horizontal scrolling marquee ticker. |
| `GalleryStrip` | Horizontal scrolling image gallery. |
| `CurvedBanner` | SVG curved section banner. |
| `ProjectFolders` | Tab-based project category switcher (ALL / Patient's Journey / Doctor's Journey / Management Productivity). |
| `ProjectRow` | Single project row in list view. |
| `SiteNavigator` | Bottom section navigator. |
| `Navbar` | Top navbar — hamburger menu on all screen sizes, smooth-scroll to section IDs. |

---

## Navbar Behaviour
- Full-screen overlay menu (not a dropdown)
- Links are section IDs on the Home page, not routes
- From any detail page, clicking a nav link stores `sessionStorage.scrollTo` then navigates to `/`
- `ScrollToTop` in `App.jsx` reads sessionStorage and scrolls to the target section on mount

---

## Static Assets (`/public/`)
- **Icons**: `/icon-*.png` / `.jpg` — project card icons
- **Images**: `/AMR*.jpg`, `/drone*.png`, `/cat-*.png`, `/facial-*.png` etc.
- **Videos**: `/amr.mp4`, `/drone.mp4` — served as static assets
- **Fonts**: `/fonts/SangbleuKingdom-*.ttf` — local font files
- **HTML apps**: `/gynae-preconsult.html`, `/fkc.html`, `/skin-diary.html`, etc. — self-contained app files served as static pages

---

## Adding New Content

### Add a new project
1. Add an entry to `src/data/projects.js`
2. Add icon to `/public/`
3. Create `src/pages/Project<Name>.jsx` using `detail.css` layout
4. Add route to `App.jsx`: `<Route path="/projects/slug" element={<ProjectName />} />`
5. Add slug → demo URL mapping in `ProjectDetail.jsx` `DEMO_LINKS` object (if using generic detail)

### Add a new pipeline project
1. Add entry to `src/data/pipeline.js` with `detailPath`, `cardImage`, optional `video` and `conceptImages`
2. Create `src/pages/Pipeline<Name>.jsx`
3. Add route to `App.jsx`

### Add a KIV item
1. Add entry to `src/data/inDevelopment.js`
2. `InDevelopmentDetail.jsx` handles all KIV slugs generically — no new page needed

---

## Deployment
- **Platform**: Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA routing**: `netlify.toml` redirects all `/*` → `/index.html` with status 200
- Static HTML apps in `/public/` are served directly (not through React Router)

---

## Known Gotchas
- **Old project**: There is an older version at `/Users/ferwahnfairis/htpn-showcase/`. Do NOT edit that — always work in this v2 directory.
- **Fonts**: Sangbleu Kingdom `.ttf` files must be in `/public/fonts/`. If missing, headings fall back to Urbanist.
- **Videos**: Keep under ~10MB per file for fast Netlify serving. AMR is 2.5MB, drone is 8.6MB.
- **Custom cursor**: `cursor: none` is set globally on `body`. All interactive elements must account for this.
- **React Router + static HTML**: The Netlify redirect serves `index.html` for all routes, but `/public/*.html` files are served directly — they do not go through React Router.
