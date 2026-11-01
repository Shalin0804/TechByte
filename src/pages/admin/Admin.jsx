import { Seo } from "../../lib/seo";

/* T01 stub — built in T11. */
export default function Admin() {
  return (
    <main className="on-ink min-h-screen p-8">
      <Seo title="Admin" description="Admin" path="/admin" noindex />
      <h1 className="text-h3">Admin</h1>
    </main>
  );
}
