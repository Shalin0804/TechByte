import { Seo, breadcrumbSchema } from "../lib/seo";

/* C4: Antigravity builds the full layout from src/data/industries.js. */
export default function Industries() {
  return (
    <section className="on-ink container-x pt-[calc(var(--nav-h)+4rem)] pb-24">
      <Seo title="Industries We Serve" description="How The TechByte can help healthcare, hospitality, retail, education, logistics, professional services and startups with websites, apps, software and automation." path="/industries" schema={[breadcrumbSchema([["Home", "/"], ["Industries We Serve", "/industries"]])]} />
      <h1 className="text-h1">Industries We Serve</h1>
    </section>
  );
}
