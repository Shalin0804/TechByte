import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowUpRight, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import { Seo, serviceSchema, breadcrumbSchema, faqSchema } from "../lib/seo";
import { getService } from "../data/services";
import NotFound from "./NotFound";
import Button from "../components/ui/Button";
import Panel from "../components/ui/Panel";
import Label from "../components/ui/Label";
import ServiceGlyph from "../components/sections/ServiceGlyph";
import FinalCta from "../components/sections/FinalCta";

/**
 * ServiceDetail template implementing TASKS.md T07.
 * - Single H1 strictly in hero.
 * - Sticky in-page navigation index on desktop with scroll spy.
 * - Full content from services.js: problem, solution, deliverables, benefits, process, faqs, related.
 * - SEO: serviceSchema, breadcrumbSchema, faqSchema(s.faqs).
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getService(slug);

  if (!s) return <NotFound />;

  const path = `/services/${s.slug}`;
  const [activeSection, setActiveSection] = useState("problem");

  const sections = [
    { id: "problem", label: "01 Problem" },
    { id: "solution", label: "02 Solution" },
    { id: "deliverables", label: "03 Deliverables" },
    { id: "benefits", label: "04 Benefits" },
    { id: "process", label: "05 Process" },
    { id: "faqs", label: "06 FAQs" },
  ];

  // In-page section spy on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug]);

  return (
    <>
      <Seo
        title={s.title}
        description={s.seoDescription}
        path={path}
        schema={[
          serviceSchema(s),
          breadcrumbSchema([
            ["Home", "/"],
            ["Services", "/services"],
            [s.title, path],
          ]),
          faqSchema(s.faqs),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* =========================================================================
           1. HERO & BREADCRUMB
           ========================================================================= */}
        <section className="container-x pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-ink-800 relative">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-mono text-mist-300">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              </li>
              <li>/</li>
              <li className="text-cyan-400 font-medium" aria-current="page">
                {s.title}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start" data-reveal>
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <span>Service Specification</span>
              </div>

              {/* Exactly one H1 for this page */}
              <h1 className="text-h1 text-paper-50 tracking-tight leading-[1]">
                {s.title}
              </h1>

              <p className="text-lead text-mist-300 max-w-[58ch] leading-relaxed">
                {s.intro}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button to="/get-a-quote" variant="primary">
                  Request a Scope Quote
                </Button>
                <Button to="/contact" variant="secondary">
                  Discuss Technical Fit
                </Button>
              </div>
            </div>

            {/* Service Glyph Featured Artwork */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="relative p-8 rounded-[2px] border border-ink-800 bg-ink-900/80 text-cyan-400 shadow-xl">
                <div className="absolute top-2 left-2 size-1.5 rounded-full bg-cyan-400" />
                <div className="scale-150 p-4">
                  <ServiceGlyph slug={s.slug} />
                </div>
                <div className="mt-4 pt-3 border-t border-ink-800 text-[10px] font-mono uppercase tracking-[0.14em] text-mist-300 text-center">
                  // CIRCUIT_SPEC_V1
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
           2. MAIN CONTENT WITH STICKY IN-PAGE INDEX
           ========================================================================= */}
        <section className="container-x py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Sticky In-Page Section Index (Desktop only) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
              <div className="border border-ink-800 bg-ink-900/60 p-6 rounded-[2px]">
                <span className="font-mono text-label uppercase tracking-[0.14em] text-paper-50 block mb-4">
                  Contents
                </span>
                <ul className="space-y-3 font-mono text-xs">
                  {sections.map(({ id, label }) => {
                    const isActive = activeSection === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`flex items-center gap-2 transition-colors py-1 ${
                            isActive
                              ? "text-cyan-400 font-semibold translate-x-1"
                              : "text-mist-300 hover:text-paper-50"
                          }`}
                        >
                          <span
                            className={`size-1 rounded-full ${
                              isActive ? "bg-cyan-400" : "bg-ink-800"
                            }`}
                          />
                          <span>{label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-6 bg-ink-900/40 border border-ink-800 rounded-[2px] space-y-3">
                <span className="font-mono text-xs text-cyan-400 block">
                  READY TO START?
                </span>
                <p className="text-xs text-mist-300 leading-relaxed">
                  Have questions about timelines, data migration, or integrations?
                </p>
                <Link to="/get-a-quote" className="link-trace text-xs font-mono text-blue-400">
                  <span>Get an estimate</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </aside>

            {/* Core Detailed Sections (cols 4-12) */}
            <div className="lg:col-span-9 space-y-24">
              {/* SECTION 1: THE PROBLEM */}
              <section id="problem" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="01" color="cyan">
                  The Problem
                </Label>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  {s.problem.title}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  {s.problem.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-ink-900/70 border border-ink-800 rounded-[2px] flex items-start gap-3"
                    >
                      <AlertCircle className="size-5 text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-mist-300 leading-relaxed">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 2: THE SOLUTION */}
              <section id="solution" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="02" color="blue">
                  The Solution
                </Label>
                <Panel className="bg-ink-900 border border-ink-800 p-8 sm:p-10" nodeGlow={true}>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    {s.solution.title}
                  </h2>
                  <p className="mt-4 text-lead text-mist-300 leading-relaxed">
                    {s.solution.text}
                  </p>
                </Panel>
              </section>

              {/* SECTION 3: DELIVERABLES */}
              <section id="deliverables" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="03" color="cyan">
                  Scope of Delivery
                </Label>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  What we build &amp; ship
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                  {s.deliverables.map((del, idx) => (
                    <div
                      key={del}
                      className="chamfer p-6 bg-ink-900 border border-ink-800 flex flex-col justify-between min-h-[140px]"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                        DELIV-0{idx + 1}
                      </span>
                      <p className="font-sans text-sm font-medium text-paper-50">
                        {del}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 4: BENEFITS */}
              <section id="benefits" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="04" color="blue">
                  Measurable Impact
                </Label>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  Business outcomes
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 pt-2">
                  {s.benefits.map((b) => (
                    <div
                      key={b.h}
                      className="p-6 bg-ink-900/60 border-l-2 border-l-blue-500 border border-ink-800 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <h3 className="font-display text-xl font-semibold text-paper-50 tracking-tight">
                          {b.h}
                        </h3>
                      </div>
                      <p className="text-sm text-mist-300 leading-relaxed pl-6">
                        {b.p}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5: 4-STEP PROCESS */}
              <section id="process" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="05" color="cyan">
                  Execution Cadence
                </Label>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  How this service unfolds
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 pt-2">
                  {s.process.map((step, idx) => (
                    <Panel
                      key={step.h}
                      className="bg-ink-900 border border-ink-800 p-6 space-y-3"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                        Phase 0{idx + 1}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-paper-50 tracking-tight">
                        {step.h}
                      </h3>
                      <p className="text-sm text-mist-300 leading-relaxed">
                        {step.p}
                      </p>
                    </Panel>
                  ))}
                </div>
              </section>

              {/* SECTION 6: FAQS */}
              <section id="faqs" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="06" color="blue">
                  Service Inquiries
                </Label>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <div className="divide-y divide-ink-800 border-y border-ink-800 pt-2">
                  {s.faqs.map((faq, idx) => (
                    <details
                      key={faq.q}
                      className="group py-6 transition-colors cursor-pointer list-none"
                    >
                      <summary className="flex items-center justify-between gap-4 font-display text-xl font-semibold text-paper-50 list-none hover:text-cyan-400 focus-visible:outline-none transition-colors">
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                            0{idx + 1}
                          </span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown className="size-4 shrink-0 text-mist-300 group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="mt-3 pl-8 text-sm sm:text-base text-mist-300 leading-relaxed max-w-[64ch]">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 7: RELATED SERVICES */}
              {s.related && s.related.length > 0 && (
                <section className="pt-8 border-t border-ink-800 space-y-6" data-reveal>
                  <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                    Connected Capabilities
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-paper-50 tracking-tight">
                    Frequently combined services
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {s.related.map((relSlug) => {
                      const relSvc = getService(relSlug);
                      if (!relSvc) return null;
                      return (
                        <Link
                          key={relSvc.slug}
                          to={`/services/${relSvc.slug}`}
                          className="group p-6 bg-ink-900 border border-ink-800 hover:border-blue-500 rounded-[2px] transition-colors block"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-xs uppercase tracking-[0.14em] text-mist-300">
                              RELATED SERVICE
                            </span>
                            <ArrowUpRight className="size-4 text-mist-300 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          </div>
                          <h4 className="font-display text-xl font-semibold text-paper-50 group-hover:text-cyan-400 transition-colors">
                            {relSvc.title}
                          </h4>
                          <p className="mt-2 text-xs text-mist-300 line-clamp-2">
                            {relSvc.short}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
