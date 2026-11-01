import { Link } from "react-router";
import { Seo } from "../lib/seo";

export default function NotFound() {
  return (
    <section className="on-ink container-x py-24">
      <Seo title="Page not found" description="This page does not exist." path="/404" noindex />
      <h1 className="text-h1">This trace leads nowhere.</h1>
      <p className="mt-6 text-lead text-mist-300">The page you were looking for doesn't exist or has moved.</p>
      <Link to="/" className="mt-8 inline-block text-blue-400 underline">Back to home</Link>
    </section>
  );
}
