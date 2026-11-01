/* Insights articles. Original, educational content only: no invented statistics or client stories.
   Each article lives in ./insights/<slug>.js with:
   { slug, title, description, category, date, updated, service, intro, blocks: [{ type: "p"|"h2"|"h3"|"ul", text|items }], faqs? }
   Derived here: author, readMinutes, toc (from h2s, with ids), related. */
import a1 from "./insights/custom-software-or-off-the-shelf.js";
import a2 from "./insights/how-a-professional-website-helps-businesses-grow.js";
import a3 from "./insights/website-vs-web-application.js";
import a4 from "./insights/how-business-automation-reduces-manual-work.js";
import a5 from "./insights/before-developing-a-mobile-app.js";
import a6 from "./insights/choosing-the-right-technology-stack.js";
import a7 from "./insights/why-businesses-need-custom-booking-systems.js";
import a8 from "./insights/how-ai-can-improve-business-operations.js";
import a9 from "./insights/signs-your-business-needs-software-modernization.js";
import a10 from "./insights/essential-features-of-a-business-dashboard.js";
import a11 from "./insights/what-to-prepare-before-a-website-quote.js";

export const AUTHOR = "The TechByte Team";

export const CATEGORIES = [
  "Software Development",
  "Website Development",
  "Web Applications",
  "Mobile Applications",
  "AI & Automation",
  "Business Technology",
  "Digital Transformation",
  "Technology Guides",
];

export const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const words = (a) =>
  [a.intro, ...a.blocks.flatMap((b) => b.items || [b.text]), ...(a.faqs || []).flatMap((f) => [f.q, f.a])].join(" ").split(/\s+/).length;

const base = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11]
  .map((a) => ({
    ...a,
    author: AUTHOR,
    words: words(a),
    readMinutes: Math.max(1, Math.round(words(a) / 220)),
    blocks: a.blocks.map((b) => (b.type === "h2" ? { ...b, id: slugify(b.text) } : b)),
    toc: a.blocks.filter((b) => b.type === "h2").map((b) => ({ id: slugify(b.text), text: b.text })),
  }))
  .sort((x, y) => y.date.localeCompare(x.date));

/* Related: same service first, then same category, then most recent. */
export const articles = base.map((a) => ({
  ...a,
  related: [
    ...base.filter((b) => b !== a && b.service === a.service),
    ...base.filter((b) => b !== a && b.service !== a.service && b.category === a.category),
    ...base.filter((b) => b !== a && b.service !== a.service && b.category !== a.category),
  ]
    .slice(0, 3)
    .map((b) => b.slug),
}));

export const getArticle = (slug) => articles.find((a) => a.slug === slug);

/* Old article URLs, redirected in vercel.json. */
export const LEGACY_ARTICLE_REDIRECTS = {
  "signs-your-website-needs-modernization": "signs-your-business-needs-software-modernization",
};
