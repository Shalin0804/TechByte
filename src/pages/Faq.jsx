import { useState, useMemo } from "react";
import { Search, ChevronDown, HelpCircle, MessageSquare, ArrowUpRight } from "lucide-react";
import { Seo, faqSchema, breadcrumbSchema } from "../lib/seo";
import { FAQ_CATEGORIES, ALL_FAQS } from "../data/faq";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import FinalCta from "../components/sections/FinalCta";

/**
 * FAQ page implementing TASKS.md C4.
 * - Single H1 via PageHeader.
 * - All 29 questions prerendered in HTML for complete SEO indexing.
 * - Interactive category filter chips with question count.
 * - Client-side search input filtering questions dynamically.
 * - Direct links to /get-a-quote and /contact for project inquiries.
 * - SEO: includes faqSchema(ALL_FAQS) and breadcrumbSchema.
 */
export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return FAQ_CATEGORIES.map((cat) => {
      const matchingItems = cat.items.filter(
        (item) =>
          (!q ||
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q)) &&
          (activeCategory === "all" || activeCategory === cat.slug)
      );
      return { ...cat, matchingItems };
    }).filter((cat) => cat.matchingItems.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers about The TechByte's services, websites, web and mobile apps, AI and automation, pricing, project planning and support."
        path="/faq"
        schema={[
          faqSchema(ALL_FAQS),
          breadcrumbSchema([
            ["Home", "/"],
            ["Frequently Asked Questions", "/faq"],
          ]),
        ]}
      />

      <div className="on-ink min-h-screen">
        {/* Page Header */}
        <section className="container-x">
          <PageHeader
            eyebrowIndex="01"
            eyebrowText="Knowledge Base"
            title="Frequently Asked Questions"
            lead="Straightforward answers about our engineering capabilities, technology choices, pricing model, project workflows, and post-launch maintenance."
          />
        </section>

        {/* =========================================================================
           INTERACTIVE CONTROLS: SEARCH & CATEGORY CHIPS
           ========================================================================= */}
        <section className="container-x py-8 border-b border-ink-800" data-reveal>
          <div className="space-y-6">
            {/* Search Box */}
            <div className="relative max-w-xl">
              <label htmlFor="faq-search" className="sr-only">
                Search questions
              </label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-mist-300 pointer-events-none" />
              <input
                id="faq-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all questions and answers..."
                className="w-full h-12 pl-11 pr-4 bg-ink-900 border border-ink-800 rounded-[2px] text-sm text-paper-50 placeholder:text-mist-300/60 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-mist-300 hover:text-paper-50"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                aria-pressed={activeCategory === "all"}
                className={`px-3 py-1.5 text-xs font-mono rounded-[2px] transition-colors border ${
                  activeCategory === "all"
                    ? "bg-cyan-400 text-ink-950 border-cyan-400 font-semibold"
                    : "bg-ink-900 text-mist-300 border-ink-800 hover:text-paper-50 hover:border-ink-800"
                }`}
              >
                All Questions ({ALL_FAQS.length})
              </button>

              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActiveCategory(cat.slug)}
                  aria-pressed={activeCategory === cat.slug}
                  className={`px-3 py-1.5 text-xs font-mono rounded-[2px] transition-colors border ${
                    activeCategory === cat.slug
                      ? "bg-cyan-400 text-ink-950 border-cyan-400 font-semibold"
                      : "bg-ink-900 text-mist-300 border-ink-800 hover:text-paper-50 hover:border-ink-800"
                  }`}
                >
                  {cat.label} ({cat.items.length})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
           QUESTIONS LIST (ALL PRERENDERED)
           ========================================================================= */}
        <section className="container-x py-16 sm:py-24" id="questions-list">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left FAQ Content (cols 1-8) */}
            <div className="lg:col-span-8 space-y-12">
              {filteredCategories.length === 0 ? (
                <div className="p-10 border border-ink-800 bg-ink-900 rounded-[2px] text-center space-y-4">
                  <HelpCircle className="size-8 text-mist-300 mx-auto opacity-50" />
                  <p className="font-display text-xl text-paper-50 font-semibold">
                    No matching questions found
                  </p>
                  <p className="text-sm text-mist-300 max-w-md mx-auto">
                    We couldn't find an exact match for "{searchQuery}". Send us a message and we'll answer your question directly.
                  </p>
                  <Button to="/contact" variant="secondary" className="text-xs">
                    Ask Us Directly
                  </Button>
                </div>
              ) : (
                filteredCategories.map((cat) => (
                  <div key={cat.slug} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-ink-800 pb-3">
                      <h2 className="font-display text-2xl font-semibold text-paper-50 tracking-tight">
                        {cat.label}
                      </h2>
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400">
                        {cat.matchingItems.length} {cat.matchingItems.length === 1 ? "Question" : "Questions"}
                      </span>
                    </div>

                    <div className="divide-y divide-ink-800 border-b border-ink-800">
                      {cat.matchingItems.map((item, idx) => (
                        <details
                          key={item.q}
                          className="group py-6 transition-colors cursor-pointer"
                        >
                          <summary className="flex items-center justify-between gap-4 font-display text-lg sm:text-xl font-semibold text-paper-50 tracking-tight list-none select-none hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950 transition-colors">
                            <span className="flex items-baseline gap-3">
                              <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 shrink-0">
                                0{idx + 1}
                              </span>
                              <span>{item.q}</span>
                            </span>
                            <span className="shrink-0 size-7 rounded-[2px] border border-ink-800 bg-ink-950 flex items-center justify-center text-mist-300 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-transform duration-200 group-open:rotate-180">
                              <ChevronDown className="size-3.5" />
                            </span>
                          </summary>
                          <div className="pt-3 pl-8 sm:pl-9 pr-4 text-sm text-mist-300 leading-relaxed max-w-[64ch]">
                            <p>{item.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right Help Callout (cols 9-12) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="chamfer-panel p-6 bg-ink-900 border border-ink-800 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-400 block">
                  Have a specific question?
                </span>
                <h3 className="font-display text-xl font-semibold text-paper-50">
                  Discuss your project scope with us.
                </h3>
                <p className="text-xs sm:text-sm text-mist-300 leading-relaxed">
                  Every business operates differently. If your question isn't answered here, tell us what you're trying to build and we'll reply with clear answers.
                </p>

                <div className="pt-2 space-y-2.5">
                  <Button to="/get-a-quote" variant="primary" className="w-full justify-between text-xs">
                    <span>Request a Quote</span>
                    <ArrowUpRight className="size-3.5" />
                  </Button>
                  <Button to="/contact" variant="secondary" className="w-full justify-between text-xs">
                    <span>Contact Studio</span>
                    <MessageSquare className="size-3.5" />
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </div>
    </>
  );
}
