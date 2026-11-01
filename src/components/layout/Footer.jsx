import { Link } from "react-router";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { COMPANY, CONTACT, whatsappLink } from "../../data/site";
import { services } from "../../data/services";
import Button from "../ui/Button";

/**
 * Footer component implementing DESIGN_SYSTEM §6 & TASKS.md C4.
 * - Deep navy ink background (on-ink)
 * - Large "Let's build it." statement with interactive CTA
 * - Real logo: /brand/logo-full-light.png (~h 120-160px, lazy)
 * - Contact details with real mailto, tel, and WhatsApp links
 * - Columns: Services (six), Company (About, Process, Technologies, Industries, Work),
 *   Resources (Insights, FAQ, Get a Quote, Contact), Legal
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
        {/* Top banner. Its headline differs from the pages' final CTA ("Let's build it.") so the two never repeat back to back. */}
        <div className="border-b border-ink-800 pb-16 lg:pb-20" data-reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                00 — NEXT STEPS
              </span>
              <p className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-paper-50 leading-[0.95]">
                Have a project in mind?
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
                WhatsApp Chat<span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Sitemap & Contact Grid (5 columns: Brand, Services, Company, Resources, Legal) */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12 border-b border-ink-800" data-reveal>
          {/* Col 1: Studio info + Logo (cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block" aria-label={`${COMPANY.name} — Home`}>
              <img
                src="/brand/logo-full-light.png"
                alt="The TechByte — Build • Innovate • Transform"
                width="171"
                height="130"
                loading="lazy"
                className="h-28 sm:h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-mist-300 max-w-sm leading-relaxed">
              {COMPANY.description}
            </p>
            <address className="not-italic space-y-2.5 text-sm text-mist-300 pt-2">
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
                Location: {CONTACT.location}
              </p>
            </address>
          </div>

          {/* Col 2: Services List (six) (cols 5-7) */}
          <div className="lg:col-span-3">
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

          {/* Col 3: Company (cols 8-9) */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-label uppercase tracking-[0.14em] text-paper-50 mb-6">
              Company
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-mist-300 hover:text-paper-50 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-mist-300 hover:text-paper-50 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-mist-300 hover:text-paper-50 transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-mist-300 hover:text-paper-50 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-mist-300 hover:text-paper-50 transition-colors">
                  Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources (cols 10-11) */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-label uppercase tracking-[0.14em] text-paper-50 mb-6">
              Resources
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/insights" className="text-mist-300 hover:text-paper-50 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-mist-300 hover:text-paper-50 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" className="text-blue-400 hover:text-cyan-400 font-medium transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-mist-300 hover:text-paper-50 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal (col 12) */}
          <div className="lg:col-span-1">
            <h2 className="font-mono text-label uppercase tracking-[0.14em] text-paper-50 mb-6">
              Legal
            </h2>
            <ul className="space-y-3 text-sm text-mist-300">
              <li>
                <Link to="/privacy-policy" className="hover:text-paper-50 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-paper-50 transition-colors">
                  Terms
                </Link>
              </li>
              <li className="pt-4 text-[11px] font-mono text-mist-300/80">
                WCAG 2.2 AA
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
