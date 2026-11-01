/* The six services The TechByte offers. Do not add services without the owner's approval.
   T02 fills in: problem, solution, deliverables, benefits, process, faqs, related. */
export const services = [
  { slug: "custom-software-development", title: "Custom Software Development", short: "Software shaped around the way your business already works." },
  { slug: "web-application-development", title: "Web Application Development", short: "Portals, dashboards and booking systems that grow with your users." },
  { slug: "business-website-development", title: "Business Website Development", short: "A fast, credible website that turns visitors into enquiries." },
  { slug: "ecommerce-development", title: "E-commerce Development", short: "A store customers finish buying from and your team can run." },
  { slug: "website-modernization", title: "Website Modernization", short: "Fix or rebuild a slow, dated site without losing content or rankings." },
  { slug: "support-and-maintenance", title: "Support & Maintenance", short: "A technical partner that stays on after launch." },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
