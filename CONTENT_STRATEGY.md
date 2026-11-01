# The TechByte: Content Strategy

_Owner: Claude (content strategist, SEO architect, reviewer). Last updated: 2026-11-01._

## 1. Verified facts: the only facts the site may state

| Fact | Value |
|---|---|
| Name and tagline | The TechByte · Build • Innovate • Transform |
| Contact | techbyte0804@gmail.com · +91 76984 75791 · Ahmedabad, Gujarat, India (works remotely with clients anywhere) |
| Services (owner-confirmed 2026-11-01) | Software Development · Website Development · Web Application Development · Mobile Application Development · AI & Automation · IT Consulting |
| Technologies (owner-confirmed) | **Frontend:** HTML, CSS, JavaScript, TypeScript, React, Vite, Tailwind CSS · **Backend:** Node.js, Express.js, PHP, Laravel, Python, Django · **Mobile:** React Native · **Databases:** MySQL, PostgreSQL, MongoDB · **CMS and commerce:** WordPress, WooCommerce, Razorpay · **Deployment:** Vercel |
| AI tools | **None confirmed.** Describe AI work vendor-neutrally ("integrating AI services through their APIs"). Never name OpenAI, Claude, Gemini, n8n, Zapier and so on until the owner confirms them. |
| Portfolio | **No verified projects.** Work shows labelled slots only. |
| Not available, never invent | Founding year, years of experience, team size, offices, certifications, awards, partnerships, client names or counts, testimonials, results or statistics, fixed prices, guaranteed timelines |

E-commerce, website modernization and support & maintenance are no longer separate services. They become capabilities inside Website Development, Web Application Development and Software Development, and maintenance runs through every service page and the process page (Post-Launch Support).

## 2. Positioning

**One-line positioning:** The TechByte is a software and web development company in Ahmedabad that builds websites, web and mobile applications, custom software and practical AI automation around how a business actually works, and supports them after launch.

**Audience:** startups and entrepreneurs, small and mid-sized businesses, growing companies, and enterprises modernizing parts of their technology.

**Core message:** Code is the easy part. The value lies in understanding the business problem first, and then building technology that solves it and keeps working. That is "Build • Innovate • Transform":
- **Build:** engineering quality.
- **Innovate:** practical, current technology choices.
- **Transform:** measurable change in how the business operates. This is described qualitatively and never with invented numbers.

## 3. Voice

- Premium, calm and specific. Short sentences. Plain English first, with technical terms explained in passing.
- Show, don't claim. Write "we map your workflow before designing screens", not "we deliver world-class solutions".
- Honest about trade-offs. Say when a ready-made tool is the better choice, and when AI is not the answer.
- Banned: "cutting-edge", "world-class", "leading", "seamless", "synergy", "unlock", "empower", "revolutionize", "in today's fast-paced digital world", and stacked adjectives.
- Industry and use-case examples are framed as **examples of what can be built**, never as past client work. Use labels like "Example:" or "What this could look like".

## 4. SEO, GEO and AEO rules

- One H1 per page. H2 and H3 headings are phrased the way people search ("What is the difference between a website and a web application?").
- Each page has a unique title (≤ 60 characters where possible) and a meta description of 140–160 characters that states the service, the audience and Ahmedabad or remote availability where natural.
- **Answer first:** each section opens with a 1–2 sentence direct answer that AI engines can quote, then expands.
- Structured data: ProfessionalService (site-wide), Service and BreadcrumbList (service pages), FAQPage (only where the FAQs are visible), Article and BreadcrumbList (posts), ItemList (Industries, Insights).
- Internal links: every service page links to 2–3 related services, the process page, the technologies page, 1–2 relevant articles and the quote page. Every article links to its service and to one related article. Industries link to the relevant services.
- llms.txt and llms-full.txt are generated at build time and stay accurate automatically.

## 5. Information architecture (target)

```
/                         Home (12 sections)
/about                    About Us
/services                 Services overview
/services/:slug           6 service pages
/process                  Development Process        NEW
/technologies             Technologies               NEW
/industries               Industries                 NEW (anchors per industry)
/work                     Our Work (verified only)
/insights                 Insights, filterable by category
/insights/:slug           10 articles
/faq                      FAQ Center                 NEW
/contact  /get-a-quote  /privacy-policy  /terms
```

New service slugs: `software-development`, `website-development`, `web-application-development`, `mobile-app-development`, `ai-automation`, `it-consulting`.

## 6. Ownership for this phase

- **Claude** writes all copy as structured data in `src/data/*.js` (home.js, services.js, process.js, technologies.js, industries.js, faq.js, insights.js, about.js), updates the SEO, schema, routes and prerender, and reviews the implementation.
- **Antigravity** builds and extends the page layouts and reusable content components that render that data, in the existing design language. It does not write copy.
- Copy is never hard-coded in components. Antigravity requests copy changes from Claude through the TASKS.md "Requests" section.
