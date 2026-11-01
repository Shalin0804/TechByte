import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { useReveal } from "./lib/motion";

/* Each page is its own chunk. preloadRoute() resolves the current page's chunk before the first
   render (prerender and hydration), so that page renders synchronously. Later pages load lazily. */
const PAGES = [
  ["/", () => import("./pages/Home")],
  ["/about", () => import("./pages/About")],
  ["/services", () => import("./pages/Services")],
  ["/services/:slug", () => import("./pages/ServiceDetail")],
  ["/process", () => import("./pages/Process")],
  ["/technologies", () => import("./pages/Technologies")],
  ["/industries", () => import("./pages/Industries")],
  ["/faq", () => import("./pages/Faq")],
  ["/work", () => import("./pages/Work")],
  ["/insights", () => import("./pages/Insights")],
  ["/insights/:slug", () => import("./pages/Article")],
  ["/contact", () => import("./pages/Contact")],
  ["/get-a-quote", () => import("./pages/Quote")],
  ["/privacy-policy", () => import("./pages/Privacy")],
  ["/terms", () => import("./pages/Terms")],
  ["*", () => import("./pages/NotFound")],
].map(([path, load]) => ({ path, load, Lazy: lazy(load), Ready: null }));

export async function preloadRoute(pathname) {
  const page = PAGES.find((p) => p.path !== "*" && matchPath(p.path, pathname)) || PAGES.at(-1);
  page.Ready = (await page.load()).default;
}

const Page = ({ page }) => (page.Ready ? <page.Ready /> : <page.Lazy />);

export default function App() {
  const { pathname, hash } = useLocation();
  useReveal();
  // transitions only after the first client-side navigation, so the prerendered first paint is untouched
  const first = useRef(pathname);
  const [navigated, setNavigated] = useState(false);
  useEffect(() => {
    if (pathname === first.current && !navigated) return;
    setNavigated(true);
    if (!hash) window.scrollTo(0, 0);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <a href="#main" className="skip-link bg-blue-600 px-4 py-2 text-white">Skip to content</a>
      <Nav />
      {navigated && <div key={`t${pathname}`} className="tb-route-trace" aria-hidden="true" />}
      <main id="main" key={pathname} className={navigated ? "tb-page-enter" : undefined}>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            {PAGES.map((p) => (
              <Route key={p.path} path={p.path} element={<Page page={p} />} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
