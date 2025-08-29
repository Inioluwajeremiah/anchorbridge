"use client";

import Image from "next/image";
import React, { useState } from "react";
import usaIcon from "../../../public/usaicon.webp";
import bulbIcon from "../../../public/bulb.png";
import peopleIcon from "../../../public/people.png";
import { BsPlayCircle } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const empoweringData = [
  {
    title: "Bespoke Innovative Solutions",
    icon: bulbIcon,
  },

  {
    title: "Hire a World-Class Team",
    icon: peopleIcon,
  },
];
const Empowering = () => {
  const { width, height } = useWindowDimensions();
  const [showIframe, setShowIframe] = useState(false);
  return (
    <section className="w-[94%] lg:container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 bg-[url(/empowering_bg.png)] bg-no-repeat bg-center  py-20">
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold underline">
          Empowering
        </h1>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
          Growth Through RevOps Excellence
        </h1>
        <div className="flex flex-row items-center gap-4 mt-4">
          <Image
            alt="usa icon"
            width={60}
            height={60}
            className="w-14 h-14 rounded-full"
            src={usaIcon}
          />

          <p className="text-base md:text-lg lg:text-xl font-semibold">
            Since 2025, <br />
            Operating in Fort Lauderdale.
          </p>
        </div>
        <p className="text-text-color-dark text-sm md:text-base mt-4">
          Anchor Bridge Consulting is an innovative technology services and
          staff augmentation firm based in Fort Lauderdale, FL with offices in
          Lagos, Nigeria. We deliver high-impact solutions built around three
          core pillars: People, Process, and Technology—serving small to
          mid-sized businesses with technical talent placement and enterprise
          technical services. Understanding that technology is only as good as
          the people and processes behind it, We focus on serving businesses in
          the Retail, Logistics, Hospitality and Software Development sectors.
          We deliver full-service CRM consulting, RevOps strategy, and technical
          staffing tailored to small and mid-sized businesses ready to scale. We
          lead with people. We streamline processes. We power growth with
          technology. Think of Anchor Bridge as your world-class RevOps partner.
        </p>

        <div className="flex flex-row items-center gap-10 mt-4 ">
          {empoweringData.map((item, index) => (
            <div
              key={index}
              className="w-1/2 border-t-2 border-t-border-color-dark hover:border-t-black duration-1000  flex flex-row items-center gap-4 mb-6 cursor-pointer py-4"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full"
              />
              <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* crm dervices button */}
        <button className="bg-black text-base md:text-lg  lg:text-xl hover:bg-white border border-black rounded-tl-lg rounded-br-lg text-white hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-tl-none hover:rounded-br-none  hover:text-black p-4 cursor-pointer duration-500 ">
          Our Services
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 z-20 ">
          <img
            src={"/empowering_img1.jpg"}
            alt="Empowering Image"
            className="w-full  h-[500px] lg:h-auto object-cover object-center rounded-lg"
          />
          <p className="w-full lg:w-[120%] z-30 bg-black rounded-lg p-4 mt-4 text-white text-lg md:text-xl lg:text-2xl font-semibold ">
            Solving Complex Problems With Purpose-Built Tools <br />
            <span className=" capitalize text-text-color-light font-medium leading-6 mt-4">
              / Godfrey Malan
            </span>
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-full  ">
          <div className="relative w-full lg:w-[80%] h-1/2 rounded-lg lg:rounded-none">
            <img
              src={"/empowering_img2.png"}
              alt="Empowering Image 2"
              //   width={500}
              //   height={500}
              className="w-full h-[500px] lg:h-full lg:object-cover object-center rounded-lg mt-10 lg:mt-20 mb-10"
            />
            <button
              onClick={() => {
                setShowIframe(!showIframe);
              }}
              className="bg-black h-16 w-16 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
            >
              <BsPlayCircle color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
      {showIframe && (
        <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-white/50">
          {/* close button */}
          <button
            onClick={() => setShowIframe(false)}
            className=" absolute top-3 right-44 ml-auto  flex  flex-col justify-start items-center cursor-pointer"
          >
            <div className=" rounded-full flex flex-col justify-center items-center">
              <RiCloseCircleFill size={24} color="#fff" />
            </div>
            <p className="text-white text-lg mt-[2px] font-normal">Close</p>
          </button>
          <iframe
            className="h-full w-full"
            width={width}
            height={height - 80}
            src="https://www.youtube.com/watch?v=crqcHvV_qq0"
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Empowering;
