/* Runs after the client and SSR builds. Writes static HTML for every route (crawlable
   without JS), the /admin shell, 404.html, sitemap.xml, robots.txt, llms.txt and llms-full.txt. */
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = (p) => resolve(root, "dist", p);
const { render, routes, SITE_URL } = await import(pathToFileURL(resolve(root, "dist-ssr/entry-server.js")));

// preload the display and body fonts so the hero headline doesn't repaint late
const fonts = readdirSync(dist("assets")).filter((f) => /^(bricolage-grotesque|geist)-latin-wght-normal-.*\.woff2$/.test(f));
const template = readFileSync(dist("index.html"), "utf8").replace(
  "</head>",
  () => fonts.map((f) => `  <link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />\n`).join("") + "  </head>"
);
const fill = (head, html) => template.replace(/<!--seo-->[\s\S]*<!--\/seo-->/, () => head).replace("<!--app-->", () => html);
const write = (file, text) => (mkdirSync(dirname(dist(file)), { recursive: true }), writeFileSync(dist(file), text));

const unesc = (s) => s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
const mainText = (html) =>
  unesc(
    (html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? "")
      .replace(/<(svg|script|style)[\s\S]*?<\/\1>/g, "")
      .replace(/<h([1-4])[^>]*>/g, (_, n) => `\n\n${"#".repeat(Number(n) + 1)} `)
      .replace(/<li[^>]*>/g, "\n- ")
      .replace(/<\/(h[1-4]|p|div|section|ul|ol|details|summary|article)>/g, "\n")
      .replace(/<[^>]+>/g, "")
  ).replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{3,}/g, "\n\n").trim();

const pages = [];
for (const route of routes) {
  const { html, head } = await render(route);
  write(route === "/" ? "index.html" : `${route.slice(1)}.html`, fill(head, html));
  pages.push({
    route,
    title: unesc(head.match(/<title>([^<]*)/)[1]),
    description: unesc(head.match(/name="description" content="([^"]*)/)[1]),
    text: mainText(html),
  });
}
const nf = await render("/404");
write("404.html", fill(nf.head, nf.html));
// admin is client-rendered only: empty root, noindex
write("admin.html", fill('<title>Admin | The TechByte</title><meta name="robots" content="noindex, nofollow" />', ""));

write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE_URL}${r === "/" ? "/" : r}</loc></url>`).join("\n")}
</urlset>
`);
write("robots.txt", `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

const list = (name, test) =>
  `## ${name}\n\n${pages.filter((p) => test(p.route)).map((p) => `- [${p.title}](${SITE_URL}${p.route}): ${p.description}`).join("\n")}\n`;
write("llms.txt", [
  `# The TechByte\n\n> ${pages[0].description}\n`,
  list("Company", (r) => ["/", "/about", "/work", "/contact", "/get-a-quote"].includes(r)),
  list("Services", (r) => r.startsWith("/services")),
  list("Insights", (r) => r.startsWith("/insights")),
].join("\n"));
write("llms-full.txt", `# The TechByte — full site text\n\n> ${pages[0].description}\n\n` +
  pages.map((p) => `---\n\n# ${p.title}\n\nURL: ${SITE_URL}${p.route}\n\n${p.text}\n`).join("\n"));

rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes + 404 + admin shell; sitemap.xml, robots.txt, llms.txt, llms-full.txt`);
