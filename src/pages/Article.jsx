import { useParams, Link } from "react-router";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Seo, articleSchema, breadcrumbSchema } from "../lib/seo";
import { getArticle, articles } from "../data/insights";
import { getService } from "../data/services";
import NotFound from "./NotFound";
import Button from "../components/ui/Button";
import Panel from "../components/ui/Panel";
import FinalCta from "../components/sections/FinalCta";

/**
 * Article detail page implementing TASKS.md T08.
 * - Single H1 for article title.
 * - Measure strictly set to 68ch max width for article body (DESIGN_SYSTEM §3).
 * - Full block renderer (p, h2, ul).
 * - Direct link to relevant service and links to other insights.
 * - Preserves exact SEO contract.
 */
export default function Article() {
  const { slug } = useParams();
  const a = getArticle(slug);

  if (!a) return <NotFound />;

  const path = `/insights/${a.slug}`;
  const relatedService = a.service ? getService(a.service) : null;
  const otherArticles = articles.filter((art) => art.slug !== a.slug);

  return (
    <>
      <Seo
        title={a.title}
        description={a.description}
        path={path}
        type="article"
        schema={[
          articleSchema(a),
          breadcrumbSchema([
            ["Home", "/"],
            ["Insights", "/insights"],
            [a.title, path],
          ]),
        ]}
      />

      <article className="on-ink min-h-screen">
        {/* =========================================================================
           1. ARTICLE HEADER
           ========================================================================= */}
        <header className="container-x pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-ink-800">
          <div className="max-w-[68ch] space-y-6" data-reveal>
            {/* Breadcrumb nav */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs font-mono text-mist-300">
                <li>
                  <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/insights" className="hover:text-cyan-400 transition-colors">Insights</Link>
                </li>
                <li>/</li>
                <li className="text-cyan-400 font-medium truncate" aria-current="page">
                  {a.title}
                </li>
              </ol>
            </nav>

            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-mist-300">
              <span className="px-2.5 py-1 rounded-[2px] bg-ink-900 border border-ink-800 text-cyan-400 uppercase tracking-[0.14em]">
                {a.topic}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-blue-400" />
                <span>{a.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-blue-400" />
                <span>{a.readMinutes} min read</span>
              </span>
            </div>

            {/* Single H1 on page */}
            <h1 className="text-h1 text-paper-50 tracking-tight leading-[1.05]">
              {a.title}
            </h1>

            <p className="text-lead text-mist-300 leading-relaxed">
              {a.description}
            </p>
          </div>
        </header>

        {/* =========================================================================
           2. ARTICLE CONTENT (max-w-[68ch])
           ========================================================================= */}
        <div className="container-x py-16 sm:py-20">
          <div className="max-w-[68ch] space-y-8 font-sans" data-reveal>
            {a.blocks.map((block, idx) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={idx}
                    className="font-display text-2xl sm:text-3xl font-semibold text-paper-50 tracking-tight pt-8 border-t border-ink-800/80 leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "ul") {
                return (
                  <ul key={idx} className="space-y-3 pl-2 my-6">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-base text-paper-50/90 leading-relaxed">
                        <span className="size-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              // Default paragraph block (type === "p")
              return (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-paper-50/90 leading-relaxed"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* =========================================================================
             3. CONNECTED SERVICE PROMPT
             ========================================================================= */}
          {relatedService && (
            <div className="max-w-[68ch] mt-16 pt-12 border-t border-ink-800" data-reveal>
              <Panel className="bg-ink-900 border border-ink-800 p-8 space-y-4" nodeGlow={true}>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                  // RELATED CAPABILITY
                </span>
                <h3 className="font-display text-2xl font-semibold text-paper-50 tracking-tight">
                  Need help with {relatedService.title.toLowerCase()}?
                </h3>
                <p className="text-sm text-mist-300 leading-relaxed">
                  {relatedService.short}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button to={`/services/${relatedService.slug}`} variant="primary">
                    Explore {relatedService.title}
                  </Button>
                  <Button to="/get-a-quote" variant="secondary">
                    Get a Technical Estimate
                  </Button>
                </div>
              </Panel>
            </div>
          )}

          {/* =========================================================================
             4. READ NEXT ARTICLES
             ========================================================================= */}
          <section className="max-w-5xl mt-24 pt-16 border-t border-ink-800 space-y-8" data-reveal>
            <div className="flex items-center justify-between">
              <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
                Continue Reading
              </span>
              <Link to="/insights" className="link-trace text-xs font-mono text-mist-300">
                <ArrowLeft className="size-3.5" />
                <span>All Insights</span>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  to={`/insights/${other.slug}`}
                  className="group p-6 bg-ink-900 border border-ink-800 hover:border-blue-500 rounded-[2px] transition-colors block"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-mist-300 mb-3">
                    <span className="text-blue-400">{other.topic}</span>
                    <span>{other.readMinutes} min read</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-paper-50 group-hover:text-cyan-400 transition-colors">
                    {other.title}
                  </h4>
                  <p className="mt-2 text-xs text-mist-300 line-clamp-2">
                    {other.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <FinalCta />
      </article>
    </>
  );
}
