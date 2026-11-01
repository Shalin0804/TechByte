import { Seo, breadcrumbSchema } from "../lib/seo";

/* C4: Antigravity builds the full layout from src/data/technologies.js. */
export default function Technologies() {
  return (
    <section className="on-ink container-x pt-[calc(var(--nav-h)+4rem)] pb-24">
      <Seo title="Technologies We Work With" description="The frontend, backend, mobile, database, AI and cloud technologies The TechByte uses, and how we choose the right stack for each project." path="/technologies" schema={[breadcrumbSchema([["Home", "/"], ["Technologies We Work With", "/technologies"]])]} />
      <h1 className="text-h1">Technologies We Work With</h1>
    </section>
  );
}
