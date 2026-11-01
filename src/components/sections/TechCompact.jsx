import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { TECH_GROUPS } from "../../data/technologies";
import Label from "../ui/Label";
import Section from "../ui/Section";
import Button from "../ui/Button";

/**
 * TechCompact component implementing DESIGN_SYSTEM §1 & TASKS.md C4.
 * - On-paper compact summary of owner-confirmed technologies by category.
 * - Links to /technologies for detailed architectural criteria.
 */
export default function TechCompact() {
  return (
    <Section theme="paper" id="technologies-overview" className="border-t border-paper-300">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-reveal>
          <div className="max-w-2xl">
            <Label index="05" color="blue">
              Technology Stack
            </Label>
            <h2 className="mt-3 text-h2 text-ink-900 tracking-tight leading-[1.05]">
              Proven technologies chosen for longevity and performance.
            </h2>
          </div>
          <div>
            <Button to="/technologies" variant="secondary" className="border-paper-300">
              <span>Explore All Technologies</span>
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {TECH_GROUPS.map((group, idx) => (
            <div
              key={group.slug}
              data-reveal
              className="chamfer p-6 bg-paper-100 border border-paper-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-600 font-semibold">
                    0{idx + 1} // {group.label}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {group.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex px-2 py-0.5 text-xs font-mono bg-paper-50 border border-paper-300 text-ink-900 rounded-[2px]"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-paper-300/60">
                <Link
                  to={`/technologies#${group.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-blue-600 hover:text-ink-900 transition-colors"
                >
                  <span>Stack details</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
