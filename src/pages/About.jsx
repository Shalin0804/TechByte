import { ShieldCheck } from "lucide-react";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { ABOUT } from "../data/about";
import { CONTACT } from "../data/site";
import PageHeader from "../components/ui/PageHeader";
import Panel from "../components/ui/Panel";
import Label from "../components/ui/Label";
import FinalCta from "../components/sections/FinalCta";

/**
 * About page implementing TASKS.md C4.
 * Complete profile driven strictly by src/data/about.js:
 * - Single H1 = ABOUT.intro.title
 * - Vision & Mission side-by-side
 * - Scroll-linked word highlight on signature statement
 * - Philosophy (Build • Innovate • Transform)
 * - Problem-solving methodology (ABOUT.problemSolving)
 * - What makes us different (ABOUT.difference)
 * - Client collaboration (ABOUT.collaboration)
 * - Quality commitments (ABOUT.quality)
 * - Long-term technology vision (ABOUT.future)
 * - Honest facts only: no invented team sizes, certifications or awards
 */
export default function About() {
  return (
    <>
      <Seo
        title="About Us — Software & Web Development Studio"
        description="Who The TechByte is, how we work and what we stand for: a software development company in Ahmedabad building practical software for growing businesses."
        path="/about"
        schema={[
          breadcrumbSchema([
            ["Home", "/"],
            ["About Us", "/about"],
          ]),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* Page Header with Single H1 */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Studio Profile"
            title={ABOUT.intro.title}
            lead={ABOUT.intro.lead}
          />
        </section>

        {/* =========================================================================
           VISION & MISSION SIDE-BY-SIDE
           ========================================================================= */}
        <section className="container-x py-12 sm:py-16 border-b border-ink-800" data-reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Vision */}
            <Panel className="bg-ink-900 border border-ink-800 p-8 space-y-4" nodeGlow={true}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                  {ABOUT.vision.label}
                </span>
                <span className="size-2 rounded-full bg-cyan-400" />
              </div>
              <p className="font-display text-2xl font-semibold text-paper-50 tracking-tight leading-snug">
                {ABOUT.vision.text}
              </p>
            </Panel>

            {/* Mission */}
            <Panel className="bg-ink-900 border border-ink-800 p-8 space-y-4" nodeGlow={true}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400 font-semibold">
                  {ABOUT.mission.label}
                </span>
                <span className="size-2 rounded-full bg-blue-500" />
              </div>
              <p className="font-display text-2xl font-semibold text-paper-50 tracking-tight leading-snug">
                {ABOUT.mission.text}
              </p>
            </Panel>
          </div>
        </section>

        {/* =========================================================================
           SCROLL-LINKED WORD HIGHLIGHT STATEMENT
           ========================================================================= */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800" data-reveal>
          <div className="max-w-4xl space-y-6">
            <Label index="02">Working Method</Label>
            <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-mist-300 leading-[1.1]">
              <span className="scroll-word-highlight text-paper-50">We build</span> solid foundations.{" "}
              <span className="scroll-word-highlight text-paper-50">We innovate</span> with practical, proven tools.{" "}
              <span className="scroll-word-highlight text-paper-50">We transform</span> operations so your business works without constant workarounds.
            </p>
          </div>
        </section>

        {/* =========================================================================
           PHILOSOPHY (Build • Innovate • Transform)
           ========================================================================= */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800" data-reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <Label index="03">Core Philosophy</Label>
              <h2 className="text-h2 text-paper-50 tracking-tight leading-[1.05]">
                {ABOUT.philosophy.title}
              </h2>
            </div>
            <div className="lg:col-span-7 text-lead text-mist-300 leading-relaxed">
              <p>{ABOUT.philosophy.text}</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
           HOW WE APPROACH PROBLEMS (problemSolving)
           ========================================================================= */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800">
          <div className="max-w-3xl mb-16" data-reveal>
            <Label index="04">Methodology</Label>
            <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
              {ABOUT.problemSolving.title}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
            {ABOUT.problemSolving.steps.map((st, idx) => (
              <div
                key={st.h}
                data-reveal
                className="chamfer p-6 sm:p-8 bg-ink-900 border border-ink-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-paper-50">
                    {st.h}
                  </h3>
                  <p className="text-xs sm:text-sm text-mist-300 leading-relaxed">
                    {st.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
           WHAT MAKES US DIFFERENT (difference)
           ========================================================================= */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800">
          <div className="max-w-3xl mb-16" data-reveal>
            <Label index="05">Differentiation</Label>
            <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
              {ABOUT.difference.title}
            </h2>
          </div>

          <div className="divide-y divide-ink-800 border-y border-ink-800" data-reveal-group>
            {ABOUT.difference.items.map((item, idx) => (
              <div
                key={item.h}
                data-reveal
                className="py-8 grid gap-4 sm:grid-cols-12 items-baseline"
              >
                <div className="sm:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 font-semibold">
                    0{idx + 1} //
                  </span>
                </div>
                <div className="sm:col-span-9 space-y-2">
                  <h3 className="font-display text-2xl font-semibold text-paper-50">
                    {item.h}
                  </h3>
                  <p className="text-sm sm:text-base text-mist-300 leading-relaxed max-w-2xl">
                    {item.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
           COLLABORATION & QUALITY (Side-by-side)
           ========================================================================= */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Collaboration */}
            <div className="lg:col-span-6 space-y-6" data-reveal>
              <Label index="06">Working Together</Label>
              <h2 className="text-h2 text-paper-50 tracking-tight leading-[1.05]">
                {ABOUT.collaboration.title}
              </h2>
              <p className="text-sm sm:text-base text-mist-300 leading-relaxed">
                {ABOUT.collaboration.text}
              </p>

              <div className="p-6 bg-ink-900 border border-ink-800 rounded-[2px] space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block">
                  Studio Base &amp; Remote Reach
                </span>
                <p className="text-xs text-mist-300">
                  Based in {CONTACT.location}. We work with clients across India and internationally through structured video, phone, WhatsApp and asynchronous updates.
                </p>
              </div>
            </div>

            {/* Quality Commitment */}
            <div className="lg:col-span-6 space-y-6" data-reveal>
              <Label index="07">Engineering Standard</Label>
              <h2 className="text-h2 text-paper-50 tracking-tight leading-[1.05]">
                {ABOUT.quality.title}
              </h2>
              <div className="chamfer-panel p-6 sm:p-8 bg-ink-900 border border-ink-800 space-y-3.5">
                {ABOUT.quality.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-paper-50">
                    <ShieldCheck className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
           FUTURE VISION (future)
           ========================================================================= */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800" data-reveal>
          <div className="max-w-4xl space-y-6">
            <Label index="08">Long-Term View</Label>
            <h2 className="text-h2 text-paper-50 tracking-tight">
              {ABOUT.future.title}
            </h2>
            <p className="text-lead text-mist-300 leading-relaxed">
              {ABOUT.future.text}
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
