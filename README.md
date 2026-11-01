# The TechByte — website

Build • Innovate • Transform. Marketing website for The TechByte, a software and web development company in Ahmedabad, Gujarat.

React 19 + Vite 8 + React Router 8 + Tailwind CSS 4. Every route is prerendered to static HTML at build time, then hydrated. It is a fully static site, with no backend and no secrets.

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # client build + SSR build + prerender → dist/ (HTML per route, sitemap.xml, robots.txt, llms.txt, llms-full.txt)
npm run preview   # serve dist/
npm test          # form validation self-check
npm run lint      # oxlint
node scripts/check-dist.mjs   # after a build: broken links/anchors/assets, one <h1> per page, word counts
```

## Where things live

- `src/data/` — **all copy**. Services (`services/*.js`), process, technologies, home, about, industries, FAQ, contact, and articles (`insights/*.js`). Change content here, never in components.
- `src/pages/`, `src/components/` — layouts and UI. `src/styles/tokens.css` holds the design tokens.
- `public/brand/` — logo files. The `-light` variants are for dark backgrounds.
- `AGENTS.md`, `DESIGN_SYSTEM.md`, `CONTENT_STRATEGY.md`, `PROJECT_STATUS.md`, `TASKS.md`, `CONTENT_STATUS.md` — project rules and the record of how the site was built (Claude + Antigravity).

## Forms

Contact and Get a Quote validate in the browser (`src/lib/validate.js`), then let the visitor send the composed message by **WhatsApp or email**. Nothing is stored, and the site never claims a message was sent.

## Deploy (Vercel)

1. Import this repository in Vercel. The framework preset is Vite, the build command is `npm run build` and the output directory is `dist`.
2. Optionally set `VITE_SITE_URL` to the final domain (the default is `https://thetechbyte.vercel.app`). It is used for canonical URLs, the sitemap and structured data.
3. `vercel.json` sets clean URLs, security headers, asset caching and redirects from old service URLs.

## Before launch

- Set the real domain (`VITE_SITE_URL`).
- Confirm which AI tools to name on the AI & Automation page (it is currently vendor-neutral).
- Add verified case studies to `src/data/projects.js` when available.
- Have the Privacy Policy and Terms reviewed.
