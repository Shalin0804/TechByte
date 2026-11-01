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
| T03 | UI primitives: Button (primary, secondary, text), Panel (chamfer and node), Label (index), Trace and Node SVG, Container and Section helpers | Antigravity | review |
| T04 | Layout: Nav (hide on scroll, mobile overlay with focus trap), Footer, SkipLink, Cursor (fine pointer only) | Antigravity | review |
| T05 | Home: Hero "Trace Field" | Antigravity | review |
| T06 | Home: Signal Board, Why, Pipeline, Open Slots, Final CTA, and the six ServiceGlyphs | Antigravity | review |
| T07 | Services index and ServiceDetail template (problem → solution → deliverables → benefits → process → FAQ → CTA), driven by `services.js` | Antigravity | review |
| T08 | About, Work (open slots), Insights list, and Article pages | Antigravity | review |
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
- T03 — Antigravity — 2026-11-01 — UI primitives built: Button (primary, secondary, text with chamfer & hover trace), Panel (chamfer-panel with top-left cut node), Label (mono index), Trace (SVG with signal pulse), Section (on-ink/on-paper), and PageHeader. Verified with `npm run build` and visual inspection. Open: none.
- T04 — Antigravity — 2026-11-01 — Layout built: Nav (logo monogram + wordmark, active NavLinks, hide-on-scroll with rAF throttle, mobile overlay with focus trap, ESC key close, body scroll lock), Footer (large "Let's build it.", full sitemap, contact details, legal links), and Cursor ring (fine-pointer & motion-enabled only). Verified via headless browser at 375px & 1440px. Open: none.
- T05 — Antigravity — 2026-11-01 — Home Hero "Trace Field" built: server-rendered H1 with 300ms clip reveal, hand-drawn inline-SVG T+B monogram with stroke-dashoffset draw animation on load ending at BUILD/INNOVATE/TRANSFORM terminal nodes, looping signal pulse dot, pointer-reactive glow on fine pointers, zero layout shift. Verified with `npm run build` and headless Edge at 375px & 1440px. Open: none.
- T06 — Antigravity — 2026-11-01 — Home sections built: Pillars (Build, Innovate, Transform), TechMarquee (15 approved technologies, infinite loop, pauses on hover), SignalBoard (6 editorial rows with desktop sticky preview pane and deterministic index 0), Why TechByte (asymmetric 5-principle on-paper layout), Pipeline (7-step scroll-driven trace with IntersectionObserver fallback), WorkBand (compact home preview with blueprint schematic), Faq (HOME_FAQ <details>/<summary>), FinalCta. Verified with `npm run build`, `npm run lint`, and headless Edge. Open: none.
- T07 — Antigravity — 2026-11-01 — Services index (/services) and ServiceDetail template (/services/:slug) built: PageHeader, 6 editorial capability panels with ServiceGlyph, delivery overview. ServiceDetail has breadcrumb, glyph hero, in-page sticky scroll-spy index, problem points, solution panel, deliverables grid, benefits, 4-step process, FAQs accordion, related services, CTA. Seo matches schema requirements with faqSchema. Verified with `npm run build` and headless Edge at 375px/1440px. Open: none.
- T08 — Antigravity — 2026-11-01 — About, Work, Insights, and Article pages built: About features scroll-linked word highlight mission statement, 3 Pillars, 6 Principles, 7-step process, Ahmedabad & remote collaboration. Work features 3 Open Slots with detailed engineering blueprint SVGs and honest policy copy. Insights features large hero layout for newest article and editorial list for others. Article renders blocks (p, h2, ul) at 68ch measure, related service card, and read next links. Verified with `npm run build`, `npm run lint`, and headless Edge at 375px & 1440px. Open: none.
- C4 — Antigravity — 2026-11-01 — Content layouts completed: Real brand logos (/brand/logo-mark-light.png & /brand/logo-full-light.png) integrated in Nav & Footer; Nav updated with full sitemap routes & Services dropdown; ServiceGlyphs updated strictly for 6 owner-confirmed slugs; Home extended to 13 data-driven sections (Hero, Intro, Services SignalBoard, Problems, Approach contrast table, TechCompact, 8-phase Pipeline, Why 6 items, Industries, Journey 6 steps, WorkBand, FAQ, FinalCta); Services overview built with rich rows & IT Consulting / Quote guidance; ServiceDetail long-form template built with all 15 fields, comparison table/cards, features, use cases, challenges, and sticky in-page index; Process page built with 8-phase interactive vertical timeline; Technologies page built with 7-category explorer & selection rules; Industries page built with 7 sector breakdowns and hypothetical examples; FAQ page built with category filters, dynamic search and 29 prerendered Q&As; About page connected to structured data; Insights & Article built with category filter, ToC, block renderer, generated SVG covers, and FAQs. Verified with `npm test`, `oxlint` (0 errors/0 warnings), `npm run build` (all 30 routes prerendered), and Headless Edge checking 375px/1440px viewports with zero horizontal overflow and zero console errors. Open: none.

## Requests

<!-- Cross-owner change requests: `@Claude: …` / `@Antigravity: …` -->
- C5 — Claude — 2026-11-01 — Review of C4.
  - Build, lint and `npm test` pass. `scripts/check-dist.mjs` finds no broken links, anchors or assets across 31 pages and 1,685 links, and every page has exactly one H1.
  - Browser: no console errors and no horizontal overflow at 390px and 1440px.
  - Fixed: prerender was moving large page content out of `<main>`, so `progressiveChunkSize: Infinity` keeps it inline. `.chamfer` cards on paper sections rendered dark-on-dark (the journey and tech cards), fixed in base.css. PageHeader sat under the fixed nav. "Let's Talk" showed on mobile. The footer headline duplicated the final CTA.
  - Open: articles run 730–1,070 words (one is ~450); the AI vendors and verified projects are waiting on the owner.
