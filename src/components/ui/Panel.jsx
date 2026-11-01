/**
 * Panel component implementing DESIGN_SYSTEM §6.
 * Chamfered panel (--cut-panel: 20px) with hairline border and one 6px node
 * at the midpoint of the top-left cut (c/2, c/2) = (10px, 10px).
 */
export default function Panel({
  children,
  className = "",
  showNode = true,
  nodeGlow = false,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`chamfer-panel relative p-6 sm:p-8 ${className}`}
      {...props}
    >
      {showNode && (
        <span
          className="pointer-events-none absolute left-[10px] top-[10px] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <span
            className={`block size-[6px] rounded-full border border-cyan-400 bg-ink-950 ${
              nodeGlow ? "signal-node-pulse" : ""
            }`}
          />
        </span>
      )}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
