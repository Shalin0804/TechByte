import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ArrowUpRight, Phone, Mail, ChevronDown } from "lucide-react";
import { COMPANY, CONTACT } from "../../data/site";
import { services } from "../../data/services";
import Button from "../ui/Button";
import Cursor from "./Cursor";

const NAV_LINKS = [
  { label: "Process", to: "/process" },
  { label: "Technologies", to: "/technologies" },
  { label: "Industries", to: "/industries" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const lastScrollY = useRef(0);
  const rafId = useRef(null);
  const { pathname } = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesMenuOpen(false);
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

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target)
      ) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrolled(currentY > 20);

        const hasFocus = headerRef.current?.contains(document.activeElement);

        if (hasFocus || currentY < 80) {
          setVisible(true);
        } else if (currentY > lastScrollY.current && currentY > 120) {
          setVisible(false);
          setServicesMenuOpen(false);
        } else if (currentY < lastScrollY.current) {
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

  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <Cursor />
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-ink-950/90 backdrop-blur-md border-b border-ink-800/80 shadow-lg shadow-ink-950/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="container-x flex h-[var(--nav-h)] items-center justify-between gap-4"
        >
          {/* Logo Brand: Real Logo Mark + Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 py-1"
            aria-label={`${COMPANY.name} — Home`}
          >
            <img
              src="/brand/logo-mark-light.png"
              alt="The TechByte"
              width="52"
              height="36"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-paper-50 group-hover:text-white transition-colors">
                The TechByte
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-mist-300">
                Ahmedabad · Remote
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {/* Services with Dropdown */}
            <li
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <div className="flex items-center gap-1">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `relative py-1 font-sans text-[13px] tracking-tight transition-colors duration-200 ${
                      isActive || isServicesActive
                        ? "text-paper-50 font-medium"
                        : "text-mist-300 hover:text-paper-50"
                    }`
                  }
                >
                  Services
                  {(isServicesActive) && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400"
                      aria-hidden="true"
                    />
                  )}
                </NavLink>
                <button
                  type="button"
                  aria-expanded={servicesMenuOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesMenuOpen((v) => !v)}
                  className="p-1 text-mist-300 hover:text-paper-50 focus-visible:outline-none"
                  aria-label="Toggle services menu"
                >
                  <ChevronDown
                    className={`size-3.5 transition-transform duration-200 ${
                      servicesMenuOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Services Dropdown Menu */}
              {servicesMenuOpen && (
                <div
                  role="menu"
                  aria-label="Services List"
                  className="absolute left-0 top-full pt-2 w-[340px] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="chamfer-panel p-4 bg-ink-900 border border-ink-800 shadow-xl shadow-ink-950/80">
                    <div className="mb-2 pb-2 border-b border-ink-800 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400">
                        Capabilities
                      </span>
                      <Link
                        to="/services"
                        className="font-mono text-[11px] text-blue-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                      >
                        All Services
                        <ArrowUpRight className="size-3" />
                      </Link>
                    </div>

                    <div className="grid gap-1">
                      {services.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          role="menuitem"
                          className="group p-2 rounded-[2px] hover:bg-ink-950/80 transition-colors flex flex-col"
                        >
                          <span className="font-display text-sm font-medium text-paper-50 group-hover:text-cyan-400 transition-colors">
                            {svc.title}
                          </span>
                          <span className="text-[11px] text-mist-300 line-clamp-1 leading-snug">
                            {svc.short}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Other Navigation Links */}
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative py-1 font-sans text-[13px] tracking-tight transition-colors duration-200 ${
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
            {/* wrapper hides it on phones: Button's own inline-flex would override a "hidden" class */}
            <div className="hidden sm:block">
              <Button to="/get-a-quote" variant="primary" className="text-xs py-2 px-4 h-10">
                Let's Talk
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="chamfer inline-flex size-11 items-center justify-center text-paper-50 lg:hidden hover:text-cyan-400 focus-visible:outline-none"
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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-ink-950 p-6 sm:p-8 lg:hidden overflow-y-auto"
        >
          {/* Mobile Overlay Header */}
          <div className="flex items-center justify-between border-b border-ink-800 pb-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src="/brand/logo-mark-light.png"
                alt="The TechByte"
                width="52"
                height="36"
                className="h-8 w-auto object-contain"
              />
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

          {/* Mobile Navigation Links */}
          <div className="my-auto py-6">
            <ul className="flex flex-col gap-4">
              {/* Expandable Services */}
              <li className="border-b border-ink-800/60 pb-3">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-2xl font-semibold transition-colors ${
                        isActive ? "text-cyan-400" : "text-paper-50 hover:text-blue-400"
                      }`
                    }
                  >
                    Services
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-label="Toggle mobile services list"
                    className="p-2 text-mist-300 hover:text-cyan-400"
                  >
                    <ChevronDown
                      className={`size-5 transition-transform ${
                        mobileServicesOpen ? "rotate-180 text-cyan-400" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <ul className="mt-3 pl-4 space-y-2 border-l border-ink-800">
                    {services.map((svc) => (
                      <li key={svc.slug}>
                        <NavLink
                          to={`/services/${svc.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `block py-1 text-sm font-sans transition-colors ${
                              isActive ? "text-cyan-400 font-medium" : "text-mist-300 hover:text-paper-50"
                            }`
                          }
                        >
                          {svc.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* All Other Nav Links */}
              {NAV_LINKS.map((item, idx) => (
                <li key={item.to} className="border-b border-ink-800/60 pb-3">
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-baseline justify-between transition-colors ${
                        isActive ? "text-cyan-400" : "text-paper-50 hover:text-blue-400"
                      }`
                    }
                  >
                    <span className="font-display text-2xl font-semibold">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-mist-300">
                      {String(idx + 2).padStart(2, "0")}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="space-y-4 border-t border-ink-800 pt-4">
            <Button
              to="/get-a-quote"
              variant="primary"
              className="w-full justify-between"
              onClick={() => setMobileOpen(false)}
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="size-4" />
            </Button>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-mist-300 pt-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="size-3.5 shrink-0" />
                <span className="truncate">{CONTACT.email}</span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="size-3.5 shrink-0" />
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
