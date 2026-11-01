import { TECH } from "../../data/site";

/**
 * TechMarquee component implementing DESIGN_SYSTEM §7 & TASKS.md T06.
 * Displays the exact 15 approved technologies from site.js (TECH).
 * Infinite seamless loop, pauses on hover, accessible static layout under reduced motion.
 */
export default function TechMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TECH, ...TECH, ...TECH];

  return (
    <section
      aria-label="Technology Stack"
      className="on-ink border-y border-ink-800 bg-ink-950/80 py-6 overflow-hidden relative select-none"
    >
      <div className="flex items-center">
        {/* Track label on the left */}
        <div className="hidden lg:flex items-center gap-2 pl-8 pr-6 shrink-0 border-r border-ink-800 bg-ink-950 z-10">
          <span className="size-1.5 rounded-full bg-cyan-400" />
          <span className="font-mono text-label uppercase tracking-[0.14em] text-mist-300">
            Stack
          </span>
        </div>

        {/* Marquee viewport */}
        <div className="overflow-hidden w-full relative">
          <div className="animate-marquee flex items-center gap-8 py-1">
            {marqueeItems.map((tech, idx) => (
              <div
                key={`${tech}-${idx}`}
                className="flex items-center gap-4 text-mist-300 transition-colors hover:text-paper-50"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em]">
                  {tech}
                </span>
                <span className="size-1 rounded-full bg-ink-800" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
