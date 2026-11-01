import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { INDUSTRIES_PAGE, INDUSTRIES } from "../data/industries";
import { getService } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * Industries page implementing TASKS.md C4.
 * Complete 7-industry breakdown driven by src/data/industries.js:
 * - H1 = INDUSTRIES_PAGE.title
 * - Sticky industry navigation on desktop with scroll spy
 * - Detailed challenges, operational needs, software solutions, value
 * - Examples explicitly badged "Example — what could be built"
 * - Deep links to relevant service pages
 */
export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndustry(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    INDUSTRIES.forEach((ind) => {
      const el = document.getElementById(ind.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title="Industries We Serve"
        description="How The TechByte can help healthcare, hospitality, retail, education, logistics, professional services and startups with websites, apps, software and automation."
        path="/industries"
        schema={[
          breadcrumbSchema([
            ["Home", "/"],
            ["Industries We Serve", "/industries"],
          ]),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Industry Capabilities"
            title={INDUSTRIES_PAGE.title}
            lead={INDUSTRIES_PAGE.lead}
          />
        </section>

        {/* =========================================================================
           MAIN LAYOUT: STICKY NAV (cols 1-3) + 7 INDUSTRY SECTIONS (cols 4-12)
           ========================================================================= */}
        <section className="container-x py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Desktop Sticky Industry Navigator (cols 1-3) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
              <div className="border border-ink-800 bg-ink-900/60 p-5 rounded-[2px]">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block mb-4">
                  Sectors ({INDUSTRIES.length})
                </span>
                <nav aria-label="Industries Navigation" className="space-y-1">
                  {INDUSTRIES.map((ind, idx) => {
                    const isActive = activeIndustry === ind.slug;
                    return (
                      <a
                        key={ind.slug}
                        href={`#${ind.slug}`}
                        className={`group flex items-center justify-between py-2 px-3 text-xs font-mono rounded-[2px] transition-colors ${
                          isActive
                            ? "bg-ink-950 text-cyan-400 border-l-2 border-cyan-400 font-semibold"
                            : "text-mist-300 hover:text-paper-50 hover:bg-ink-950/40"
                        }`}
                      >
                        <span className="truncate">
                          0{idx + 1} — {ind.name}
                        </span>
                        <span className="text-[10px] text-mist-300/60 group-hover:text-cyan-400">
                          {isActive ? "ACTIVE" : `S0${idx + 1}`}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="chamfer p-5 bg-ink-900 border border-ink-800 space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400 block">
                  Custom Architecture
                </span>
                <p className="text-xs text-mist-300 leading-relaxed">
                  Every sector has unique workflows. We build systems shaped around your specific operating model.
                </p>
                <Button to="/get-a-quote" variant="secondary" className="w-full justify-center text-xs mt-2">
                  Discuss Your Sector
                </Button>
              </div>
            </aside>

            {/* 7 Industry Detailed Sections (cols 4-12) */}
            <div className="lg:col-span-9 space-y-24 sm:space-y-32">
              {INDUSTRIES.map((ind, idx) => (
                <article
                  key={ind.slug}
                  id={ind.slug}
                  className="scroll-mt-28 space-y-8"
                  data-reveal
                >
                  {/* Industry Section Header */}
                  <div className="space-y-2 border-b border-ink-800 pb-6">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                      Sector 0{idx + 1} //
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper-50 tracking-tight">
                      {ind.name}
                    </h2>
                    <p className="text-base sm:text-lead text-mist-300 max-w-2xl leading-relaxed">
                      {ind.summary}
                    </p>
                  </div>

                  {/* Operational Friction & Specific Needs */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Challenges */}
                    <div className="p-6 bg-ink-900 border border-ink-800 rounded-[2px] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-mist-300">
                        <AlertCircle className="size-4 text-blue-400" />
                        <span>Common Friction</span>
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-mist-300">
                        {ind.challenges.map((ch, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="size-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Operational Needs */}
                    <div className="p-6 bg-ink-900 border border-ink-800 rounded-[2px] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-cyan-400">
                        <CheckCircle2 className="size-4 text-cyan-400" />
                        <span>Core Operational Needs</span>
                      </div>
                      <p className="text-sm text-paper-50 leading-relaxed">
                        {ind.needs}
                      </p>

                      <div className="pt-4 border-t border-ink-800 space-y-2">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist-300 block">
                          Target Solutions
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {ind.solutions.map((sol) => (
                            <span
                              key={sol}
                              className="px-2.5 py-1 text-xs font-mono bg-ink-950 border border-ink-800 text-paper-50 rounded-[2px]"
                            >
                              {sol}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Examples (Explicitly Badged as Hypothetical / What Could Be Built) */}
                  <div className="space-y-4">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper-50 block">
                      Hypothetical Application Scenarios
                    </span>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {ind.examples.map((ex, eIdx) => (
                        <div
                          key={eIdx}
                          className="chamfer p-6 bg-ink-900/60 border border-ink-800 space-y-3"
                        >
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400 px-2 py-0.5 bg-ink-950 border border-ink-800 rounded-[2px] inline-block">
                            Example — What Could Be Built
                          </span>
                          <p className="text-xs sm:text-sm text-mist-300 leading-relaxed">
                            {ex}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Value Banner */}
                  <div className="p-5 bg-ink-950 border border-ink-800 rounded-[2px] flex items-start gap-3">
                    <Sparkles className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400 block mb-0.5">
                        Measurable Value
                      </span>
                      <p className="text-paper-50 font-medium leading-relaxed">{ind.value}</p>
                    </div>
                  </div>

                  {/* Relevant Services Links */}
                  <div className="pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist-300 block mb-3">
                      Relevant Engineering Services
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {ind.services.map((svcSlug) => {
                        const svc = getService(svcSlug);
                        if (!svc) return null;
                        return (
                          <Link
                            key={svcSlug}
                            to={`/services/${svcSlug}`}
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-ink-900 border border-ink-800 hover:border-cyan-400 text-xs font-mono text-paper-50 rounded-[2px] transition-colors"
                          >
                            <span>{svc.title}</span>
                            <ArrowRight className="size-3 text-cyan-400" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </article>
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
