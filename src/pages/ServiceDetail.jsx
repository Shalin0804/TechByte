import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Seo, serviceSchema, breadcrumbSchema, faqSchema } from "../lib/seo";
import { getService } from "../data/services";
import { getArticle } from "../data/insights";
import NotFound from "./NotFound";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import ServiceGlyph from "../components/sections/ServiceGlyph";
import FinalCta from "../components/sections/FinalCta";

/**
 * ServiceDetail page implementing TASKS.md C4.
 * Complete long-form template rendering ALL 15 fields of each service object:
 * - Hero (title, short, glyph draw-on, CTA)
 * - Meaning & Intro
 * - Problems Solved
 * - When Needed
 * - Comparison (responsive table / stacked cards)
 * - Solutions & Deliverables
 * - Core Features
 * - Technology Stack (+techNote, link /technologies)
 * - Methodology (Process steps)
 * - Use Cases (labelled "Example — what could be built")
 * - Business Benefits
 * - Challenges & Approaches
 * - Related Services & Related Articles
 * - FAQs (<details>/<summary>)
 * - Sticky in-page section index on lg+ with active highlight
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getService(slug);

  if (!s) return <NotFound />;

  const path = `/services/${s.slug}`;
  const [activeSection, setActiveSection] = useState("overview");

  const sectionNav = [
    { id: "overview", label: "01 Overview" },
    { id: "problems", label: "02 Problems" },
    { id: "when-needed", label: "03 Triggers" },
    ...(s.comparison ? [{ id: "comparison", label: "04 Comparison" }] : []),
    { id: "capabilities", label: "05 Capabilities" },
    { id: "features", label: "06 Features" },
    { id: "technologies", label: "07 Tech Stack" },
    { id: "methodology", label: "08 Methodology" },
    { id: "use-cases", label: "09 Examples" },
    { id: "benefits", label: "10 Benefits" },
    { id: "challenges", label: "11 Challenges" },
    { id: "faqs", label: "12 FAQs" },
    { id: "related", label: "13 Related" },
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
      { rootMargin: "-15% 0px -70% 0px" }
    );

    sectionNav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug]);

  const relatedArticles = (s.articles || [])
    .map((artSlug) => getArticle(artSlug))
    .filter(Boolean);

  const relatedServices = (s.related || [])
    .map((relSlug) => getService(relSlug))
    .filter(Boolean);

  return (
    <>
      <Seo
        title={s.seoTitle || s.title}
        description={s.seoDescription}
        path={path}
        schema={[
          serviceSchema(s),
          breadcrumbSchema([
            ["Home", "/"],
            ["Services", "/services"],
            [s.title, path],
          ]),
          ...(s.faqs && s.faqs.length > 0 ? [faqSchema(s.faqs)] : []),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* =========================================================================
           1. HERO & BREADCRUMB
           ========================================================================= */}
        <section className="container-x pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-ink-800 relative">
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
                <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Service Specification</span>
              </div>

              {/* Single H1 strictly inside Hero */}
              <h1 className="text-h1 text-paper-50 tracking-tight leading-[1.05]">
                {s.title}
              </h1>

              <p className="text-lead text-mist-300 leading-relaxed max-w-2xl">
                {s.short}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to={`/get-a-quote?service=${s.slug}`} variant="primary">
                  Request a Quote
                </Button>
                <Button to="/process" variant="secondary">
                  Our Process
                </Button>
              </div>
            </div>

            {/* Service Glyph Display */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-8 bg-ink-900 border border-ink-800 rounded-[2px] flex flex-col items-center justify-center gap-4 text-cyan-400 w-full max-w-xs shadow-lg">
                <div className="p-4 bg-ink-950 rounded-[2px] border border-ink-800">
                  <ServiceGlyph slug={s.slug} className="size-20" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-mist-300">
                  Circuit Schematic
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
           MAIN LAYOUT: STICKY IN-PAGE NAV (lg:cols 1-3) + CONTENT (lg:cols 4-12)
           ========================================================================= */}
        <div className="container-x py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Sticky In-page Navigation Index (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
              <div className="border border-ink-800 bg-ink-900/60 p-5 rounded-[2px]">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-400 block mb-4">
                  In-Page Index
                </span>
                <nav aria-label="Section Navigation" className="space-y-1">
                  {sectionNav.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-1.5 px-2.5 text-xs font-mono uppercase tracking-[0.1em] rounded-[2px] transition-colors ${
                          isActive
                            ? "bg-ink-950 text-cyan-400 border-l-2 border-cyan-400 font-semibold"
                            : "text-mist-300 hover:text-paper-50 hover:bg-ink-950/40"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="chamfer p-4 bg-ink-900 border border-ink-800 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blue-400 block">
                  Quick Action
                </span>
                <p className="text-xs text-mist-300">
                  Ready to scope this service?
                </p>
                <Link
                  to={`/get-a-quote?service=${s.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline pt-1"
                >
                  <span>Start Quote</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </aside>

            {/* Content Column (lg:col-span-9) */}
            <div className="lg:col-span-9 space-y-20 sm:space-y-28">
              {/* Section 01: Overview & Meaning */}
              <section id="overview" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="01">Concept &amp; Definition</Label>
                <h2 className="text-h2 text-paper-50 tracking-tight leading-[1.05]">
                  {s.meaning?.title || "What this service means"}
                </h2>
                <div className="space-y-4 text-lead text-mist-300 leading-relaxed max-w-3xl">
                  <p>{s.intro}</p>
                  {s.meaning?.text && <p className="text-paper-50">{s.meaning.text}</p>}
                </div>
              </section>

              {/* Section 02: Business Problems Solved */}
              {s.problem?.points && (
                <section id="problems" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="02">Friction Solved</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    {s.problem.title || "Business problems it solves"}
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2 pt-2">
                    {s.problem.points.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-5 bg-ink-900/60 border border-ink-800 rounded-[2px] flex items-start gap-3"
                      >
                        <AlertCircle className="size-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-mist-300 leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 03: When Needed */}
              {s.whenNeeded?.points && (
                <section id="when-needed" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="03">Indicators</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    {s.whenNeeded.title || "When a business needs this"}
                  </h2>
                  <div className="chamfer-panel p-6 sm:p-8 bg-ink-900 border border-ink-800">
                    <ul className="space-y-3.5">
                      {s.whenNeeded.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-paper-50">
                          <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-1" />
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Section 04: Comparison (Optional) */}
              {s.comparison && (
                <section id="comparison" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="04">Strategic Evaluation</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    {s.comparison.title}
                  </h2>
                  {s.comparison.intro && (
                    <p className="text-lead text-mist-300 max-w-2xl">
                      {s.comparison.intro}
                    </p>
                  )}

                  {/* Desktop Comparison Table */}
                  <div className="hidden sm:block border border-ink-800 rounded-[2px] overflow-hidden bg-ink-900/40">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-ink-900 border-b border-ink-800 font-mono text-xs uppercase tracking-[0.14em]">
                          <th className="p-4 text-mist-300 w-1/4">Evaluation Factor</th>
                          <th className="p-4 text-mist-300/80 w-3/8 border-l border-ink-800">
                            {s.comparison.columns[0]}
                          </th>
                          <th className="p-4 text-cyan-400 w-3/8 border-l border-ink-800 bg-ink-950/40">
                            {s.comparison.columns[1]}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink-800/80">
                        {s.comparison.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-ink-900/60 transition-colors">
                            <td className="p-4 font-mono text-xs text-paper-50 font-medium">
                              {row[0]}
                            </td>
                            <td className="p-4 text-mist-300/70 border-l border-ink-800/80">
                              {row[1]}
                            </td>
                            <td className="p-4 text-paper-50 font-medium border-l border-ink-800/80 bg-ink-950/20">
                              {row[2]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Comparison Stacked Cards */}
                  <div className="sm:hidden space-y-4">
                    {s.comparison.rows.map((row, rIdx) => (
                      <div key={rIdx} className="p-4 bg-ink-900 border border-ink-800 rounded-[2px] space-y-2">
                        <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block">
                          {row[0]}
                        </span>
                        <div className="text-xs text-mist-300/80 pb-2 border-b border-ink-800">
                          <span className="font-mono text-[10px] uppercase text-mist-300/60 block mb-0.5">
                            {s.comparison.columns[0]}:
                          </span>
                          {row[1]}
                        </div>
                        <div className="text-xs text-paper-50 font-medium pt-1">
                          <span className="font-mono text-[10px] uppercase text-cyan-400 block mb-0.5">
                            {s.comparison.columns[1]}:
                          </span>
                          {row[2]}
                        </div>
                      </div>
                    ))}
                  </div>

                  {s.comparison.note && (
                    <p className="text-xs font-mono text-mist-300 pt-2 border-t border-ink-800/60">
                      Note: {s.comparison.note}
                    </p>
                  )}
                </section>
              )}

              {/* Section 05: Solution & Deliverables */}
              <section id="capabilities" className="scroll-mt-28 space-y-6" data-reveal>
                <Label index="05">Capabilities</Label>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  {s.solution?.title || "Solutions & Deliverables"}
                </h2>
                {s.solution?.text && (
                  <p className="text-lead text-mist-300 leading-relaxed max-w-3xl">
                    {s.solution.text}
                  </p>
                )}

                {s.deliverables && (
                  <div className="pt-4">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper-50 block mb-4">
                      Standard Engineering Deliverables
                    </span>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {s.deliverables.map((del) => (
                        <div
                          key={del}
                          className="chamfer p-4 bg-ink-900 border border-ink-800 text-sm text-paper-50 flex items-start gap-2.5"
                        >
                          <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Section 06: Core Features */}
              {s.features && (
                <section id="features" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="06">Architecture</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    System features built in by default.
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2" data-reveal-group>
                    {s.features.map((feat) => (
                      <div
                        key={feat.h}
                        className="p-5 bg-ink-900 border border-ink-800 rounded-[2px] space-y-2"
                        data-reveal
                      >
                        <h3 className="font-display text-lg font-semibold text-paper-50">
                          {feat.h}
                        </h3>
                        <p className="text-xs text-mist-300 leading-relaxed">
                          {feat.p}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 07: Tech Stack */}
              {s.tech && (
                <section id="technologies" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="07">Approved Technologies</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    Tools used for this service.
                  </h2>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {s.tech.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-ink-900 border border-ink-800 text-paper-50 text-xs font-mono rounded-[2px] shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  {s.techNote && (
                    <p className="text-xs font-mono text-mist-300 pt-2">
                      Stack selection: {s.techNote}
                    </p>
                  )}
                  <div className="pt-2">
                    <Link
                      to="/technologies"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                    >
                      <span>Explore all approved technologies &amp; selection criteria</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </section>
              )}

              {/* Section 08: Methodology (Process) */}
              {s.process && (
                <section id="methodology" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="08">Execution</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    How this service is delivered.
                  </h2>
                  <div className="space-y-4 pt-2">
                    {s.process.map((step, idx) => (
                      <div
                        key={step.h}
                        className="p-6 bg-ink-900 border border-ink-800 rounded-[2px] grid gap-4 sm:grid-cols-12 items-baseline"
                      >
                        <div className="sm:col-span-3">
                          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                            Phase 0{idx + 1}
                          </span>
                        </div>
                        <div className="sm:col-span-9 space-y-1.5">
                          <h3 className="font-display text-lg font-semibold text-paper-50">
                            {step.h}
                          </h3>
                          <p className="text-sm text-mist-300 leading-relaxed">
                            {step.p}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 09: Example Use Cases */}
              {s.useCases && (
                <section id="use-cases" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="09">Hypothetical Scenarios</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    Example application scenarios.
                  </h2>
                  <p className="text-xs font-mono text-mist-300 uppercase tracking-[0.1em]">
                    What could be built — illustrative examples, not past client claims
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                    {s.useCases.map((uc, idx) => (
                      <div
                        key={uc.title}
                        className="chamfer p-6 bg-ink-900 border border-ink-800 flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400 px-2 py-0.5 bg-ink-950 border border-ink-800 rounded-[2px] inline-block">
                            Example 0{idx + 1}
                          </span>
                          <h3 className="font-display text-xl font-semibold text-paper-50">
                            {uc.title}
                          </h3>
                          <p className="text-xs text-mist-300 leading-relaxed">
                            {uc.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 10: Business Benefits */}
              {s.benefits && (
                <section id="benefits" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="10">Outcomes</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    Business benefits of this architecture.
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    {s.benefits.map((b) => (
                      <div
                        key={b.h}
                        className="p-6 bg-ink-900/60 border border-ink-800 rounded-[2px] space-y-2"
                      >
                        <h3 className="font-display text-lg font-semibold text-paper-50">
                          {b.h}
                        </h3>
                        <p className="text-sm text-mist-300 leading-relaxed">
                          {b.p}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 11: Challenges & Approach */}
              {s.challenges && (
                <section id="challenges" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="11">Risk Management</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    Common project challenges and how we solve them.
                  </h2>
                  <div className="space-y-4 pt-2">
                    {s.challenges.map((item, idx) => (
                      <div
                        key={idx}
                        className="grid gap-4 sm:grid-cols-12 p-6 bg-ink-900 border border-ink-800 rounded-[2px]"
                      >
                        <div className="sm:col-span-5 space-y-1">
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist-300/70 block">
                            Challenge 0{idx + 1}
                          </span>
                          <p className="font-display text-base font-semibold text-paper-50">
                            {item.challenge}
                          </p>
                        </div>
                        <div className="sm:col-span-7 sm:border-l sm:border-ink-800 sm:pl-6 space-y-1">
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400 block">
                            Our Approach
                          </span>
                          <p className="text-sm text-mist-300 leading-relaxed">
                            {item.approach}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 12: FAQs */}
              {s.faqs && s.faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-28 space-y-6" data-reveal>
                  <Label index="12">Direct Answers</Label>
                  <h2 className="text-h2 text-paper-50 tracking-tight">
                    Frequently asked questions about {s.title}.
                  </h2>
                  <div className="divide-y divide-ink-800 border-y border-ink-800">
                    {s.faqs.map((f, idx) => (
                      <details
                        key={idx}
                        className="group py-6 transition-colors cursor-pointer"
                      >
                        <summary className="flex items-center justify-between gap-4 font-display text-xl font-semibold text-paper-50 tracking-tight list-none select-none hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950 transition-colors">
                          <span className="flex items-baseline gap-3">
                            <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 shrink-0">
                              0{idx + 1}
                            </span>
                            <span>{f.q}</span>
                          </span>
                          <span className="shrink-0 size-7 rounded-[2px] border border-ink-800 bg-ink-950 flex items-center justify-center text-mist-300 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-transform duration-200 group-open:rotate-180">
                            <ChevronDown className="size-3.5" />
                          </span>
                        </summary>
                        <div className="pt-3 pl-8 sm:pl-9 pr-4 text-sm text-mist-300 leading-relaxed max-w-[64ch]">
                          <p>{f.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 13: Related Services & Articles */}
              <section id="related" className="scroll-mt-28 space-y-12" data-reveal>
                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="space-y-6">
                    <Label index="13">Interconnected Capabilities</Label>
                    <h3 className="text-h3 text-paper-50">
                      Related services often combined with this:
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {relatedServices.map((rel) => (
                        <Link
                          key={rel.slug}
                          to={`/services/${rel.slug}`}
                          className="p-5 bg-ink-900 border border-ink-800 hover:border-cyan-400/50 rounded-[2px] transition-colors flex flex-col justify-between group"
                        >
                          <div className="space-y-2">
                            <h4 className="font-display text-lg font-semibold text-paper-50 group-hover:text-cyan-400 transition-colors">
                              {rel.title}
                            </h4>
                            <p className="text-xs text-mist-300 line-clamp-2">
                              {rel.short}
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
                )}

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="space-y-6 pt-6 border-t border-ink-800">
                    <h3 className="text-h3 text-paper-50 flex items-center gap-2">
                      <BookOpen className="size-5 text-cyan-400" />
                      <span>Relevant Insights &amp; Guides</span>
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {relatedArticles.map((art) => (
                        <Link
                          key={art.slug}
                          to={`/insights/${art.slug}`}
                          className="p-6 bg-ink-900/60 border border-ink-800 hover:border-blue-500/50 rounded-[2px] transition-colors group flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-[11px] font-mono text-mist-300">
                              <span className="text-cyan-400 uppercase tracking-[0.14em]">
                                {art.category}
                              </span>
                              <span>•</span>
                              <span>{art.readMinutes} min read</span>
                            </div>
                            <h4 className="font-display text-xl font-semibold text-paper-50 group-hover:text-cyan-400 transition-colors">
                              {art.title}
                            </h4>
                            <p className="text-xs text-mist-300 line-clamp-2 leading-relaxed">
                              {art.description}
                            </p>
                          </div>
                          <div className="pt-4 mt-3 flex items-center gap-1.5 text-xs font-mono text-blue-400 group-hover:text-cyan-400">
                            <span>Read guide</span>
                            <ArrowRight className="size-3.5" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
