# The TechByte: Content Inventory and Gap Report

_Audit date: 2026-11-01. Source: `src/data/*.js` and the page files. Word counts are approximate visible copy._

Antigravity's first visual build (T03–T08) was still in progress during this audit, so its layouts are not judged here. This report covers content only.

## Page-by-page audit

| Page | Current content | Approx. words | Target | Gap |
|---|---|---|---|---|
| Home | Hero, 3 pillars, tech marquee, 6-service board, 5 "why" points, 7-step pipeline, work band, 5 FAQs, CTA | ~650 | 1,200–1,800 | **Missing:** intro (who we are / who we help), problems we solve (6), our approach (code vs business outcomes), categorised technologies, industries (7), project journey (after you contact us), FAQ expanded to 8–12. The process needs to grow from 7 to 8 stages and match /process. Services must change to the new six. |
| About | Stub | ~0 | 700–1,000 | **Everything:** intro, vision, mission, philosophy, problem-solving approach, what's different, collaboration, quality commitment, long-term vision. |
| Services overview | Stub | ~30 | ~500 | Intro, six services with "when you need it", how to choose, links to process, technologies and quote. |
| Service pages (×6) | 3 of the new 6 partly exist under old slugs (custom software, web app, website), ~350 words each. **Mobile, AI & Automation and IT Consulting have no content.** | ~350 | 900–1,400 each | **All 15 required blocks:** hero, introduction, what it means, problems, when you need it, capabilities, features, technologies, methodology, use cases (labelled examples), benefits, challenges and our approach, related services, 6–8 FAQs, CTA. Old e-commerce, modernization and support copy gets folded in as capabilities. |
| Development Process | **Does not exist** (only the 7-line PROCESS list) | ~120 | 800–1,200 | New page with 8 phases. Each covers what happens, why it matters, what the client provides, deliverables, and how approval works. |
| Technologies | **Does not exist** (flat list of 15 in the marquee) | ~15 | 700–1,000 | New page with 6 categories. Each covers where and why the tools are used and how the stack is chosen. No wall of logos. |
| Industries | **Does not exist** | 0 | 7 × 250–400 | New page with 7 industries. Each covers challenges, digital needs, possible solutions, **labelled example** applications, value, and relevant services. |
| Our Work | Three labelled empty slots, CTA | ~80 | No change in volume | **No verified projects exist.** Keep the slots. Add a short "what our case studies will include" section and a CTA. Gap logged below. |
| Insights | 3 articles, ~600–700 words each. No author, updated date, category taxonomy, ToC, FAQs or images | ~2,000 | 10 × 1,000–1,500 | Expand the 3 existing articles and write 7 new ones. Add author, updated date, category (8 categories), ToC from H2s, related articles, optional FAQs, and an SVG cover per category. Also add a category filter on /insights. |
| FAQ Center | **Does not exist** | 0 | 25–35 Qs | New page with 8 categories, FAQPage schema and search/filter. |
| Contact | Channels, form, "what happens next" (3 steps) | ~250 | ~400 | Add how requirements are evaluated, what helps an estimate, and how discussions work. |
| Get a Quote | Multi-service, budget and timeline required, live brief | ~150 | ~350 | Budget and timeline become **optional**. Add guidance on what to include. Update to the new six services. The "sent" state stays honest (static site → WhatsApp or email). |
| Privacy, Terms, 404 | Complete for a static site | ~900 | No change | Only the service names in the 404 links need updating. |

## Blocking gaps (owner input needed, not invented)

1. **AI tools:** none confirmed. The AI page stays vendor-neutral until the owner names the tools.
2. **Portfolio:** no verified projects. Case-study fields (overview, requirement, challenge, solution, features, technologies, outcome) will be filled only from details the owner supplies.
3. **Article author:** published as "The TechByte Team" unless the owner names a person.
4. **Featured images:** there are no photos. Generated SVG category covers will be used, with alt text describing the topic.

## Consistency issues found

- The process has 7 steps on Home (Discover → Support), while the brief lists two different 8-step lists. **Decision:** one canonical 8-phase list (Initial Discussion, Requirement Gathering, Scope & Planning, UI/UX Design, Development, Quality Assurance, Deployment, Post-Launch Support) used everywhere, with Home showing short labels.
- Service names differ between site.js, services.js and the old docs (AGENTS.md, PROJECT_STATUS.md). These will all be updated to the new six.
- Some "why" points on Home and principles on About overlap. They will be merged so each idea appears once with a different emphasis.
