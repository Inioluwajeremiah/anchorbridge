"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";
import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { RiCloseCircleFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";

const companyImages: { url: string; title: string }[] = [
  {
    url: "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/Monday.png",
    title: "Monday",
  },
  {
    url: "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/Pipedrive_Logo.png",
    title: "Pipedrive",
  },
  {
    url: "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/Sandler-P.png",
    title: "Sandler Partners",
  },
  {
    url: "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/full-lockup-whitepng-scaled.png",
    title: "Full Lockup White",
  },
  {
    url: "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/Ace.webp",
    title: "Ace",
  },
  {
    url: "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/DKloud.png",
    title: "DKloud",
  },
];

const ExtensiveExperience = () => {
  const [showIframe, setShowIframe] = useState(false);
  const { width, height } = useWindowDimensions();
  return (
    <section
      // style={{ height: height - 80 }}
      className=" bg-black bg-cover w-full bg-no-repeat relative"
    >
      <div className="lg:container h-full mx-auto flex flex-col lg:flex-row items-center px-5 md:px-10 lg:px-20 py-20">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center ">
          <button
            onClick={() => {
              setShowIframe(!showIframe);
              //   alert("Video is not available yet");
            }}
            className="relative flex items-center justify-center w-16 h-16 cursor-pointer"
          >
            {/* Pinging circle (animated) */}
            <span className="absolute w-14 h-14 animate-ping-slow rounded-full bg-gray-700 opacity-75"></span>

            {/* Static icon layer */}
            <span className=" z-10 flex items-center justify-center w-12 h-12 bg-black rounded-full">
              <BsPlayCircle color="white" size={30} />
            </span>
          </button>
        </div>
        {/* right div */}
        <div className="h-full w-full lg:w-1/2 flex flex-col justify-center items-start  text-white mt-20 lg:mt-0">
          <p className="scroll-reveal-bottom-top text-3xl md:tet-4xl lg:text-5xl font-bold">
            We bring extensive experience across all industries.
          </p>
          <p className="scroll-reveal-bottom-top mt-5 text-white text-base lg:text-lg">
            Our experts have over a decade of experience in CRM solutions and
            global talent sourcing, Anchor Bridge Consulting delivers proven
            strategies and people that drive growth.
          </p>

          {/* companies */}
          <Marquee className="scroll-reveal-bottom-top">
            <div className="max-w-full flex flex-row items-center gap-4 mt-5 overflow-hidden ">
              {companyImages.map((image, index) => (
                <Image
                  key={index}
                  alt={image.title}
                  src={image.url}
                  width={150}
                  height={40}
                />
              ))}
            </div>
          </Marquee>

          {/* contact */}
          <div className="flex flex-col md:flex-row items-start justify-start gap-8 mt-5">
            {/* phone */}
            <div className="scroll-reveal-bottom-top flex flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-dashed flex flex-col justify-center items-center border-white">
                <PiPhoneCall size={25} />
              </div>
              <div className="">
                <p>Contact Support</p>
                <p>+1 954-751-5611</p>
              </div>
            </div>
            {/* email */}
            <div className="scroll-reveal-bottom-top flex flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-dashed flex flex-col justify-center items-center border-white">
                <MdEmail size={25} />
              </div>
              <div className="">
                <p className="text-white">Dedicated Team</p>
                <p className="text white flex flex-row justify-start items-start">
                  in <span className=" blur-sm bg-gray-100">**</span>@{" "}
                  <span className="blur-sm bg-gray-100">**********</span>.ng.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showIframe && (
        // <ReactPlayer
        //   src="https://www.youtube.com/watch?v=MDmKwsFGZT8"
        //   controls
        //   width="100%"
        //   height="100%"
        // />
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
            src="https://www.youtube.com/embed/MDmKwsFGZT8"
          ></iframe>
        </div>
      )}
      {/* 
      <iframe
        className="absolute top-0 left-0 z-50 bg-white/50"
        width={Dimensions.WindowWidth}
        height={Dimensions.WindowHeight - 80}
        src="https://www.youtube.com/watch?v=MDmKwsFGZT8"
      ></iframe> */}
    </section>
  );
};

export default ExtensiveExperience;
