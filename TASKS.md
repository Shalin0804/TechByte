# TASKS

Status values: `todo` · `doing (owner)` · `review` (built, waiting for the other agent) · `done` (verified by Claude).
**Ownership is by path.** Don't edit another owner's paths. Ask for changes in the "Requests" section at the bottom.

| Owner | Paths |
|---|---|
| Claude | `src/data/**`, `src/lib/**`, `src/styles/tokens.css`, `src/entry-server.jsx`, `src/main.jsx`, `src/App.jsx`, `src/pages/admin/**`, `src/pages/{Contact,Quote,Privacy,Terms,NotFound}.jsx`, `src/components/ui/Field.jsx`, `scripts/**`, `server/**`, `public/**`, root config files, the shared .md files |
| Antigravity | `src/styles/base.css`, `src/components/layout/**`, `src/components/ui/**` (except Field), `src/components/sections/**`, `src/pages/{Home,About,Services,ServiceDetail,Work,Insights,Article}.jsx` |

**T03–T08 are blocked until T01 and T02 are done**, because they need the toolchain and the data contracts.

Every task is finished only when: `npm run build` passes, there are no console errors, it has been checked at 375px and 1440px, keyboard navigation works, reduced motion is respected, and the task has a report line below.

## Phase 3 — Development

| ID | Task | Owner | Status |
|---|---|---|---|
| T01 | Scaffold: Vite, React Router, Tailwind 4, fonts, tokens.css, prerender pipeline, `lib/seo.jsx`, `lib/motion.js`, route table with stub pages, robots, sitemap, llms.txt, vercel.json | Claude | done |
| T02 | Content data: `site.js`, `services.js` (six services, full copy), `insights.js` (three original articles), `projects.js` (empty), legal copy | Claude | todo |
| T03 | UI primitives: Button (primary, secondary, text), Panel (chamfer and node), Label (index), Trace and Node SVG, Container and Section helpers | Antigravity | todo |
| T04 | Layout: Nav (hide on scroll, mobile overlay with focus trap), Footer, SkipLink, Cursor (fine pointer only) | Antigravity | todo |
| T05 | Home: Hero "Trace Field" | Antigravity | todo |
| T06 | Home: Signal Board, Why, Pipeline, Open Slots, Final CTA, and the six ServiceGlyphs | Antigravity | todo |
| T07 | Services index and ServiceDetail template (problem → solution → deliverables → benefits → process → FAQ → CTA), driven by `services.js` | Antigravity | todo |
| T08 | About, Work (open slots), Insights list, and Article pages | Antigravity | todo |
| T09 | API: Express server, schema.sql, public endpoints, validation, rate limits | Claude | todo |
| T10 | Contact and Get a Quote pages with `Field`, `lib/api.js`, and honest success/error/fallback states | Claude | todo |
| T11 | Admin: login, inquiries and quotes dashboard (status, filter, delete), session auth | Claude | todo |
| T12 | Privacy, Terms, and 404 pages | Claude | todo |
| T13 | Page transitions (View Transitions) and global reveal wiring | Claude | todo |
| T14 | Review of T03–T08: code, a11y, performance, and design fidelity, with fixes or follow-up tasks | Claude | todo |

## Phase 5 — Optimization (after T14)

| ID | Task | Owner |
|---|---|---|
| T20 | Lighthouse (mobile) on Home, a service page, and Quote: Perf ≥ 90, A11y ≥ 95, BP ≥ 95, SEO ≥ 95 | Claude |
| T21 | Visual and interaction polish pass, plus responsive QA at 320/375/768/1024/1440 | Antigravity |
| T22 | Security review of the API and admin, plus `npm audit` | Claude |
| T23 | SEO, schema validation, and broken-link check across all routes | Claude |

## Antigravity task specs

General: read DESIGN_SYSTEM.md first and use tokens through Tailwind classes or CSS variables, never raw hex values. Don't add dependencies. Read copy from `src/data/*` and never hard-code it in components. Mark decorative SVGs with `aria-hidden="true"`. Add reveals by setting `data-reveal` on elements; motion.js handles the rest.

**T03 UI primitives.** `Button` takes `{as: Link|'a'|'button', variant: 'primary'|'secondary'|'text', to|href, children}` and shows the arrow icon by default on primary. The chamfer comes from the `.chamfer` / `.chamfer-panel` utilities in base.css. `Panel` uses a hairline drawn with a pseudo-element and puts a node at the cut. `Label` takes `{index, children}` and renders `01 — TEXT` in mono. `Trace` is an SVG line or path with an optional animated pulse and hides the pulse under reduced motion.

**T04 Layout.** Nav links come from `NAV` in site.js. The mobile overlay needs a focus trap, Esc to close, `aria-expanded`, `aria-controls`, and must close on route change. Hide-on-scroll uses a single passive scroll listener throttled with requestAnimationFrame, and stays visible while focus is inside the nav. The cursor only renders under `(pointer: fine) and (prefers-reduced-motion: no-preference)` and moves with transform in requestAnimationFrame.

**T05 Hero.** Follow DESIGN_SYSTEM §7.1. No SVG of the logo exists, so redraw a simplified T+B monogram by hand from the PNG. The H1, supporting line and CTAs (Let's Talk → `/get-a-quote`, Explore Our Work → `/work`) are server-rendered text. The monogram is inline SVG redrawn from the logo shapes (a simplified T and B with traces). Its draw animation is CSS-only. The pointer glow runs only on fine pointers. There must be no layout shift: the SVG box has a fixed aspect ratio.

**T06 Home sections.** These follow §7.2–7.6. Signal Board rows are `<a>` elements. The preview pane is driven by React state (`active`, initial value 0), set by `onPointerEnter` and `onFocus`, and it is hidden below `lg`. Service glyphs are components in `sections/ServiceGlyph.jsx` that take `{slug, className}`, use a 64×64 viewBox with `stroke="currentColor"` at 1.5px, and are `aria-hidden`. The Pipeline uses `@supports (animation-timeline: view())` for the scroll-driven signal, with a fully-lit fallback. The home page gets the compact Work band (§7.5), not slots.

**T07 Service pages.** These pages are built from `services.js` fields (`problem`, `solution`, `deliverables`, `benefits`, `process`, `faqs`, `related`). The FAQ uses `<details>`/`<summary>`. Related services link to each other. A breadcrumb is visible. Claude handles the SEO and schema through `<Seo>`, which the page calls with the props described in seo.jsx.

**T08 Other pages.** About covers the mission (Build, Innovate, Transform), the principles, how TechByte works, the location, and a CTA, with no team, year or count claims. Work shows the Open Slots (blueprint drawings) and a "Start a project" CTA. Insights is an editorial list with the newest post as a large feature. Article renders `insights.js` blocks with a readable 68ch measure.

## Reports

<!-- Add a line per finished task: `T0X — owner — date — what changed, how it was verified, open issues` -->
- T01 — Claude — 2026-11-01 — Scaffold, 15 prerendered routes plus 404 and the admin shell, sitemap/robots/llms, OG and logo images. Verified with `npm run build` and a headless browser: hydration has no console errors, there are 17 head tags per page, and /admin renders client-side. Open: the first-load JS is 85.6 KB gzipped with no UI yet (React plus the router), so the 90 KB budget is tight. Avoid adding dependencies. Nav and Footer are stubs that T04 replaces.

## Requests

<!-- Cross-owner change requests: `@Claude: …` / `@Antigravity: …` -->
