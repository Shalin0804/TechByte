import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { PROBLEMS } from "../../data/home";
import Label from "../ui/Label";
import Section from "../ui/Section";

/**
 * ProblemsSolved component implementing DESIGN_SYSTEM §1 & TASKS.md C4.
 * - On-paper section highlighting operational pain points and practical fixes.
 * - 6 structured items linking to the corresponding service.
 */
export default function ProblemsSolved() {
  return (
    <Section theme="paper" id="problems" className="border-t border-paper-300">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl" data-reveal>
          <Label index="03" color="blue">
            {PROBLEMS.label}
          </Label>
          <h2 className="mt-3 text-h2 text-ink-900 tracking-tight leading-[1.05]">
            {PROBLEMS.title}
          </h2>
        </div>

        {/* 6 Problems Grid (2 cols on md, 3 on lg) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {PROBLEMS.items.map((item, idx) => (
            <div
              key={item.h}
              data-reveal
              className="chamfer-panel p-6 sm:p-8 bg-paper-50 border border-paper-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-600 font-semibold">
                    0{idx + 1} // FRICTION
                  </span>
                  <span className="size-2 rounded-full bg-paper-300" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink-900 tracking-tight">
                  {item.h}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.p}
                </p>

                {/* The TechByte Solution */}
                <div className="pt-4 border-t border-paper-300/80 space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blue-600 font-semibold block">
                    Our Fix
                  </span>
                  <p className="text-xs text-ink-900 font-medium leading-relaxed">
                    {item.fix}
                  </p>
                </div>
              </div>

              {/* Link to relevant service */}
              <div className="pt-6 mt-4 border-t border-paper-300/60">
                <Link
                  to={`/services/${item.service}`}
                  className="group inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 hover:text-ink-900 transition-colors"
                >
                  <span className="capitalize">{item.service.replace(/-/g, " ")}</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
