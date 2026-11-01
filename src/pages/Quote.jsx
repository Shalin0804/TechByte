import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { BUDGETS, CONTACT, TIMELINES } from "../data/site";
import { services, getService } from "../data/services";
import { validateQuote } from "../lib/validate";
import Field from "../components/ui/Field";
import { useForm, Honeypot, SubmitButton, FormReady } from "../components/forms/useForm";
import { ESTIMATE_TIPS, NEXT_STEPS } from "../data/contact";

const read = (form) => {
  const fd = new FormData(form);
  return { ...Object.fromEntries(fd), services: fd.getAll("services") };
};

function Choice({ type, name, value, label, defaultChecked }) {
  return (
    <label className="tb-choice relative cursor-pointer">
      <input type={type} name={name} value={value} defaultChecked={defaultChecked} className="peer sr-only" />
      <span className="tb-choice-box flex min-h-11 items-center gap-3 border border-ink-800 px-4 py-2.5 text-sm transition-colors duration-150 peer-checked:border-blue-400 peer-checked:bg-blue-600/15 peer-checked:text-paper-50 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-400 hover:border-mist-300/50">
        <span aria-hidden="true" className="tb-choice-node" />
        {label}
      </span>
    </label>
  );
}

function Group({ legend, error, children, id, required }) {
  return (
    <fieldset aria-describedby={error ? `${id}-err` : undefined} aria-invalid={error ? "true" : undefined} tabIndex={error ? -1 : undefined}>
      <legend className="mb-3 font-mono text-label uppercase tracking-[0.14em] text-mist-300">
        {legend}{" "}
        {required ? <span aria-hidden="true" className="text-cyan-400">*</span> : <span className="normal-case tracking-normal">(optional)</span>}
      </legend>
      <div className="flex flex-wrap gap-2">{children}</div>
      {error && <p id={`${id}-err`} className="mt-2 text-sm text-red-300">{error}</p>}
    </fieldset>
  );
}

