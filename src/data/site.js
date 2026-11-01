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

export const HERO = {
  eyebrow: "Software & web development studio · Ahmedabad",
  title: "From the first byte to the business it transforms.",
  lead:
    "The TechByte designs and engineers custom software, web applications, websites and online stores for businesses that have outgrown workarounds — and stays on after launch to keep them running.",
};

export const PILLARS = [
  { word: "Build", text: "Solid engineering: structured code, clear data models and software that holds up under real use." },
  { word: "Innovate", text: "Practical technology choices: well-supported tools picked because they fit the problem, not because they are new." },
  { word: "Transform", text: "Business outcomes: less manual work, clearer information and a better experience for your customers." },
];

export const PROCESS = [
  { title: "Discover", text: "We learn your goals, users and current workflow before proposing anything technical." },
  { title: "Strategize", text: "We agree scope, features, architecture and milestones you can review." },
  { title: "Design", text: "We shape clear, usable interfaces around the real tasks people need to do." },
  { title: "Develop", text: "We build in working increments, so you see progress early and often." },
  { title: "Test", text: "We check functionality, devices, speed and accessibility before anything goes live." },
  { title: "Launch", text: "We release with your approval and hand over what your team needs." },
  { title: "Support", text: "We stay available for fixes, updates and the improvements that come next." },
];

export const WHY = [
  { title: "Problem first", text: "We start from the business problem and the people involved, not from a technology or a template." },
  { title: "Practical technology", text: "Proven, well-supported tools such as React, Node.js, Laravel and Django, chosen to fit the job." },
  { title: "Business-focused", text: "Every feature is judged by what it does for your customers, your team or your bottom line." },
  { title: "Built to scale", text: "Clean architecture and data models that let the product grow without a rewrite." },
  { title: "Quality and reliability", text: "Testing on real devices, attention to performance and accessibility, and honest communication throughout." },
];

export const PRINCIPLES = [
  { title: "Understand before building", text: "We ask how the work happens today before we suggest what to build." },
  { title: "Build what is practical", text: "We solve the problem in front of us instead of engineering for problems you don't have." },
  { title: "Design is engineering", text: "Clear, usable interfaces are part of the build, not decoration added at the end." },
  { title: "Keep it maintainable", text: "Software should still be easy to change a year from now." },
  { title: "Communicate openly", text: "Honest status on scope, timeline and progress, including when something is harder than expected." },
  { title: "Keep improving", text: "Launch is a milestone. Products get better through feedback and steady iteration." },
];

/* Only technologies The TechByte works with. Chosen per project. */
export const TECH = ["React", "JavaScript", "Vite", "Node.js", "Express", "PHP", "Laravel", "Python", "Django", "MySQL", "PostgreSQL", "MongoDB", "WordPress", "WooCommerce", "Razorpay"];

/* Visible on the home page (FAQ schema only where shown). */
export const HOME_FAQ = [
  { q: "What does The TechByte do?", a: "The TechByte is a software and web development company in Ahmedabad, Gujarat. We build custom software, web applications, business websites and e-commerce stores, modernize existing websites and provide support and maintenance after launch." },
  { q: "Who do you work with?", a: "Businesses of any size that need software or a website built around how they actually work, from a first professional website to an internal system that replaces spreadsheets." },
  { q: "Do I need to know which technology I need?", a: "No. Most projects start with a business problem, not a tech stack. We help you work out the right approach, the features that matter and the next steps." },
  { q: "Do you work with clients outside Ahmedabad?", a: "Yes. We are based in Ahmedabad and work with clients remotely by email, phone, WhatsApp and video calls." },
  { q: "How do we start?", a: "Send a short description of what you want to build, who it is for and the problem it solves through the Get a Quote page. We reply with an honest read on scope, approach and fit." },
];

export const BUDGETS = ["Not sure yet", "Under ₹50,000", "₹50,000 – ₹1,50,000", "₹1,50,000 – ₹5,00,000", "Above ₹5,00,000"];
export const TIMELINES = ["Flexible", "Within 1 month", "1–3 months", "3–6 months", "6+ months"];
