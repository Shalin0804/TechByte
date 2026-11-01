import { ChevronDown } from "lucide-react";
import { HOME_FAQ } from "../../data/home";
import Label from "../ui/Label";

/**
 * Faq component implementing DESIGN_SYSTEM §7.
 * Uses native accessible <details> and <summary> elements.
 * Supports both on-ink and on-paper sections.
 */
export default function Faq({
  items = HOME_FAQ,
  labelIndex = "11",
  title = "Frequently Asked Questions",
  eyebrow = "Common Questions",
  theme = "paper",
}) {
  const isPaper = theme === "paper";

  return (
    <section
      className={`${
        isPaper
          ? "on-paper bg-paper-50 text-ink-900 border-paper-300"
          : "on-ink bg-ink-950 text-paper-50 border-ink-800"
      } py-24 sm:py-32 relative border-t`}
      id="faq"
    >
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl mb-16" data-reveal>
          <Label index={labelIndex} color={isPaper ? "blue" : "cyan"}>
            {eyebrow}
          </Label>
          <h2
            className={`mt-3 text-h2 tracking-tight ${
              isPaper ? "text-ink-900" : "text-paper-50"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 text-lead ${
              isPaper ? "text-slate-600" : "text-mist-300"
            }`}
          >
            Straightforward answers to the questions clients ask before starting a project with us.
          </p>
        </div>

        {/* Accordion List */}
        <div
          className={`max-w-4xl divide-y ${
            isPaper
              ? "divide-paper-300 border-y border-paper-300"
              : "divide-ink-800 border-y border-ink-800"
          }`}
          data-reveal-group
        >
          {items.map((item, idx) => (
            <details
              key={item.q}
              data-reveal
              className="group py-6 sm:py-8 transition-colors cursor-pointer"
            >
              <summary
                className={`flex items-center justify-between gap-4 font-display text-xl sm:text-2xl font-semibold tracking-tight list-none select-none transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                  isPaper
                    ? "text-ink-900 hover:text-blue-600 focus-visible:ring-blue-600 focus-visible:ring-offset-paper-50"
                    : "text-paper-50 hover:text-cyan-400 focus-visible:ring-cyan-400 focus-visible:ring-offset-ink-950"
                } focus-visible:ring-offset-4`}
              >
                <span className="flex items-baseline gap-4">
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.14em] shrink-0 ${
                      isPaper ? "text-blue-600" : "text-cyan-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item.q}</span>
                </span>
                <span
                  className={`shrink-0 size-8 rounded-[2px] border flex items-center justify-center transition-transform duration-200 group-open:rotate-180 ${
                    isPaper
                      ? "border-paper-300 bg-paper-100 text-slate-600 group-hover:border-blue-600 group-hover:text-blue-600"
                      : "border-ink-800 bg-ink-900 text-mist-300 group-hover:border-cyan-400 group-hover:text-cyan-400"
                  }`}
                >
                  <ChevronDown className="size-4" />
                </span>
              </summary>
              <div
                className={`pt-4 pl-8 sm:pl-10 pr-4 text-sm sm:text-base leading-relaxed max-w-[64ch] ${
                  isPaper ? "text-slate-600" : "text-mist-300"
                }`}
              >
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
