import { Link } from "react-router";
import { ArrowUpRight, CheckCircle2, HelpCircle } from "lucide-react";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { services } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Panel from "../components/ui/Panel";
import ServiceGlyph from "../components/sections/ServiceGlyph";
import FinalCta from "../components/sections/FinalCta";

/**
 * Services overview page implementing TASKS.md C4.
 * - Single H1 via PageHeader.
 * - Five services as rich rows: title, short, intro excerpt, whenNeeded first 2 points, glyph, link.
 * - "Not sure which you need?" banner linking to /services/it-consulting and /get-a-quote.
 * - Links to /process and /technologies.
 */
export default function Services() {
  return (
    <>
      <Seo
        title="Software & Web Development Services"
        description="The TechByte offers five core services in Ahmedabad and remotely: Software Development, Website Development, Web Application Development, Mobile App Development and IT Consulting."
        path="/services"
        schema={[breadcrumbSchema([["Home", "/"], ["Services", "/services"]])]}
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Services Overview"
            title="Five ways we help businesses build, innovate and transform."
            lead="Each service solves a different kind of problem. We engineer websites, applications, and custom software shaped around your real operational needs, with long-term support after launch."
          />
        </section>

        {/* Quick Route Cross-links */}
        <section className="container-x pb-8" data-reveal>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-mist-300 border-b border-ink-800 pb-6">
            <span className="text-paper-50 uppercase tracking-[0.14em]">EXPLORE:</span>
            <Link to="/process" className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1">
              <span>8-Phase Development Process</span>
              <ArrowUpRight className="size-3" />
            </Link>
            <span className="text-ink-800">•</span>
            <Link to="/technologies" className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1">
              <span>Approved Technology Stack</span>
              <ArrowUpRight className="size-3" />
            </Link>
            <span className="text-ink-800">•</span>
            <Link to="/industries" className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1">
              <span>Industries We Serve</span>
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </section>

        {/* Six Services as Rich Rows */}
        <section className="container-x py-12 sm:py-16" id="services-list">
          <div className="space-y-10">
            {services.map((svc, idx) => {
              const whenNeededPoints = svc.whenNeeded?.points?.slice(0, 2) || [];
              return (
                <Panel
                  key={svc.slug}
                  className="bg-ink-900 border border-ink-800 hover:border-blue-500/50 transition-colors p-8 sm:p-10"
                  data-reveal
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    {/* Col 1: Index + Glyph + Title + Short (cols 1-5) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                          Capability 0{idx + 1}
                        </span>
                        <div className="p-2.5 bg-ink-950 rounded-[2px] border border-ink-800 text-cyan-400">
                          <ServiceGlyph slug={svc.slug} />
                        </div>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper-50 tracking-tight leading-[1.1]">
                        {svc.title}
                      </h2>

                      <p className="text-sm sm:text-base text-mist-300 leading-relaxed">
                        {svc.short}
                      </p>

                      <div className="pt-2">
                        <Button to={`/services/${svc.slug}`} variant="primary">
                          <span>Explore Service</span>
                        </Button>
                      </div>
                    </div>

                    {/* Col 2: Intro excerpt & When Needed (cols 6-12) */}
                    <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-ink-800/80 lg:pl-10">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 block mb-2">
                          Overview
                        </span>
                        <p className="text-sm text-mist-300 leading-relaxed">
                          {svc.intro}
                        </p>
                      </div>

                      {whenNeededPoints.length > 0 && (
                        <div className="pt-4 border-t border-ink-800/80 space-y-2">
                          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-400 block">
                            Common Triggers
                          </span>
                          <div className="space-y-1.5">
                            {whenNeededPoints.map((point, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2.5 text-xs text-paper-50">
                                <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Panel>
              );
            })}
          </div>
        </section>

        {/* "Not sure which you need?" Guidance Banner */}
        <section className="container-x py-16" data-reveal>
          <div className="chamfer-panel p-8 sm:p-12 bg-ink-900 border border-blue-500/40 relative overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                  <HelpCircle className="size-4" />
                  <span>Technical Guidance</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-paper-50 tracking-tight">
                  Not sure which service fits your project?
                </h3>
                <p className="text-sm sm:text-lead text-mist-300 max-w-2xl leading-relaxed">
                  Most projects don't start with a clean category label. We help you evaluate whether you need a marketing website, a custom internal workflow, a customer-facing portal, or automation across existing tools.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
                <Button to="/services/it-consulting" variant="secondary">
                  IT Consulting
                </Button>
                <Button to="/get-a-quote" variant="primary">
                  Request Evaluation
                </Button>
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
