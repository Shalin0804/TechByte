# The TechByte — Design System

Source of truth for tokens: `src/styles/tokens.css`. This document explains the reasoning behind them. Change tokens only through a TASKS.md request to Claude.

## 1. Concept: "Signal Path"

The logo is a T and a B joined by **circuit traces that end in nodes**. The whole site extends that idea: a **trace** is a thin line that carries a **signal** (a moving cyan pulse) between **nodes**. Work at TechByte is shown as a signal travelling from an idea (first node) to a running product (last node). That is the meaning of Build → Innovate → Transform.

Mood: a serious engineering firm presented like an editorial studio. Deep navy "ink" sections and cool off-white "paper" sections alternate. The type is large and confident, layouts are asymmetric, and there is a lot of empty space. Decoration is limited to traces and nodes: no stock 3D blobs, no gradient-mesh wallpaper, no icon-card grids.

What makes it different from Codefloor IT (which must not be reused): no mascot or assistant, no three.js, no pinned full-screen scenes, no Inter or Space Grotesk, chamfered corners where Codefloor uses rounded ones, and an editorial row layout where Codefloor uses card grids.

## 2. Colour

Taken from the logo. Use the semantic tokens; primitive values are listed for reference only.

| Token | Value | Use |
|---|---|---|
| `ink-950` | `#050B1F` | dark section background, hero |
| `ink-900` | `#0A1640` | logo navy, dark panels, text on paper |
| `ink-800` | `#13245E` | hairlines and raised surfaces on ink |
| `blue-500` | `#1F6BFF` | brand electric blue: primary buttons, active traces |
| `blue-400` | `#5B91FF` | blue text or links on ink (AA on ink-950) |
| `cyan-400` | `#2ED3F0` | **signal only**: pulses, nodes, focus ring. Never body text, never large fills |
| `paper-50` | `#F5F7FC` | light section background |
| `paper-100` | `#E7ECF7` | hairlines and panels on paper |
| `mist-300` | `#A8B3D1` | secondary text on ink |
| `slate-600` | `#4A5678` | secondary text on paper |

Rules: one blue CTA per viewport. Cyan stays under about 3% of any screen. White text on `blue-500` passes AA (4.6:1). Use `blue-400`, not `blue-500`, for text links on ink.

Gradient (the only one): `radial-gradient` glow, from `blue-500` at 18% opacity to transparent, placed behind a hero node. No linear rainbow gradients.

## 3. Typography

| Role | Family | Settings |
|---|---|---|
| Display / headings | Bricolage Grotesque Variable | wght 600–700, tracking −0.035em, line-height 0.95 |
| Body / UI | Geist Variable | wght 400/500, line-height 1.6 |
| Labels, indices, meta | Geist Mono Variable | 12px, uppercase, tracking 0.14em |

Fluid scale (in `tokens.css`):
- `display` — clamp(3rem, 8.5vw, 8rem): the hero H1 and the final CTA only
- `h1` — clamp(2.5rem, 5.5vw, 4.75rem)
- `h2` — clamp(2rem, 4vw, 3.5rem)
- `h3` — clamp(1.375rem, 2vw, 1.75rem)
- `lead` — clamp(1.125rem, 1.4vw, 1.3125rem)
- `body` — 1rem; `small` — 0.875rem; `label` — 0.75rem mono

Body text is at most 64ch wide. Every page has exactly one H1.

**Index labels** are the signature typographic device: `01 — DISCOVER` in mono, set above headings and rows.

## 4. Layout and spacing

- Spacing follows Tailwind's 4px scale. Section padding `--space-section`: clamp(5rem, 12vw, 10rem).
- Container: max 1360px, gutter clamp(1rem, 4vw, 3rem) (16px minimum on phones).
- 12-column grid, used asymmetrically: headings span cols 1–7 with content in 8–12, or a label column (1–3) beside content (4–12). Avoid centred symmetric hero layouts.
- Breakpoints: Tailwind defaults (sm 640, md 768, lg 1024, xl 1280). Design mobile-first; the "editorial" asymmetry starts at `lg`.

## 5. Shape: the chamfer

The logo's cut corners become the site's shape language. Buttons and panels use a **chamfer** (a 45° corner cut) instead of a border-radius:
- `.chamfer` cuts the top-left and bottom-right corners by `--cut` (12px on buttons, 20px on panels), using `clip-path: polygon(...)`.
- Hairline borders on chamfered shapes are drawn with an inset pseudo-element, because `clip-path` clips ordinary borders.
- Small elements (tags, inputs) use radius 2px. Never use pill buttons or `rounded-2xl` cards.

## 6. Components

**Buttons**
- Primary: `blue-500` fill, white Geist 500 text, chamfer, 48px tall. On hover the arrow moves 4px right and the fill brightens. Focus: 2px `cyan-400` outline offset by 3px.
- Secondary: transparent, 1px hairline (ink or paper), same chamfer. On hover a trace line draws along the bottom edge.
- Text link: underline drawn as a trace, `scaleX` 0→1 from the left on hover.
- Minimum target size 44×44px.

