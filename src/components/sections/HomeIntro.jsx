import { INTRO } from "../../data/home";
import Label from "../ui/Label";
import Section from "../ui/Section";

/**
 * HomeIntro component implementing DESIGN_SYSTEM §1 & §4.
 * - On-paper section creating alternating rhythm with hero.
 * - Asymmetric 12-column grid: Title on cols 1-5, paragraphs on cols 6-12.
 * - Strict adherence to structured data from src/data/home.js.
 */
export default function HomeIntro() {
  return (
    <Section theme="paper" id="intro" className="border-t border-paper-300">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left: Heading and Label (cols 1-5) */}
        <div className="lg:col-span-5 space-y-4" data-reveal>
          <Label index="01" color="blue">
            {INTRO.label}
          </Label>
          <h2 className="text-h2 text-ink-900 tracking-tight leading-[1.05]">
            {INTRO.title}
          </h2>
        </div>

        {/* Right: Paragraphs (cols 6-12) */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed" data-reveal>
          {INTRO.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "text-ink-900 font-medium" : ""}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
