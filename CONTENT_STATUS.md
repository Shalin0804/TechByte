# The TechByte: Content Implementation Plan and Status

Status values: `planned` · `writing` (Claude) · `ready` (data written and reviewed) · `building` (Antigravity) · `review` · `done` (verified in browser).

## Phases

**C0: Finish the visual build (in progress).** Antigravity completes T03–T08, then Claude reviews and commits. Content expansion starts on a stable base so layouts are not built twice.

**C1: Data model and services (Claude).**
- Swap to the new six services and slugs, folding the old e-commerce, modernization and support copy into the relevant services.
- Write `services.js` covering all 15 blocks for each service, plus the canonical 8-phase `process.js` and `technologies.js`.
- Add routes, SEO and schema for the new pages, and redirect the old service URLs in vercel.json.

**C2: Company pages (Claude).** `home.js` (all 12 sections), `about.js`, `industries.js`, `faq.js` (30 questions in 8 categories), plus the updated Contact and Quote copy and fields.

**C3: Insights (Claude).** Expand the 3 existing articles and write 7 new ones (1,000–1,500 words each), with author, dates, category, ToC, related articles and FAQs.

**C4: Layouts (Antigravity, in parallel with C2 and C3 once C1 is done).**
- Extend Home with 6 new sections.
- Build the ServiceDetail long-form template (sticky section index, problem/approach comparison, use-case cards, tech chips, FAQ).
- Build the new pages: /process (interactive timeline), /technologies (category explorer), /industries (sticky industry tabs/anchors), /faq (category filter and search).
- Upgrade Insights with a category filter and the article template with ToC, cover and related articles.

**C5: Review (Claude).**
- Word counts, voice check, fact check against CONTENT_STRATEGY §1.
- Internal links, titles and descriptions, schema validation, a broken-link crawl of the build.
- Mobile checks at 320, 375, 768 and 1440 pixels, no console errors, reduced-motion check.
- A read-only second opinion from Antigravity.

## Page tracker

| Page | Words target | Data file | Copy | Layout |
|---|---|---|---|---|
| Home | 1,200–1,800 | home.js, site.js | ready | done |
| About | 700–1,000 | about.js | ready | done |
| Services overview | ~500 | services.js | ready | done |
| Software Development | 900–1,400 | services/*.js | ready (800–1,160) | done |
| Website Development | 900–1,400 | services/*.js | ready (800–1,160) | done |
| Web Application Development | 900–1,400 | services/*.js | ready (800–1,160) | done |
| Mobile Application Development | 900–1,400 | services/*.js | ready (800–1,160) | done |
| AI & Automation | 900–1,400 | services/*.js | ready (800–1,160) | done |
| IT Consulting | 900–1,400 | services/*.js | ready (800–1,160) | done |
| Development Process (new) | 800–1,200 | process.js | ready | done |
| Technologies (new) | 700–1,000 | technologies.js | ready | done |
| Industries (new) | 7 × 250–400 | industries.js | ready | done |
| Our Work | n/a (verified only) | projects.js | planned | done |
| Insights (11 articles) | 10 × 1,000–1,500 | insights/*.js | ready (730–1,070 words; quote checklist ~450) | done |
| FAQ Center (new) | 25–35 Qs | faq.js | ready (29 Qs) | done |
| Contact / Get a Quote | ~400 / ~350 | contact.js | ready | done (Claude) |

## Content gaps waiting on the owner

- AI tools to name (currently vendor-neutral).
- Verified project details for case studies.
- An author name for articles (default: The TechByte Team).
