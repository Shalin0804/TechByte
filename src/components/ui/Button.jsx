import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

/**
 * Button component implementing DESIGN_SYSTEM §5 & §6.
 * Chamfered corners with ::before/::after layers so focus outline isn't clipped.
 * Variants:
 *  - primary: blue-500 fill, white text, arrow shifting on hover, 48px height.
 *  - secondary: transparent fill, hairline border, bottom trace line on hover.
 *  - text: text link with scaling trace underline.
 */
export default function Button({
  as: Component,
  variant = "primary",
  to,
  href,
  icon,
  className = "",
  children,
  ...props
}) {
  const showIcon = icon !== undefined ? icon : variant === "primary";

  // Determine element type
  let Tag = Component;
  if (!Tag) {
    if (to) Tag = Link;
    else if (href) Tag = "a";
    else Tag = "button";
  }

  if (variant === "text") {
    return (
      <Tag
        to={to}
        href={href}
        className={`link-trace group inline-flex items-center gap-1.5 font-medium text-sm transition-colors duration-200 ${className}`}
        {...props}
      >
        <span>{children}</span>
        {showIcon && (
          <ArrowUpRight
            className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </Tag>
    );
  }

  const baseStyles =
    "chamfer group relative inline-flex min-h-[48px] min-w-[44px] items-center justify-center gap-2.5 px-6 py-3 font-sans text-sm font-medium tracking-tight select-none transition-transform duration-200 active:scale-[0.98]";

  const variantClass = variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <Tag
      to={to}
      href={href}
      className={`${baseStyles} ${variantClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        <span>{children}</span>
        {showIcon && (
          <ArrowUpRight
            className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </span>
      {variant === "secondary" && (
        <span className="trace-underline pointer-events-none" aria-hidden="true" />
      )}
    </Tag>
  );
}
