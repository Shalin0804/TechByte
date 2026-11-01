import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Seo, articleSchema, breadcrumbSchema, faqSchema } from "../lib/seo";
import { getArticle, AUTHOR } from "../data/insights";
import { getService } from "../data/services";
import NotFound from "./NotFound";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * Visual SVG cover per category (DESIGN_SYSTEM §1 & §9).
 * Crafted strictly from circuit traces, hairlines and signal nodes.
 */
function CategoryCover({ category }) {
  const common = {
    viewBox: "0 0 800 320",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full h-auto aspect-[800/320] rounded-[2px] border border-ink-800 bg-ink-950 overflow-hidden",
    role: "img",
    "aria-label": `Visual illustration for ${category}`,
  };

  switch (category) {
    case "Software Development":
      return (
        <svg {...common}>
          <rect width="800" height="320" fill="var(--color-ink-950)" />
          <path d="M100 260 H260 V100 H400 V180 H560 V80 H700" stroke="var(--color-ink-800)" strokeWidth="1.5" />
          <path d="M100 160 H320 V220 H500 V120 H700" stroke="var(--color-blue-500)" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="260" cy="100" r="4" fill="var(--color-cyan-400)" />
          <circle cx="400" cy="180" r="4" fill="var(--color-blue-400)" />
          <circle cx="560" cy="80" r="5" fill="var(--color-cyan-400)" className="signal-node-pulse" />
          <text x="120" y="80" fill="var(--color-mist-300)" fontFamily="monospace" fontSize="12" letterSpacing="0.14em">
            // LOGIC ARCHITECTURE &amp; DATA MODEL
          </text>
        </svg>
      );

    case "Website Development":
      return (
        <svg {...common}>
          <rect width="800" height="320" fill="var(--color-ink-950)" />
          <rect x="240" y="50" width="320" height="220" rx="2" stroke="var(--color-ink-800)" strokeWidth="1.5" />
          <line x1="240" y1="90" x2="560" y2="90" stroke="var(--color-ink-800)" strokeWidth="1.5" />
          <circle cx="265" cy="70" r="3" fill="var(--color-cyan-400)" />
          <circle cx="280" cy="70" r="3" fill="var(--color-blue-400)" />
          <line x1="270" y1="120" x2="420" y2="120" stroke="var(--color-cyan-400)" strokeWidth="3" />
          <line x1="270" y1="140" x2="520" y2="140" stroke="var(--color-mist-300)" strokeWidth="1.5" />
          <line x1="270" y1="160" x2="480" y2="160" stroke="var(--color-mist-300)" strokeWidth="1.5" />
          <rect x="270" y="190" width="90" height="40" stroke="var(--color-blue-500)" strokeWidth="1.5" />
          <rect x="380" y="190" width="90" height="40" stroke="var(--color-ink-800)" strokeWidth="1.5" />
          <text x="100" y="60" fill="var(--color-mist-300)" fontFamily="monospace" fontSize="12" letterSpacing="0.14em">
            // VIEWPORT &amp; SEMANTIC HIERARCHY
          </text>
        </svg>
      );

    case "Web Applications":
      return (
        <svg {...common}>
          <rect width="800" height="320" fill="var(--color-ink-950)" />
          <rect x="180" y="60" width="440" height="200" rx="2" stroke="var(--color-ink-800)" strokeWidth="1.5" />
          <rect x="200" y="90" width="100" height="150" stroke="var(--color-ink-800)" strokeDasharray="3 3" />
          <rect x="320" y="90" width="280" height="65" stroke="var(--color-blue-500)" strokeWidth="1.5" />
          <rect x="320" y="170" width="130" height="70" stroke="var(--color-ink-800)" strokeWidth="1.5" />
          <rect x="470" y="170" width="130" height="70" stroke="var(--color-cyan-400)" strokeWidth="1.5" />
          <circle cx="535" cy="205" r="4" fill="var(--color-cyan-400)" className="signal-node-pulse" />
          <text x="80" y="70" fill="var(--color-mist-300)" fontFamily="monospace" fontSize="12" letterSpacing="0.14em">
            // SESSION AUTH &amp; STATE PORTAL
          </text>
        </svg>
      );

    case "Mobile Applications":
      return (
        <svg {...common}>
          <rect width="800" height="320" fill="var(--color-ink-950)" />
          <rect x="340" y="40" width="120" height="240" rx="8" stroke="var(--color-blue-500)" strokeWidth="2" />
          <line x1="380" y1="55" x2="420" y2="55" stroke="var(--color-mist-300)" strokeWidth="2" />
          <circle cx="400" cy="255" r="4" fill="var(--color-cyan-400)" />
          <path d="M220 160 H340 M460 160 H580" stroke="var(--color-ink-800)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="220" cy="160" r="3" fill="var(--color-cyan-400)" />
          <circle cx="580" cy="160" r="3" fill="var(--color-cyan-400)" />
          <text x="100" y="60" fill="var(--color-mist-300)" fontFamily="monospace" fontSize="12" letterSpacing="0.14em">
            // CROSS-PLATFORM DEVICE COMPONENT
          </text>
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <rect width="800" height="320" fill="var(--color-ink-950)" />
          <circle cx="400" cy="160" r="80" stroke="var(--color-ink-800)" strokeDasharray="4 4" strokeWidth="1.5" />
          <circle cx="400" cy="160" r="40" stroke="var(--color-blue-500)" strokeWidth="1.5" />
          <circle cx="400" cy="160" r="5" fill="var(--color-cyan-400)" className="signal-node-pulse" />
          <line x1="160" y1="160" x2="640" y2="160" stroke="var(--color-ink-800)" strokeWidth="1.5" />
          <text x="80" y="60" fill="var(--color-mist-300)" fontFamily="monospace" fontSize="12" letterSpacing="0.14em">
            // ENGINEERING SPECIFICATION
          </text>
        </svg>
      );
  }
}

