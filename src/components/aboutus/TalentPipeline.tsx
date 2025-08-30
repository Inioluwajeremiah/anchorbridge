"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PiPhone } from "react-icons/pi";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export interface ITalentPipelineData {
  tab: string;
  title: string;
  description: string;
  backgroundImage: string;
}
const talentPipelineData: ITalentPipelineData[] = [
  {
    tab: "01. Vetted, Tested",
    title: "Talent Pipeline",
    description:
      "Through our extensive network and training partnerships, we identify top African tech talent across key markets. We tap into coding bootcamps, tech communities, and industry-specific events, including data structure and algorithm seminars, to find highly skilled professionals. With a strong onshore presence in the U.S. and deep offshore talent pipelines across Africa, we deliver globally integrated solutions that meet local business needs.",
    backgroundImage:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/Team_2489117395-scaled.jpg",
  },
  {
    tab: "02. Cost-Effective",
    title: "African Advantage",
    description:
      "By hiring from Africa, you can save up to 46.67% while accessing high-quality talent at a fraction of the cost. Choose Anchor Bridge Consulting for cost-effective, top-tier tech professionals ready to drive your business forward.",
    backgroundImage:
      "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/tab-image.jpg",
  },
  {
    tab: "03. Time-Zone",
    title: "Seamless Collaboration",
    description:
      "With just a 5-hour time difference between Nigeria and the U.S. East Coast, African talent can collaborate in near real-time with U.S. teams. This overlap creates a seamless workday for meetings, agile collaboration, and faster project turnaround—unlike regions with much larger time gaps. Anchor Bridge Consulting helps you tap into this strategic advantage for enhanced productivity and alignment.",
    backgroundImage:
      "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/blog-image-8.jpg",
  },
  {
    tab: "04. Fast Onboarding",
    title: "Client-Ready Talent",
    description:
      "We understand the urgency of hiring the right talent swiftly. Our streamlined onboarding process ensures that qualified candidates are ready to contribute to your team in record time. With our efficient approach, we can onboard top-tier talent in as little as two weeks, minimizing downtime and accelerating your team’s productivity.",
    backgroundImage:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/engineers_2620543131-scaled.jpg",
  },
  {
    tab: "05. Ongoing Support",
    title: "Effortless Onboarding",
    description:
      "Once onboard, we facilitate a smooth integration into your team with ongoing support to ensure a successful collaboration and continuous growth.",
    backgroundImage:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/Support_2478230727-scaled.jpg",
  },
];

const TalentPipeline = () => {
  const [currentData, setCurrentData] = useState<ITalentPipelineData>(
    talentPipelineData[0]
  );

  const { width } = useWindowDimensions();
  return (
    <section
      style={{ backgroundImage: 'url("/our_business_bg.png")' }}
      className=" bg-cover py-20 w-full bg-no-repeat relative"
    >
      <div className="lg:container mx-auto relative">
        {/* <img
          alt={currentData.title + " image"}
          src={currentData.backgroundImage}
          //   width={Dimensions.WindowWidth}
          //   height={200}
          className="rounded-lg w-full h-[72vh]"
        /> */}
        <Image
          alt={currentData.title + " image"}
          src={currentData.backgroundImage}
          width={width}
          height={550}
          className="rounded-3xl w-[100%] h-[550px]  object-center "
        />

        <div className="absolute w-full h-full top-0 z-30 bg-black/30 rounded-3xl">
          <div className="flex flex-col md:flex-row items-start h-full  ">
            {/* nav */}
            <div className="absolute left-[3%] right-[3%] md:left-0 md:right-0 mx-auto md:relative  lg:top-0 -top-full w-[94%] md:ml-10  lg:ml-20  md:-mt-10 md:w-[40%] lg:w-[24%] rounded-lg bg-white">
              <ul className="  flex flex-col justify-start items-center px-4 pt-4  ">
                {talentPipelineData.map((data, index) => (
                  <li
                    key={index}
                    className={`w-full mx-4 cursor-pointer font-semibold text-xl py-6 border-b-2 border-b-border-color-dark  ${
                      currentData.tab === data.tab
                        ? "text-primary-color-two"
                        : ""
                    }`}
                    onClick={() => setCurrentData(data)}
                  >
                    {data.tab}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+1 954-751-5611"
                className="flex flex-row items-center py-6 px-4 bg-black rounded-t-2xl text-white gap-2 "
              >
                <span className="w-10 h-10 flex flex-col justify-center items-center bg-white rounded-full ">
                  <PiPhone size={24} color="black" />
                </span>
                Call For Free Consultation
              </a>
            </div>
            {/* main */}
            <div className="w-full lg:w-[80%] h-full p-10 flex flex-col  lg:justify-end justify-center items-center lg:items-start  ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {currentData.title || "Talent Pipeline"}
              </h1>
              <p className="w-full mt-4  text-lg text-white mb-10">
                {currentData.description ||
                  "Select a tab to view details about our talent pipeline."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentPipeline;
