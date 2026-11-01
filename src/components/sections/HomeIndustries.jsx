import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES_INTRO } from "../../data/home";
import { INDUSTRIES } from "../../data/industries";
import Label from "../ui/Label";
import Button from "../ui/Button";

/**
 * HomeIndustries component implementing DESIGN_SYSTEM §1 & TASKS.md C4.
 * - On-ink section presenting 7 industries served.
 * - Each item links to /industries#slug for detailed challenges and examples.
 */
export default function HomeIndustries() {
  return (
    <section className="on-ink py-24 sm:py-32 relative border-t border-ink-800 bg-ink-950" id="industries-section">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" data-reveal>
          <div className="max-w-2xl">
            <Label index="08">{INDUSTRIES_INTRO.label}</Label>
            <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
              {INDUSTRIES_INTRO.title}
            </h2>
            <p className="mt-4 text-lead text-mist-300">
              {INDUSTRIES_INTRO.lead}
            </p>
          </div>
          <div>
            <Button to="/industries" variant="secondary">
              <span>View All Industries</span>
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* 7 Industries Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-reveal-group>
          {INDUSTRIES.map((ind, idx) => (
            <Link
              key={ind.slug}
              to={`/industries#${ind.slug}`}
              data-reveal
              className="chamfer p-6 bg-ink-900 border border-ink-800 hover:border-cyan-400/50 transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                    Sector 0{idx + 1}
                  </span>
                  <span className="size-1.5 rounded-full bg-ink-800 group-hover:bg-cyan-400 transition-colors" />
                </div>

                <h3 className="font-display text-xl font-semibold text-paper-50 group-hover:text-cyan-400 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-mist-300 leading-relaxed">
                  {ind.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-ink-800/80 flex items-center justify-between text-xs font-mono text-mist-300 group-hover:text-paper-50">
                <span>Explore examples</span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
