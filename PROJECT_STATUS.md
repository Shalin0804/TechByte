# The TechByte — Project Status

_Last updated: 2026-11-01 by Claude_

**Current phase:** content expansion. C1–C3 (copy) are done and committed, C4 (Antigravity layouts) is in progress, and C5 (review) is next. See CONTENT_STATUS.md.

## 1. Business and service analysis

**Source:** Codefloor IT's live codebase (`../codefloorit.in/src/data`), read for its service offering only.

**What the business actually does:** design and development of custom software, web applications, business websites and e-commerce, plus modernization of existing sites and support after launch. The tech stack is listed in AGENTS.md.

**Decisions made with the owner (2026-11-01):**
- **Superseded the same day:** the owner confirmed the six services Software, Website, Web Application, Mobile App (React Native), AI & Automation and IT Consulting, plus the technologies in CONTENT_STRATEGY.md §1.
- TechByte is a **separate company**, so Codefloor's projects are not shown. The portfolio starts as labelled empty slots.
- The contact details are TechByte's own (see AGENTS.md).
- **2026-11-01 update:** the owner asked for a fully static site with no admin dashboard and no backend. Forms compose the message and send it through WhatsApp or email.

**Who TechByte serves:** small and mid-sized businesses (for example clinics, hospitality, professional services, retailers, and operations-heavy firms) that are running on spreadsheets, outdated websites or generic tools that don't fit how they work.

**Problems it solves:** manual processes and spreadsheet sprawl, a weak or untrusted web presence, lost enquiries, stores that are hard to run, slow or broken old sites, and the lack of a technical partner after launch.

**Service map (slug → page):**
| Slug | Service | Core promise |
|---|---|---|
| custom-software-development | Custom Software Development | Software shaped around your workflow, not the other way round |
| web-application-development | Web Application Development | Portals, dashboards and booking systems that scale with usage |
| business-website-development | Business Website Development | A credible, fast site that turns visitors into enquiries |
| ecommerce-development | E-commerce Development | A store customers finish buying from and your team can run |
| website-modernization | Website Modernization | Fix or rebuild what's slow, without losing content or rankings |
| support-and-maintenance | Support & Maintenance | A technical partner after launch |

Each service page follows the same order: problem → how we solve it → what you get (deliverables) → benefits → how it runs (process) → visible FAQ (with FAQ schema) → CTA. All copy is newly written for TechByte, not copied from Codefloor.

**Messaging:**
- Hero H1: "From the first byte to the business it transforms."
- Supporting line: "The TechByte designs and engineers custom software, web applications, websites and online stores for businesses that have outgrown workarounds — and stays on after launch to keep them running."
- Pillars: **Build** (engineering), **Innovate** (practical technology choices), **Transform** (business outcomes).

## 2. Website concept

"Signal Path." The circuit traces in the logo become the site's visual language. See DESIGN_SYSTEM.md §1 and §7.

## 3. Technical architecture

```
/                       Vite app (repo root)
├─ index.html
├─ src/
│  ├─ main.jsx          hydrateRoot + BrowserRouter
│  ├─ entry-server.jsx  prerender entry: routes list and render(url)
│  ├─ App.jsx           route table and layout
│  ├─ styles/           tokens.css (@theme), base.css
│  ├─ data/             site.js, services.js, insights.js, projects.js (empty), legal.js
│  ├─ lib/              seo.jsx (head tags and JSON-LD), motion.js (reveals), validate.js (form rules)
│  ├─ components/
│  │  ├─ layout/        Nav, Footer, SkipLink, Cursor
│  │  ├─ ui/            Button, Panel, Label, Trace, Node, Field
│  │  └─ sections/      Hero, SignalBoard, Why, Pipeline, OpenSlots, FinalCta, ServiceGlyph...
│  └─ pages/            Home, About, Services, ServiceDetail, Work, Insights, Article,
│                       Contact, Quote, Privacy, Terms, NotFound
├─ scripts/prerender.mjs   static HTML per route, sitemap.xml, llms.txt, llms-full.txt
└─ public/              favicon.svg, logo.png, og-image.png
```

**Routes:** `/`, `/about`, `/services`, `/services/:slug` (6), `/work`, `/insights`, `/insights/:slug`, `/contact`, `/get-a-quote`, `/privacy-policy`, `/terms`.

**SEO / GEO / AEO:** a unique title, description and canonical on every page; OG and Twitter tags; JSON-LD for Organization and ProfessionalService on home, Service plus BreadcrumbList on service pages, Article on posts, and FAQPage only where FAQs are visible. The build writes sitemap.xml, robots.txt, and llms.txt plus llms-full.txt from the same data. Every page links to related services and to the quote page, and the home and about copy states plainly who TechByte is, what it does, for whom and where.

**Forms (static):** Contact and Get a Quote validate in the browser with `src/lib/validate.js` (self-check: `npm test`). Once valid, they show the composed message with "Send on WhatsApp" (wa.me, pre-filled) and "Send by email" (mailto, pre-filled) buttons. There is a honeypot field, and nothing is stored or claimed as sent. Portfolio, blog and service content live in `src/data/*.js`.

**Environment variables:** `VITE_SITE_URL` (optional, overrides the canonical URL). There are no secrets.

**Deployment:** Vercel, building with `npm run build` and serving the static `dist/` (`vercel.json` sets clean URLs, security headers and asset caching).

**Performance budget:** at most 90 KB of gzipped JS on first load for home (with no 3D and no animation library), self-hosted fonts limited to the latin subset with two preloaded, LCP under 2.0s on mobile, and CLS under 0.05.

## 4. Roadmap

| Phase | Scope | Status |
|---|---|---|
| 1 Research | Codefloor services, logo, owner decisions | done |
| 2 Design | Concept, design system, architecture, tasks | done (reviewed by Antigravity, fixes applied) |
| 3 Development | T01–T14 in TASKS.md | not started |
| 4 Collab review | Claude reviews each Antigravity task; Antigravity reviews the forms UX | — |
| 5 Optimization | Lighthouse, axe, SEO check, security review, responsive pass | — |
| 6 Delivery | Full link and form test, deploy docs, final report | — |

## 5. Open items

- Real domain: replace `SITE_URL` in `src/data/site.js` when it is bought.
- Legal pages: drafts will be written, and the owner should have them reviewed.
- An OG image and favicon will be derived from the logo PNG. A clean SVG of the logo would be better if it exists.
