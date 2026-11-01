import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./styles/index.css";
import App, { preloadRoute } from "./App";

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
const root = document.getElementById("root");
// prerendered pages hydrate; the dev server ships an empty root and renders client-side
// the current page's chunk is loaded first, so hydration matches the prerendered HTML
preloadRoute(location.pathname).then(() => (root.hasChildNodes() ? hydrateRoot(root, app) : createRoot(root).render(app)));
