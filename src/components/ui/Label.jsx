/**
 * Index label component implementing DESIGN_SYSTEM §3.
 * Signature typographic device: `01 — DISCOVER` in mono, Geist Mono Variable,
 * 12px, uppercase, tracking 0.14em.
 */
export default function Label({
  index,
  children,
  className = "",
  color = "cyan", // 'cyan' | 'blue' | 'muted'
}) {
  const formattedIndex =
    typeof index === "number" ? String(index).padStart(2, "0") : index;

  const colorClasses = {
    cyan: "text-cyan-400",
    blue: "text-blue-400",
    muted: "text-mist-300",
    slate: "text-slate-600",
  }[color] || "text-cyan-400";

  return (
    <div
      className={`font-mono text-label uppercase tracking-[0.14em] inline-flex items-center gap-2 ${colorClasses} ${className}`}
    >
      {formattedIndex && (
        <span className="font-semibold">{formattedIndex} —</span>
      )}
      <span>{children}</span>
    </div>
  );
}
