import { APPROACH } from "../../data/home";
import Label from "../ui/Label";

/**
 * ApproachContrast component implementing DESIGN_SYSTEM §1 & TASKS.md C4.
 * - On-ink section with animated comparison between commoditized coding vs business-first engineering.
 * - Left column dims on reveal; right column lights up with cyan signal accent.
 */
export default function ApproachContrast() {
  return (
    <section className="on-ink py-24 sm:py-32 relative border-t border-ink-800 bg-ink-950" id="approach">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20" data-reveal>
          <Label index="04">{APPROACH.label}</Label>
          <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
            {APPROACH.title}
          </h2>
          <p className="mt-4 text-lead text-mist-300">
            {APPROACH.lead}
          </p>
        </div>

        {/* Contrast Table */}
        <div className="border border-ink-800 rounded-[2px] bg-ink-900/40 overflow-hidden" data-reveal>
          {/* Table Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-ink-800 bg-ink-900 text-xs font-mono uppercase tracking-[0.14em]">
            <div className="p-4 sm:p-6 text-mist-300/70 border-b md:border-b-0 md:border-r border-ink-800 flex items-center gap-2">
              <span className="size-2 rounded-full bg-mist-300/40" />
              <span>{APPROACH.columns[0]}</span>
            </div>
            <div className="p-4 sm:p-6 text-cyan-400 flex items-center gap-2">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{APPROACH.columns[1]}</span>
            </div>
          </div>

          {/* Contrast Rows */}
          <div className="divide-y divide-ink-800/80">
            {APPROACH.contrast.map(([left, right], idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 group transition-colors hover:bg-ink-900/60"
              >
                {/* Left: Dimmed column */}
                <div className="p-4 sm:p-6 text-sm text-mist-300/60 md:border-r border-ink-800/80 flex items-start gap-3 transition-opacity duration-300 group-hover:opacity-40">
                  <span className="font-mono text-xs text-mist-300/40 shrink-0 mt-0.5">
                    ×
                  </span>
                  <span className="line-through decoration-ink-800">{left}</span>
                </div>

                {/* Right: Lit up column */}
                <div className="p-4 sm:p-6 text-sm sm:text-base font-medium text-paper-50 flex items-start gap-3 bg-ink-950/40 group-hover:bg-ink-950 transition-colors">
                  <span className="font-mono text-xs text-cyan-400 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-snug">{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
