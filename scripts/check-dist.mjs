/* Post-build QA: one <h1> per page, no href="#", every internal link and #anchor resolves,
   every asset exists. Prints visible word counts per page. Run after `npm run build`. */
import fs from "node:fs";
import path from "node:path";

const files = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
};
walk("dist");

const page = (u) => (u === "/" ? "dist/index.html" : fs.existsSync(`dist${u}.html`) ? `dist${u}.html` : null);
const ids = (f) => new Set([...fs.readFileSync(f, "utf8").matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
const bad = new Set();
const words = [];
let links = 0;

for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  const name = f.split(path.sep).join("/").replace(/^dist/, "");
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) bad.add(`${name}: ${h1} <h1>`);
  if (/href="#"/.test(h)) bad.add(`${name}: href="#"`);
  const main = (h.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? "")
    .replace(/<(svg|script|style)[\s\S]*?<\/\1>/g, "")
    .replace(/<[^>]+>/g, " ");
  words.push([main.split(/\s+/).filter(Boolean).length, name]);
  for (const m of h.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    links++;
    const [raw, hash] = m[1].split("#");
    const u = raw.split("?")[0].replace(/\/$/, "") || "/";
    if (/\.[a-z0-9]+$/i.test(u)) {
      if (!fs.existsSync(`dist${u}`)) bad.add(`${name}: missing asset ${u}`);
      continue;
    }
    const target = page(u);
    if (!target) bad.add(`${name}: broken link ${m[1]}`);
    else if (hash && !ids(target).has(hash)) bad.add(`${name}: missing anchor ${m[1]}`);
  }
}

console.log(`${files.length} pages, ${links} internal links/assets checked`);
console.log(bad.size ? [...bad].join("\n") : "OK: no broken links, anchors, assets or H1 problems");
console.log(words.sort((a, b) => b[0] - a[0]).map(([w, n]) => `${String(w).padStart(5)}  ${n}`).join("\n"));
process.exitCode = bad.size ? 1 : 0;
