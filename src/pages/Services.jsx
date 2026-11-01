import { Seo } from "../lib/seo";
import { services } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Panel from "../components/ui/Panel";
import ServiceGlyph from "../components/sections/ServiceGlyph";
import FinalCta from "../components/sections/FinalCta";

/**
 * Services index page implementing TASKS.md T07.
 * - Single H1 via PageHeader.
 * - Six large interactive editorial blocks with custom SVG glyphs.
 * - Engineering delivery overview.
 * - Direct route links, no dead buttons.
 */
export default function Services() {
  return (
    <>
      <Seo
        title="Services — Custom Software, Web Applications & Modernization"
        description="The TechByte provides six focused engineering services: Custom Software, Web Applications, Business Websites, E-commerce, Website Modernization, and Support & Maintenance."
        path="/services"
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Capabilities"
            title="Six focused services. One engineering standard."
            lead="We design, build, modernize, and maintain software systems for businesses that have outgrown templates and manual workarounds. Every engagement is led by direct partner engineering."
          />
        </section>

        {/* Six Detailed Editorial Service Blocks */}
        <section className="container-x py-16 sm:py-24" id="services-list">
          <div className="space-y-12">
            {services.map((svc, idx) => (
              <Panel
                key={svc.slug}
                className="bg-ink-900 border border-ink-800 hover:border-blue-500/60 transition-colors p-8 sm:p-12"
                data-reveal
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                  {/* Left: Index + Title + Glyph (cols 1-5) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                        Service 0{idx + 1}
                      </span>
                      <div className="p-2.5 bg-ink-950 rounded-[2px] border border-ink-800 text-cyan-400">
                        <ServiceGlyph slug={svc.slug} />
                      </div>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper-50 tracking-tight leading-[1.05]">
                      {svc.title}
                    </h2>

                    <p className="text-base text-mist-300 leading-relaxed max-w-md">
                      {svc.short}
                    </p>

                    <div className="pt-2">
                      <Button to={`/services/${svc.slug}`} variant="primary">
                        View Service Architecture
                      </Button>
                    </div>
                  </div>

                  {/* Right: Intro & Deliverables Checklist (cols 6-12) */}
                  <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-ink-800/80 lg:pl-10">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50">
                        The Challenge We Solve
                      </span>
                      <p className="mt-2 text-sm sm:text-base text-mist-300 leading-relaxed">
                        {svc.intro}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-ink-800/80">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50">
                        Standard Deliverables
                      </span>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {svc.deliverables.map((del) => (
                          <div key={del} className="flex items-start gap-2 text-xs text-mist-300">
                            <span className="size-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </section>

        {/* Process Summary Section */}
        <section className="border-t border-ink-800 bg-ink-900/40 py-20">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center" data-reveal>
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                  Universal Standard
                </span>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  How every service is delivered.
                </h2>
                <p className="text-lead text-mist-300 max-w-lg leading-relaxed">
                  Regardless of project type, every system follows our structured pipeline: Discover, Strategize, Design, Develop, Test, Launch, and Support.
                </p>
              </div>

              <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
                <div className="chamfer p-6 bg-ink-950 border border-ink-800">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">01 / DISCOVERY</span>
                  <p className="mt-2 text-sm text-mist-300">We map the real workflow before proposing code or technical architecture.</p>
                </div>
                <div className="chamfer p-6 bg-ink-950 border border-ink-800">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">02 / INCREMENTS</span>
                  <p className="mt-2 text-sm text-mist-300">You review functional builds every milestone — no blind development sprints.</p>
                </div>
                <div className="chamfer p-6 bg-ink-950 border border-ink-800">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">03 / TESTING</span>
                  <p className="mt-2 text-sm text-mist-300">Full audit across mobile screens, real devices, speed metrics, and accessibility.</p>
                </div>
                <div className="chamfer p-6 bg-ink-950 border border-ink-800">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">04 / OWNERSHIP</span>
                  <p className="mt-2 text-sm text-mist-300">You own the code, documentation, and data model. No proprietary lock-in.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