**Panel** (replaces "cards"): hairline border, chamfer, and one **node** (a 6px ring) at the top-left cut. No drop shadows on ink. On paper, at most `0 1px 0` plus a 24px soft ambient shadow at 6%.

**Trace**: a 1px SVG line in `ink-800` (on ink) or `paper-100` (on paper), with nodes at its ends. An active trace turns `blue-500`, and a signal pulse (a `cyan-400` dot with a 12px glow) can travel along it.

**Navigation**: a 72px bar with the logo mark and wordmark on the left, five links (Services, Work, About, Insights, Contact), and a primary "Let's Talk" button (→ /get-a-quote). It hides on scroll down and reappears on scroll up. Over the hero it is transparent; elsewhere it uses `ink-950` at 80% opacity with a 12px backdrop blur (the only glass effect on the site). Mobile: a full-screen ink overlay with numbered display-size links that stagger in, a focus trap, Esc to close, and body scroll locked.

**Footer**: ink, a large "Let's build it." line, contact details, sitemap columns, legal links, and the tagline in mono.

**Forms**: labels above fields, 48px inputs, 2px radius, hairline border that turns blue on focus. Errors appear as text under the field, linked with `aria-describedby`. Submit buttons show a loading state. Success and failure messages use `role="status"`.

## 7. Signature sections (home)

1. **Hero: Trace Field.** On ink. The H1 sits on the left, cols 1–7. On the right, an inline-SVG TB monogram whose traces draw outward on load (stroke-dashoffset, 1.2s) to three terminal nodes labelled BUILD, INNOVATE and TRANSFORM. A signal pulse loops slowly along one trace. On desktop with a fine pointer, the nearest node glows as the pointer approaches. Text is never animated in a way that delays the LCP: the H1 is rendered visible and only gets a 300ms clip reveal.
2. **Services: Signal Board.** Six full-width editorial rows (index, title in h2 size, one-line summary). On hover or focus, a row's trace lights up and a sticky preview panel on the right (desktop) shows that service's glyph and description. Each row is a link to its service page. On mobile, rows stack with the summary always visible, and there is no hover dependency.
3. **Why TechByte.** Asymmetric: a statement on the left and five numbered principles on the right (problem-first, practical technology, business-focused, built to scale, quality and reliability). No icons.
4. **Process: Pipeline.** Discover → Strategize → Design → Develop → Test → Launch → Support, as seven nodes on one trace. On desktop it is horizontal, and a CSS scroll-driven animation (`animation-timeline: view()`) advances the signal; browsers without support show the trace fully lit. On mobile it is a vertical trace.
5. **Work: Open Slots.** Three chamfered frames with a wireframe drawing and the label "Case study slot — first projects in progress", plus a CTA to /get-a-quote. They are clearly placeholders, with no fake names or numbers.
6. **Final CTA.** "Let's build it." in display size, the email as a large link, and the Let's Talk and Explore Our Work buttons.

Each service has its own glyph: a small SVG made only from traces and nodes (custom software = branching tree, web app = panel grid, website = page outline, e-commerce = cart path, modernization = old trace rerouted, support = closed loop).

## 8. Motion

| Token | Value |
|---|---|
| `--ease-out` | cubic-bezier(.16, 1, .3, 1) |
| `--ease-in-out` | cubic-bezier(.65, 0, .35, 1) |
| `--dur-fast` / `base` / `slow` / `draw` | 150ms / 300ms / 600ms / 1200ms |

- **Reveal**: elements marked `data-reveal` start at translateY(24px) with opacity 0 and animate in once at 15% visibility. Siblings stagger by 60ms. This only applies when JS has added `html.js`, so prerendered content is never hidden without JS.
- **Page transitions**: the View Transitions API cross-fades the page and slides the main content 12px. Browsers without support get no transition.
- **Loading**: no blocking preloader. The page renders immediately, and the hero trace-draw is the loading moment.
- **Cursor**: on `(pointer: fine)` only, a 28px ring follows the pointer and grows over interactive elements. The native cursor is never hidden, and the ring is removed under reduced motion.
- **Parallax**: at most one layer per section (a hero glow or a background trace), translateY under 40px.
- **Reduced motion**: every animation and transition over 150ms is disabled, traces are shown fully drawn, and the pulse is hidden.
- **Budget**: animate only transform, opacity, stroke-dashoffset and clip-path. No scroll listeners in render paths (use IntersectionObserver or CSS). No scroll hijacking or smooth-scroll libraries.

## 9. Imagery and icons

- lucide-react at 1.5px stroke for UI icons only (arrow, menu, mail, phone).
- Illustrations are inline SVG built from traces and nodes. No stock photos and no AI-generated people.
- Raster images are WebP/AVIF with width and height set, `loading="lazy"` below the fold, and descriptive alt text.

## 10. Accessibility

WCAG 2.2 AA. A skip link, visible focus everywhere, a landmark structure (header, nav, main, footer), real buttons and links, keyboard support in every interactive section, decorative SVGs marked `aria-hidden`, and a meaningful `<title>` for the monogram.
