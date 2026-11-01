import Label from "./Label";

/**
 * Editorial PageHeader for subpages (About, Services, Work, Insights).
 * Strictly guarantees exactly one <h1> per page with an asymmetric editorial layout.
 */
export default function PageHeader({
  eyebrowIndex = "01",
  eyebrowText,
  title,
  lead,
  children,
  className = "",
}) {
  return (
    <header className={`pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-ink-800/80 relative ${className}`}>
      {/* Background subtle signal trace */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 select-none" aria-hidden="true">
        <svg
          className="absolute -right-20 -top-20 w-[600px] h-[400px] text-ink-800"
          fill="none"
          viewBox="0 0 600 400"
        >
          <path
            d="M 50 50 L 250 50 L 350 150 L 550 150"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle cx="250" cy="50" r="3" fill="var(--color-ink-950)" stroke="var(--color-blue-500)" strokeWidth="1.5" />
          <circle cx="350" cy="150" r="3" fill="var(--color-ink-950)" stroke="var(--color-blue-500)" strokeWidth="1.5" />
          <circle cx="550" cy="150" r="4" fill="var(--color-cyan-400)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl" data-reveal>
        {eyebrowText && (
          <div className="mb-4">
            <Label index={eyebrowIndex}>{eyebrowText}</Label>
          </div>
        )}
        <h1 className="text-h1 text-paper-50 tracking-tight">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 text-lead text-mist-300 max-w-[64ch] leading-relaxed">
            {lead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
