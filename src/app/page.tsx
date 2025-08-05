import ExploreSolutions from "@/components/homepage/ExploreSolutions";
import ExtensiveExperience from "@/components/homepage/ExtensiveExperience";
import FutureProof from "@/components/homepage/FutureProof";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FutureProof />
      <ExploreSolutions />
      <ExtensiveExperience />
    </div>
  );
}
