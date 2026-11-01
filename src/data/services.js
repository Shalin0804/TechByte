/* The six services The TechByte offers. Do not add services without the owner's approval.
   Written for The TechByte. Do not add clients, numbers, timelines or prices. */
export const services = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    short: "Software shaped around the way your business already works.",
    seoDescription:
      "Custom software development by The TechByte, Ahmedabad: management systems, internal tools, dashboards and reporting built around your real workflow, not a generic template.",
    intro:
      "When the work that makes your business different lives in spreadsheets, chat threads and somebody's memory, generic tools only add workarounds. We turn that work into one system your team actually wants to use.",
    problem: {
      title: "Where generic tools stop fitting",
      points: [
        "Critical records are scattered across spreadsheets that only one person fully understands.",
        "Off-the-shelf products force you to change a process that works, or to bolt on manual steps.",
        "Information is copied between tools by hand, so mistakes and delays creep in.",
        "Nobody has a clear, current view of what is happening across the business.",
      ],
    },
    solution: {
      title: "One system, built around your process",
      text: "We map how the work actually happens, model the data behind it and build software where every role sees what it needs and nothing it doesn't. The logic lives in one place, with validation, history and reporting built in from the start.",
    },
    deliverables: [
      "Client, record and case management systems",
      "Booking, scheduling and appointment systems",
      "Admin and operations dashboards",
      "Inventory, order and stock tracking",
      "Role-based internal platforms with permissions",
      "Reports and exports built on your own data",
    ],
    benefits: [
      { h: "Less manual work", p: "Repeated copying, checking and chasing is handled by the system instead of people." },
      { h: "One source of truth", p: "Everyone works from the same current records instead of competing spreadsheet versions." },
      { h: "Room to grow", p: "A clear data model means new features and reports don't require starting over." },
      { h: "You own it", p: "The software fits your business, and it can be extended as the business changes." },
    ],
    process: [
      { h: "Map the workflow", p: "We document the steps, people, decisions and exceptions as they happen today." },
      { h: "Model the data", p: "We define records, relationships and states, so reporting is possible from day one." },
      { h: "Build in increments", p: "You review working software early, so feedback shapes the product as it grows." },
      { h: "Hand over and support", p: "Your team gets what it needs to run the system, and we stay available for what comes next." },
    ],
    faqs: [
      { q: "When does custom software make more sense than a ready-made product?", a: "When your core workflow is unusual, when existing tools force awkward workarounds, or when you need one connected system instead of several disconnected ones. If a ready-made product genuinely fits, we will tell you." },
      { q: "Can custom software replace our spreadsheets?", a: "Often, yes. It is one of the most common starting points. The logic in your spreadsheets becomes a structured system with validation, history, user roles and reporting." },
      { q: "Do we need a full specification before we contact you?", a: "No. A short description of the problem and the people involved is enough to start. Working out the details is part of the first phase." },
    ],
    related: ["web-application-development", "support-and-maintenance"],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    short: "Portals, dashboards and booking systems that grow with your users.",
    seoDescription:
      "Web application development by The TechByte: customer portals, admin dashboards, booking systems and multi-role platforms that work in any browser and scale with usage.",
    intro:
      "A web application is software people log in to and get work done with, from any browser, on any device. We build portals, dashboards and platforms with a structure that holds up as more people and more features arrive.",
    problem: {
      title: "What slows a growing platform down",
      points: [
        "Customers or partners have to email or call for things they could do themselves.",
        "Teams juggle several tools to complete one task.",
        "Early prototypes become hard to change once real usage starts.",
        "Interfaces that work on a desktop fall apart on a phone.",
      ],
    },
    solution: {
      title: "A platform built to be used and extended",
      text: "We design around the main job each user comes to do and build the shortest reliable path to it. Clear separation between interface, logic and data keeps new features from turning into rewrites, and responsive design keeps the platform usable on every screen.",
    },
    deliverables: [
      "Customer and partner portals",
      "Admin dashboards and internal tools",
      "Booking and reservation systems",
      "Multi-role business platforms",
      "Search, filtering and status tracking",
      "Secure sign-in and role-based access",
    ],
    benefits: [
      { h: "Self-service for users", p: "Customers and partners can find information and complete tasks without waiting on your team." },
      { h: "Works everywhere", p: "Responsive interfaces, tested on phones, tablets and desktops." },
      { h: "Structured for growth", p: "A clean architecture makes adding features a routine task, not a rewrite." },
      { h: "Early visibility", p: "You see working software throughout the build, not one big reveal at the end." },
    ],
    process: [
      { h: "Define the core tasks", p: "We identify who uses the platform and what each of them needs to get done." },
      { h: "Design the flows", p: "Screens and interactions are planned around those tasks before code is written." },
      { h: "Build and review", p: "We deliver in working increments that you can test and comment on." },
      { h: "Launch and grow", p: "After launch we monitor, fix and add features as usage shows what matters." },
    ],
    faqs: [
      { q: "What is the difference between a website and a web application?", a: "A website mainly communicates information. A web application supports tasks such as accounts, data entry, dashboards, bookings or business processes. Many projects need elements of both." },
      { q: "Will it work on phones and tablets?", a: "Yes. We design responsive interfaces and test them on phone, tablet and desktop screen sizes." },
      { q: "Which technologies do you use?", a: "We choose per project from well-supported tools: React on the front end, Node.js with Express, PHP with Laravel, or Python with Django on the back end, and MySQL, PostgreSQL or MongoDB for data." },
    ],
    related: ["custom-software-development", "support-and-maintenance"],
  },
  {
    slug: "business-website-development",
    title: "Business Website Development",
    short: "A fast, credible website that turns visitors into enquiries.",
    seoDescription:
      "Business website development by The TechByte: fast, responsive, search-friendly websites that explain what you do clearly, build trust and turn visitors into enquiries.",
    intro:
      "Your website is often the first serious impression your business makes. We build sites that explain what you do in plain language, earn trust quickly and make the next step obvious.",
    problem: {
      title: "Why many business websites underperform",
      points: [
        "Visitors can't tell within seconds what the business does or who it serves.",
        "Pages load slowly or break on phones, where most visitors arrive.",
        "There is no clear route from interest to enquiry.",
        "Updating a line of text requires a developer.",
      ],
    },
    solution: {
      title: "Clarity first, then craft",
      text: "We plan the pages, content and visitor journeys before any visual design, so the site rests on a clear structure. Every page answers what a prospective customer is asking and ends with a next step. Speed, accessibility and search-friendly markup are built in, not added later.",
    },
    deliverables: [
      "Business and corporate websites",
      "Service and practice-area pages",
      "Contact and enquiry flows",
      "Landing pages for campaigns",
      "Content your team can update in-house",
      "Search-friendly structure and metadata",
    ],
    benefits: [
      { h: "Instant clarity", p: "Visitors understand what you offer and why it matters to them." },
      { h: "More enquiries", p: "Clear calls to action and simple forms make getting in touch easy." },
      { h: "Fast on every device", p: "Lean pages that load quickly, even on slower mobile connections." },
      { h: "Findable", p: "Semantic structure, metadata and structured data help search engines understand your business." },
    ],
    process: [
      { h: "Structure", p: "We map pages, content and visitor journeys into a clear sitemap." },
      { h: "Design", p: "We create a visual direction that reflects your brand and supports the content." },
      { h: "Build", p: "Responsive, accessible pages with forms and analytics-ready markup." },
      { h: "Launch", p: "Testing across devices, then go-live with search basics in place." },
    ],
    faqs: [
      { q: "What does business website development include?", a: "Planning the page and content structure, designing and building responsive pages, contact and enquiry flows, search-friendly titles, headings and metadata, and, where content changes often, a way for your team to edit it. The exact scope is agreed before the build starts." },
      { q: "What affects the cost of a business website?", a: "Mainly the number of unique page layouts, how much content is ready, custom functionality such as bookings or payments, and integrations. We quote once we understand the scope." },
      { q: "Can our team update the content ourselves?", a: "Yes. Where content changes often, we add a simple admin area or a content system such as WordPress so you can edit text and images without a developer." },
    ],
    related: ["website-modernization", "ecommerce-development"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    short: "A store customers finish buying from and your team can run.",
    seoDescription:
      "E-commerce development by The TechByte: product catalogs, smooth checkout, online payments and order management, on WooCommerce or as a custom build.",
    intro:
      "Selling online takes more than a product grid and a checkout button. A store needs a catalog that is easy to maintain, a checkout customers actually finish and a back office your team can run without a developer.",
    problem: {
      title: "Where online stores lose sales",
      points: [
        "Checkout has too many steps or surprises, so carts get abandoned.",
        "Adding or updating products is slow and error-prone.",
        "Orders, stock and customers are tracked in separate places.",
        "The store looks fine on a desktop but is awkward on a phone.",
      ],
    },
    solution: {
      title: "A store built for buyers and for the team behind it",
      text: "We structure products, variants and categories so the catalog scales cleanly, keep the path to purchase short and clear, and set up order and customer management your team can handle day to day. Payments are set up with a provider that suits your business, such as Razorpay.",
    },
    deliverables: [
      "Product catalogs, categories and variants",
      "Cart, checkout and online payments",
      "Order and fulfilment management",
      "Customer accounts and order history",
      "Offers and discount rules",
      "Store admin dashboards",
    ],
    benefits: [
      { h: "Smoother checkout", p: "Fewer steps and clearer information help more visitors finish their purchase." },
      { h: "Easy catalog updates", p: "Your team can add and edit products quickly and consistently." },
      { h: "Organised operations", p: "Orders, stock and customers are managed in one place." },
      { h: "Platform or custom", p: "WooCommerce for standard catalogs, or a custom build when products and pricing are unusual." },
    ],
    process: [
      { h: "Plan the catalog", p: "We define product types, variants, categories and pricing rules." },
      { h: "Design the journey", p: "Browsing, product pages, cart and checkout are designed to reduce friction." },
      { h: "Build and integrate", p: "The store, payment gateway and admin are built and tested end to end." },
      { h: "Launch and support", p: "Go-live with test orders checked, followed by ongoing support." },
    ],
    faqs: [
      { q: "Do you build custom stores or use an existing platform?", a: "Either, depending on the requirement. A WooCommerce store is faster to launch for standard catalogs. A custom build makes sense when products, pricing or checkout logic are unusual." },
      { q: "Can you set up payment gateways used in India?", a: "Yes. We set up a payment provider that suits your business, such as Razorpay, along with the order and confirmation flow around it." },
      { q: "Can our team manage products and orders?", a: "Yes. Every store we build includes an admin area for products, orders and customers." },
    ],
    related: ["business-website-development", "support-and-maintenance"],
  },
  {
    slug: "website-modernization",
    title: "Website Modernization",
    short: "Fix or rebuild a slow, dated site without losing content or rankings.",
    seoDescription:
      "Website modernization by The TechByte: faster loading, responsive redesign, better structure and maintainable code, while protecting your content, URLs and search visibility.",
    intro:
      "An ageing website costs you quietly: slow pages, layouts that break on phones and content nobody can edit. We improve what you already have, or rebuild it when that is the more sensible route.",
    problem: {
      title: "Signs a website is holding you back",
      points: [
        "Pages take too long to load, especially on mobile.",
        "The layout breaks or feels cramped on phones.",
        "Every small change is expensive because the code is hard to work with.",
        "The site no longer reflects what the business does today.",
      ],
    },
    solution: {
      title: "Keep what works, fix what doesn't",
      text: "We review the current site's speed, structure, content and code to see what is worth keeping. Then we fix the issues with the biggest effect on visitors first, or recommend a rebuild when the foundation makes every change expensive. Content, URLs and search visibility are carried across carefully.",
    },
    deliverables: [
      "Performance and loading improvements",
      "Responsive redesign of existing pages",
      "Migration to a maintainable codebase",
      "Clearer navigation and content structure",
      "Accessibility and usability fixes",
      "Redirects and search-friendly metadata",
    ],
    benefits: [
      { h: "Faster pages", p: "Visitors wait less, and search engines notice." },
      { h: "Works on phones", p: "Layouts that adapt properly to every screen size." },
      { h: "Rankings protected", p: "URLs are preserved or redirected, and titles and content are carried over." },
      { h: "Cheaper to change", p: "A cleaner foundation makes future updates quicker and less risky." },
    ],
    process: [
      { h: "Audit", p: "We review speed, structure, content, accessibility and code quality." },
      { h: "Recommend", p: "You get a prioritised plan: targeted fixes or a rebuild, with the reasons." },
      { h: "Improve", p: "The changes with the most effect on visitors are delivered first." },
      { h: "Verify", p: "We check speed, redirects and search basics after each release." },
    ],
    faqs: [
      { q: "How is an existing website modernized?", a: "We review the site's speed, structure, content and code, then fix what affects visitors most: loading speed, mobile layout, navigation, accessibility and metadata. If the foundation makes every change expensive, we recommend a rebuild that keeps your content and URLs." },
      { q: "Do we need a full rebuild?", a: "Not always. Sometimes targeted fixes are enough. Sometimes a rebuild is cheaper in the long run. We tell you which applies and why." },
      { q: "Will we lose our search rankings?", a: "We plan the change to protect them. Existing URLs are preserved or redirected, and titles, headings and content are carried across." },
    ],
    related: ["business-website-development", "support-and-maintenance"],
  },
  {
    slug: "support-and-maintenance",
    title: "Support & Maintenance",
    short: "A technical partner that stays on after launch.",
    seoDescription:
      "Website and software support and maintenance by The TechByte: bug fixes, updates, performance checks and steady improvements after launch.",
    intro:
      "Software is never finished on launch day. Content changes, browsers update and new needs appear. We keep your website or application healthy and moving forward.",
    problem: {
      title: "What happens without ongoing care",
      points: [
        "Small bugs pile up and nobody is sure who should fix them.",
        "Outdated software and dependencies become a security and stability risk.",
        "Simple content changes wait weeks for a developer.",
        "Performance slowly degrades as content and features grow.",
      ],
    },
    solution: {
      title: "Agreed scope, steady improvement",
      text: "We agree what support covers and how requests are raised, so expectations are clear on both sides. When something breaks, we look for the cause rather than just patching the symptom. Regular small improvements keep the product current and avoid a costly overhaul later.",
    },
    deliverables: [
      "Bug fixes and troubleshooting",
      "Content and layout updates",
      "Software and dependency updates",
      "Small features and refinements",
      "Performance checks",
      "Help for your team when questions come up",
    ],
    benefits: [
      { h: "Peace of mind", p: "A team that knows your system is there when you need it." },
      { h: "Root-cause fixes", p: "Problems are understood and solved, not just hidden." },
      { h: "Stays current", p: "Updates keep the system secure, stable and compatible." },
      { h: "Keeps improving", p: "Small, regular improvements add up." },
    ],
    process: [
      { h: "Review", p: "For systems we didn't build, we first review the code and tell you honestly what we can take on." },
      { h: "Agree scope", p: "We define what is covered and how requests are raised." },
      { h: "Respond", p: "Requests are handled in the agreed way, with clear communication." },
      { h: "Improve", p: "We suggest and deliver improvements as needs evolve." },
    ],
    faqs: [
      { q: "What is included in maintenance?", a: "Typically bug fixes, content and layout updates, software and dependency updates, performance checks and small improvements. The exact scope is agreed with each client before support starts." },
      { q: "Can you maintain a site or app you did not build?", a: "Usually, yes. We first review the existing code to understand its condition, then tell you honestly what we can take on." },
      { q: "How is support arranged?", a: "It is agreed per client, based on how much change you expect and how quickly you need responses. We set it out clearly before starting." },
    ],
    related: ["website-modernization", "custom-software-development"],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
