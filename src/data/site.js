/* Company facts. The only place contact details live — keep in step with AGENTS.md. */
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || "https://thetechbyte.vercel.app").replace(/\/$/, "");

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

export const HERO = {
  eyebrow: "Software & web development company · Ahmedabad",
  title: "From the first byte to the business it transforms.",
  lead:
    "The TechByte designs and engineers websites, web and mobile applications, custom software and practical AI automation for businesses that have outgrown workarounds — and stays on after launch to keep them running.",
};

export const PILLARS = [
  { word: "Build", text: "Solid engineering: structured code, clear data models and software that holds up under real use." },
  { word: "Innovate", text: "Practical technology choices: well-supported tools picked because they fit the problem, not because they are new." },
  { word: "Transform", text: "Business outcomes: less manual work, clearer information and a better experience for your customers." },
];

export { PROCESS } from "./process.js";

export const WHY = [
  { title: "Business-first thinking", text: "We start from the outcome you need, such as fewer manual steps, more enquiries or clearer reporting, and work backwards to the technology. Features that don't serve the goal don't get built." },
  { title: "Custom-built solutions", text: "Your software is shaped around how your business works, not squeezed into a template. When a ready-made tool fits better, we tell you." },
  { title: "Transparent communication", text: "Written scope, regular progress updates, a test version you can try and honest news when something is harder than expected." },
  { title: "Scalable architecture", text: "Clean data models and a clear separation of concerns, so the product can grow in users and features without a rewrite." },
  { title: "Quality-focused development", text: "Testing on real devices, attention to performance, accessibility and security, and code that another developer can understand." },
  { title: "Long-term technical support", text: "We stay available after launch for fixes, updates and improvements, so you're never left with software nobody can maintain." },
];

export const PRINCIPLES = [
  { title: "Understand before building", text: "We ask how the work happens today before we suggest what to build." },
  { title: "Build what is practical", text: "We solve the problem in front of us instead of engineering for problems you don't have." },
  { title: "Design is engineering", text: "Clear, usable interfaces are part of the build, not decoration added at the end." },
  { title: "Keep it maintainable", text: "Software should still be easy to change a year from now." },
  { title: "Communicate openly", text: "Honest status on scope, timeline and progress, including when something is harder than expected." },
  { title: "Keep improving", text: "Launch is a milestone. Products get better through feedback and steady iteration." },
];

export { TECH } from "./technologies.js";

export { HOME_FAQ } from "./home.js";

export const BUDGETS = ["Not sure yet", "Under ₹50,000", "₹50,000 – ₹1,50,000", "₹1,50,000 – ₹5,00,000", "Above ₹5,00,000"];
export const TIMELINES = ["Flexible", "Within 1 month", "1–3 months", "3–6 months", "6+ months"];
