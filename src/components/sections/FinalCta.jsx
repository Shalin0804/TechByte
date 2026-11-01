import { ArrowUpRight, Mail } from "lucide-react";
import { CONTACT } from "../../data/site";
import Button from "../ui/Button";

/**
 * FinalCta component implementing DESIGN_SYSTEM §7.6 & TASKS.md T06.
 * - "Let's build it." in display size.
 * - Email as large interactive link with cyan pulse.
 * - CTAs: Let's Talk (→ /get-a-quote) and Explore Our Work (→ /work).
 */
export default function FinalCta() {
  return (
    <section className="on-ink py-24 sm:py-36 relative border-t border-ink-800 bg-ink-950 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(31, 107, 255, 0.25) 0%, rgba(5, 11, 31, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10 text-center max-w-4xl mx-auto space-y-8" data-reveal>
        <div className="inline-flex items-center gap-2 font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
          <span className="size-1.5 rounded-full bg-cyan-400" />
          <span>Ready to build</span>
        </div>

        <h2 className="text-display text-paper-50 tracking-tight leading-[0.95]">
          Let's build it.
        </h2>

        <p className="text-lead text-mist-300 max-w-2xl mx-auto leading-relaxed">
          Tell us about the workflow you need to streamline, the platform you want to launch, or the site that needs modernization.
        </p>

        {/* Large Email Link */}
        <div className="pt-2">
          <a
            href={`mailto:${CONTACT.email}`}
            className="group inline-flex items-center gap-3 font-display text-2xl sm:text-4xl font-semibold text-paper-50 hover:text-cyan-400 transition-colors"
          >
            <Mail className="size-6 sm:size-8 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="underline decoration-ink-800 underline-offset-8 group-hover:decoration-cyan-400 transition-colors">
              {CONTACT.email}
            </span>
            <ArrowUpRight className="size-6 text-mist-300 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button to="/get-a-quote" variant="primary">
            Request a Quote
          </Button>
          <Button to="/work" variant="secondary">
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
