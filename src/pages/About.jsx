import { MapPin, Globe, Terminal } from "lucide-react";
import { Seo } from "../lib/seo";
import { CONTACT, PILLARS, PRINCIPLES, PROCESS } from "../data/site";
import PageHeader from "../components/ui/PageHeader";
import Panel from "../components/ui/Panel";
import Label from "../components/ui/Label";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * About page implementing TASKS.md T08.
 * - Single H1 via PageHeader.
 * - Mission statement with scroll-linked highlight effect (animation-timeline: view()).
 * - Pillars, Principles, How We Work (Process), and Location/Remote.
 * - Strictly honest: zero invented team size, client counts, or certifications.
 */
export default function About() {
  return (
    <>
      <Seo
        title="About Us — Software & Web Development Studio"
        description="Who The TechByte is, how we work and what we stand for: a software development company in Ahmedabad building practical software for growing businesses."
        path="/about"
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Studio Profile"
            title="Software shaped around how your business works."
            lead="The TechByte is an independent software development studio based in Ahmedabad. We design, engineer, and support custom software, web platforms, and websites for teams ready to move beyond fragmented tools and workarounds."
          />
        </section>

        {/* Mission Statement: Scroll-linked word highlight */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800" data-reveal>
          <div className="max-w-4xl space-y-6">
            <Label index="02">Core Mission</Label>
            <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-mist-300 leading-[1.1]">
              <span className="scroll-word-highlight text-paper-50">We build</span> solid foundations.{" "}
              <span className="scroll-word-highlight text-paper-50">We innovate</span> with practical, well-tested technology.{" "}
              <span className="scroll-word-highlight text-paper-50">We transform</span> operations so your team spends less time copying spreadsheets and more time serving customers.
            </p>
          </div>
        </section>

        {/* The 3 Pillars */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800">
          <div className="max-w-3xl mb-12" data-reveal>
            <Label index="03">The Three Pillars</Label>
            <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
              Build • Innovate • Transform
            </h2>
            <p className="mt-4 text-lead text-mist-300">
              Our name and tagline are not marketing slogans — they are the three stages of every codebase we touch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3" data-reveal-group>
            {PILLARS.map((p, idx) => (
              <Panel key={p.word} className="bg-ink-900 border border-ink-800 p-8 space-y-4" data-reveal>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                    STAGE 0{idx + 1}
                  </span>
                  <span className="size-2 rounded-full bg-blue-500" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-paper-50 tracking-tight">
                  {p.word}
                </h3>
                <p className="text-sm text-mist-300 leading-relaxed">
                  {p.text}
                </p>
              </Panel>
            ))}
          </div>
        </section>

        {/* The 6 Principles */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800">
          <div className="max-w-3xl mb-16" data-reveal>
            <Label index="04">Engineering Standard</Label>
            <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
              Six principles we never compromise on.
            </h2>
            <p className="mt-4 text-lead text-mist-300">
              How we make architectural decisions, manage codebases, and communicate with partners.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {PRINCIPLES.map((pr, idx) => (
              <div
                key={pr.title}
                className="chamfer p-8 bg-ink-900/60 border border-ink-800 flex flex-col justify-between min-h-[220px]"
                data-reveal
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-paper-50 tracking-tight">
                    {pr.title}
                  </h3>
                </div>
                <p className="text-sm text-mist-300 leading-relaxed mt-4">
                  {pr.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work (7 Steps) */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800">
          <div className="max-w-3xl mb-12" data-reveal>
            <Label index="05">Operational Cadence</Label>
            <h2 className="mt-3 text-h2 text-paper-50 tracking-tight">
              How work happens from day one.
            </h2>
            <p className="mt-4 text-lead text-mist-300">
              Clear stages, transparent progress, and no hidden surprises.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
            {PROCESS.map((st, idx) => (
              <div
                key={st.title}
                className="p-6 bg-ink-900/40 border border-ink-800 rounded-[2px] space-y-2"
                data-reveal
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">
                  Step 0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-paper-50 tracking-tight">
                  {st.title}
                </h3>
                <p className="text-xs text-mist-300 leading-relaxed">
                  {st.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Remote Collaboration */}
        <section className="container-x py-20 sm:py-28 border-b border-ink-800">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center" data-reveal>
            <div className="lg:col-span-6 space-y-6">
              <Label index="06">Location &amp; Reach</Label>
              <h2 className="text-h2 text-paper-50 tracking-tight">
                Rooted in Ahmedabad. Built for clients worldwide.
              </h2>
              <p className="text-lead text-mist-300 leading-relaxed">
                We are based in Ahmedabad, Gujarat, and collaborate with teams locally and remotely via video calls, structured issue tracking, email, and WhatsApp.
              </p>

              <div className="space-y-3 pt-2 text-sm text-mist-300 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-cyan-400" />
                  <span>{CONTACT.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="size-4 text-blue-400" />
                  <span>Remote-first delivery: asynchronous updates &amp; live demos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="size-4 text-cyan-400" />
                  <span>Direct developer access — no middlemen or account runners</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Panel className="bg-ink-900 border border-ink-800 p-8 space-y-4" nodeGlow={true}>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                  // STUDIO POLICY
                </span>
                <h3 className="font-display text-2xl font-semibold text-paper-50 tracking-tight">
                  Honest partnership &amp; practical advice
                </h3>
                <p className="text-sm text-mist-300 leading-relaxed">
                  If an off-the-shelf software product fits your business better and costs less than a custom build, we tell you directly. We value long-term technical credibility over short-term contracts.
                </p>
                <div className="pt-2">
                  <Button to="/contact" variant="secondary">
                    Get in Touch with the Studio
                  </Button>
                </div>
              </Panel>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
