import { useState, useEffect, useRef } from "react";
import { PROCESS } from "../../data/site";
import Label from "../ui/Label";

/**
 * Pipeline component implementing DESIGN_SYSTEM §7.4 & TASKS.md T06.
 * 7 steps from PROCESS: Discover → Strategize → Design → Develop → Test → Launch → Support.
 * - Single continuous trace with 7 nodes.
 * - Horizontal layout on desktop; vertical trace on mobile.
 * - Uses CSS scroll-driven animation (animation-timeline: view()) with IntersectionObserver fallback.
 * - Under prefers-reduced-motion: fully lit trace.
 */
export default function Pipeline() {
  const [activeStep, setActiveStep] = useState(6); // Default fully lit on fallback/SSR
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
            // Light up progressively
            let current = 0;
            const interval = setInterval(() => {
              setActiveStep(current);
              current++;
              if (current >= PROCESS.length) clearInterval(interval);
            }, 250);
          }
        });
      },
      { threshold: 0.2 }
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
        <div className="max-w-3xl mb-16 sm:mb-24" data-reveal>
          <Label index="04">Structured Delivery</Label>
          <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
            The Pipeline: from initial discovery to active production.
          </h2>
          <p className="mt-4 text-lead text-mist-300">
            Seven disciplined milestones. You see working software early and often — with clear scope and zero surprises.
          </p>
        </div>

        {/* =========================================================================
           DESKTOP PIPELINE: Horizontal 7-step signal track (hidden on mobile)
           ========================================================================= */}
        <div className="hidden lg:block relative py-12" data-reveal>
          {/* Background inactive trace line */}
          <div className="absolute top-[31px] left-8 right-8 h-[2px] bg-ink-800" aria-hidden="true" />

          {/* Active progressive signal trace */}
          <div
            className="absolute top-[31px] left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left pipeline-track-fill"
            style={{
              transform: `scaleX(${(activeStep + 1) / PROCESS.length})`,
              transition: "transform 0.4s ease-out",
            }}
            aria-hidden="true"
          />

          {/* 7 Horizontal Milestones */}
          <div className="grid grid-cols-7 gap-4 relative z-10">
            {PROCESS.map((step, idx) => {
              const isPassed = idx <= activeStep;
              return (
                <div key={step.title} className="flex flex-col group">
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
                  <div className="space-y-2 pr-2">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-paper-50 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-mist-300 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
           MOBILE PIPELINE: Vertical continuous signal trace (lg:hidden)
           ========================================================================= */}
        <div className="lg:hidden relative pl-8 border-l border-ink-800 space-y-12 my-6">
          {PROCESS.map((step, idx) => (
            <div key={step.title} className="relative" data-reveal>
              {/* Vertical node on trace */}
              <div
                className="absolute -left-[41px] top-1 size-5 rounded-full border-2 border-cyan-400 bg-ink-950 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                  Step 0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-paper-50 tracking-tight">
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
