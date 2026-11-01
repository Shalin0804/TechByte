import { Link } from "react-router";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { COMPANY, CONTACT, NAV, whatsappLink } from "../../data/site";
import { services } from "../../data/services";
import Button from "../ui/Button";

/**
 * Footer component implementing DESIGN_SYSTEM §6 & TASKS.md T04.
 * - Deep navy ink background (on-ink)
 * - Large "Let's build it." statement with interactive CTA
 * - Contact details with real mailto, tel, and WhatsApp links
 * - Full sitemap columns including all 6 services and legal routes
 * - Official tagline and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="on-ink border-t border-ink-800 bg-ink-950 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative hairline circuit background */}
      <div className="pointer-events-none absolute inset-0 opacity-15 select-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="40" x2="100%" y2="40" stroke="var(--color-ink-800)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="var(--color-ink-800)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="var(--color-ink-800)" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="container-x relative z-10">
        {/* Top Feature Banner: "Let's build it." */}
        <div className="border-b border-ink-800 pb-16 lg:pb-20" data-reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                00 — NEXT STEPS
              </span>
              <p className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-paper-50 leading-[0.95]">
                Let's build it.
              </p>
              <p className="mt-4 text-lead text-mist-300 max-w-xl">
                Have a project or workflow ready for real engineering? We reply with an honest read on scope, architecture and fit.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
              <Button to="/get-a-quote" variant="primary">
                Request a Quote
              </Button>
              <Button
                href={whatsappLink("Hello The TechByte, I would like to discuss a project.")}
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Sitemap & Contact Grid */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 border-b border-ink-800" data-reveal>
          {/* Col 1: Studio info (cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-display text-xl font-bold tracking-tight text-paper-50">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-sm text-mist-300 max-w-sm leading-relaxed">
              {COMPANY.description}
            </p>
            <address className="not-italic space-y-2.5 text-sm text-mist-300">
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-cyan-400 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-paper-50 transition-colors"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-cyan-400 shrink-0" aria-hidden="true" />
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-paper-50 transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="size-4 text-cyan-400 shrink-0" aria-hidden="true" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-paper-50 transition-colors"
                >
                  WhatsApp: +{CONTACT.whatsapp}
                </a>
              </p>
              <p className="pt-2 text-xs font-mono text-mist-300">
                Studio: {CONTACT.location}
              </p>
            </address>
          </div>

          {/* Col 2: Services List (cols 5-8) */}
          <div className="lg:col-span-4">
            <h2 className="font-mono text-label uppercase tracking-[0.14em] text-paper-50 mb-6">
              Services
            </h2>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-2 text-mist-300 hover:text-cyan-400 transition-colors"
                  >
                    <span className="size-1 rounded-full bg-ink-800 group-hover:bg-cyan-400 transition-colors" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Company (cols 9-10) */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-label uppercase tracking-[0.14em] text-paper-50 mb-6">
              Studio
            </h2>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-mist-300 hover:text-paper-50 transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/get-a-quote"
                  className="text-blue-400 hover:text-cyan-400 font-medium transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Standards (cols 11-12) */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-label uppercase tracking-[0.14em] text-paper-50 mb-6">
              Standards
            </h2>
            <ul className="space-y-3 text-sm text-mist-300">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-paper-50 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-paper-50 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="pt-4 text-xs font-mono text-mist-300/80">
                WCAG 2.2 AA Compliant
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Tagline & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-mist-300">
          <p className="uppercase tracking-[0.14em] text-cyan-400">
            {COMPANY.tagline}
          </p>
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
