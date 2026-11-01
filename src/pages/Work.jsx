import { ShieldCheck } from "lucide-react";
import { Seo } from "../lib/seo";
import PageHeader from "../components/ui/PageHeader";
import Panel from "../components/ui/Panel";
import Button from "../components/ui/Button";
import Blueprint from "../components/sections/Blueprint";
import FinalCta from "../components/sections/FinalCta";

/**
 * Work page implementing TASKS.md T08.
 * - Single H1 strictly via PageHeader.
 * - 3 chamfered open slots with detailed engineering blueprint SVGs.
 * - Honest copy: case studies in active preparation.
 * - Strictly NO invented client names, fake statistics, or stock screenshots.
 */
export default function Work() {
  const slots = [
    {
      slot: "01",
      title: "Custom Operations & Workflow Platform",
      category: "Custom Software",
      variant: 1,
      spec: "Internal record management, relational data model, validation, and role-based permissions.",
    },
    {
      slot: "02",
      title: "Multi-Role Client Portal & Auth Architecture",
      category: "Web Application",
      variant: 2,
      spec: "Self-service customer portal, session auth, reactive interface, and API microservice integration.",
    },
    {
      slot: "03",
      title: "High-Performance Transaction & Order Flow",
      category: "E-commerce & Systems",
      variant: 3,
      spec: "Custom checkout pipeline, automated order tracking, webhook handlers, and gateway synchronization.",
    },
  ];

  return (
    <>
      <Seo
        title="Our Work — Verified Case Studies in Preparation"
        description="Case studies from The TechByte. Our first production case studies are currently in preparation — start your project with us."
        path="/work"
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Case Studies &amp; Portfolio"
            title="Engineering case studies in active preparation."
            lead="We believe software firms should be judged on real production code and verified business outcomes — not mockups, bought themes, or fictitious vanity metrics. Our first comprehensive case studies are currently being documented."
          />
        </section>

        {/* 3 Open Blueprint Slots */}
        <section className="container-x py-16 sm:py-24 space-y-16" id="open-slots">
          {slots.map((item) => (
            <Panel
              key={item.slot}
              className="bg-ink-900 border border-ink-800 p-8 sm:p-12 hover:border-blue-500/50 transition-colors"
              data-reveal
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* Left: Metadata & Slot Information (cols 1-5) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                      Slot {item.slot} // IN PREPARATION
                    </span>
                    <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper-50 tracking-tight leading-[1.1]">
                    {item.title}
                  </h2>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-mist-300">
                      <span className="text-paper-50">CATEGORY:</span>
                      <span className="text-blue-400">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-mist-300">
                      <span className="text-paper-50">STATUS:</span>
                      <span className="text-cyan-400">Production verification &amp; write-up</span>
                    </div>
                    <p className="text-sm text-mist-300 leading-relaxed pt-1">
                      {item.spec}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ink-800">
                    <Button to="/get-a-quote" variant="primary">
                      Commission a Similar Build
                    </Button>
                  </div>
                </div>

                {/* Right: Detailed Blueprint SVG Schematic (cols 6-12) */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-[2px] border border-ink-800 bg-ink-950 p-6 shadow-inner">
                    <div className="flex items-center justify-between pb-4 mb-3 border-b border-ink-800 text-[11px] font-mono text-mist-300">
                      <span className="text-cyan-400">FIG {item.slot} — SYSTEM SCHEMATIC</span>
                      <span>TB-CAD-SPEC</span>
                    </div>
                    <Blueprint variant={item.variant} className="w-full" />
                  </div>
                </div>
              </div>
            </Panel>
          ))}
        </section>

        {/* Why We Don't Fake Portfolio Section */}
        <section className="border-t border-ink-800 bg-ink-900/40 py-20">
          <div className="container-x">
            <div className="max-w-3xl mx-auto text-center space-y-6" data-reveal>
              <div className="inline-flex items-center gap-2 font-mono text-label uppercase tracking-[0.14em] text-blue-400">
                <ShieldCheck className="size-4" />
                <span>Our Policy on Transparency</span>
              </div>
              <h2 className="text-h2 text-paper-50 tracking-tight">
                Why we don't invent client logos or inflated statistics.
              </h2>
              <p className="text-lead text-mist-300 leading-relaxed">
                Many agencies showcase template screenshots or list unverified enterprise logos. At The TechByte, we only publish verified case studies with real operational data and code architectures. Be one of the first featured partners.
              </p>
              <div className="pt-4">
                <Button to="/get-a-quote" variant="secondary">
                  Discuss Your Project Scope
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
