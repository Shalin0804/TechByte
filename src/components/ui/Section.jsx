/**
 * Section component implementing DESIGN_SYSTEM §2 & §4.
 * Alternates between 'ink' and 'paper' themes with proper focus variables,
 * section padding, and container width.
 */
export default function Section({
  as: Component = "section",
  theme = "ink", // 'ink' | 'paper'
  id,
  className = "",
  containerClassName = "",
  children,
  ...props
}) {
  const themeClass = theme === "paper" ? "on-paper" : "on-ink";

  return (
    <Component
      id={id}
      className={`${themeClass} py-16 sm:py-24 lg:py-32 relative overflow-hidden ${className}`}
      {...props}
    >
      <div className={`container-x ${containerClassName}`}>{children}</div>
    </Component>
  );
}
