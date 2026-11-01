import { Seo, faqSchema } from "../lib/seo";
import { HOME_FAQ } from "../data/site";
import Hero from "../components/sections/Hero";
import Pillars from "../components/sections/Pillars";
import TechMarquee from "../components/sections/TechMarquee";
import SignalBoard from "../components/sections/SignalBoard";
import Why from "../components/sections/Why";
import Pipeline from "../components/sections/Pipeline";
import WorkBand from "../components/sections/WorkBand";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";

/**
 * Home page implementing DESIGN_SYSTEM §7 & TASKS.md T05/T06.
 * - Single H1 strictly inside Hero.
 * - Seo includes faqSchema(HOME_FAQ) as specified.
 */
export default function Home() {
  return (
    <>
      <Seo
        title="The TechByte — Custom Software & Web Development, Ahmedabad"
        description="The TechByte designs and builds custom software, web applications, business websites and e-commerce stores, modernizes existing websites and supports them after launch."
        path="/"
        schema={[faqSchema(HOME_FAQ)]}
      />

      {/* 1. Hero: Trace Field */}
      <Hero />

      {/* 2. Pillars: Build • Innovate • Transform */}
      <Pillars />

      {/* 3. TechMarquee: 15 vetted technologies */}
      <TechMarquee />

      {/* 4. Signal Board: 6 core capabilities with interactive preview */}
      <SignalBoard />

      {/* 5. Why TechByte: Asymmetric editorial statement & principles */}
      <Why />

      {/* 6. Pipeline: 7-milestone structured delivery */}
      <Pipeline />

      {/* 7. Work Band: Honest case studies in progress */}
      <WorkBand />

      {/* 8. FAQ: Frequently Asked Questions */}
      <Faq />

      {/* 9. Final CTA: Let's build it */}
      <FinalCta />
    </>
  );
}
