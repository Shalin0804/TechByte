import { ChevronDown } from "lucide-react";
import { HOME_FAQ } from "../../data/site";
import Label from "../ui/Label";

/**
 * Faq component implementing DESIGN_SYSTEM §7.
 * Uses native accessible <details> and <summary> elements.
 * Renders HOME_FAQ from site.js.
 */
export default function Faq({ items = HOME_FAQ, labelIndex = "06", title = "Frequently Asked Questions", eyebrow = "Common Questions" }) {
  return (
    <section className="on-ink py-24 sm:py-32 relative border-t border-ink-800" id="faq">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <Label index={labelIndex}>{eyebrow}</Label>
          <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lead text-mist-300">
            Straightforward answers to the questions clients ask before starting a project with us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl divide-y divide-ink-800 border-y border-ink-800" data-reveal-group>
          {items.map((item, idx) => (
            <details
              key={item.q}
              data-reveal
              className="group py-6 sm:py-8 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-4 font-display text-xl sm:text-2xl font-semibold text-paper-50 tracking-tight list-none select-none hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950 transition-colors">
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{item.q}</span>
                </span>
                <span className="shrink-0 size-8 rounded-[2px] border border-ink-800 bg-ink-900 flex items-center justify-center text-mist-300 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="size-4" />
                </span>
              </summary>
              <div className="pt-4 pl-8 sm:pl-10 pr-4 text-sm sm:text-base text-mist-300 leading-relaxed max-w-[64ch]">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
