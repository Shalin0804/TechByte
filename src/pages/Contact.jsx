import { Link } from "react-router";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { CONTACT, whatsappLink } from "../data/site";
import { services } from "../data/services";
import { NEXT_STEPS, EVALUATION, DISCUSSIONS } from "../data/contact";
import { validateInquiry } from "../lib/validate";
import Field from "../components/ui/Field";
import { useForm, Honeypot, SubmitButton, FormReady } from "../components/forms/useForm";

const CHANNELS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { label: "WhatsApp", value: "Message us on WhatsApp", href: whatsappLink("Hi The TechByte, I'd like to talk about a project."), external: true },
];


export default function Contact() {
  const { errors, ready, submit, edit, statusRef } = useForm({
    validate: validateInquiry,
    compose: (d) => ({
      subject: `Enquiry from ${d.name}`,
      text: [
        `Hi The TechByte,`,
        ``,
        d.message,
        ``,
        `Name: ${d.name}`,
        `Email: ${d.email}`,
        d.phone && `Phone: ${d.phone}`,
        d.company && `Company: ${d.company}`,
        d.service && `Interested in: ${services.find((s) => s.slug === d.service)?.title || "Something else"}`,
      ].filter((l) => l !== "" ? !!l : true).join("\n"),
    }),
  });
  const onSubmit = (e) => {
    e.preventDefault();
    submit(Object.fromEntries(new FormData(e.currentTarget)));
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact The TechByte in Ahmedabad by email, phone or WhatsApp, or send us a message about your software, web application or website project."
        path="/contact"
        schema={[breadcrumbSchema([["Home", "/"], ["Contact", "/contact"]])]}
      />
      <section className="on-ink relative overflow-hidden pt-[calc(var(--nav-h)+4rem)] pb-[var(--space-section)]">
        <div aria-hidden="true" className="tb-grid-bg" />
        <div className="container-x relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="tb-label" data-reveal>01 — Contact</p>
            <h1 className="tb-split mt-6 text-h1">
              <span>Let's talk about</span> <span>what you're</span> <span className="text-blue-400">building.</span>
            </h1>
            <p className="mt-8 max-w-[44ch] text-lead text-mist-300" data-reveal>
              Tell us what you have in mind, even if it's only a rough idea. We're based in {CONTACT.location} and work with clients wherever they are.
            </p>

            <ul className="mt-12 divide-y divide-ink-800 border-y border-ink-800" data-reveal-group>
              {CHANNELS.map((c) => (
                <li key={c.label} data-reveal>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="tb-channel group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block font-mono text-label uppercase tracking-[0.14em] text-mist-300">{c.label}</span>
                      <span className="mt-1 block break-all text-lg font-medium md:text-xl">{c.value}</span>
                      {c.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </span>
                    <span aria-hidden="true" className="text-2xl text-blue-400 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mist-300">{CONTACT.location}</p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {ready && <FormReady ready={ready} statusRef={statusRef} onEdit={edit} title="Your message is ready." />}
            {(
              <form hidden={!!ready} onSubmit={onSubmit} noValidate className="relative grid gap-6 border border-ink-800 bg-ink-950/60 p-6 backdrop-blur-sm md:p-10" data-reveal>
                <h2 className="text-h3">Send us a message</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" name="name" required autoComplete="name" error={errors.name} />
                  <Field label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} />
                  <Field label="Company" name="company" autoComplete="organization" error={errors.company} />
                </div>
                <Field label="What is it about?" name="service" as="select" defaultValue="" error={errors.service}>
                  <option value="">Choose a service (optional)</option>
                  {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  <option value="other">Something else</option>
                </Field>
                <Field label="Message" name="message" as="textarea" required error={errors.message} hint="What you want to build, who it's for and the problem it solves." />
                <Honeypot />
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <SubmitButton>Prepare message</SubmitButton>
                  <p className="text-sm text-mist-300">
                    You'll send it by WhatsApp or email. See our <Link to="/privacy-policy" className="text-blue-400 underline">privacy policy</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="on-paper py-[var(--space-section)]">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="tb-label">02 — What happens next</p>
            <h2 className="mt-6 text-h2">No messages into the void.</h2>
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
        <div className="container-x mt-24 grid gap-12 border-t border-paper-300 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="tb-label">03 — Evaluation</p>
            <h2 className="mt-6 text-h3">{EVALUATION.title}</h2>
            <p className="mt-4 text-slate-600">{EVALUATION.lead}</p>
            <h3 className="mt-10 font-display text-xl font-semibold">How project discussions work</h3>
            <p className="mt-3 text-slate-600">{DISCUSSIONS}</p>
          </div>
          <ul className="grid gap-3 lg:col-span-6 lg:col-start-7" data-reveal-group>
            {EVALUATION.points.map((p) => (
              <li key={p} className="flex gap-4 border-b border-paper-300 pb-3" data-reveal>
                <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full border-2 border-blue-600" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
