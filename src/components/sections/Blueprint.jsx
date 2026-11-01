/**
 * Detailed SVG engineering blueprint illustration implementing DESIGN_SYSTEM §7.5.
 * Features wireframe grid, dimension marks, circuit trace schemas, and component callouts.
 * Strictly honest: represents schematic engineering in progress without fake client names.
 */
export default function Blueprint({ variant = 1, className = "" }) {
  if (variant === 2) {
    // Web Portal / Data Flow Schematic
    return (
      <svg
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto select-none overflow-visible ${className}`}
        aria-hidden="true"
      >
        {/* Blueprint coordinate grid */}
        <defs>
          <pattern id="bp-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-ink-800)" strokeWidth="0.75" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid-2)" />

        {/* Outer boundary frame with cut corners */}
        <path
          d="M 40 40 H 560 V 320 H 40 Z"
          stroke="var(--color-ink-800)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Data Architecture Blocks */}
        <rect x="70" y="80" width="130" height="80" stroke="var(--color-blue-500)" strokeWidth="1.5" fill="var(--color-ink-950)" />
        <text x="85" y="115" fill="var(--color-cyan-400)" fontFamily="Geist Mono Variable, monospace" fontSize="10" letterSpacing="0.1em">
          // CLIENT PORTAL
        </text>
        <text x="85" y="135" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="9">
          STATE: REACT 19
        </text>

        {/* Intermediary API Router Block */}
        <rect x="250" y="140" width="130" height="80" stroke="var(--color-cyan-400)" strokeWidth="1.5" fill="var(--color-ink-950)" />
        <text x="265" y="175" fill="var(--color-paper-50)" fontFamily="Geist Mono Variable, monospace" fontSize="10" letterSpacing="0.1em">
          // LOGIC ROUTER
        </text>
        <text x="265" y="195" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="9">
          REST / AUTH LAYER
        </text>

        {/* Database Store Block */}
        <rect x="430" y="200" width="130" height="80" stroke="var(--color-blue-400)" strokeWidth="1.5" fill="var(--color-ink-950)" />
        <text x="445" y="235" fill="var(--color-cyan-400)" fontFamily="Geist Mono Variable, monospace" fontSize="10" letterSpacing="0.1em">
          // DATA STORE
        </text>
        <text x="445" y="255" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="9">
          RELATIONAL SQL
        </text>

        {/* Connecting Traces with Signal Nodes */}
        <path d="M 200 120 H 250" stroke="var(--color-cyan-400)" strokeWidth="1.5" />
        <path d="M 380 180 H 430" stroke="var(--color-blue-500)" strokeWidth="1.5" />
        <circle cx="200" cy="120" r="3" fill="var(--color-cyan-400)" />
        <circle cx="250" cy="180" r="3" fill="var(--color-cyan-400)" />
        <circle cx="380" cy="180" r="3" fill="var(--color-blue-400)" />
        <circle cx="430" cy="240" r="3" fill="var(--color-blue-400)" />

        {/* Technical Callout Dimensions */}
        <line x1="70" y1="60" x2="200" y2="60" stroke="var(--color-mist-300)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <text x="110" y="55" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="8">
          W: 130PX
        </text>
      </svg>
    );
  }

  if (variant === 3) {
    // E-Commerce Checkout / Transaction Pipeline Schematic
    return (
      <svg
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto select-none overflow-visible ${className}`}
        aria-hidden="true"
      >
        <defs>
          <pattern id="bp-grid-3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-ink-800)" strokeWidth="0.75" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid-3)" />

        {/* Orbit Signal Rings */}
        <circle cx="300" cy="180" r="110" stroke="var(--color-ink-800)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="300" cy="180" r="70" stroke="var(--color-blue-500)" strokeWidth="1.5" />
        <circle cx="300" cy="180" r="30" stroke="var(--color-cyan-400)" strokeWidth="1.5" fill="var(--color-ink-950)" />

        {/* Center Kernel Node */}
        <circle cx="300" cy="180" r="6" fill="var(--color-cyan-400)" className="signal-node-pulse" />

        {/* Quadrant Circuit Nodes */}
        <line x1="120" y1="180" x2="480" y2="180" stroke="var(--color-ink-800)" strokeWidth="1" />
        <line x1="300" y1="50" x2="300" y2="310" stroke="var(--color-ink-800)" strokeWidth="1" />

        <circle cx="190" cy="180" r="4" fill="var(--color-ink-950)" stroke="var(--color-blue-500)" strokeWidth="1.5" />
        <circle cx="410" cy="180" r="4" fill="var(--color-ink-950)" stroke="var(--color-blue-500)" strokeWidth="1.5" />
        <circle cx="300" cy="110" r="4" fill="var(--color-ink-950)" stroke="var(--color-cyan-400)" strokeWidth="1.5" />
        <circle cx="300" cy="250" r="4" fill="var(--color-ink-950)" stroke="var(--color-cyan-400)" strokeWidth="1.5" />

        {/* Engineering Annotations */}
        <text x="50" y="60" fill="var(--color-cyan-400)" fontFamily="Geist Mono Variable, monospace" fontSize="10" letterSpacing="0.14em">
          // SECURE ORDER PIPELINE
        </text>
        <text x="50" y="80" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="9">
          LATENCY: &lt; 80MS · ATOMIC TRANSACTIONS
        </text>
        <text x="440" y="320" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="9">
          ID: TB-SYS-03
        </text>
      </svg>
    );
  }

  // Variant 1 (Default): System Architecture Blueprint
  return (
    <svg
      viewBox="0 0 600 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern id="bp-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-ink-800)" strokeWidth="0.75" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp-grid-1)" />

      {/* Main architectural layout frame */}
      <rect x="50" y="40" width="500" height="280" rx="2" stroke="var(--color-ink-800)" strokeWidth="1" />
      <line x1="50" y1="80" x2="550" y2="80" stroke="var(--color-ink-800)" strokeWidth="1" />

      {/* Header indices */}
      <circle cx="70" cy="60" r="3" fill="var(--color-cyan-400)" />
      <circle cx="85" cy="60" r="3" fill="var(--color-blue-500)" />
      <circle cx="100" cy="60" r="3" fill="var(--color-ink-800)" />
      <text x="130" y="64" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="10" letterSpacing="0.12em">
        ARCH_SCHEMATIC // SPEC-01
      </text>

      {/* Internal Grid Wireframe */}
      <rect x="80" y="110" width="160" height="180" stroke="var(--color-blue-500)" strokeWidth="1.5" strokeDasharray="4 4" />
      <rect x="270" y="110" width="250" height="80" stroke="var(--color-cyan-400)" strokeWidth="1.5" />
      <rect x="270" y="210" width="250" height="80" stroke="var(--color-paper-50)" strokeWidth="1" opacity="0.4" />

      {/* Connecting Trace Bus */}
      <path d="M 160 200 H 270" stroke="var(--color-cyan-400)" strokeWidth="2" />
      <circle cx="160" cy="200" r="4" fill="var(--color-cyan-400)" />
      <circle cx="270" cy="200" r="4" fill="var(--color-cyan-400)" />

      {/* Technical Dimensions and Ticks */}
      <line x1="80" y1="305" x2="240" y2="305" stroke="var(--color-mist-300)" strokeWidth="1" />
      <line x1="80" y1="300" x2="80" y2="310" stroke="var(--color-mist-300)" strokeWidth="1" />
      <line x1="240" y1="300" x2="240" y2="310" stroke="var(--color-mist-300)" strokeWidth="1" />
      <text x="140" y="318" fill="var(--color-mist-300)" fontFamily="Geist Mono Variable, monospace" fontSize="9" textAnchor="middle">
        SPAN: 160U
      </text>
    </svg>
  );
}
