import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router";
import App, { preloadRoute } from "./App";
import { SeoContext, headHtml } from "./lib/seo";
import { SITE_URL } from "./data/site";
import { services } from "./data/services";
import { articles } from "./data/insights";

/** Every indexable URL. Drives prerendering, sitemap.xml and llms.txt. */
export const routes = [
  "/",
  "/services",
  ...services.map((s) => `/services/${s.slug}`),
  "/process",
  "/technologies",
  "/industries",
  "/work",
  "/about",
  "/insights",
  ...articles.map((a) => `/insights/${a.slug}`),
  "/faq",
  "/contact",
  "/get-a-quote",
  "/privacy-policy",
  "/terms",
];

export { SITE_URL };

export async function render(url) {
  const sink = { current: null };
  await preloadRoute(url);
  const { prelude } = await prerender(
    <StrictMode>
      <SeoContext value={sink}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext>
    </StrictMode>
  );
  const html = await new Response(prelude).text();
  if (!sink.current) throw new Error(`No <Seo> rendered for ${url}`);
  return { html, head: headHtml(sink.current) };
}
