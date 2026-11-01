import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";
import { Seo, breadcrumbSchema } from "../lib/seo";
import { articles, CATEGORIES, AUTHOR } from "../data/insights";
import PageHeader from "../components/ui/PageHeader";
import Panel from "../components/ui/Panel";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * Insights page implementing TASKS.md C4.
 * Complete editorial blog/guide directory driven by src/data/insights.js:
 * - Single H1 via PageHeader
 * - Category filter chips (CATEGORIES with articles + "All")
 * - Featured newest article
 * - All articles prerendered in HTML
 * - Cards with category, date, readMinutes, author
 */
export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Only categories that have at least one article
  const activeCategories = useMemo(() => {
    const present = new Set(articles.map((a) => a.category));
    return ["All", ...CATEGORIES.filter((c) => present.has(c))];
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return articles;
    return articles.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  const featured = selectedCategory === "All" ? articles[0] : null;
  const list = selectedCategory === "All" ? articles.slice(1) : filteredArticles;

  return (
    <>
      <Seo
        title="Insights — Practical Software & Web Engineering Notes"
        description="Practical guides from The TechByte on scoping, building and modernizing software, web applications and websites for businesses."
        path="/insights"
        schema={[
          breadcrumbSchema([
            ["Home", "/"],
            ["Insights", "/insights"],
          ]),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Engineering Notes"
            title="Practical notes on building and running software."
            lead="Straightforward guides on scoping projects, evaluating custom software versus off-the-shelf tools, modernizing legacy systems, and working effectively with developers."
          />
        </section>

        {/* Category Filter Chips */}
        <section className="container-x py-6 border-b border-ink-800" data-reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-mist-300 mr-2">
              Topic Filter:
            </span>
            {activeCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "All"
                  ? articles.length
                  : articles.filter((a) => a.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 text-xs font-mono rounded-[2px] transition-colors border ${
                    isSelected
                      ? "bg-cyan-400 text-ink-950 border-cyan-400 font-semibold"
                      : "bg-ink-900 text-mist-300 border-ink-800 hover:text-paper-50 hover:border-ink-800"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Featured Big Article (Only when All is selected) */}
        {featured && (
          <section className="container-x py-16 sm:py-20" id="featured-article">
            <Panel
              className="bg-ink-900 border border-ink-800 p-8 sm:p-14 hover:border-blue-500/60 transition-colors"
              nodeGlow={true}
              data-reveal
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8 space-y-6">
                  {/* Meta tags */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-mist-300">
                    <span className="px-2.5 py-1 rounded-[2px] bg-ink-950 border border-ink-800 text-cyan-400 uppercase tracking-[0.14em]">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-blue-400" />
                      <span>{featured.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-blue-400" />
                      <span>{featured.readMinutes} min read</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="size-3.5 text-mist-300" />
                      <span>{featured.author || AUTHOR}</span>
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper-50 tracking-tight leading-[1.05]">
                    <Link
                      to={`/insights/${featured.slug}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-base sm:text-lead text-mist-300 max-w-2xl leading-relaxed">
                    {featured.description}
                  </p>

                  <div className="pt-2">
                    <Button to={`/insights/${featured.slug}`} variant="primary">
                      Read Full Guide
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-8 border border-ink-800 bg-ink-950 rounded-[2px] text-center w-full max-w-sm space-y-3">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block">
                      FEATURED GUIDE
                    </span>
                    <p className="font-display text-xl text-paper-50 font-semibold">
                      Architectural Guide
                    </p>
                    <p className="text-xs text-mist-300 leading-relaxed">
                      Questions and criteria that determine whether to buy ready-made software or build your own.
                    </p>
                  </div>
                </div>
              </div>
            </Panel>
          </section>
        )}

        {/* List of Articles (Prerendered) */}
        <section className="container-x pb-24" id="articles-list">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-ink-800 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                {selectedCategory === "All" ? "More Engineering Notes" : `Category: ${selectedCategory}`} ({list.length})
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
              {list.map((article) => (
                <article
                  key={article.slug}
                  data-reveal
                  className="chamfer p-6 sm:p-8 bg-ink-900 border border-ink-800 hover:border-cyan-400/50 transition-colors flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs font-mono text-mist-300">
                      <span className="text-cyan-400 uppercase tracking-[0.14em]">
                        {article.category}
                      </span>
                      <span>{article.readMinutes} min read</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper-50 tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-mist-300 leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-ink-800/80 flex items-center justify-between text-xs font-mono text-mist-300">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3 text-blue-400" />
                      <span>{article.date}</span>
                    </span>
                    <Link
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 text-cyan-400 group-hover:text-paper-50 transition-colors"
                      aria-label={`Read ${article.title}`}
                    >
                      <span>Read</span>
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
