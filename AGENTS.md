# The TechByte — website

Project root (absolute): `D:\CF\Codes\Website code\TechByte`

When calling the claude-code MCP tool, always pass absolute paths under this project root — the tool's working directory is Antigravity's install folder, not this project.

Read before working: `PROJECT_STATUS.md` (state, architecture, roadmap), `DESIGN_SYSTEM.md` (visual rules), `TASKS.md` (who does what).

## Company facts (the only facts the site may state)

- Name: **The TechByte**. Tagline: **Build • Innovate • Transform**.
- Email: techbyte0804@gmail.com · Phone: +91 76984 75791 · Location: Ahmedabad, Gujarat, India.
- Domain: temporary Vercel domain, set once in `src/data/site.js` (`SITE_URL`).
- Services (exactly six, see `src/data/services.js`): Custom Software Development, Web Application Development, Business Website Development, E-commerce Development, Website Modernization, Support & Maintenance.
- Technologies (only these may be named): React, JavaScript, Vite, Node.js, Express, PHP, Laravel, Python, Django, MySQL, PostgreSQL, MongoDB, WordPress, WooCommerce, Razorpay.
- Portfolio: **no projects yet**. The Work page shows clearly-labelled empty slots.

## Hard rules

1. Never invent clients, projects, testimonials, statistics, years in business, team size, certifications, awards, or technologies. No fake reviews. No mobile-app or AI service claims.
2. TechByte is a separate brand from Codefloor IT. Do not reuse Codefloor's UI, components, copy, robot/assistant, 3D scenes, fonts (Inter, Space Grotesk) or layouts. Codefloor was used only to learn the service offering.
3. No dead buttons or `href="#"`. Every CTA goes to a real route, `mailto:`, `tel:` or WhatsApp.
4. Never show "sent" for a form unless the API returned 2xx.
5. No secrets in frontend code. Only `VITE_*` variables reach the browser, and they are never secrets.
6. Animations: transform/opacity only; respect `prefers-reduced-motion`; content must be visible without JS (pages are prerendered).
7. Stay inside your owned paths (see `TASKS.md`). Before editing, run `git status` and `git diff` and don't overwrite uncommitted work you didn't write.
8. A task is done only after `npm run build` passes and the page has been checked in a browser at 375px and 1440px with no console errors.

## Stack

- Frontend: React 19, Vite 8, React Router 8, Tailwind CSS 4 (tokens in `src/styles/tokens.css` via `@theme`), lucide-react icons. Fonts are self-hosted via @fontsource-variable (Bricolage Grotesque, Geist, Geist Mono).
- No animation library. CSS transitions, the IntersectionObserver helper in `src/lib/motion.js`, CSS scroll-driven animations as progressive enhancement, and the View Transitions API for page changes. If you want to add GSAP, Framer Motion or three.js, propose it in TASKS.md first.
- Every public route is prerendered to static HTML (`scripts/prerender.mjs`), which also writes sitemap.xml and llms.txt.
- API: `server/`, an Express 5 + MySQL (mysql2) app for inquiries, quote requests and the admin. Vercel rewrites `/api/*` to it, so it is same-origin.

## Commands

```bash
npm install
npm run dev          # frontend dev server (proxies /api to localhost:8787)
npm run build        # client + SSR build + prerender
npm run preview      # serve dist/
npm run lint         # oxlint
cd server && npm install && npm run dev   # API on :8787 (needs server/.env, see server/.env.example)
```
