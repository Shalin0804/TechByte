import { PILLARS } from "../../data/site";
import Panel from "../ui/Panel";
import Label from "../ui/Label";

/**
 * Pillars section: Build • Innovate • Transform
 * Explains the three core verbs from the tagline with clean chamfered panels
 * and an interconnected hairline circuit trace.
 */
export default function Pillars() {
  return (
    <section className="on-ink border-t border-ink-800/80 py-20 relative overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-2xl mb-12" data-reveal>
          <Label index="01">Engineering Philosophy</Label>
          <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
            How we translate technical craft into business momentum.
          </h2>
        </div>

        {/* 3 Pillars Grid with connecting trace */}
        <div className="grid gap-6 md:grid-cols-3 relative" data-reveal-group>
          {PILLARS.map((p, idx) => (
            <div key={p.word} data-reveal className="relative">
              <Panel className="h-full bg-ink-900/60 border border-ink-800 hover:border-blue-500/60 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                      0{idx + 1}
                    </span>
                    <span className="size-1.5 rounded-full bg-blue-500" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-paper-50 tracking-tight">
                    {p.word}
                  </h3>
                  <p className="text-sm text-mist-300 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </Panel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
