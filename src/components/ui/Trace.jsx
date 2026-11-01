/**
 * Trace component implementing DESIGN_SYSTEM §6.
 * A 1px SVG line with terminal nodes and an optional animated signal pulse.
 * Self-contained SVG with fixed viewBox.
 */
export default function Trace({
  direction = "horizontal", // 'horizontal' | 'vertical'
  active = false,
  hasPulse = true,
  length = 200,
  className = "",
}) {
  const strokeColor = active ? "var(--color-blue-500)" : "currentColor";
  const nodeColor = active ? "var(--color-cyan-400)" : "currentColor";

  if (direction === "vertical") {
    return (
      <svg
        width="16"
        height={length}
        viewBox={`0 0 16 ${length}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none text-ink-800 ${className}`}
        aria-hidden="true"
      >
        {/* Terminal nodes */}
        <circle cx="8" cy="4" r="3" stroke={nodeColor} strokeWidth="1.5" fill="var(--color-ink-950)" />
        <circle cx="8" cy={length - 4} r="3" stroke={nodeColor} strokeWidth="1.5" fill="var(--color-ink-950)" />

        {/* Trace line */}
        <line x1="8" y1="7" x2="8" y2={length - 7} stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" />

        {/* Signal Pulse */}
        {hasPulse && active && (
          <circle cx="8" cy="10" r="2.5" fill="var(--color-cyan-400)" className="signal-node-pulse">
            <animate
              attributeName="cy"
              from="8"
              to={length - 8}
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        )}
      </svg>
    );
  }

  return (
    <svg
      width={length}
      height="16"
      viewBox={`0 0 ${length} 16`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-ink-800 ${className}`}
      aria-hidden="true"
    >
      {/* Terminal nodes */}
      <circle cx="4" cy="8" r="3" stroke={nodeColor} strokeWidth="1.5" fill="var(--color-ink-950)" />
      <circle cx={length - 4} cy="8" r="3" stroke={nodeColor} strokeWidth="1.5" fill="var(--color-ink-950)" />

      {/* Trace line */}
      <line x1="7" y1="8" x2={length - 7} y2="8" stroke={strokeColor} strokeWidth="1" />

      {/* Signal pulse */}
      {hasPulse && active && (
        <circle cx="10" cy="8" r="2.5" fill="var(--color-cyan-400)" className="signal-node-pulse">
          <animate
            attributeName="cx"
            from="8"
            to={length - 8}
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </svg>
  );
}
