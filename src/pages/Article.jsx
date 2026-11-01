import { useParams } from "react-router";
import { Seo, articleSchema, breadcrumbSchema } from "../lib/seo";
import { getArticle } from "../data/insights";
import NotFound from "./NotFound";

/* T01 stub — built in T08. */
export default function Article() {
  const a = getArticle(useParams().slug);
  if (!a) return <NotFound />;
  const path = `/insights/${a.slug}`;
  return (
    <article className="on-ink container-x py-24">
      <Seo title={a.title} description={a.description} path={path} type="article"
        schema={[articleSchema(a), breadcrumbSchema([["Home", "/"], ["Insights", "/insights"], [a.title, path]])]} />
      <h1 className="text-h1">{a.title}</h1>
    </article>
  );
}
