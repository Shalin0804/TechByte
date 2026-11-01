import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import Label from "../ui/Label";
import Panel from "../ui/Panel";
import ServiceGlyph from "./ServiceGlyph";

/**
 * SignalBoard component implementing DESIGN_SYSTEM §7.2 & TASKS.md T06.
 * - 6 editorial rows linking to each service.
 * - Deterministic active index starting at 0 (hydration safe).
 * - On desktop: active row's trace lights up and right sticky preview shows glyph,
 *   deliverables, and description.
 * - On mobile: rows stack cleanly with summary always visible, zero hover dependency.
 */
export default function SignalBoard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] || services[0];

  return (
    <section className="on-ink py-24 sm:py-32 relative border-t border-ink-800" id="services-board">
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <Label index="02">Core Capabilities</Label>
          <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
            Six focused services. One engineering standard.
          </h2>
          <p className="mt-4 text-lead text-mist-300">
            From greenfield systems to critical modernizations, we engineer software that fits your process and stays maintainable after launch.
          </p>
        </div>

        {/* 12-Column Grid: Left Rows (cols 1-7), Right Sticky Preview (cols 8-12) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: 6 Editorial Service Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-ink-800/90 border-y border-ink-800/90">
            {services.map((svc, idx) => {
              const isActive = activeIndex === idx;
              return (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  onPointerEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  className={`group relative py-8 sm:py-10 transition-colors block ${
                    isActive ? "text-paper-50" : "text-mist-300 hover:text-paper-50"
                  }`}
                  data-reveal
                >
                  {/* Active row hairline trace highlight */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex items-baseline justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-cyan-400 transition-colors">
                          {svc.title}
                        </h3>
                      </div>
                      <p className="text-sm text-mist-300 max-w-xl pl-8 sm:pl-9 leading-relaxed">
                        {svc.short}
                      </p>
                    </div>

                    <div className="shrink-0 pt-1">
                      <span className="inline-flex size-10 items-center justify-center rounded-[2px] border border-ink-800 bg-ink-900 text-mist-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right: Sticky Preview Panel (Desktop only at lg+) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <Panel
              className="bg-ink-900 border border-ink-800 transition-all duration-300"
              nodeGlow={true}
            >
              <div className="space-y-6">
                {/* Glyph + Service Title */}
                <div className="flex items-start justify-between border-b border-ink-800 pb-6">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                      0{activeIndex + 1} // ACTIVE PREVIEW
                    </span>
                    <h4 className="font-display text-2xl font-semibold text-paper-50 tracking-tight">
                      {activeService.title}
                    </h4>
                  </div>
                  <div className="p-3 bg-ink-950 rounded-[2px] border border-ink-800 text-cyan-400">
                    <ServiceGlyph slug={activeService.slug} />
                  </div>
                </div>

                {/* Service Intro */}
                <p className="text-sm text-mist-300 leading-relaxed">
                  {activeService.intro}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50">
                    Typical Deliverables
                  </span>
                  <ul className="space-y-2">
                    {activeService.deliverables.slice(0, 4).map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-mist-300">
                        <span className="size-1 rounded-full bg-blue-500" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details Link */}
                <div className="pt-4 border-t border-ink-800">
                  <Link
                    to={`/services/${activeService.slug}`}
                    className="link-trace text-sm text-cyan-400"
                  >
                    <span>View full scope, process &amp; deliverables</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
