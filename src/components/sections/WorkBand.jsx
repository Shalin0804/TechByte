import Label from "../ui/Label";
import Button from "../ui/Button";
import Panel from "../ui/Panel";
import Blueprint from "./Blueprint";

/**
 * WorkBand component implementing DESIGN_SYSTEM §7.5 & TASKS.md T06.
 * Compact home version of the work section:
 * - Honest statement: "Our first case studies are being written up. Be one of them."
 * - Single high-fidelity blueprint drawing.
 * - Links to /work and /get-a-quote.
 */
export default function WorkBand() {
  return (
    <section className="on-ink py-20 sm:py-28 relative border-t border-ink-800 bg-ink-950" id="work-band">
      <div className="container-x">
        <Panel className="bg-ink-900 border border-ink-800 p-8 sm:p-12" nodeGlow={true}>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content (cols 1-6) */}
            <div className="lg:col-span-6 space-y-6" data-reveal>
              <Label index="05">Portfolio &amp; Work</Label>
              <h2 className="text-h2 text-paper-50 tracking-tight leading-[1.05]">
                Our first case studies are being written up. Be one of them.
              </h2>
              <p className="text-lead text-mist-300 max-w-[48ch] leading-relaxed">
                We believe in showing verified production results rather than invented portfolio cards. We are currently preparing in-depth engineering breakdowns of active projects.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button to="/get-a-quote" variant="primary">
                  Start a Project
                </Button>
                <Button to="/work" variant="secondary">
                  View Case Study Slots
                </Button>
              </div>
            </div>

            {/* Right Blueprint Artwork (cols 7-12) */}
            <div className="lg:col-span-6" data-reveal>
              <div className="relative rounded-[2px] border border-ink-800 bg-ink-950/80 p-4 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between pb-4 mb-2 border-b border-ink-800 text-xs font-mono text-mist-300">
                  <span className="text-cyan-400">// CASE STUDY SLOT 01</span>
                  <span>IN PREPARATION</span>
                </div>
                <Blueprint variant={1} className="w-full" />
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
