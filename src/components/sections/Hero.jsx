import { useState, useRef, useEffect } from "react";
import { HERO } from "../../data/site";
import Button from "../ui/Button";

/**
 * Hero component implementing DESIGN_SYSTEM §7.1 & TASKS.md T05: "Trace Field".
 * - On ink.
 * - Left column (cols 1-7): H1 server-rendered with 300ms clip reveal (no LCP delay),
 *   eyebrow, lead, and CTAs.
 * - Right column (cols 8-12): Hand-drawn SVG T+B monogram with circuit traces drawing on load
 *   to three terminal nodes labelled BUILD, INNOVATE, and TRANSFORM.
 * - Signal pulse loops slowly along a primary trace.
 * - Pointer-reactive glow to nearest node on fine pointers.
 * - Zero layout shift: fixed aspect ratio viewBox.
 */
export default function Hero() {
  const [nearestNode, setNearestNode] = useState(1); // default active node (0: Build, 1: Innovate, 2: Transform)
  const svgRef = useRef(null);

  // Terminal node coordinates in SVG space (viewBox 0 0 540 500)
  const nodes = [
    { id: 0, label: "BUILD", x: 440, y: 70 },
    { id: 1, label: "INNOVATE", x: 470, y: 250 },
    { id: 2, label: "TRANSFORM", x: 430, y: 430 },
  ];

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const handlePointerMove = (e) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      if (
        e.clientX < rect.left - 50 ||
        e.clientX > rect.right + 50 ||
        e.clientY < rect.top - 50 ||
        e.clientY > rect.bottom + 50
      ) {
        return;
      }

      // Convert client coords to SVG coords
      const scaleX = 540 / rect.width;
      const scaleY = 500 / rect.height;
      const mouseSvgX = (e.clientX - rect.left) * scaleX;
      const mouseSvgY = (e.clientY - rect.top) * scaleY;

      // Find nearest node
      let closestIdx = 0;
      let minDistance = Infinity;

      nodes.forEach((n, idx) => {
        const dx = n.x - mouseSvgX;
        const dy = n.y - mouseSvgY;
        const dist = dx * dx + dy * dy;
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setNearestNode(closestIdx);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <section className="on-ink relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background radial gradient glow (DESIGN_SYSTEM §2: blue-500 at 18% opacity) */}
      <div
        className="pointer-events-none absolute right-[5%] top-[20%] w-[550px] h-[550px] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(31, 107, 255, 0.18) 0%, rgba(5, 11, 31, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle background circuit grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10 select-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-ink-800)" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="var(--color-ink-800)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
        </svg>
      </div>

      <div className="container-x relative z-10 w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headline and CTAs (cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow with signal pulse dot */}
            <div className="inline-flex items-center gap-3">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#2ed3f0]" />
              </span>
              <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                {HERO.eyebrow}
              </span>
            </div>

            {/* Main H1 with 300ms clip reveal */}
            <h1 className="hero-clip-reveal text-display text-paper-50 leading-[0.95] tracking-tight">
              {HERO.title}
            </h1>

            {/* Lead paragraph */}
            <p className="text-lead text-mist-300 max-w-[60ch] leading-relaxed">
              {HERO.lead}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/get-a-quote" variant="primary">
                Let's Talk
              </Button>
              <Button to="/work" variant="secondary">
                Explore Our Work
              </Button>
            </div>

            {/* Engineering standard indicator */}
            <div className="pt-6 border-t border-ink-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-mist-300">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-500" />
                <span>Zero bloated templates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-500" />
                <span>Direct partner engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <span>Ahmedabad · Worldwide remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hand-drawn T+B Monogram "Trace Field" (cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[540/500]">
              <svg
                ref={svgRef}
                viewBox="0 0 540 500"
                className="w-full h-full select-none overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="The TechByte monogram: T and B joined by circuit traces ending in Build, Innovate, and Transform nodes."
              >
                <title>The TechByte Trace Field Monogram</title>
                <defs>
                  {/* Subtle node glow filter */}
                  <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Circuit background grid traces */}
                <g stroke="var(--color-ink-800)" strokeWidth="1" strokeDasharray="3 5" opacity="0.6">
                  <line x1="60" y1="70" x2="440" y2="70" />
                  <line x1="60" y1="250" x2="470" y2="250" />
                  <line x1="60" y1="430" x2="430" y2="430" />
                  <line x1="160" y1="30" x2="160" y2="470" />
                  <line x1="280" y1="30" x2="280" y2="470" />
                </g>

                {/* 1. MONOGRAM T (Left) */}
                {/* Horizontal bar with chamfer cuts */}
                <path
                  d="M 60 120 L 220 120"
                  stroke="var(--color-paper-50)"
                  strokeWidth="8"
                  strokeLinecap="square"
                  className="animate-draw"
                  style={{ "--dash-len": "200" }}
                />
                {/* Vertical stem */}
                <path
                  d="M 140 120 V 380"
                  stroke="var(--color-paper-50)"
                  strokeWidth="8"
                  strokeLinecap="square"
                  className="animate-draw"
                  style={{ "--dash-len": "280" }}
                />

                {/* 2. MONOGRAM B (Right) */}
                {/* Vertical stem */}
                <path
                  d="M 240 120 V 380"
                  stroke="var(--color-blue-500)"
                  strokeWidth="8"
                  strokeLinecap="square"
                  className="animate-draw"
                  style={{ "--dash-len": "280" }}
                />
                {/* Upper bowl with chamfer corners */}
                <path
                  d="M 240 124 H 330 L 360 154 V 216 L 330 246 H 240"
                  stroke="var(--color-blue-500)"
                  strokeWidth="8"
                  strokeLinejoin="bevel"
                  className="animate-draw"
                  style={{ "--dash-len": "320" }}
                />
                {/* Lower bowl with chamfer corners */}
                <path
                  d="M 240 254 H 340 L 370 284 V 346 L 340 376 H 240"
                  stroke="var(--color-blue-500)"
                  strokeWidth="8"
                  strokeLinejoin="bevel"
                  className="animate-draw"
                  style={{ "--dash-len": "340" }}
                />

                {/* 3. ACTIVE CIRCUIT TRACES OUTWARD TO TERMINAL NODES */}
                {/* Trace 1 to BUILD (top right) */}
                <path
                  id="trace-build"
                  d="M 220 120 H 360 L 410 70 H 440"
                  stroke={nearestNode === 0 ? "var(--color-cyan-400)" : "var(--color-blue-400)"}
                  strokeWidth="2"
                  className="animate-draw"
                  style={{ "--dash-len": "300" }}
                />
                {/* Trace 2 to INNOVATE (center right) */}
                <path
                  id="trace-innovate"
                  d="M 330 250 H 470"
                  stroke={nearestNode === 1 ? "var(--color-cyan-400)" : "var(--color-blue-500)"}
                  strokeWidth="2.5"
                  className="animate-draw"
                  style={{ "--dash-len": "160" }}
                />
                {/* Trace 3 to TRANSFORM (bottom right) */}
                <path
                  id="trace-transform"
                  d="M 340 376 L 394 430 H 430"
                  stroke={nearestNode === 2 ? "var(--color-cyan-400)" : "var(--color-blue-400)"}
                  strokeWidth="2"
                  className="animate-draw"
                  style={{ "--dash-len": "200" }}
                />

                {/* Branching diagnostic cross-traces */}
                <path
                  d="M 140 300 H 240"
                  stroke="var(--color-ink-800)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="140" cy="300" r="3" fill="var(--color-ink-950)" stroke="var(--color-blue-500)" strokeWidth="1.5" />
                <circle cx="240" cy="300" r="3" fill="var(--color-ink-950)" stroke="var(--color-blue-500)" strokeWidth="1.5" />

                {/* 4. SIGNAL PULSES TRAVELLING ALONG TRACES */}
                {/* Pulse moving along INNOVATE trace */}
                <circle r="4" fill="var(--color-cyan-400)" className="signal-node-pulse">
                  <animateMotion
                    path="M 240 250 H 470"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Secondary pulse on BUILD trace */}
                <circle r="3" fill="var(--color-blue-400)">
                  <animateMotion
                    path="M 220 120 H 360 L 410 70 H 440"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 5. THREE TERMINAL NODES (BUILD, INNOVATE, TRANSFORM) */}
                {nodes.map((node) => {
                  const isNearest = nearestNode === node.id;
                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer transition-transform duration-200"
                      onPointerEnter={() => setNearestNode(node.id)}
                    >
                      {/* Outer pulse aura */}
                      {isNearest && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="16"
                          fill="rgba(46, 211, 240, 0.15)"
                          className="signal-node-pulse"
                        />
                      )}
                      {/* Intermediate ring */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="8"
                        stroke={isNearest ? "var(--color-cyan-400)" : "var(--color-blue-500)"}
                        strokeWidth="1.5"
                        fill="var(--color-ink-950)"
                      />
                      {/* Center core */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="3.5"
                        fill={isNearest ? "var(--color-cyan-400)" : "var(--color-blue-400)"}
                      />
                      {/* Monospace Terminal Node Label */}
                      <text
                        x={node.x + 14}
                        y={node.y + 4}
                        fill={isNearest ? "var(--color-cyan-400)" : "var(--color-paper-50)"}
                        fontFamily="Geist Mono Variable, monospace"
                        fontSize="11"
                        letterSpacing="0.14em"
                        fontWeight="600"
                        className="select-none transition-colors duration-150"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
