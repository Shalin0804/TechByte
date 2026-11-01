import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROCESS } from "../../data/site";
import Label from "../ui/Label";
import Button from "../ui/Button";

/**
 * Pipeline component implementing DESIGN_SYSTEM §7.4 & TASKS.md C4.
 * 8 phases from PROCESS (process.js).
 * - Single continuous trace with 8 nodes.
 * - Horizontal layout on desktop; vertical trace on mobile.
 * - Progressive scroll-driven animation with IntersectionObserver fallback.
 * - Links to /process for full deliverables and approval criteria.
 */
export default function Pipeline() {
  const [activeStep, setActiveStep] = useState(7); // Default fully lit on fallback/SSR
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if browser supports animation-timeline
    const supportsScrollTimeline =
      window.CSS && CSS.supports && CSS.supports("animation-timeline", "view()");

    if (supportsScrollTimeline) return;

    // Fallback: IntersectionObserver lighting nodes progressively
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const interval = setInterval(() => {
              setActiveStep(current);
              current++;
              if (current >= PROCESS.length) clearInterval(interval);
            }, 200);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="on-ink py-24 sm:py-32 relative border-t border-ink-800 bg-ink-950"
      id="pipeline"
    >
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20" data-reveal>
          <div className="max-w-3xl">
            <Label index="06">Structured Delivery</Label>
            <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
              The Pipeline: eight disciplined milestones.
            </h2>
            <p className="mt-4 text-lead text-mist-300">
              From first discussion to active post-launch support. You review working software early and often — with clear scope and zero surprises.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/process" variant="secondary">
              <span>View Full Process</span>
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* =========================================================================
           DESKTOP PIPELINE: Horizontal 8-step signal track (hidden on mobile)
           ========================================================================= */}
        <div className="hidden xl:block relative py-12" data-reveal>
          {/* Background inactive trace line */}
          <div className="absolute top-[31px] left-6 right-6 h-[2px] bg-ink-800" aria-hidden="true" />

          {/* Active progressive signal trace */}
          <div
            className="absolute top-[31px] left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left pipeline-track-fill"
            style={{
              transform: `scaleX(${(activeStep + 1) / PROCESS.length})`,
              transition: "transform 0.4s ease-out",
            }}
            aria-hidden="true"
          />

          {/* 8 Horizontal Milestones */}
          <div className="grid grid-cols-8 gap-3 relative z-10">
            {PROCESS.map((step, idx) => {
              const isPassed = idx <= activeStep;
              return (
                <div key={step.slug || step.title} className="flex flex-col group">
                  {/* Node Icon on Trace */}
                  <div className="flex items-center mb-8">
                    <div
                      className={`size-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isPassed
                          ? "border-cyan-400 bg-ink-950 shadow-[0_0_10px_rgba(46,211,240,0.8)]"
                          : "border-ink-800 bg-ink-950"
                      }`}
                    >
                      <span
                        className={`size-2 rounded-full transition-colors ${
                          isPassed ? "bg-cyan-400" : "bg-ink-800"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Step Metadata & Content */}
                  <div className="space-y-1.5 pr-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-400">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-base font-semibold text-paper-50 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-mist-300 leading-relaxed line-clamp-3">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Medium Screen Grid (lg only) */}
        <div className="hidden lg:grid xl:hidden grid-cols-4 gap-6 py-6" data-reveal-group>
          {PROCESS.map((step, idx) => (
            <div key={step.slug || step.title} className="chamfer p-5 bg-ink-900 border border-ink-800 space-y-2" data-reveal>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                  Step 0{idx + 1}
                </span>
                <span className="size-1.5 rounded-full bg-cyan-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-paper-50">
                {step.title}
              </h3>
              <p className="text-xs text-mist-300 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* =========================================================================
           MOBILE PIPELINE: Vertical continuous signal trace (lg:hidden)
           ========================================================================= */}
        <div className="lg:hidden relative pl-8 border-l border-ink-800 space-y-10 my-6">
          {PROCESS.map((step, idx) => (
            <div key={step.slug || step.title} className="relative" data-reveal>
              {/* Vertical node on trace */}
              <div
                className="absolute -left-[41px] top-1 size-5 rounded-full border-2 border-cyan-400 bg-ink-950 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                  Step 0{idx + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-paper-50 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-mist-300 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
