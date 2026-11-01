import { useParams } from "react-router";
import { Seo, serviceSchema, breadcrumbSchema } from "../lib/seo";
import { getService } from "../data/services";
import NotFound from "./NotFound";

/* T01 stub — built in T07. */
export default function ServiceDetail() {
  const s = getService(useParams().slug);
  if (!s) return <NotFound />;
  const path = `/services/${s.slug}`;
  return (
    <section className="on-ink container-x py-24">
      <Seo title={s.title} description={s.short} path={path}
        schema={[serviceSchema(s), breadcrumbSchema([["Home", "/"], ["Services", "/services"], [s.title, path]])]} />
      <h1 className="text-h1">{s.title}</h1>
      <p className="mt-6 text-lead text-mist-300">{s.short}</p>
    </section>
  );
}
