import React from "react";
import OurBusinessCard from "./OurBusinessCard";

const ourBusinessData = [
  {
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/Together_2528926873-scaled.jpg",
    icon: "icon-bow-and-arrow",
    title: "Our Mission",
    description:
      "Empower small to mid-sized organizations with scalable processes and modern technology that drive revenue and reduce complexity. We focus on building long-term partnerships grounded in collaboration, transparency, and shared success.",
    values: [],
  },
  {
    imageUrl: "",
    icon: "icon-growth",
    title: "Our Core Values",
    description:
      "We put people first, investing in talent and understanding our clients deeply. With integrity, innovation, and a commitment to excellence, we deliver impactful, forward-thinking solutions. As true partners, we bring a global perspective with a strong focus on local impact.",
    values: ["People", "Integrity", "Innovation", "Excellence", "Partnership"],
  },
  {
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/CRM_2237569387-scaled.jpg",
    icon: "icon-binoculars",
    title: "Our Vision",
    description:
      "We connect businesses with world-class tech talent and transformative digital solutions.\nOur mission is to fuel growth with clarity, innovation, and integrity.\nWe envision a world where African professionals thrive in the global digital economy.",
    values: [],
  },
];

const OurBusiness = () => {
  return (
    <section className="py-20 bg-[#f0f3f9]">
      <h1 className="text-3xl text-center underline text-primary-color-two">
        Our Business
      </h1>
      <h1 className="text-5xl text-center font-bold text-primary-color-two my-5">
        Stand Out From The Rest
      </h1>

      <div className="lg:container  mx-auto grid grid-cols-3 gap-10 mt-10">
        {ourBusinessData.map((business, index) => (
          <OurBusinessCard
            key={index}
            index={index}
            title={business.title}
            description={business.description}
            imageUrl={business.imageUrl}
            values={business.values}
          />
        ))}
      </div>
    </section>
  );
};

export default OurBusiness;
