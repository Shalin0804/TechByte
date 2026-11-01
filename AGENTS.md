# The TechByte — website

Project root (absolute): `D:\CF\Codes\Website code\TechByte`

When calling the claude-code MCP tool, always pass absolute paths under this project root — the tool's working directory is Antigravity's install folder, not this project.

Read before working: `PROJECT_STATUS.md` (state, architecture, roadmap), `DESIGN_SYSTEM.md` (visual rules), `CONTENT_STRATEGY.md` (facts, voice, SEO), `CONTENT_STATUS.md` (content tracker), `TASKS.md` (who does what).

All copy lives in `src/data/` (Claude). Components only render it (Antigravity). Logo files are in `public/brand/` (`-light` variants are for dark backgrounds).

## Company facts (the only facts the site may state)

- Name: **The TechByte**. Tagline: **Build • Innovate • Transform**.
- Email: techbyte0804@gmail.com · Phone: +91 76984 75791 · Location: Ahmedabad, Gujarat, India.
- Domain: temporary Vercel domain, set once in `src/data/site.js` (`SITE_URL`).
- Services (exactly five, see `src/data/services/`): Software Development, Website Development, Web Application Development, Mobile Application Development (React Native), IT Consulting. AI & Automation was removed at the owner's request on 2026-11-01. Do not reintroduce AI services or AI claims.
- Technologies: only those in `src/data/technologies.js` (see CONTENT_STRATEGY.md §1).
- Portfolio: **no projects yet**. The Work page shows clearly-labelled empty slots.

## Hard rules

1. Never invent clients, projects, testimonials, statistics, years in business, team size, certifications, awards, or technologies. No fake reviews. No unrealistic AI promises.
2. TechByte is a separate brand from Codefloor IT. Do not reuse Codefloor's UI, components, copy, robot/assistant, 3D scenes, fonts (Inter, Space Grotesk) or layouts. Codefloor was used only to learn the service offering.
3. No dead buttons or `href="#"`. Every CTA goes to a real route, `mailto:`, `tel:` or WhatsApp.
4. The site is fully static: no backend, database or admin. Forms validate in the browser (`src/lib/validate.js`), then hand the composed message to WhatsApp or email. Never claim a message was sent.
5. No secrets in frontend code. Only `VITE_*` variables reach the browser, and they are never secrets.
6. Animations: transform/opacity only; respect `prefers-reduced-motion`; content must be visible without JS (pages are prerendered).
7. Stay inside your owned paths (see `TASKS.md`). Before editing, run `git status` and `git diff` and don't overwrite uncommitted work you didn't write.
8. A task is done only after `npm run build` passes and the page has been checked in a browser at 375px and 1440px with no console errors.

## Stack

- Frontend: React 19, Vite 8, React Router 8, Tailwind CSS 4 (tokens in `src/styles/tokens.css` via `@theme`), lucide-react icons. Fonts are self-hosted via @fontsource-variable (Bricolage Grotesque, Geist, Geist Mono).
- No animation library. CSS transitions, the IntersectionObserver helper in `src/lib/motion.js`, CSS scroll-driven animations as progressive enhancement, and the View Transitions API for page changes. If you want to add GSAP, Framer Motion or three.js, propose it in TASKS.md first.
- Every public route is prerendered to static HTML (`scripts/prerender.mjs`), which also writes sitemap.xml and llms.txt.

## Commands

```bash
npm install
npm run dev          # dev server
npm run build        # client + SSR build + prerender
npm run preview      # serve dist/
npm run lint         # oxlint
npm test             # form validation self-check
```