/**
 * Article detail page implementing TASKS.md C4.
 * Complete editorial template:
 * - Breadcrumb nav
 * - Category badge, single H1, author, published & updated dates (<time>), readMinutes
 * - Generated SVG cover per category (aria-hidden or descriptive)
 * - Intro paragraph
 * - Sticky table of contents on desktop (toc ids match h2 ids)
 * - Block renderer: p, h2 (with id), h3, ul
 * - Article FAQs (<details>/<summary>) if present
 * - Link to related service
 * - Related articles cards
 * - Final CTA
 * - SEO: includes articleSchema, breadcrumbSchema, faqSchema(a.faqs)
 */
export default function Article() {
  const { slug } = useParams();
  const a = getArticle(slug);

  if (!a) return <NotFound />;

  const path = `/insights/${a.slug}`;
  const relatedService = a.service ? getService(a.service) : null;
  const relatedArticles = (a.related || [])
    .map((artSlug) => getArticle(artSlug))
    .filter(Boolean);

  const [activeTocId, setActiveTocId] = useState(a.toc?.[0]?.id || "");

  useEffect(() => {
    if (!a.toc || a.toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTocId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    a.toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug, a.toc]);

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
          ...(a.faqs && a.faqs.length > 0 ? [faqSchema(a.faqs)] : []),
        ]}
      />

      <article className="on-ink min-h-screen">
        {/* =========================================================================
           1. ARTICLE HEADER
           ========================================================================= */}
        <header className="container-x pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-ink-800">
          <div className="max-w-[68ch] space-y-6" data-reveal>
            {/* Breadcrumb nav */}
            <nav aria-label="Breadcrumb" className="mb-4">
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
                {a.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-blue-400" />
                <span>Published: </span>
                <time dateTime={a.date}>{a.date}</time>
              </span>
              {a.updated && a.updated !== a.date && (
                <span className="flex items-center gap-1.5">
                  <span>Updated: </span>
                  <time dateTime={a.updated}>{a.updated}</time>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-blue-400" />
                <span>{a.readMinutes} min read</span>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="size-3.5 text-mist-300" />
                <span>{a.author || AUTHOR}</span>
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
           2. VISUAL SVG COVER
           ========================================================================= */}
        <div className="container-x py-10" data-reveal>
          <div className="max-w-4xl mx-auto">
            <CategoryCover category={a.category} />
          </div>
        </div>

        {/* =========================================================================
           3. MAIN ARTICLE LAYOUT: STICKY TOC (cols 1-4) + BODY BLOCKS (cols 5-12)
           ========================================================================= */}
        <div className="container-x py-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start max-w-6xl mx-auto">
            {/* Sticky Table of Contents on Desktop (cols 1-4) */}
            {a.toc && a.toc.length > 0 && (
              <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
                <div className="border border-ink-800 bg-ink-900/60 p-5 rounded-[2px]">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block mb-4">
                    Table of Contents
                  </span>
                  <nav aria-label="Table of Contents" className="space-y-1.5">
                    {a.toc.map((item) => {
                      const isActive = activeTocId === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block py-1.5 px-2.5 text-xs font-mono rounded-[2px] transition-colors leading-snug ${
                            isActive
                              ? "bg-ink-950 text-cyan-400 border-l-2 border-cyan-400 font-semibold"
                              : "text-mist-300 hover:text-paper-50 hover:bg-ink-950/40"
                          }`}
                        >
                          {item.text}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {relatedService && (
                  <div className="chamfer p-5 bg-ink-900 border border-ink-800 space-y-2">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400 block">
                      Related Capability
                    </span>
                    <h4 className="font-display text-base font-semibold text-paper-50">
                      {relatedService.title}
                    </h4>
                    <p className="text-xs text-mist-300 line-clamp-2">
                      {relatedService.short}
                    </p>
                    <Link
                      to={`/services/${relatedService.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline pt-1"
                    >
                      <span>Explore service</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                )}
              </aside>
            )}

            {/* Article Body Content (cols 5-12 or centered 68ch measure) */}
            <div className={`space-y-8 font-sans ${a.toc?.length ? "lg:col-span-8 max-w-[68ch]" : "max-w-[68ch] mx-auto"}`} data-reveal>
              {/* Intro lead */}
              {a.intro && (
                <div className="p-6 bg-ink-900/80 border-l-2 border-cyan-400 rounded-r-[2px] text-base sm:text-lg text-paper-50 leading-relaxed font-sans font-medium">
                  {a.intro}
                </div>
              )}

              {/* Dynamic Blocks Renderer: p, h2, h3, ul */}
              {a.blocks.map((block, idx) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h2
                        key={idx}
                        id={block.id}
                        className="text-2xl sm:text-3xl font-display font-semibold text-paper-50 tracking-tight pt-8 pb-1 scroll-mt-28 border-b border-ink-800/80"
                      >
                        {block.text}
                      </h2>
                    );

                  case "h3":
                    return (
                      <h3
                        key={idx}
                        className="text-xl font-display font-semibold text-paper-50 tracking-tight pt-4 pb-1"
                      >
                        {block.text}
                      </h3>
                    );

                  case "ul":
                    return (
                      <ul key={idx} className="space-y-3 my-4 pl-2">
                        {block.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-3 text-base text-mist-300 leading-relaxed"
                          >
                            <span className="size-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "p":
                  default:
                    return (
                      <p
                        key={idx}
                        className="text-base text-mist-300 leading-relaxed"
                      >
                        {block.text}
                      </p>
                    );
                }
              })}

              {/* Article FAQs Accordion (if present) */}
              {a.faqs && a.faqs.length > 0 && (
                <div className="pt-12 mt-12 border-t border-ink-800 space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                      Frequently Asked Questions
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-paper-50">
                      Questions on this topic
                    </h3>
                  </div>

                  <div className="divide-y divide-ink-800 border-y border-ink-800">
                    {a.faqs.map((f, fIdx) => (
                      <details
                        key={fIdx}
                        className="group py-5 transition-colors cursor-pointer"
                      >
                        <summary className="flex items-center justify-between gap-4 font-display text-lg font-semibold text-paper-50 list-none select-none hover:text-cyan-400 transition-colors">
                          <span className="flex items-baseline gap-3">
                            <span className="font-mono text-xs text-cyan-400">0{fIdx + 1}</span>
                            <span>{f.q}</span>
                          </span>
                          <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180 text-cyan-400" />
                        </summary>
                        <div className="pt-3 pl-7 pr-4 text-sm text-mist-300 leading-relaxed">
                          <p>{f.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Service Banner */}
              {relatedService && (
                <div className="chamfer-panel p-6 sm:p-8 bg-ink-900 border border-blue-500/40 space-y-4 my-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                      Engineering Implementation
                    </span>
                    <span className="size-2 rounded-full bg-cyan-400" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-paper-50">
                    Need help building this for your business?
                  </h3>
                  <p className="text-sm text-mist-300 leading-relaxed">
                    {relatedService.short}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <Button to={`/services/${relatedService.slug}`} variant="primary">
                      Explore {relatedService.title}
                    </Button>
                    <Button to={`/get-a-quote?service=${relatedService.slug}`} variant="secondary">
                      Request Evaluation
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
           4. RELATED ARTICLES (3 articles)
           ========================================================================= */}
        {relatedArticles.length > 0 && (
          <section className="border-t border-ink-800 bg-ink-900/40 py-16 sm:py-24">
            <div className="container-x">
              <div className="max-w-3xl mb-12" data-reveal>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block mb-2">
                  Further Reading
                </span>
                <h2 className="text-h2 text-paper-50 tracking-tight">
                  Related engineering notes &amp; guides.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
                {relatedArticles.map((art) => (
                  <article
                    key={art.slug}
                    data-reveal
                    className="chamfer p-6 sm:p-8 bg-ink-900 border border-ink-800 hover:border-cyan-400/50 transition-colors flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-mist-300">
                        <span className="text-cyan-400 uppercase tracking-[0.14em]">
                          {art.category}
                        </span>
                        <span>{art.readMinutes} min read</span>
                      </div>

                      <h3 className="font-display text-xl font-semibold text-paper-50 group-hover:text-cyan-400 transition-colors">
                        <Link to={`/insights/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-mist-300 line-clamp-3 leading-relaxed">
                        {art.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-ink-800/80 flex items-center justify-between text-xs font-mono text-mist-300">
                      <span>{art.date}</span>
                      <Link
                        to={`/insights/${art.slug}`}
                        className="inline-flex items-center gap-1 text-cyan-400 group-hover:text-paper-50"
                      >
                        <span>Read</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <FinalCta />
      </article>
    </>
  );
}
