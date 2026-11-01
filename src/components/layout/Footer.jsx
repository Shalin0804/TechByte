import { Link } from "react-router";
import { COMPANY, CONTACT, NAV } from "../../data/site";

/* T01 stub. Antigravity replaces this in T04. */
export default function Footer() {
  return (
    <footer className="on-ink border-t border-ink-800">
      <div className="container-x grid gap-6 py-12 md:grid-cols-3">
        <p className="font-mono text-label uppercase tracking-[0.14em]">{COMPANY.tagline}</p>
        <address className="not-italic">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><br />
          {CONTACT.location}
        </address>
        <ul>
          {NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms &amp; Conditions</Link></li>
        </ul>
      </div>
    </footer>
  );
}
