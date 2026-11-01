/* FAQ Center. No fixed prices or guaranteed timelines (not confirmed by the owner). */
export const FAQ_CATEGORIES = [
  {
    slug: "general",
    label: "General Questions",
    items: [
      { q: "What is The TechByte?", a: "The TechByte is a software and web development company based in Ahmedabad, Gujarat, India. We build websites, web applications, mobile apps and custom software and provide IT consulting." },
      { q: "Where are you located, and do you work remotely?", a: "We're based in Ahmedabad and work remotely with clients across India and internationally, using email, phone, WhatsApp and video calls." },
      { q: "What kinds of businesses do you work with?", a: "Startups, entrepreneurs, small and mid-sized businesses, growing companies and larger organisations modernizing parts of their technology, across industries such as healthcare, hospitality, retail, education, logistics and professional services." },
      { q: "Can you sign an NDA before we share our idea?", a: "Yes. If you'd like a non-disclosure agreement before sharing details, let us know in your first message." },
    ],
  },
  {
    slug: "software",
    label: "Software Development",
    items: [
      { q: "What is custom software development?", a: "Designing and building software for one organisation's specific needs, such as a management system, an internal tool or an integration layer, rather than using a generic product built for everyone." },
      { q: "Should we buy ready-made software or build custom?", a: "If a ready-made product fits your process with few workarounds, buy it. Build custom when your workflow is specific, when tools don't connect, or when the process is central to how you compete. We'll give you an honest recommendation." },
      { q: "Can you integrate our existing tools?", a: "Usually, yes, through APIs or reliable imports and exports. We check what each tool supports during planning." },
      { q: "Can you modernize old internal software?", a: "Yes. We review the code and data, then recommend whether to extend, refactor gradually or rebuild in phases." },
    ],
  },
  {
    slug: "websites",
    label: "Website Development",
    items: [
      { q: "Do you build websites on WordPress or custom code?", a: "Both. WordPress suits teams that edit content often. A custom-built site suits performance-critical or highly designed sites. We recommend one based on your needs." },
      { q: "Will my website be mobile-friendly and fast?", a: "Yes. We design for phones first, optimise images and scripts, and test across devices before launch." },
      { q: "Do you include SEO?", a: "Every site we build includes search-friendly foundations: semantic headings, unique titles and descriptions, a sitemap, structured data and good performance. Ongoing SEO campaigns are a separate service we don't currently offer." },
      { q: "Can you redesign our current website without losing rankings?", a: "Yes. We preserve or redirect existing URLs and carry over titles, headings and content to protect your search visibility." },
    ],
  },
  {
    slug: "web-apps",
    label: "Web Applications",
    items: [
      { q: "What is the difference between a website and a web application?", a: "A website mainly presents information. A web application lets signed-in users complete tasks such as booking, managing records, viewing dashboards or processing orders, and is built around a database." },
      { q: "Can different users have different access?", a: "Yes. We design role-based access, such as admin, staff or customer, and enforce permissions on the server." },
      { q: "Where will our web application be hosted?", a: "It depends on the application. Front ends are often deployed on Vercel, with back ends and databases on hosting suited to them. We recommend an option and explain the costs." },
    ],
  },
  {
    slug: "mobile",
    label: "Mobile Applications",
    items: [
      { q: "Do you build for both Android and iOS?", a: "Yes. We build cross-platform apps with React Native, so one codebase delivers both the Android and iOS apps." },
      { q: "Do I need an app, or will a web app do?", a: "If people will use it often, need notifications, device features or offline access, an app makes sense. For occasional use, a responsive web application is often the better first step." },
      { q: "Will you publish the app to the app stores?", a: "We prepare the builds and support submission to Google Play and the Apple App Store under your own developer accounts." },
    ],
  },
  {
    slug: "pricing",
    label: "Pricing & Project Planning",
    items: [
      { q: "How much will my project cost?", a: "It depends on scope: features, screens, user roles, integrations, content and design complexity. We estimate after understanding your requirements, so the number reflects your actual project." },
      { q: "How long will my project take?", a: "Timelines depend on scope and on how quickly feedback, content and decisions are available. We agree milestones in the project plan before development starts." },
      { q: "What information helps you prepare an accurate estimate?", a: "The problem you're solving, who will use the result, the main features or workflows, any existing systems or content, examples you like, and your budget range and preferred timing." },
      { q: "What happens if requirements change during the project?", a: "Changes are normal. We estimate the impact on scope, cost and timeline, and proceed only once you approve." },
    ],
  },
  {
    slug: "support",
    label: "Support & Maintenance",
    items: [
      { q: "Do you provide support after launch?", a: "Yes. Post-launch support covers fixes, updates, performance checks and improvements, with scope and request handling agreed in advance." },
      { q: "Can you maintain a website or app you didn't build?", a: "Usually, yes. We first review the code and hosting, then tell you honestly what we can take on." },
      { q: "Who owns the code after the project?", a: "Ownership is defined in the project agreement before work begins. Our standard approach is that you own what we build for you, and we hand over the code and credentials at launch." },
    ],
  },
];

export const ALL_FAQS = FAQ_CATEGORIES.flatMap((c) => c.items);
