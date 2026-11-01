/* The five services The TechByte offers (owner-confirmed 2026-11-01; AI & Automation removed at the owner's request). Copy lives in ./services/*.js.
   Do not add services or technologies without the owner's approval (see CONTENT_STRATEGY.md §1). */
import software from "./services/software-development.js";
import website from "./services/website-development.js";
import webapp from "./services/web-application-development.js";
import mobile from "./services/mobile-app-development.js";
import consulting from "./services/it-consulting.js";

export const services = [software, website, webapp, mobile, consulting];

export const getService = (slug) => services.find((s) => s.slug === slug);

/* Old URLs from the first build, redirected in vercel.json. */
export const LEGACY_SERVICE_REDIRECTS = {
  "custom-software-development": "software-development",
  "business-website-development": "website-development",
  "ecommerce-development": "website-development",
  "website-modernization": "website-development",
  "support-and-maintenance": "software-development",
  "ai-automation": "software-development",
};
