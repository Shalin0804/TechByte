import { Seo, breadcrumbSchema } from "../lib/seo";

/* C4: Antigravity builds the full layout from src/data/process.js. */
export default function Process() {
  return (
    <section className="on-ink container-x pt-[calc(var(--nav-h)+4rem)] pb-24">
      <Seo title="Our Development Process" description="How a project with The TechByte works, from initial discussion and requirements to design, development, testing, launch and post-launch support." path="/process" schema={[breadcrumbSchema([["Home", "/"], ["Our Development Process", "/process"]])]} />
      <h1 className="text-h1">Our Development Process</h1>
    </section>
  );
}
