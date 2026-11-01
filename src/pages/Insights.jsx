import { Link } from "react-router";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Seo } from "../lib/seo";
import { articles } from "../data/insights";
import PageHeader from "../components/ui/PageHeader";
import Panel from "../components/ui/Panel";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * Insights page implementing TASKS.md T08.
 * - Single H1 strictly via PageHeader.
 * - Featured large layout for newest article (articles[0]).
 * - Editorial list for remaining articles with topic tags, reading time, and publish dates.
 * - All content driven by src/data/insights.js.
 */
export default function Insights() {
  const featured = articles[0];
  const list = articles.slice(1);

  return (
    <>
      <Seo
        title="Insights — Practical Software & Web Engineering Notes"
        description="Practical articles from The TechByte on planning, building and running software and websites for your business."
        path="/insights"
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Engineering Notes"
            title="Practical notes on building and running software."
            lead="Straightforward guides on scoping projects, evaluating custom software versus off-the-shelf tools, modernizing legacy sites, and working effectively with developers."
          />
        </section>

        {/* Featured Big Article (Newest) */}
        {featured && (
          <section className="container-x py-16 sm:py-20" id="featured-article">
            <Panel className="bg-ink-900 border border-ink-800 p-8 sm:p-14 hover:border-blue-500/60 transition-colors" nodeGlow={true} data-reveal>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8 space-y-6">
                  {/* Meta tags */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-mist-300">
                    <span className="px-2.5 py-1 rounded-[2px] bg-ink-950 border border-ink-800 text-cyan-400 uppercase tracking-[0.14em]">
                      {featured.topic}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-blue-400" />
                      <span>{featured.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-blue-400" />
                      <span>{featured.readMinutes} min read</span>
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-5xl font-semibold text-paper-50 tracking-tight leading-[1.05]">
                    <Link
                      to={`/insights/${featured.slug}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-lead text-mist-300 max-w-2xl leading-relaxed">
                    {featured.description}
                  </p>

                  <div className="pt-2">
                    <Button to={`/insights/${featured.slug}`} variant="primary">
                      Read Full Article
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-8 border border-ink-800 bg-ink-950 rounded-[2px] text-center w-full max-w-sm space-y-3">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block">
                      FEATURED ARTICLE
                    </span>
                    <p className="font-display text-xl text-paper-50 font-semibold">
                      Architectural Guide
                    </p>
                    <p className="text-xs text-mist-300 leading-relaxed">
                      Questions and criteria that actually determine whether to buy ready-made software or build your own.
                    </p>
                  </div>
                </div>
              </div>
            </Panel>
          </section>
        )}

        {/* List of Remaining Articles */}
        <section className="container-x pb-24" id="more-articles">
          <div className="mb-8 border-b border-ink-800 pb-4" data-reveal>
            <span className="font-mono text-label uppercase tracking-[0.14em] text-cyan-400">
              More Insights
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2" data-reveal-group>
            {list.map((item) => (
              <Panel
                key={item.slug}
                className="bg-ink-900 border border-ink-800 hover:border-blue-500/50 transition-colors p-8 flex flex-col justify-between"
                data-reveal
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-mist-300">
                    <span className="text-blue-400 uppercase tracking-[0.14em]">
                      {item.topic}
                    </span>
                    <span>{item.readMinutes} min read</span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-paper-50 tracking-tight leading-snug">
                    <Link
                      to={`/insights/${item.slug}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-mist-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ink-800 flex items-center justify-between">
                  <span className="font-mono text-xs text-mist-300">{item.date}</span>
                  <Link
                    to={`/insights/${item.slug}`}
                    className="link-trace text-sm text-cyan-400"
                  >
                    <span>Read guide</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </Panel>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
