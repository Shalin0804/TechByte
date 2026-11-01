import { useRef, useState } from "react";
import { CONTACT, whatsappLink } from "../../data/site";

/* Static-site form flow: there is no server. The form validates in the browser, then
   composes the message and lets the visitor send it by WhatsApp or email with everything
   pre-filled. It never claims a message was sent. */
export function useForm({ validate, compose }) {
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(null); // { subject, text } once valid
  const statusRef = useRef(null);

  function submit(body) {
    const v = validate(body);
    if (v.spam) return;
    if (Object.keys(v.errors).length) {
      setErrors(v.errors);
      requestAnimationFrame(() => document.querySelector("[aria-invalid='true']")?.focus());
      return;
    }
    setErrors({});
    setReady(compose(v.data));
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  return { errors, ready, submit, edit: () => setReady(null), statusRef };
}

/* Hidden from people, tempting to bots. */
export const Honeypot = () => (
  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
    <label>
      Leave this empty <input type="text" name="website" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

export function SubmitButton({ children }) {
  return (
    <button type="submit" className="tb-submit group relative inline-flex h-14 items-center gap-3 px-7 font-medium text-white">
      <span className="relative z-10">{children}</span>
      <span aria-hidden="true" className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
    </button>
  );
}

const mailto = ({ subject, text }) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

export function FormReady({ ready, statusRef, onEdit, title }) {
  return (
    <div ref={statusRef} tabIndex={-1} role="status" className="tb-success relative overflow-hidden border border-ink-800 bg-ink-900/60 p-6 md:p-10">
      <svg aria-hidden="true" viewBox="0 0 64 64" className="tb-check mb-6 h-14 w-14 text-cyan-400">
        <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 33l8 8 16-18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h2 className="text-h3">{title}</h2>
      <p className="mt-3 max-w-[52ch] text-mist-300">
        Nothing has been sent yet. Choose how you'd like to send it. Your message is already filled in, so you only need to press send.
      </p>
      <pre className="mt-6 max-h-56 overflow-auto whitespace-pre-wrap border-l-2 border-blue-500 bg-ink-950/70 p-4 font-mono text-sm text-paper-50/90">{ready.text}</pre>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={whatsappLink(ready.text)} target="_blank" rel="noopener noreferrer" className="tb-submit group relative inline-flex h-14 items-center gap-3 px-7 font-medium text-white">
          <span className="relative z-10">Send on WhatsApp</span>
          <span className="sr-only"> (opens in a new tab)</span>
          <span aria-hidden="true" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </a>
        <a href={mailto(ready)} className="inline-flex h-14 items-center border border-mist-300/40 px-7 font-medium transition-colors hover:border-blue-400 hover:text-blue-400">
          Send by email
        </a>
      </div>
      <p className="mt-6 text-sm text-mist-300">
        Or write to <a className="break-all text-blue-400 underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{" "}
        <a className="text-blue-400 underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.{" "}
        <button type="button" onClick={onEdit} className="text-blue-400 underline">Edit my message</button>
      </p>
    </div>
  );
}
