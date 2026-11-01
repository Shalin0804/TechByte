import { JOURNEY } from "../../data/home";
import Label from "../ui/Label";
import Section from "../ui/Section";

/**
 * HomeJourney component implementing DESIGN_SYSTEM §1 & TASKS.md C4.
 * - On-paper section presenting the 6 clear customer touchpoint steps from initial contact to support.
 * - Strict adherence to src/data/home.js JOURNEY object.
 */
export default function HomeJourney() {
  return (
    <Section theme="paper" id="journey" className="border-t border-paper-300">
      <div className="space-y-16">
        {/* Header */}
        <div className="max-w-3xl" data-reveal>
          <Label index="09" color="blue">
            {JOURNEY.label}
          </Label>
          <h2 className="mt-3 text-h2 text-ink-900 tracking-tight leading-[1.05]">
            {JOURNEY.title}
          </h2>
        </div>

        {/* 6 Steps Grid (2 cols on sm/md, 3 on lg) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {JOURNEY.steps.map((step, idx) => (
            <div
              key={step.h}
              data-reveal
              className="chamfer p-6 sm:p-8 bg-paper-100 border border-paper-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-600 font-semibold">
                    Step 0{idx + 1}
                  </span>
                  <span className="size-2 rounded-full bg-paper-300" />
                </div>

                <h3 className="font-display text-xl font-semibold text-ink-900 tracking-tight">
                  {step.h}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
