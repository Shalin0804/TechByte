import { useState, useEffect } from "react";
import {
  UserCheck,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { PROCESS_INTRO, PHASES } from "../data/process";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * Process page implementing TASKS.md C4.
 * Complete 8-phase interactive timeline driven by src/data/process.js:
 * - H1 = PROCESS_INTRO.title
 * - Interactive vertical timeline with signal pulse
 * - Each phase shows what, why, client provides, deliverables, approval criteria
 * - Sticky phase index on desktop with scroll spy
 * - CTA at end
 */
export default function Process() {
  const [activePhase, setActivePhase] = useState(PHASES[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePhase(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    PHASES.forEach((p) => {
      const el = document.getElementById(p.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title="Our Development Process"
        description="How a project with The TechByte works, from initial discussion and requirements to design, development, testing, launch and post-launch support."
        path="/process"
        schema={[
          breadcrumbSchema([
            ["Home", "/"],
            ["Our Development Process", "/process"],
          ]),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Engineering Lifecycle"
            title={PROCESS_INTRO.title}
            lead={PROCESS_INTRO.lead}
          />
        </section>

        {/* =========================================================================
           MAIN TIMELINE SECTION
           ========================================================================= */}
        <section className="container-x py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Desktop Sticky Phase Index (cols 1-4) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              <div className="border border-ink-800 bg-ink-900/60 p-6 rounded-[2px]">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-ink-800">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                    Phases (8)
                  </span>
                  <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <nav aria-label="Process Phases" className="space-y-1">
                  {PHASES.map((phase, idx) => {
                    const isActive = activePhase === phase.slug;
                    return (
                      <a
                        key={phase.slug}
                        href={`#${phase.slug}`}
                        className={`group flex items-center justify-between py-2 px-3 text-xs font-mono rounded-[2px] transition-colors ${
                          isActive
                            ? "bg-ink-950 text-cyan-400 border-l-2 border-cyan-400 font-semibold"
                            : "text-mist-300 hover:text-paper-50 hover:bg-ink-950/40"
                        }`}
                      >
                        <span className="truncate">
                          0{idx + 1} — {phase.short}
                        </span>
                        <span className="text-[10px] text-mist-300/60 group-hover:text-cyan-400">
                          {isActive ? "ACTIVE" : `P0${idx + 1}`}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="chamfer p-6 bg-ink-900 border border-ink-800 space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400 block">
                  Predictable Scope
                </span>
                <p className="text-xs text-mist-300 leading-relaxed">
                  Every milestone has written acceptance criteria and approval signoff. You are never billed for unapproved changes.
                </p>
                <Button to="/get-a-quote" variant="secondary" className="w-full justify-center text-xs">
                  Start Phase 01
                </Button>
              </div>
            </aside>

            {/* Vertical Timeline Cards (cols 5-12) */}
            <div className="lg:col-span-8 relative pl-6 sm:pl-10 border-l border-ink-800 space-y-16 sm:space-y-24">
              {PHASES.map((p, idx) => {
                const isActive = activePhase === p.slug;
                return (
                  <article
                    key={p.slug}
                    id={p.slug}
                    className="relative scroll-mt-28 space-y-6"
                    data-reveal
                  >
                    {/* Signal Trace Node */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[47px] top-1.5 size-5 sm:size-6 rounded-full border-2 bg-ink-950 flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "border-cyan-400 shadow-[0_0_12px_rgba(46,211,240,0.8)]"
                          : "border-ink-800"
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`size-2 rounded-full transition-colors ${
                          isActive ? "bg-cyan-400" : "bg-ink-800"
                        }`}
                      />
                    </div>

                    {/* Phase Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                          Phase 0{idx + 1} // {p.short.toUpperCase()}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper-50 tracking-tight leading-[1.05]">
                        {p.title}
                      </h2>
                      <p className="text-base sm:text-lead text-mist-300 font-medium pt-1">
                        {p.summary}
                      </p>
                    </div>

                    {/* What & Why Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 p-6 sm:p-8 bg-ink-900 border border-ink-800 rounded-[2px]">
                      <div className="space-y-2">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 block">
                          What We Do
                        </span>
                        <p className="text-xs sm:text-sm text-mist-300 leading-relaxed">
                          {p.what}
                        </p>
                      </div>
                      <div className="space-y-2 sm:border-l sm:border-ink-800 sm:pl-6">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-400 block">
                          Why This Matters
                        </span>
                        <p className="text-xs sm:text-sm text-mist-300 leading-relaxed">
                          {p.why}
                        </p>
                      </div>
                    </div>

                    {/* Client Provides & Deliverables Grid */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* What Client Provides */}
                      <div className="p-6 bg-ink-900/60 border border-ink-800 rounded-[2px] space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-paper-50">
                          <UserCheck className="size-4 text-blue-400" />
                          <span>What We Need From You</span>
                        </div>
                        <ul className="space-y-2 text-xs text-mist-300">
                          {p.client.map((item, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <span className="size-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="p-6 bg-ink-900/60 border border-ink-800 rounded-[2px] space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-cyan-400">
                          <PackageCheck className="size-4 text-cyan-400" />
                          <span>What You Receive</span>
                        </div>
                        <ul className="space-y-2 text-xs text-paper-50">
                          {p.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="size-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Approval Signoff Banner */}
                    <div className="p-4 sm:p-5 bg-ink-950 border border-ink-800 rounded-[2px] flex items-start gap-3 text-xs sm:text-sm">
                      <ShieldCheck className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400 block mb-0.5">
                          Milestone Sign-Off
                        </span>
                        <p className="text-mist-300 leading-relaxed">{p.approval}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
