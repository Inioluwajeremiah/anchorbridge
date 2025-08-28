import React from "react";
import ExploreSolutionsCard from "./ExploreSolutionsCard";

const ExploreSolutionsData = [
  {
    title: "Application Development",
    description:
      "Building modern, secure, and scalable applications—custom-designed to transform operations, connect...",
    link: "https://anchorbridgeconsulting.com/service/application-development/",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/Development_2108122673-scaled.jpg",
  },

  {
    title: "CRM Services                        ",
    description:
      "Transform how your business operates through our CRM and automation solutions and…",
    link: "https://anchorbridgeconsulting.com/service/crm-services/",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/crm-service_2306742311-scaled.jpg",
  },
  {
    title: "Staff Augmentation",
    description:
      "Flexible onshore and offshore staffing—bringing Africa’s best tech talent and North America’s…",
    icon: "",
    link: "https://anchorbridgeconsulting.com/service/staff-augmentation/",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/staffing_2500134851-scaled.jpg",
  },
];

const ExploreSolutions = () => {
  return (
    <section className=" bg-[#f0f3f9] py-20 ">
      <div className="w-full lg:container mx-auto px-5 md:px-10 lg:px-20">
        <h1 className=" scroll-reveal-bottom-top text-xl md:text-2xl lg:text-3xl text-center underline text-primary-color-two">
          Explore Solutions
        </h1>
        <h1 className="scroll-reveal-bottom-top text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-color-two my-5">
          Empower Your Business
        </h1>
        <p className="scroll-reveal-bottom-top text-text-color-dark text-center text-base lg:text-lg">
          You don&apos;t need to think twice, get everything you need to get
          organised and make more sales!
        </p>

        {/* explore solutions */}
        <div className="scroll-reveal-bottom-top w-full lg:container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {ExploreSolutionsData.map((solution, index) => (
            <ExploreSolutionsCard
              title={solution.title}
              description={solution.description}
              link={solution.link}
              imageUrl={solution.imageUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;
