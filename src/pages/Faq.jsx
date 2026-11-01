import { Seo, breadcrumbSchema } from "../lib/seo";

/* C4: Antigravity builds the full layout from src/data/faq.js. */
export default function Faq() {
  return (
    <section className="on-ink container-x pt-[calc(var(--nav-h)+4rem)] pb-24">
      <Seo title="Frequently Asked Questions" description="Answers about The TechByte's services, websites, web and mobile apps, AI and automation, pricing, project planning and support." path="/faq" schema={[breadcrumbSchema([["Home", "/"], ["Frequently Asked Questions", "/faq"]])]} />
      <h1 className="text-h1">Frequently Asked Questions</h1>
    </section>
  );
}
