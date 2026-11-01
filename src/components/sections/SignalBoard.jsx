import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import { SERVICES_INTRO, SERVICE_WHEN } from "../../data/home";
import Label from "../ui/Label";
import Panel from "../ui/Panel";
import Button from "../ui/Button";
import ServiceGlyph from "./ServiceGlyph";

/**
 * SignalBoard component implementing DESIGN_SYSTEM §7.2 & TASKS.md C4.
 * - 6 editorial rows linking to each service.
 * - Renders SERVICES_INTRO and SERVICE_WHEN from src/data/home.js.
 * - Deterministic active index starting at 0 (hydration safe).
 * - On desktop: active row's trace lights up and right sticky preview shows glyph,
 *   deliverables, when-needed context, and direct link.
 * - On mobile: rows stack cleanly with summary and when-needed context visible.
 */
export default function SignalBoard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] || services[0];

  return (
    <section className="on-ink py-24 sm:py-32 relative border-t border-ink-800" id="services-board">
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <Label index="02">{SERVICES_INTRO.label}</Label>
          <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
            {SERVICES_INTRO.title}
          </h2>
          <p className="mt-4 text-lead text-mist-300">
            {SERVICES_INTRO.lead}
          </p>
        </div>

        {/* 12-Column Grid: Left Rows (cols 1-7), Right Sticky Preview (cols 8-12) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: 6 Editorial Service Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-ink-800/90 border-y border-ink-800/90">
            {services.map((svc, idx) => {
              const isActive = activeIndex === idx;
              const whenText = SERVICE_WHEN[svc.slug];
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
                    <div className="space-y-3">
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
                      {whenText && (
                        <p className="text-xs text-blue-400 pl-8 sm:pl-9 font-mono">
                          When needed: {whenText}
                        </p>
                      )}
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
              className="bg-ink-900 border border-ink-800 transition-all duration-300 p-8"
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

                {/* Short and When Needed */}
                <div className="space-y-3">
                  <p className="text-sm text-mist-300 leading-relaxed">
                    {activeService.short}
                  </p>
                  {SERVICE_WHEN[activeService.slug] && (
                    <div className="p-3 bg-ink-950/80 rounded-[2px] border border-ink-800/80">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400 block mb-1">
                        When you need this
                      </span>
                      <p className="text-xs text-paper-50 leading-relaxed">
                        {SERVICE_WHEN[activeService.slug]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Deliverables snippet */}
                {activeService.deliverables && (
                  <div className="space-y-2 pt-2 border-t border-ink-800">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 block">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-mist-300">
                      {activeService.deliverables.slice(0, 4).map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="size-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    to={`/services/${activeService.slug}`}
                    variant="primary"
                    className="w-full justify-between"
                  >
                    <span>View Service Detail</span>
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
