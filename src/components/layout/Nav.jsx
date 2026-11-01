import { Link, NavLink } from "react-router";
import { NAV } from "../../data/site";

/* T01 stub. Antigravity replaces this in T04 (hide-on-scroll, mobile overlay). */
export default function Nav() {
  return (
    <header className="on-ink">
      <nav aria-label="Main" className="container-x flex h-[var(--nav-h)] items-center justify-between gap-6">
        <Link to="/" className="font-display text-lg font-semibold">The TechByte</Link>
        <ul className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <li key={n.to}><NavLink to={n.to}>{n.label}</NavLink></li>
          ))}
        </ul>
        <Link to="/get-a-quote" className="bg-blue-600 px-4 py-2 text-white">Let's Talk</Link>
      </nav>
    </header>
  );
}
