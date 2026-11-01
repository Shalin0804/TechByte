/* Owner-confirmed technologies only (CONTENT_STRATEGY.md §1). `use` explains where and why each tool is chosen. */
export const TECH_INTRO = {
  title: "Technologies we work with",
  lead:
    "We use a focused set of proven, well-supported technologies. The stack for each project is chosen by its requirements: what it must do, how it will grow, what it connects to and who will maintain it. It is never chosen by what is fashionable.",
};

export const TECH_GROUPS = [
  {
    slug: "frontend",
    label: "Frontend Development",
    summary: "The part people see and use: fast, accessible and responsive interfaces.",
    items: [
      { name: "HTML", use: "Semantic structure that browsers, assistive technology and search engines understand." },
      { name: "CSS", use: "Layout, typography and responsive design across every screen size." },
      { name: "JavaScript", use: "Interactivity in the browser, and the language shared across our front and back ends." },
      { name: "TypeScript", use: "Typed JavaScript for larger codebases: fewer bugs and safer changes as projects grow." },
      { name: "React", use: "Component-based interfaces for web applications, dashboards and interactive websites." },
      { name: "Vite", use: "A fast build tool for modern front ends, with optimised production bundles." },
      { name: "Tailwind CSS", use: "A utility-first styling system for consistent, maintainable design implementation." },
    ],
  },
  {
    slug: "backend",
    label: "Backend Development",
    summary: "Business logic, APIs, authentication and integrations behind the screens.",
    items: [
      { name: "Node.js", use: "JavaScript on the server: APIs and real-time features sharing a language with the front end." },
      { name: "Express.js", use: "A lightweight Node.js framework for REST APIs and integrations." },
      { name: "PHP", use: "Widely supported server language, well suited to content-driven sites and many hosting environments." },
      { name: "Laravel", use: "A full-featured PHP framework for business applications with authentication, queues and admin tools." },
      { name: "Python", use: "Data processing, scripting and data-heavy back ends." },
      { name: "Django", use: "A batteries-included Python framework for secure, data-heavy web applications with a built-in admin." },
    ],
  },
  {
    slug: "mobile",
    label: "Mobile Development",
    summary: "Cross-platform apps for Android and iOS from one codebase.",
    items: [
      { name: "React Native", use: "Android and iOS apps from a shared JavaScript or TypeScript codebase, with native interface components." },
    ],
  },
  {
    slug: "databases",
    label: "Databases",
    summary: "Reliable storage chosen by the shape of your data.",
    items: [
      { name: "MySQL", use: "A dependable relational database for structured business data, and widely supported by hosts." },
      { name: "PostgreSQL", use: "An advanced relational database for complex queries, reporting and data integrity." },
      { name: "MongoDB", use: "A document database for flexible or rapidly changing data structures." },
    ],
  },
  {
    slug: "cms-commerce",
    label: "CMS, Commerce & Integrations",
    summary: "Editable content, online selling and connections to other systems.",
    items: [
      { name: "WordPress", use: "A content management system your team can edit without a developer." },
      { name: "WooCommerce", use: "Online stores on WordPress for standard product catalogs." },
      { name: "Razorpay", use: "Online payments in India, for websites, web applications and mobile apps." },
      { name: "REST APIs", use: "How we connect your software with payment, messaging, accounting and other third-party services." },
    ],
  },
  {
    slug: "cloud",
    label: "Cloud & Deployment",
    summary: "Fast, secure delivery to your users.",
    items: [
      { name: "Vercel", use: "Global hosting for websites and front ends with automatic HTTPS and fast delivery." },
      { name: "Application hosting", use: "Back ends and databases are deployed on hosting suited to each project's runtime, data and budget, and recommended during planning." },
    ],
  },
];

/* How we pick a stack. Shown on /technologies. */
export const TECH_SELECTION = [
  { h: "Requirements first", p: "Users, data, integrations, performance and security needs decide the architecture." },
  { h: "Maintainability", p: "We favour mature, well-documented tools that many developers know, so you're never locked in." },
  { h: "Your existing systems", p: "If you already run PHP hosting, WordPress or a particular database, we build on what works." },
  { h: "Total cost", p: "Hosting, licences, development time and long-term maintenance are weighed together." },
  { h: "Room to grow", p: "We choose an architecture that can handle more users and features without a rewrite." },
];

/* Flat list for the marquee and quick references. */
export const TECH = TECH_GROUPS.flatMap((g) => g.items.map((i) => i.name)).filter((n) => !/APIs|hosting/i.test(n));
