import { Seo, faqSchema } from "../lib/seo";
import { HOME_FAQ } from "../data/home";
import Hero from "../components/sections/Hero";
import HomeIntro from "../components/sections/HomeIntro";
import SignalBoard from "../components/sections/SignalBoard";
import ProblemsSolved from "../components/sections/ProblemsSolved";
import ApproachContrast from "../components/sections/ApproachContrast";
import TechCompact from "../components/sections/TechCompact";
import Pipeline from "../components/sections/Pipeline";
import Why from "../components/sections/Why";
import HomeIndustries from "../components/sections/HomeIndustries";
import HomeJourney from "../components/sections/HomeJourney";
import WorkBand from "../components/sections/WorkBand";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";

/**
 * Home page implementing DESIGN_SYSTEM §7 & TASKS.md C4.
 * Complete 13-section editorial layout driven by structured data:
 * 1. Hero: Trace Field
 * 2. Intro: Who we are (INTRO)
 * 3. Services: Signal Board (SERVICES_INTRO + 6 services + SERVICE_WHEN)
 * 4. Problems We Solve (PROBLEMS)
 * 5. Our Approach: Contrast table (APPROACH)
 * 6. Technologies by category (TECH_GROUPS compact)
 * 7. Process: Pipeline 8 phases (PROCESS)
 * 8. Why The TechByte (WHY 6 items)
 * 9. Industries (INDUSTRIES)
 * 10. Project Journey (JOURNEY 6 steps)
 * 11. Work band: Honest blueprint band
 * 12. FAQ (HOME_FAQ 11 items)
 * 13. Final CTA (CTA)
 */
export default function Home() {
  return (
    <>
      <Seo
        title="The TechByte — Custom Software & Web Development, Ahmedabad"
        description="The TechByte designs and builds custom software, web applications, business websites and mobile apps, automates processes and supports them after launch."
        path="/"
        schema={[faqSchema(HOME_FAQ)]}
      />

      {/* 1. Hero: Trace Field */}
      <Hero />

      {/* 2. Intro: Who we are */}
      <HomeIntro />

      {/* 3. Services: Signal Board (6 capabilities) */}
      <SignalBoard />

      {/* 4. Problems We Solve */}
      <ProblemsSolved />

      {/* 5. Our Approach: Animated Contrast Table */}
      <ApproachContrast />

      {/* 6. Technologies by Category */}
      <TechCompact />

      {/* 7. Process: Pipeline (8 phases) */}
      <Pipeline />

      {/* 8. Why The TechByte */}
      <Why />

      {/* 9. Industries */}
      <HomeIndustries />

      {/* 10. Project Journey */}
      <HomeJourney />

      {/* 11. Work Band */}
      <WorkBand />

      {/* 12. FAQ */}
      <Faq theme="paper" labelIndex="12" />

      {/* 13. Final CTA */}
      <FinalCta />
    </>
  );
}
