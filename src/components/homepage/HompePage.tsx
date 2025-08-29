"use client";

import ExploreSolutions from "./ExploreSolutions";
import ExtensiveExperience from "./ExtensiveExperience";
import FutureProof from "./FutureProof";
import HeroSection from "./HeroSection";
import MediaAndIntelligence from "./MediaAndIntelligence";
import "./homepage.css";

const HompePage = () => {
  return (
    <div>
      <HeroSection />
      <FutureProof />
      <ExploreSolutions />
      <ExtensiveExperience />
      <MediaAndIntelligence />
    </div>
  );
};

export default HompePage;