export default function Quote() {
  const formRef = useRef(null);
  const [params] = useSearchParams();
  const [brief, setBrief] = useState({ services: [] });
  const { errors, ready, submit, edit, statusRef } = useForm({
    validate: validateQuote,
    compose: (d) => ({
      subject: `Project brief from ${d.name}`,
      text: [
        `Hi The TechByte, here is my project brief.`,
        ``,
        `Services: ${d.services.map((s) => getService(s).title).join(", ")}`,
        d.budget && `Budget: ${d.budget}`,
        d.timeline && `Timeline: ${d.timeline}`,
        ``,
        d.details,
        ``,
        `Name: ${d.name}`,
        `Email: ${d.email}`,
        d.phone && `Phone: ${d.phone}`,
        d.company && `Company: ${d.company}`,
      ].filter((l) => l !== "" ? !!l : true).join("\n"),
    }),
  });

  // ?service=slug preselects a service. Applied after hydration so the prerendered markup matches.
  useEffect(() => {
    const pre = getService(params.get("service") || "");
    const box = pre && formRef.current?.querySelector(`input[name="services"][value="${pre.slug}"]`);
    if (box) {
      box.checked = true;
      setBrief(read(formRef.current));
    }
  }, [params]);

  const onSubmit = (e) => {
    e.preventDefault();
    submit(read(e.currentTarget));
  };
  const picked = brief.services.map((s) => getService(s)?.title).filter(Boolean);
  const steps = [picked.length > 0, !!brief.budget, !!brief.timeline, (brief.details || "").trim().length >= 20, !!(brief.name && brief.email)];
  const done = steps.filter(Boolean).length;

  return (
    <>
      <Seo
        title="Get a Quote"
        description="Tell The TechByte about your software, web application, website or e-commerce project and get an honest read on scope, approach and next steps."
        path="/get-a-quote"
        schema={[breadcrumbSchema([["Home", "/"], ["Get a Quote", "/get-a-quote"]])]}
      />
      <section className="on-ink relative overflow-hidden pt-[calc(var(--nav-h)+4rem)] pb-[var(--space-section)]">
        <div aria-hidden="true" className="tb-grid-bg" />
        <div className="container-x relative">
          <p className="tb-label" data-reveal>Get a quote</p>
          <h1 className="tb-split mt-6 max-w-[16ch] text-h1">
            <span>Let's scope</span> <span>your project</span> <span className="text-blue-400">together.</span>
          </h1>
          <p className="mt-8 max-w-[56ch] text-lead text-mist-300" data-reveal>
            A few details help us give you a realistic answer. There is no commitment, and if something isn't clear yet, "not sure" is a perfectly good answer.
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {ready && <FormReady ready={ready} statusRef={statusRef} onEdit={edit} title="Your brief is ready." />}
              {(
                <form hidden={!!ready} ref={formRef} onSubmit={onSubmit} onInput={(e) => setBrief(read(e.currentTarget))} noValidate className="relative grid gap-12">
                  <section aria-labelledby="q1" className="grid gap-6" data-reveal>
                    <h2 id="q1" className="flex items-baseline gap-4 text-h3"><span className="font-mono text-label text-blue-400">01</span>What do you need?</h2>
                    <Group legend="Services" id="f-services" error={errors.services} required>
                      {services.map((s) => <Choice key={s.slug} type="checkbox" name="services" value={s.slug} label={s.title} />)}
                    </Group>
                  </section>

                  <section aria-labelledby="q2" className="grid gap-6" data-reveal>
                    <h2 id="q2" className="flex items-baseline gap-4 text-h3"><span className="font-mono text-label text-blue-400">02</span>Budget and timing</h2>
                    <Group legend="Budget range" id="f-budget" error={errors.budget}>
                      {BUDGETS.map((b) => <Choice key={b} type="radio" name="budget" value={b} label={b} />)}
                    </Group>
                    <Group legend="Timeline" id="f-timeline" error={errors.timeline}>
                      {TIMELINES.map((t) => <Choice key={t} type="radio" name="timeline" value={t} label={t} />)}
                    </Group>
                  </section>

                  <section aria-labelledby="q3" className="grid gap-6" data-reveal>
                    <h2 id="q3" className="flex items-baseline gap-4 text-h3"><span className="font-mono text-label text-blue-400">03</span>The project</h2>
                    <Field label="Project details" name="details" as="textarea" required error={errors.details}
                      hint="What you want to build, who will use it, what exists today and what success looks like." />
                  </section>

                  <section aria-labelledby="q4" className="grid gap-6" data-reveal>
                    <h2 id="q4" className="flex items-baseline gap-4 text-h3"><span className="font-mono text-label text-blue-400">04</span>About you</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field label="Name" name="name" required autoComplete="name" error={errors.name} />
                      <Field label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
                      <Field label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} />
                      <Field label="Company" name="company" autoComplete="organization" error={errors.company} />
                    </div>
                  </section>

                  <Honeypot />
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink-800 pt-8">
                    <SubmitButton>Prepare my brief</SubmitButton>
                    <p className="text-sm text-mist-300">
                      You'll send it by WhatsApp or email. See our <Link to="/privacy-policy" className="text-blue-400 underline">privacy policy</Link>.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Live brief: builds itself as the form is filled in. Decorative summary of what the user typed. */}
            <aside aria-label="Your brief so far" className="lg:col-span-4 lg:col-start-9">
              <div className="tb-brief sticky top-[calc(var(--nav-h)+1.5rem)] border border-ink-800 bg-ink-900/50 p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-label uppercase tracking-[0.14em] text-mist-300">Your brief</p>
                  <p className="font-mono text-label text-cyan-400" aria-live="polite">{done}/5</p>
                </div>
                <div aria-hidden="true" className="mt-4 h-px bg-ink-800">
                  <div className="tb-brief-bar h-px origin-left bg-cyan-400" style={{ transform: `scaleX(${done / 5})` }} />
                </div>
                <dl className="mt-6 grid gap-5 text-sm">
                  <div>
                    <dt className="text-mist-300">Services</dt>
                    <dd className="mt-1 text-paper-50">{picked.length ? picked.join(", ") : <span className="text-mist-300/60">Not chosen yet</span>}</dd>
                  </div>
                  <div>
                    <dt className="text-mist-300">Budget</dt>
                    <dd className="mt-1 text-paper-50">{brief.budget || <span className="text-mist-300/60">—</span>}</dd>
                  </div>
                  <div>
                    <dt className="text-mist-300">Timeline</dt>
                    <dd className="mt-1 text-paper-50">{brief.timeline || <span className="text-mist-300/60">—</span>}</dd>
                  </div>
                  <div>
                    <dt className="text-mist-300">Details</dt>
                    <dd className="mt-1 line-clamp-4 text-paper-50">{brief.details?.trim() || <span className="text-mist-300/60">—</span>}</dd>
                  </div>
                </dl>
                <div className="mt-8 border-t border-ink-800 pt-6">
                  <p className="font-mono text-label uppercase tracking-[0.14em] text-mist-300">{ESTIMATE_TIPS.title}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-paper-50/90">
                    {ESTIMATE_TIPS.points.map((p) => (
                      <li key={p} className="flex gap-3"><span aria-hidden="true" className="text-cyan-400">▸</span>{p}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-mist-300">{ESTIMATE_TIPS.note}</p>
                </div>
                <p className="mt-8 border-t border-ink-800 pt-6 text-sm text-mist-300">
                  Prefer to talk? Call <a className="text-blue-400 underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or email{" "}
                  <a className="break-all text-blue-400 underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="on-paper py-[var(--space-section)]">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="tb-label">After you send your brief</p>
            <h2 className="mt-6 text-h2">What happens next.</h2>
          </div>
          <ol className="grid gap-10 sm:grid-cols-2 lg:col-span-8" data-reveal-group>
            {NEXT_STEPS.map((n, i) => (
              <li key={n.h} className="tb-step relative pt-8" data-reveal>
                <span className="font-mono text-label tracking-[0.14em] text-blue-600">0{i + 1}</span>
                <h3 className="mt-3 text-h3">{n.h}</h3>
                <p className="mt-3 text-slate-600">{n.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
