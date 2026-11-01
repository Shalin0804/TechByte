/* Industries The TechByte can serve. These are NOT claims of past client work.
   Every example application is hypothetical and must be shown with an "Example" label. */
export const INDUSTRIES_PAGE = {
  title: "Technology for the industries that keep the world running",
  lead:
    "Every industry has its own workflows, regulations and customer expectations, but the underlying problems are often similar: manual processes, scattered information and customers who expect to do things online. Here is how websites, applications and custom software can help in each sector. The examples show what can be built. They are not past client projects.",
};

export const INDUSTRIES = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Clinics, diagnostic centres and practices where scheduling and records drive everything.",
    challenges: [
      "Appointment requests arrive by phone and chat, leading to double bookings and long call queues.",
      "Patient records and visit notes are split across paper files and spreadsheets.",
      "Reception, doctors and billing each need different information at different moments.",
      "Patients expect reminders, reports and directions without having to call.",
    ],
    needs: "Online appointment booking, role-based access to records, reminders and a professional website that explains services, doctors and locations clearly.",
    solutions: ["Appointment and scheduling systems", "Patient and visit record management with role-based access", "Automated appointment reminders", "Clinic websites with service and doctor pages"],
    examples: [
      "A multi-doctor clinic portal where patients request slots, reception confirms them and each doctor sees their own daily schedule.",
      "Automated SMS or email reminders the day before each appointment, reducing no-shows.",
    ],
    value: "Fewer phone calls and scheduling errors, quicker access to the right information for each role and a smoother experience for patients.",
    services: ["web-application-development", "software-development", "website-development"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Hotels, resorts, homestays and venues competing for direct bookings.",
    challenges: [
      "Guests compare options online and judge quickly from photos, clarity and speed.",
      "Booking enquiries come in through calls, messages and third-party platforms.",
      "Room availability, rates and special requests are tracked by hand.",
      "Venues juggle event enquiries, packages and follow-ups.",
    ],
    needs: "A visually strong, fast website, a clear booking-request or reservation flow, and back-office tools for availability and enquiries.",
    solutions: ["Hotel and resort websites", "Booking and reservation systems", "Enquiry management dashboards", "Guest communication automation"],
    examples: [
      "A resort website with room pages, a gallery, location details and a booking-request form that feeds a simple reservations dashboard.",
      "An event venue enquiry tracker that records each lead, package and follow-up date.",
    ],
    value: "More direct enquiries, organised reservations and less time spent answering the same questions.",
    services: ["website-development", "web-application-development", "software-development"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    summary: "Shops and brands selling online, offline or both.",
    challenges: [
      "Checkout friction leads to abandoned carts.",
      "Product catalogs are slow to update and inconsistent.",
      "Orders, stock and customers are tracked in separate places.",
      "Repeat customers have no easy way to reorder.",
    ],
    needs: "An online store with a clean catalog and a short checkout, integrated payments, order management and, for loyal customers, possibly an app.",
    solutions: ["WooCommerce stores with Razorpay payments", "Custom e-commerce back offices", "Inventory and order tracking", "Customer ordering apps with React Native"],
    examples: [
      "A WooCommerce store with product variants, discount rules and a mobile-first checkout.",
      "A stock dashboard that shows low-stock items across a shop and the online store in one view.",
    ],
    value: "Smoother purchases, faster catalog updates and operations your team can run without a developer.",
    services: ["website-development", "web-application-development", "mobile-app-development"],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Schools, coaching institutes and training providers.",
    challenges: [
      "Enquiries and admissions are managed in registers and spreadsheets.",
      "Attendance, batches and fee records are hard to keep consistent.",
      "Parents and students expect updates without repeated calls.",
      "Course information on the website is outdated.",
    ],
    needs: "A clear website for courses and admissions, a management system for students, batches and fees, and timely communication.",
    solutions: ["Institute websites with course pages", "Student, batch and fee management systems", "Attendance tracking", "Announcement and reminder automation", "Student apps"],
    examples: [
      "An institute management system covering enquiries, admissions, batches, attendance and fee status, with separate admin and faculty views.",
      "Automated fee-due reminders and class announcements sent to students.",
    ],
    value: "Less administrative work, accurate records and better communication with students and parents.",
    services: ["software-development", "website-development", "mobile-app-development"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary: "Transport, delivery and distribution businesses that run on timing.",
    challenges: [
      "Shipment status lives in phone calls and group chats.",
      "Customers keep asking 'where is my order?'.",
      "Drivers and vehicles are scheduled manually.",
      "Proof of delivery is paper-based and gets lost.",
    ],
    needs: "Operations dashboards, customer-facing tracking, driver tools on mobile and automated status updates.",
    solutions: ["Shipment and fleet dashboards", "Customer tracking portals", "Driver mobile apps", "Automated status notifications"],
    examples: [
      "A dispatch dashboard showing every shipment's status, vehicle and exceptions, updated by drivers from a mobile app.",
      "Automatic customer notifications when a consignment is dispatched and delivered.",
    ],
    value: "Real-time visibility, fewer status calls and a reliable record of every delivery.",
    services: ["web-application-development", "mobile-app-development", "software-development"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary: "Legal, accounting, consulting, architecture and agency firms.",
    challenges: [
      "Prospective clients research quietly, and a dated website loses them.",
      "Client documents and case information are scattered across email.",
      "Time-consuming intake and follow-up are handled manually.",
      "Partners lack a clear view of matters and workloads.",
    ],
    needs: "A credible website with clear service pages, structured client intake and internal tools for matters, documents and deadlines.",
    solutions: ["Professional services websites", "Client intake and enquiry workflows", "Case or project management systems", "Document management systems"],
    examples: [
      "A consultancy website with practice-area pages and a structured enquiry form that routes leads to the right partner.",
      "A matter tracker with deadlines, responsible people and document links.",
    ],
    value: "Stronger credibility, organised client work and less time lost to admin.",
    services: ["website-development", "software-development", "it-consulting"],
  },
  {
    slug: "startups",
    name: "Startups & Emerging Businesses",
    summary: "Founders turning an idea into a first product or a first serious web presence.",
    challenges: [
      "Limited budget and time to validate an idea.",
      "Uncertainty about which features matter for a first version.",
      "Difficulty choosing a technology stack and a development partner.",
      "A need to look credible to customers and investors early.",
    ],
    needs: "Clear scoping, a focused first release (MVP), a launch website and an architecture that can grow if the idea takes off.",
    solutions: ["Product scoping and technology consulting", "MVP web applications", "Cross-platform mobile apps", "Launch websites and landing pages"],
    examples: [
      "A two-sided booking platform MVP with only the core flows, built to validate demand before adding features.",
      "A launch website with a waitlist form and a clear explanation of the product.",
    ],
    value: "A faster, cheaper path to learning what works, without throwing away the foundation later.",
    services: ["it-consulting", "web-application-development", "mobile-app-development"],
  },
];
