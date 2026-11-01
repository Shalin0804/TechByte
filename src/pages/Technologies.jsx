import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { TECH_INTRO, TECH_GROUPS, TECH_SELECTION } from "../data/technologies";
import { services } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import Label from "../components/ui/Label";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * Technologies page implementing TASKS.md C4.
 * Complete category explorer driven by src/data/technologies.js:
 * - H1 = TECH_INTRO.title
 * - All categories and items prerendered in DOM for SEO
 * - Interactive sticky category index on desktop
 * - Each item name + use (explaining purpose and selection criteria)
 * - "How We Choose a Stack" section (TECH_SELECTION)
 * - Links to relevant services
 * - NO wall of generic logos
 */
export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(TECH_GROUPS[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    TECH_GROUPS.forEach((g) => {
      const el = document.getElementById(g.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title="Technologies We Work With"
        description="The frontend, backend, mobile, database, CMS and cloud technologies The TechByte uses, and how we choose the right stack for each project."
        path="/technologies"
        schema={[
          breadcrumbSchema([
            ["Home", "/"],
            ["Technologies We Work With", "/technologies"],
          ]),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Technical Standards"
            title={TECH_INTRO.title}
            lead={TECH_INTRO.lead}
          />
        </section>

        {/* =========================================================================
           CATEGORY EXPLORER: STICKY NAV (cols 1-3) + DOM-PRERENDERED SECTIONS (cols 4-12)
           ========================================================================= */}
        <section className="container-x py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Desktop Sticky Category Navigator (cols 1-3) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
              <div className="border border-ink-800 bg-ink-900/60 p-5 rounded-[2px]">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block mb-4">
                  Categories ({TECH_GROUPS.length})
                </span>
                <nav aria-label="Technology Categories" className="space-y-1">
                  {TECH_GROUPS.map((group, idx) => {
                    const isActive = activeCategory === group.slug;
                    return (
                      <a
                        key={group.slug}
                        href={`#${group.slug}`}
                        className={`group flex items-center justify-between py-2 px-3 text-xs font-mono rounded-[2px] transition-colors ${
                          isActive
                            ? "bg-ink-950 text-cyan-400 border-l-2 border-cyan-400 font-semibold"
                            : "text-mist-300 hover:text-paper-50 hover:bg-ink-950/40"
                        }`}
                      >
                        <span className="truncate">
                          0{idx + 1} — {group.label}
                        </span>
                        <span className="text-[10px] text-mist-300/60 group-hover:text-cyan-400">
                          {group.items.length}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="chamfer p-5 bg-ink-900 border border-ink-800 space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400 block">
                  Stack Selection
                </span>
                <p className="text-xs text-mist-300 leading-relaxed">
                  We don't impose a rigid stack. Every tool is selected based on your business constraints and long-term maintainability.
                </p>
                <a
                  href="#stack-selection"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline pt-1"
                >
                  <span>Selection rules</span>
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </aside>

            {/* All Categories Fully Rendered in DOM for SEO (cols 4-12) */}
            <div className="lg:col-span-9 space-y-20 sm:space-y-28">
              {TECH_GROUPS.map((group, gIdx) => (
                <article
                  key={group.slug}
                  id={group.slug}
                  className="scroll-mt-28 space-y-6"
                  data-reveal
                >
                  <div className="space-y-2 border-b border-ink-800 pb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                      Category 0{gIdx + 1} //
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper-50 tracking-tight">
                      {group.label}
                    </h2>
                    <p className="text-sm sm:text-base text-mist-300 leading-relaxed max-w-2xl">
                      {group.summary}
                    </p>
                  </div>

                  {/* Grid of Tools with Name and Practical Use */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {group.items.map((tool) => (
                      <div
                        key={tool.name}
                        className="p-5 sm:p-6 bg-ink-900 border border-ink-800 rounded-[2px] space-y-2 hover:border-blue-500/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-lg sm:text-xl font-semibold text-paper-50 tracking-tight">
                            {tool.name}
                          </h3>
                          <span className="size-1.5 rounded-full bg-cyan-400" />
                        </div>
                        <p className="text-xs sm:text-sm text-mist-300 leading-relaxed">
                          {tool.use}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
           "HOW WE CHOOSE A STACK" SECTION (TECH_SELECTION)
           ========================================================================= */}
        <section id="stack-selection" className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-28">
          <div className="container-x">
            <div className="max-w-3xl mb-16" data-reveal>
              <Label index="02">Architectural Policy</Label>
              <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
                How we choose a stack for your project.
              </h2>
              <p className="mt-4 text-lead text-mist-300">
                Five evaluation criteria applied before writing a single line of application code.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
              {TECH_SELECTION.map((rule, rIdx) => (
                <div
                  key={rule.h}
                  data-reveal
                  className="chamfer p-6 sm:p-8 bg-ink-950 border border-ink-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                      Criteria 0{rIdx + 1}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-paper-50">
                      {rule.h}
                    </h3>
                    <p className="text-sm text-mist-300 leading-relaxed">
                      {rule.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
           SERVICES CROSS-LINK SECTION
           ========================================================================= */}
        <section className="border-t border-ink-800 py-20">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-reveal>
              <div>
                <Label index="03">Practical Implementation</Label>
                <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
                  Where these technologies are deployed.
                </h2>
              </div>
              <div>
                <Button to="/services" variant="secondary">
                  <span>View All Services</span>
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  data-reveal
                  className="p-5 bg-ink-900 border border-ink-800 hover:border-cyan-400/50 rounded-[2px] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-paper-50 group-hover:text-cyan-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-mist-300 line-clamp-2">
                      {svc.short}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-ink-800/60 flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>View service</span>
                    <ArrowUpRight className="size-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
