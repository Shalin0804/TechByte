import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { useReveal } from "./lib/motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Work from "./pages/Work";
import Insights from "./pages/Insights";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// admin code stays out of the public bundle
const Admin = lazy(() => import("./pages/admin/Admin"));

export default function App() {
  const { pathname } = useLocation();
  useReveal(pathname);
  if (pathname.startsWith("/admin"))
    return (
      <Suspense fallback={null}>
        <Admin />
      </Suspense>
    );
  return (
    <>
      <a href="#main" className="skip-link bg-blue-600 px-4 py-2 text-white">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
