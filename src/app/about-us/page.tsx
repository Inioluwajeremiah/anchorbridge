import PageHeader from "@/components/PageHeader";
import Empowering from "@/components/aboutus/Empowering";
import OurBusiness from "@/components/aboutus/OurBusiness";
import TalentPipeline from "@/components/aboutus/TalentPipeline";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        links={[
          { title: "Home", url: "/" },
          { title: "About Us", url: "/about-us" },
        ]}
      />
      <div className="lg:container mx-auto mt-10 px-5 ">
        <Empowering />
        <OurBusiness />
      </div>
      <TalentPipeline />
    </div>
  );
};

export default AboutUs;
