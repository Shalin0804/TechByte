import { Link } from "react-router";
import { Seo } from "../lib/seo";
import { services } from "../data/services";

export default function NotFound() {
  return (
    <section className="on-ink relative overflow-hidden pt-[calc(var(--nav-h)+4rem)] pb-[var(--space-section)]">
      <Seo title="Page not found" description="This page does not exist." path="/404" noindex />
      <div aria-hidden="true" className="tb-grid-bg" />
      <div className="container-x relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="tb-label">Error 404</p>
          <h1 className="tb-split mt-6 text-h1"><span>This trace</span> <span>leads nowhere.</span></h1>
          <p className="mt-8 max-w-[48ch] text-lead text-mist-300">The page you were looking for doesn't exist or has moved. These routes are connected:</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li><Link className="text-blue-400 underline underline-offset-4" to="/">Home</Link></li>
            <li><Link className="text-blue-400 underline underline-offset-4" to="/get-a-quote">Get a quote</Link></li>
            {services.map((s) => (
              <li key={s.slug}><Link className="text-blue-400 underline underline-offset-4" to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <svg aria-hidden="true" viewBox="0 0 320 240" className="w-full max-w-md self-center lg:col-span-5">
          <path d="M10 120 H120 L150 90 H190" fill="none" stroke="var(--color-blue-500)" strokeWidth="2" />
          <circle cx="10" cy="120" r="5" fill="none" stroke="var(--color-cyan-400)" strokeWidth="2" />
          <path className="tb-broken" d="M220 90 H250 L280 120 H310" fill="none" stroke="var(--color-ink-800)" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="310" cy="120" r="5" fill="none" stroke="var(--color-ink-800)" strokeWidth="2" />
          <path className="tb-broken" d="M196 84 l18 12 M214 84 l-18 12" stroke="var(--color-cyan-400)" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
}
