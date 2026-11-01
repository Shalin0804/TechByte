/* Home page copy, section by section (CONTENT_STATUS.md). Hero, pillars, WHY and process come from site.js / process.js. */

export const INTRO = {
  label: "Who we are",
  title: "A technology partner that starts with your business, not with code.",
  paragraphs: [
    "The TechByte is a software and web development company based in Ahmedabad, Gujarat, working with clients in India and abroad. We design and build websites, web applications, mobile apps and custom software, and we help businesses automate repetitive work and plan their technology with confidence.",
    "We work with startups turning an idea into a first product, small and mid-sized businesses replacing spreadsheets and manual processes, growing companies whose systems no longer keep up, and established organisations modernizing parts of their technology.",
    "Our approach is simple: understand how the work happens today, agree what will make the biggest difference, build it in visible steps and stay around after launch. Innovation, for us, means choosing practical, current technology that solves the problem in front of you. It does not mean adding complexity for its own sake.",
  ],
};

export const SERVICES_INTRO = {
  label: "What we do",
  title: "Six ways we help businesses build, innovate and transform.",
  lead: "Each service solves a different kind of problem. Many projects combine several, for example a website, a web application behind it and a mobile app for customers.",
};

/* "When you need it" one-liners for the home service list (detail lives on each service page). */
export const SERVICE_WHEN = {
  "software-development": "When spreadsheets and generic tools no longer fit how your business works.",
  "website-development": "When your website needs to build trust and bring in enquiries.",
  "web-application-development": "When customers or staff need to log in and get things done online.",
  "mobile-app-development": "When people need your service in their pocket, with notifications and device features.",
  "ai-automation": "When your team loses hours to repetitive copying, sorting and chasing.",
  "it-consulting": "When you need clear advice before committing budget to technology.",
};

export const PROBLEMS = {
  label: "Problems we solve",
  title: "The challenges that hold growing businesses back.",
  items: [
    { h: "Manual, repetitive processes", p: "Data typed twice, approvals chased by phone, reports assembled by hand every week.", fix: "We automate the predictable steps and connect the systems involved, so people handle only the exceptions.", service: "ai-automation" },
    { h: "Outdated websites", p: "Slow pages, broken mobile layouts and a message that no longer reflects the business.", fix: "We redesign or rebuild for speed, clarity and search visibility, keeping your content and URLs.", service: "website-development" },
    { h: "Disconnected systems", p: "Sales, operations and accounts each live in a different tool, and nothing lines up.", fix: "We integrate existing tools through APIs or build one system around the workflow that matters most.", service: "software-development" },
    { h: "Inefficient workflows", p: "Work stalls between people because nobody can see what's pending or who owns it.", fix: "We build workflow software with statuses, notifications and dashboards that make progress visible.", service: "web-application-development" },
    { h: "No digital infrastructure", p: "Bookings, orders or customer requests still happen on paper, phone or chat.", fix: "We digitise the process step by step, starting where it saves the most time.", service: "web-application-development" },
    { h: "Technology that can't scale", p: "A system built quickly years ago now breaks under more users, data or features.", fix: "We assess what to keep, then refactor or rebuild with an architecture designed to grow.", service: "it-consulting" },
  ],
};

export const APPROACH = {
  label: "Our approach",
  title: "Writing code is easy. Building the right thing is the work.",
  lead: "Any competent developer can implement a feature list. What makes software valuable is whether it changes how the business runs. That is where we put our effort.",
  contrast: [
    ["Starts from a feature list", "Starts from the business objective and the people doing the work"],
    ["Builds everything that was asked for", "Prioritises what makes the biggest difference first"],
    ["Shows the result at the end", "Shows working increments throughout"],
    ["Measures success by delivery", "Measures success by whether the problem is solved"],
    ["Hands over and disappears", "Stays on for support and improvement"],
  ],
  columns: ["Just writing code", "Technology built around business objectives"],
};

export const INDUSTRIES_INTRO = {
  label: "Industries",
  title: "Industries we can support.",
  lead: "The problems we solve appear in every sector. These are industries where websites, custom software and automation commonly make a difference. Each one links to examples of what can be built.",
};

export const JOURNEY = {
  label: "Your project journey",
  title: "What happens after you contact us.",
  steps: [
    { h: "You send a short brief", p: "Through the quote form, email, phone or WhatsApp. A few lines about the problem and the goal are enough." },
    { h: "We reply with questions", p: "A person reads your message and comes back with focused questions, not a sales script." },
    { h: "A discovery conversation", p: "We discuss goals, users, current tools and constraints, and give you an honest first read on approach." },
    { h: "Scope and proposal", p: "We document requirements and send a written scope, plan and estimate for you to review." },
    { h: "Build, test and launch", p: "Design, development in visible increments, testing and a careful go-live." },
    { h: "Ongoing support", p: "Fixes, updates and improvements as your business evolves." },
  ],
};

export const CTA = {
  title: "Let's build it.",
  lead: "Tell us about your idea, your requirements or the business challenge you're facing. We'll reply with an honest read on scope, approach and next steps.",
};

export const HOME_FAQ = [
  { q: "What does The TechByte do?", a: "The TechByte is a software and web development company in Ahmedabad, Gujarat. We build websites, web applications, mobile apps and custom software, automate repetitive business processes and provide IT consulting, with support after launch." },
  { q: "Who do you work with?", a: "Startups, entrepreneurs, small and mid-sized businesses, growing companies and larger organisations modernizing parts of their technology: anyone who needs software or a website built around how they actually work." },
  { q: "Do you work with clients outside Ahmedabad?", a: "Yes. We're based in Ahmedabad and work remotely with clients across India and internationally, by email, phone, WhatsApp and video calls." },
  { q: "Do I need to know which technology I need?", a: "No. Most projects start with a business problem, not a tech stack. We recommend the approach and technologies that fit your requirements and explain why." },
  { q: "How much does a project cost?", a: "It depends on scope: the number of features, screens, user roles, integrations and how much content is ready. We give an estimate after understanding your requirements rather than quoting from a fixed price list." },
  { q: "How long does a project take?", a: "Timelines depend on scope and how quickly decisions and content are available. We agree milestones in the project plan before development starts." },
  { q: "Can you work on an existing website or system?", a: "Yes. We review the current code, data and hosting first, then recommend whether to improve, extend or rebuild it." },
  { q: "Will I be able to see progress during development?", a: "Yes. We build in increments and share a test version, so you can try working features and give feedback throughout." },
  { q: "Who owns the code and the product?", a: "Ownership is set out in the project agreement before work starts. Our standard approach is that you own what we build for you." },
  { q: "Do you provide support after launch?", a: "Yes. We offer post-launch support for fixes, updates and improvements, with the scope agreed in advance." },
  { q: "How do we start?", a: "Send a short description of what you want to build, who it's for and the problem it solves through the Get a Quote page. We'll reply with questions and suggested next steps." },
];
