/* Labelled form control: input (default), textarea or select. Errors are linked with
   aria-describedby. The focus line is a trace that draws in from the left. */
export default function Field({ label, name, as: Tag = "input", error, hint, required, children, className = "", ...rest }) {
  const id = `f-${name}`;
  const describedBy = [error && `${id}-err`, hint && `${id}-hint`].filter(Boolean).join(" ") || undefined;
  return (
    <div className={`group relative ${className}`}>
      <label htmlFor={id} className="mb-2 block font-mono text-label uppercase tracking-[0.14em] text-mist-300">
        {label}
        {required ? <span aria-hidden="true" className="text-cyan-400"> *</span> : <span className="normal-case tracking-normal"> (optional)</span>}
      </label>
      <div className="relative">
        <Tag
          id={id}
          name={name}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={`peer block w-full rounded-[2px] border bg-ink-900/60 px-4 text-base text-paper-50 placeholder:text-mist-300/60 transition-colors duration-150 focus:border-blue-400 focus:outline-none ${
            Tag === "textarea" ? "min-h-40 py-3 leading-relaxed" : "h-12"
          } ${error ? "border-red-400" : "border-ink-800 hover:border-mist-300/40"}`}
          {...rest}
        >
          {children}
        </Tag>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 ease-out peer-focus:scale-x-100"
        />
      </div>
      {hint && !error && <p id={`${id}-hint`} className="mt-2 text-sm text-mist-300">{hint}</p>}
      {error && <p id={`${id}-err`} className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  );
}
