import { useEffect } from "react";

/* Reveals [data-reveal] elements once they are 15% visible by setting a data-in attribute.
   An attribute, not a class: React rewrites className on re-render (e.g. a hovered row changing
   state), which would wipe a class and hide the element again. React leaves unknown attributes alone. CSS (base.css) hides them only
   under html.js, so prerendered content stays visible without JS. Siblings inside a
   [data-reveal-group] stagger via --reveal-delay. A MutationObserver picks up elements added
   later (lazy-loaded pages, tabs, filters), so one observer serves the whole session. */
let started = false;

function start() {
  const reduced = document.documentElement.classList.contains("reduced");
  const io =
    !reduced && "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => entries.forEach((e) => e.isIntersecting && (e.target.setAttribute("data-in", ""), io.unobserve(e.target))),
          { threshold: 0.15 }
        )
      : null;

  const scan = (root) => {
    root.querySelectorAll?.("[data-reveal-group]").forEach((g) =>
      g.querySelectorAll("[data-reveal]").forEach((el, i) => el.style.setProperty("--reveal-delay", `${Math.min(i, 8) * 60}ms`))
    );
    const els = [...(root.matches?.("[data-reveal]") ? [root] : []), ...(root.querySelectorAll?.("[data-reveal]:not([data-in])") ?? [])];
    els.forEach((el) => (io ? io.observe(el) : el.setAttribute("data-in", "")));
  };

  scan(document);
  new MutationObserver((muts) => muts.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && scan(n)))).observe(document.body, {
    childList: true,
    subtree: true,
  });
}

export function useReveal() {
  useEffect(() => {
    if (!started) {
      started = true;
      start();
    }
  }, []);
}
