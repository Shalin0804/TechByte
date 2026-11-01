import { useEffect } from "react";

/* Reveals [data-reveal] elements once they are 15% visible. CSS (base.css) hides them only
   under html.js, so prerendered content stays visible without JS. Siblings stagger via
   --reveal-delay, which is set here from their order inside a [data-reveal-group]. */
export function useReveal(dep) {
  useEffect(() => {
    const els = [...document.querySelectorAll("[data-reveal]:not(.is-in)")];
    if (!("IntersectionObserver" in window) || document.documentElement.classList.contains("reduced")) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    document.querySelectorAll("[data-reveal-group]").forEach((g) =>
      g.querySelectorAll("[data-reveal]").forEach((el, i) => el.style.setProperty("--reveal-delay", `${i * 60}ms`))
    );
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
