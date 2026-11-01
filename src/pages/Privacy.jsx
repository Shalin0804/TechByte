import LegalPage from "../components/legal/LegalPage";
import { CONTACT } from "../data/site";

const sections = [
  {
    h: "Who we are",
    body: [`The TechByte is a software and web development business based in ${CONTACT.location}. This policy explains how we handle information you share through this website. For questions, email ${CONTACT.email}.`],
  },
  {
    h: "Information we collect",
    body: [
      "This website does not store the details you type into its contact and quote forms. The forms only prepare a message in your browser, which you then choose to send to us by WhatsApp or email. We receive what you send:",
      ["Your name, email address and, if you provide them, phone number and company name", "The service you are interested in, budget range and timeline (quote form)", "The message or project details you write"],
      "We do not use advertising trackers, and we do not ask for payment or identity documents through this website.",
    ],
  },
  {
    h: "How we use it",
    body: [
      ["To reply to your enquiry and discuss your project", "To prepare a proposal or quote you asked for", "To keep a record of our correspondence with you"],
      "We do not sell your information, and we do not send marketing emails unless you ask us to.",
    ],
  },
  {
    h: "Where it is stored",
    body: ["Messages you send reach us through WhatsApp or our email provider and are stored there, subject to those services' own privacy policies. The website itself is static and is hosted by a third-party provider that may keep standard technical logs, such as IP addresses, for security and reliability."],
  },
  {
    h: "How long we keep it",
    body: ["We keep enquiries for as long as needed to respond and to manage any resulting project, and delete them when they are no longer needed. You can ask us to delete your information at any time."],
  },
  {
    h: "Cookies",
    body: ["This website does not set cookies and does not use tracking or advertising scripts."],
  },
  {
    h: "Your rights",
    body: [`You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email ${CONTACT.email} and we will respond as soon as we reasonably can.`],
  },
  {
    h: "Changes to this policy",
    body: ["If we change how we handle information, we will update this page and the date at the top."],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How The TechByte collects, uses and protects the information you share through this website's contact and quote forms."
      path="/privacy-policy"
      updated="1 November 2026"
      intro="We keep this simple: we collect only what you send us, use it only to reply and work with you, and never sell it."
      sections={sections}
    />
  );
}
