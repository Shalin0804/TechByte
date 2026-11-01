import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { NAV, COMPANY, CONTACT } from "../../data/site";
import Button from "../ui/Button";
import Cursor from "./Cursor";

/**
 * Navigation component implementing DESIGN_SYSTEM §6 & TASKS.md T04.
 * - 72px height (--nav-h)
 * - Transparent at top, frosted glass (bg-ink-950/85 backdrop-blur-md) on scroll
 * - Hide on scroll down / show on scroll up (throttled rAF, stays visible if focus is inside)
 * - Mobile full-screen ink overlay with focus trap, ESC to close, staggered links, body scroll lock
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);
  const rafId = useRef(null);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle Esc key to close mobile menu & trap focus
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;

        // Has scrolled past threshold
        setScrolled(currentY > 20);

        // Keep visible if focus is inside nav
        const hasFocus = headerRef.current?.contains(document.activeElement);

        if (hasFocus || currentY < 80) {
          setVisible(true);
        } else if (currentY > lastScrollY.current && currentY > 120) {
          // Scrolling down
          setVisible(false);
        } else if (currentY < lastScrollY.current) {
          // Scrolling up
          setVisible(true);
        }

        lastScrollY.current = currentY;
        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <Cursor />
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-ink-950/85 backdrop-blur-md border-b border-ink-800/80 shadow-lg shadow-ink-950/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="container-x flex h-[var(--nav-h)] items-center justify-between gap-6"
        >
          {/* Logo Brand: Monogram + Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 py-1"
            aria-label={`${COMPANY.name} — Home`}
          >
            {/* Hand-drawn T+B Circuit Mark */}
            <div className="relative flex size-9 items-center justify-center rounded-[2px] bg-ink-900 border border-ink-800 transition-colors group-hover:border-blue-500">
              <svg
                viewBox="0 0 36 36"
                className="size-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Circuit Trace Path */}
                <path
                  d="M6 10 H18 V26"
                  stroke="var(--color-blue-500)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18 10 H30 M24 10 V26 H30"
                  stroke="var(--color-paper-50)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18 18 H28"
                  stroke="var(--color-blue-400)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Trace Terminal Nodes */}
                <circle cx="6" cy="10" r="1.75" fill="var(--color-cyan-400)" />
                <circle cx="30" cy="10" r="1.75" fill="var(--color-cyan-400)" />
                <circle cx="18" cy="26" r="1.75" fill="var(--color-cyan-400)" />
                <circle cx="30" cy="26" r="1.75" fill="var(--color-blue-400)" />
              </svg>
              {/* Subtle top cut node */}
              <span
                className="absolute -top-0.5 -left-0.5 size-1 rounded-full bg-cyan-400"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-paper-50 group-hover:text-white transition-colors">
                The TechByte
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-mist-300">
                Studio · Ahmedabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative py-1 font-sans text-sm tracking-tight transition-colors duration-200 ${
                      isActive
                        ? "text-paper-50 font-medium"
                        : "text-mist-300 hover:text-paper-50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              to="/get-a-quote"
              variant="primary"
              className="hidden sm:inline-flex"
            >
              Let's Talk
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="chamfer inline-flex size-11 items-center justify-center text-paper-50 md:hidden hover:text-cyan-400 focus-visible:outline-none"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-ink-950 p-6 sm:p-10 md:hidden overflow-y-auto"
        >
          {/* Mobile Overlay Header */}
          <div className="flex items-center justify-between border-b border-ink-800 pb-6">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex size-9 items-center justify-center rounded-[2px] bg-ink-900 border border-ink-800">
                <span className="size-2 rounded-full bg-cyan-400" />
              </div>
              <span className="font-display text-lg font-semibold text-paper-50">
                The TechByte
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="chamfer inline-flex size-11 items-center justify-center text-paper-50 hover:text-cyan-400"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Numbered Staggered Navigation Links */}
          <div className="my-auto py-8">
            <ul className="flex flex-col gap-6">
              {NAV.map((item, idx) => (
                <li
                  key={item.to}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-3 duration-300"
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-baseline justify-between border-b border-ink-800/60 pb-3 transition-colors ${
                        isActive ? "text-cyan-400" : "text-paper-50 hover:text-blue-400"
                      }`
                    }
                  >
                    <span className="font-display text-3xl font-semibold sm:text-4xl">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-mist-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="space-y-6 border-t border-ink-800 pt-6">
            <Button
              to="/get-a-quote"
              variant="primary"
              className="w-full justify-between"
              onClick={() => setMobileOpen(false)}
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="size-4" />
            </Button>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-mist-300">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="size-3.5" />
                <span className="truncate">{CONTACT.email}</span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="size-3.5" />
                <span>{CONTACT.phoneDisplay}</span>
              </a>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist-300">
              {COMPANY.tagline} · {CONTACT.location}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
