# The TechByte — Project Status

_Last updated: 2026-11-01 by Claude_

**Current phase:** 3 (Development). T01 is done. Next: T02 (content data), which unblocks T03–T08 for Antigravity.

## 1. Business and service analysis

**Source:** Codefloor IT's live codebase (`../codefloorit.in/src/data`), read for its service offering only.

**What the business actually does:** design and development of custom software, web applications, business websites and e-commerce, plus modernization of existing sites and support after launch. The tech stack is listed in AGENTS.md.

**Decisions made with the owner (2026-11-01):**
- TechByte offers **Codefloor's six real services only**. The brief's Mobile Apps, AI & Automation and IT Consulting were dropped because they are not currently delivered and would be invented capabilities.
- TechByte is a **separate company**, so Codefloor's projects are not shown. The portfolio starts as labelled empty slots.
- The contact details are TechByte's own (see AGENTS.md).
- The first build is a static prerendered site plus a small form/admin API.

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
│  ├─ lib/              seo.jsx (head tags and JSON-LD), motion.js (reveal and transitions), api.js
│  ├─ components/
│  │  ├─ layout/        Nav, Footer, SkipLink, Cursor
│  │  ├─ ui/            Button, Panel, Label, Trace, Node, Field
│  │  └─ sections/      Hero, SignalBoard, Why, Pipeline, OpenSlots, FinalCta, ServiceGlyph...
│  └─ pages/            Home, About, Services, ServiceDetail, Work, Insights, Article,
│                       Contact, Quote, Privacy, Terms, NotFound, admin/{Login,Dashboard}
├─ scripts/prerender.mjs   static HTML per route, sitemap.xml, llms.txt, llms-full.txt
├─ public/              robots.txt, favicon.svg, logo, og-image
└─ server/              Express 5 API (its own package.json)
   ├─ index.js          helmet, JSON limit, rate limits, routes
   ├─ db.js / schema.sql   mysql2 pool; tables inquiries, quotes, sessions
   └─ routes/           public.js (POST inquiries/quotes), admin.js (auth + CRUD)
```

**Routes:** `/`, `/about`, `/services`, `/services/:slug` (6), `/work`, `/insights`, `/insights/:slug`, `/contact`, `/get-a-quote`, `/privacy-policy`, `/terms`, and `/admin` (client-only, `noindex`, not prerendered, disallowed in robots.txt).

**SEO / GEO / AEO:** a unique title, description and canonical on every page; OG and Twitter tags; JSON-LD for Organization and ProfessionalService on home, Service plus BreadcrumbList on service pages, Article on posts, and FAQPage only where FAQs are visible. The build writes sitemap.xml, robots.txt, and llms.txt plus llms-full.txt from the same data. Every page links to related services and to the quote page, and the home and about copy states plainly who TechByte is, what it does, for whom and where.

**Forms and API:**
- `POST /api/inquiries` and `POST /api/quotes`: inputs are validated on the server (length, email format, an allow-list of services), with a honeypot field and a rate limit of 5 requests per 15 minutes per IP. Data is stored in MySQL.
- Admin: the username and a bcrypt password hash come from env. Login sets a random session token stored in MySQL and sent as an `HttpOnly; Secure; SameSite=Strict` cookie with an 8h expiry. Login is limited to 5 attempts per 15 minutes. The admin can list, filter, update status (new / contacted / closed) and delete inquiries and quotes.
- Same origin: `vercel.json` rewrites `/api/*` to the API host, so there is no CORS or cross-site cookie. In dev, Vite proxies `/api` to `:8787`.
- If the API is unreachable, forms show an honest error with the email, phone and WhatsApp alternatives. They never claim success.
- Deferred: managing portfolio, blog and service content from the admin. That content lives in `src/data/*.js` until editing it becomes frequent enough to justify a CMS (tables `projects` and `posts`, plus a rebuild hook).

**Environment variables** (documented in `.env.example` and `server/.env.example`):
- Frontend: `VITE_SITE_URL` (optional override)
- Server: `PORT`, `DATABASE_URL`, `ADMIN_USER`, `ADMIN_PASSWORD_HASH`, `NODE_ENV`, `TRUST_PROXY`

**Deployment:** the frontend goes to Vercel (static `dist/`). The API runs on any Node host with MySQL (for example Railway or Render), and its URL goes into the `vercel.json` rewrite.

**Performance budget:** at most 90 KB of gzipped JS on first load for home (with no 3D and no animation library), self-hosted fonts limited to the latin subset with two preloaded, LCP under 2.0s on mobile, and CLS under 0.05.

## 4. Roadmap

| Phase | Scope | Status |
|---|---|---|
| 1 Research | Codefloor services, logo, owner decisions | done |
| 2 Design | Concept, design system, architecture, tasks | done (reviewed by Antigravity, fixes applied) |
| 3 Development | T01–T14 in TASKS.md | not started |
| 4 Collab review | Claude reviews each Antigravity task; Antigravity reviews the API and forms UX | — |
| 5 Optimization | Lighthouse, axe, SEO check, security review, responsive pass | — |
| 6 Delivery | Full link and form test, deploy docs, final report | — |

## 5. Open items

- Real domain: replace `SITE_URL` in `src/data/site.js` when it is bought.
- API hosting and the MySQL instance are not provisioned yet. They are needed before forms work in production.
- Legal pages: drafts will be written, and the owner should have them reviewed.
- An OG image and favicon will be derived from the logo PNG. A clean SVG of the logo would be better if it exists.
