/**
 * ServiceGlyph component implementing DESIGN_SYSTEM §7 & TASKS.md C4.
 * 64×64 viewBox with stroke="currentColor" at 1.5px, aria-hidden="true".
 * Exclusively provides glyphs for the five owner-confirmed services:
 *  - software-development: branching logic tree
 *  - website-development: page outline with traces
 *  - web-application-development: modular panel grid with data flow traces
 *  - mobile-app-development: phone outline with reactive traces and nodes
 *  - it-consulting: compass / architectural roadmap trace
 */
export default function ServiceGlyph({ slug, className = "" }) {
  const commonProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `size-12 shrink-0 ${className}`,
    "aria-hidden": "true",
  };

  switch (slug) {
    case "software-development":
      // Branching logic tree
      return (
        <svg {...commonProps}>
          <line x1="32" y1="56" x2="32" y2="34" />
          <circle cx="32" cy="56" r="2.5" fill="var(--color-ink-950)" stroke="var(--color-cyan-400)" />
          <path d="M32 38 L16 26 V14" />
          <circle cx="16" cy="14" r="2.5" fill="var(--color-ink-950)" stroke="var(--color-cyan-400)" />
          <path d="M32 38 L48 26 V14" />
          <circle cx="48" cy="14" r="2.5" fill="var(--color-ink-950)" stroke="var(--color-cyan-400)" />
          <line x1="32" y1="34" x2="32" y2="10" />
          <circle cx="32" cy="10" r="2.5" fill="var(--color-ink-950)" stroke="var(--color-cyan-400)" />
          <line x1="24" y1="26" x2="40" y2="26" strokeDasharray="2 3" stroke="var(--color-blue-400)" />
        </svg>
      );

    case "website-development":
      // Clean page outline with structured editorial traces
      return (
        <svg {...commonProps}>
          <rect x="12" y="8" width="40" height="48" rx="2" />
          <line x1="18" y1="16" x2="28" y2="16" stroke="var(--color-cyan-400)" strokeWidth="2" />
          <line x1="42" y1="16" x2="46" y2="16" stroke="currentColor" />
          <line x1="18" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="2" />
          <line x1="18" y1="30" x2="38" y2="30" stroke="currentColor" />
          <line x1="18" y1="38" x2="30" y2="38" stroke="var(--color-blue-400)" />
          <line x1="18" y1="44" x2="28" y2="44" stroke="var(--color-blue-400)" />
          <rect x="34" y="36" width="12" height="12" stroke="currentColor" strokeDasharray="2 2" />
          <circle cx="46" cy="48" r="2" fill="var(--color-cyan-400)" stroke="none" />
        </svg>
      );

    case "web-application-development":
      // Modular panel grid with data flow traces
      return (
        <svg {...commonProps}>
          <rect x="10" y="10" width="44" height="44" rx="2" stroke="currentColor" />
          <line x1="10" y1="20" x2="54" y2="20" stroke="currentColor" />
          <circle cx="16" cy="15" r="1.5" fill="var(--color-cyan-400)" stroke="none" />
          <circle cx="21" cy="15" r="1.5" fill="currentColor" stroke="none" />
          <rect x="16" y="26" width="14" height="12" stroke="var(--color-blue-400)" />
          <rect x="34" y="26" width="14" height="22" stroke="currentColor" />
          <rect x="16" y="42" width="14" height="6" strokeDasharray="2 2" stroke="currentColor" />
          <path d="M30 32 H34" stroke="var(--color-cyan-400)" />
          <circle cx="34" cy="32" r="1.5" fill="var(--color-cyan-400)" stroke="none" />
        </svg>
      );

    case "mobile-app-development":
      // Phone silhouette with responsive traces and home node
      return (
        <svg {...commonProps}>
          <rect x="18" y="8" width="28" height="48" rx="4" />
          <line x1="28" y1="12" x2="36" y2="12" stroke="var(--color-mist-300)" />
          <line x1="22" y1="18" x2="42" y2="18" stroke="var(--color-blue-500)" strokeWidth="1.5" />
          <rect x="22" y="23" width="18" height="14" stroke="var(--color-blue-400)" strokeDasharray="2 2" />
          <path d="M22 42 H42" stroke="var(--color-cyan-400)" />
          <circle cx="32" cy="50" r="1.5" fill="var(--color-cyan-400)" stroke="none" />
        </svg>
      );

    case "it-consulting":
      // Compass / branching architectural roadmap trace
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="22" stroke="currentColor" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="32" cy="32" r="14" stroke="currentColor" strokeDasharray="2 2" opacity="0.6" />
          <circle cx="32" cy="32" r="6" fill="var(--color-ink-950)" stroke="var(--color-cyan-400)" />
          <line x1="10" y1="32" x2="54" y2="32" stroke="currentColor" opacity="0.3" />
          <line x1="32" y1="10" x2="32" y2="54" stroke="currentColor" opacity="0.3" />
          <path d="M32 32 L46 18" stroke="var(--color-cyan-400)" strokeWidth="2" />
          <circle cx="46" cy="18" r="2.5" fill="var(--color-cyan-400)" stroke="none" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="20" />
          <circle cx="32" cy="32" r="4" fill="var(--color-cyan-400)" />
        </svg>
      );
  }
}
