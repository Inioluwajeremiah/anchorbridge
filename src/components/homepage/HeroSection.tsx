import React from "react";
import Header from "../Header";
import FeaturesCard from "./FeaturesCard";

const FeaturesData = [
  {
    title: "Smarter Systems ",
    description:
      "Close deals faster, reduce turnaround times, and automate your work with the world easiest CRM Solutions.  ",
    icon: "",
    innerDescription:
      "Close deals faster, reduce turnaround times, and automate your work with the world easiest CRM Solutions.  ",
    link: "https://anchorbridgeconsulting.com/service/crm-services",
  },
  {
    title: "Smart Solutions                        ",
    description:
      " Turn complexity into clarity with intelligent systems designed to scale with you from strategy to execution.   ",
    icon: "",
    innerDescription:
      "Turn complexity into clarity with intelligent systems designed to scale with you from strategy to execution. ",
    link: "https://anchorbridgeconsulting.com/service/application-development/",
  },
  {
    title: "Stronger Teams                        ",
    description:
      "Build high-performing teams with top-tier global talent. Skilled developers and engineers, ready to deliver.  ",
    icon: "",
    innerDescription:
      "Build high-performing teams with top-tier global talent. Skilled developers and engineers, ready to deliver.       ",
    link: "https://anchorbridgeconsulting.com/service/staff-augmentation/",
  },
];
const HeroSection = () => {
  return (
    <>
      <div className="bg-[url(https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/ABC-BG1-scaled.png)] bg-cover w-full pb-44 ">
        <div className="min-h-screen min-w-screen flex flex-col justify-end items-start  ">
          <Header />
          <div className="container mx-auto mt-5 flex flex-col">
            <h1 className=" text-white text-8xl font-[800] leading-[90px] ">
              It's Time, Create
            </h1>

            <h1 className="text-6xl text-white font-semibold leading-normal ">
              Tech-Driven Solutions.
            </h1>

            <p className=" mt-5 text-xl text-text-color-light">
              Empowering businesses through scalable systems, high-impact tech
              talent, and actionable strategy.
            </p>

            <div className="flex flex-row items-center mt-10 gap-x-4  mb-24">
              <a
                href="https://anchorbridgeconsulting.com/service/crm-services/"
                className="bg-[#040307] p-4 text-lg hover:bg-white hover:text-black text-white rounded-full duration-1000 ease-in-out"
              >
                RM Services
              </a>
              <a
                href="https://anchorbridgeconsulting.com/service/staff-augmentation/"
                className="p-4 text-lg text-white hover:bg-white  hover:text-black border border-white  rounded-full duration-1000 ease-in-out"
              >
                Staff Augmentation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="lg:container  mx-auto grid grid-cols-3 gap-10 -mt-24">
        {FeaturesData.map((feature, index) => (
          <FeaturesCard
            index={index}
            title={feature.title}
            description={feature.description}
            innerDescription={feature.innerDescription}
            link={feature.link}
            icon={feature.icon}
            cardNumber={`0${index + 1}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default HeroSection;
