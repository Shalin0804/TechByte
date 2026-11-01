import { WHY } from "../../data/site";
import Label from "../ui/Label";
import Section from "../ui/Section";

/**
 * Why TechByte section implementing DESIGN_SYSTEM §7.3 & TASKS.md T06.
 * Asymmetric editorial layout on paper:
 * - Left column (cols 1-5): Confident studio statement
 * - Right column (cols 6-12): Five numbered principles from site.js (WHY).
 * - Strictly NO generic icons — typography, indices, and hairline traces only.
 */
export default function Why() {
  return (
    <Section theme="paper" id="why-us" className="border-t border-paper-300">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column (cols 1-5): Editorial Statement */}
        <div className="lg:col-span-5 space-y-6" data-reveal>
          <Label index="03" color="blue">
            Why The TechByte
          </Label>
          <h2 className="text-h2 text-ink-900 tracking-tight leading-[1.05]">
            Engineering shaped around the way your business actually works.
          </h2>
          <p className="text-lead text-slate-600 max-w-[48ch] leading-relaxed">
            We don't sell pre-packaged templates, off-the-shelf workarounds, or technology for its own sake. Every project starts by understanding your operational reality.
          </p>

          <div className="pt-6 border-t border-paper-300">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-600">
              No junior handoffs · Direct partner involvement
            </p>
          </div>
        </div>

        {/* Right Column (cols 6-12): Five Numbered Principles */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-paper-300 border-y border-paper-300" data-reveal-group>
          {WHY.map((item, idx) => (
            <div
              key={item.title}
              data-reveal
              className="py-8 sm:py-10 grid gap-4 sm:grid-cols-12 items-baseline"
            >
              {/* Mono Index */}
              <div className="sm:col-span-3">
                <span className="font-mono text-sm font-semibold tracking-[0.14em] text-blue-600">
                  0{idx + 1} //
                </span>
              </div>

              {/* Title and Explanation */}
              <div className="sm:col-span-9 space-y-2">
                <h3 className="font-display text-2xl font-semibold text-ink-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-[56ch]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
