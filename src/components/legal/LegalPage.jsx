import { Seo, breadcrumbSchema } from "../../lib/seo";

/* Shared layout for Privacy and Terms. sections: [{ h, body: [string | string[]] }], where an array becomes a list. */
export default function LegalPage({ title, description, path, updated, intro, sections }) {
  return (
    <>
      <Seo title={title} description={description} path={path} schema={[breadcrumbSchema([["Home", "/"], [title, path]])]} />
      <section className="on-ink pt-[calc(var(--nav-h)+4rem)] pb-16">
        <div className="container-x">
          <p className="tb-label">Legal</p>
          <h1 className="tb-split mt-6 text-h1"><span>{title}</span></h1>
          <p className="mt-6 font-mono text-label uppercase tracking-[0.14em] text-mist-300">Last updated {updated}</p>
        </div>
      </section>
      <section className="on-paper py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-[calc(var(--nav-h)+2rem)] grid gap-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.h}>
                  <a href={`#s${i + 1}`} className="text-slate-600 hover:text-blue-600">{String(i + 1).padStart(2, "0")} {s.h}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-[68ch] lg:col-span-8 lg:col-start-5">
            <p className="text-lead text-slate-600">{intro}</p>
            {sections.map((s, i) => (
              <section key={s.h} id={`s${i + 1}`} className="mt-12 scroll-mt-28">
                <h2 className="text-h3">
                  <span className="mr-3 font-mono text-label text-blue-600">{String(i + 1).padStart(2, "0")}</span>
                  {s.h}
                </h2>
                {s.body.map((b, j) =>
                  Array.isArray(b) ? (
                    <ul key={j} className="mt-4 list-disc space-y-2 pl-5 text-slate-600 marker:text-blue-600">
                      {b.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  ) : (
                    <p key={j} className="mt-4 leading-relaxed text-slate-600">{b}</p>
                  )
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
