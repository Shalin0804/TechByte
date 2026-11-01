import { createContext, useContext, useEffect } from "react";
import { COMPANY, CONTACT, SITE_URL } from "../data/site";

/* During prerender the page's <Seo> writes into this sink and scripts/prerender.mjs puts
   headHtml(sink) into <head>. In the browser <Seo> swaps the same tags on route change. */
export const SeoContext = createContext(null);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

export function headHtml({ title, description, path = "/", schema = [], noindex = false, type = "website" }) {
  const full = path === "/" ? title : `${title} | ${COMPANY.name}`;
  const url = SITE_URL + (path === "/" ? "/" : path);
  const image = `${SITE_URL}/og-image.png`;
  const meta = [
    ["name", "description", description],
    ["name", "robots", noindex ? "noindex, nofollow" : "index, follow"],
    ["property", "og:type", type],
    ["property", "og:site_name", COMPANY.name],
    ["property", "og:title", full],
    ["property", "og:description", description],
    ["property", "og:url", url],
    ["property", "og:image", image],
    ["property", "og:locale", "en_IN"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", full],
    ["name", "twitter:description", description],
    ["name", "twitter:image", image],
  ];
  return [
    `<title>${esc(full)}</title>`,
    ...meta.map(([k, n, v]) => `<meta ${k}="${n}" content="${esc(v)}" data-seo />`),
    noindex ? "" : `<link rel="canonical" href="${esc(url)}" data-seo />`,
    ...[organizationSchema(), ...schema].map((s) => `<script type="application/ld+json" data-seo>${json({ "@context": "https://schema.org", ...s })}</script>`),
  ].join("\n    ");
}

export function Seo(props) {
  const sink = useContext(SeoContext);
  if (sink) sink.current = props;
  const key = JSON.stringify(props);
  useEffect(() => {
    const html = headHtml(JSON.parse(key));
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    document.title = html.match(/<title>([^<]*)/)[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    document.head.insertAdjacentHTML("beforeend", html.replace(/<title>[^<]*<\/title>/, ""));
  }, [key]);
  return null;
}

/* ---- JSON-LD builders. Only facts from src/data may go in here. The organization is on every page. ---- */

export const organizationSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#org`,
  name: COMPANY.name,
  slogan: COMPANY.tagline,
  description: COMPANY.description,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  email: CONTACT.email,
  telephone: CONTACT.phoneHref.replace("tel:", ""),
  address: { "@type": "PostalAddress", addressLocality: CONTACT.city, addressRegion: CONTACT.region, addressCountry: CONTACT.country },
  areaServed: "Worldwide",
});

export const breadcrumbSchema = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE_URL + path })),
});

export const serviceSchema = (s) => ({
  "@type": "Service",
  name: s.title,
  description: s.short,
  serviceType: s.title,
  url: `${SITE_URL}/services/${s.slug}`,
  provider: { "@id": `${SITE_URL}/#org` },
  areaServed: "Worldwide",
});

/* Only for FAQs that are visible on the same page. */
export const faqSchema = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const articleSchema = (a) => ({
  "@type": "Article",
  headline: a.title,
  description: a.description,
  datePublished: a.date,
  url: `${SITE_URL}/insights/${a.slug}`,
  author: { "@id": `${SITE_URL}/#org` },
  publisher: { "@id": `${SITE_URL}/#org` },
});
