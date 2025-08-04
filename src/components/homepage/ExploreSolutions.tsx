import React from "react";
import ExploreSolutionsCard from "./ExploreSolutionsCard";

const ExploreSolutionsData = [
  {
    title: "Application Development",
    description:
      "Building modern, secure, and scalable applications—custom-designed to transform operations, connect...",
    link: "https://anchorbridgeconsulting.com/service/application-development/",
  },

  {
    title: "CRM Services                        ",
    description:
      "Transform how your business operates through our CRM and automation solutions and…",
    link: "https://anchorbridgeconsulting.com/service/crm-services/",
  },
  {
    title: "Staff Augmentation",
    description:
      "Flexible onshore and offshore staffing—bringing Africa’s best tech talent and North America’s…",
    icon: "",
    link: "https://anchorbridgeconsulting.com/service/staff-augmentation/",
  },
];
const ExploreSolutions = () => {
  return (
    <section className="container mx-auto bg-[#f0f349 py-20 ">
      <h1 className="text-3xl underline text-primary-color-two">
        Explore Solutions
      </h1>
      <h1 className="text-5xl font-bold text-primary-color-two mt-3">
        Empower Your Business
      </h1>
      <p className="text-text-color-dark mt-5 text-lg">
        You don't need to think twice, get everything you need to get organised
        and make more sales!
      </p>

      {/* explore solutions */}
      <div className="lg:container  mx-auto grid grid-cols-3 gap-10 -mt-24">
        {ExploreSolutionsData.map((solution, index) => (
          <ExploreSolutionsCard
            index={index}
            title={solution.title}
            description={solution.description}
            link={solution.link}
            imageUrl={`https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/${solution.title
              .toLowerCase()
              .replace(/\s+/g, "-")}.png`}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreSolutions;
