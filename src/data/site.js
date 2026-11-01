/* Company facts. The only place contact details live — keep in step with AGENTS.md. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://thetechbyte.vercel.app").replace(/\/$/, "");

export const COMPANY = {
  name: "The TechByte",
  tagline: "Build • Innovate • Transform",
  description:
    "The TechByte is a software development company in Ahmedabad, Gujarat that designs and builds custom software, web applications, business websites and e-commerce stores, modernizes existing websites and supports them after launch.",
};

export const CONTACT = {
  email: "techbyte0804@gmail.com",
  phoneDisplay: "+91 76984 75791",
  phoneHref: "tel:+917698475791",
  whatsapp: "917698475791",
  city: "Ahmedabad",
  region: "Gujarat",
  country: "IN",
  location: "Ahmedabad, Gujarat, India",
};

export const whatsappLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];
