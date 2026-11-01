import LegalPage from "../components/legal/LegalPage";
import { CONTACT } from "../data/site";

const sections = [
  {
    h: "About these terms",
    body: [`These terms apply to your use of this website, operated by The TechByte, ${CONTACT.location}. By using the website you agree to them. They do not cover project work, which is governed by a separate written agreement or proposal with each client.`],
  },
  {
    h: "Information on this website",
    body: ["We aim to keep the content accurate and current, but it is provided for general information. It does not form an offer, and the scope, price and timeline of any project are agreed in writing before work starts."],
  },
  {
    h: "Quotes and enquiries",
    body: ["Sending us an enquiry or project brief does not create a contract. Any estimate we provide is based on the information available at the time and is confirmed in a written proposal."],
  },
  {
    h: "Intellectual property",
    body: ["The design, text, graphics and code of this website belong to The TechByte unless stated otherwise. You may share links to our pages, but you may not copy or reuse the content or design without permission."],
  },
  {
    h: "Acceptable use",
    body: [["Do not attempt to gain unauthorised access to the website or its systems", "Do not send spam or automated messages through our contact channels", "Do not use the website in any way that breaks applicable law"]],
  },
  {
    h: "Links to other websites",
    body: ["Links to third-party websites, such as WhatsApp, are provided for convenience. We are not responsible for their content or privacy practices."],
  },
  {
    h: "Liability",
    body: ["We are not liable for any loss arising from use of this website or reliance on its general content, to the extent permitted by law."],
  },
  {
    h: "Governing law",
    body: ["These terms are governed by the laws of India, and the courts of Ahmedabad, Gujarat have jurisdiction."],
  },
  {
    h: "Contact",
    body: [`Questions about these terms: ${CONTACT.email} or ${CONTACT.phoneDisplay}.`],
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="The terms that apply to using The TechByte website, including enquiries, quotes, intellectual property and acceptable use."
      path="/terms"
      updated="1 November 2026"
      intro="The short version: use the site fairly, and remember that real project commitments are always agreed in writing."
      sections={sections}
    />
  );
}
