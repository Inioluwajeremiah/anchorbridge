import React from "react";
import Header from "../Header";
import FeaturesCard from "./FeaturesCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import "./homepage.css";

const FeaturesData = [
  {
    title: "Smarter Systems ",
    description:
      "Close deals faster, reduce turnaround times, and automate your work with the world easiest CRM Solutions.  ",

    innerDescription:
      "Close deals faster, reduce turnaround times, and automate your work with the world easiest CRM Solutions.  ",
    link: "https://anchorbridgeconsulting.com/service/crm-services",
  },
  {
    title: "Smart Solutions                        ",
    description:
      " Turn complexity into clarity with intelligent systems designed to scale with you from strategy to execution.   ",

    innerDescription:
      "Turn complexity into clarity with intelligent systems designed to scale with you from strategy to execution. ",
    link: "https://anchorbridgeconsulting.com/service/application-development/",
  },
  {
    title: "Stronger Teams                        ",
    description:
      "Build high-performing teams with top-tier global talent. Skilled developers and engineers, ready to deliver.  ",

    innerDescription:
      "Build high-performing teams with top-tier global talent. Skilled developers and engineers, ready to deliver.       ",
    link: "https://anchorbridgeconsulting.com/service/staff-augmentation/",
  },
];
const HeroSection = () => {
  return (
    <>
      {/* rgb(74, 78, 86) */}
      <div className="bg-[url(https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/ABC-BG1-scaled.png)] bg-[rgb(74,78,86)] bg-center bg-cover bg-no-repeat w-full pt-4 pb-10 md:pb-20 lg:pb-44 ">
        <div className="mt-40 lg:mt-0  min-w-screen flex flex-col justify-end items-start  ">
          <Header fromHome={true} />
          <div className="w-full lg:container mx-auto mt-20 lg:mt-76 flex flex-col px-5 md:px-10 lg:px-20 ">
            <div className="top-down-slide-animation">
              <h1 className=" text-white text-5xl md:text-6xl lg:text-8xl font-[800] leading-[60px] md:leading-[70px] lg:leading-[90px] ">
                It&#39;s Time, Create
              </h1>

              <div className="relative w-full">
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold leading-normal ">
                  Tech-Driven Solutions.
                </h1>

                <p className="mt-5 text-lg md:text-lg lg:text-xl text-text-color-light">
                  Empowering businesses through scalable systems, high-impact
                  tech talent, and actionable strategy.
                </p>

                {/* slider buttons */}

                <button className="hidden absolute -left-24 top-1/2  -translate-y-1/2  h-14 w-14 rounded-full bg-white/30 lg:flex flex-col justify-center items-center cursor-pointer">
                  <BsArrowLeft size={25} color="#fff" />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/30 flex flex-col justify-center items-center cursor-pointer">
                  <BsArrowRight size={25} color="#fff" />
                </button>
              </div>
            </div>

            <div className="left-right-slide-animation flex flex-col sm:flex-row items-start sm:items-center mt-10 gap-4 mb-20 lg:mb-24">
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
      <div className="lg:container scroll-reveal-bottom-top  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-10 md:mt-20 lg:-mt-24 px-5 md:px-10 lg:px-20 ">
        {FeaturesData.map((feature, index) => (
          <FeaturesCard
            index={index}
            title={feature.title}
            description={feature.description}
            innerDescription={feature.innerDescription}
            link={feature.link}
            cardNumber={`0${index + 1}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default HeroSection;
