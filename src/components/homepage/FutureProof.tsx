"use client";

import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const WindowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

console.log("Window Width:", WindowWidth);

const FutureProof = () => {
  const [showIframe, setShowIframe] = useState(false);
  const { width, height } = useWindowDimensions();
  return (
    <div className="w-full  lg:container mx-auto flex flex-col lg:flex-row items-start justify-between gap-x-10 lg:h-screen py-10 md:py-14 lg:pt-24 px-5 md:px-10 lg:px-20 lg:pb-0 ">
      <div className="w-full lg:w-1/2">
        <h1 className=" scroll-reveal-bottom-top text-xl md:text-2xl lg:text-3xl underline text-primary-color-two">
          Future-proof
        </h1>
        <h1 className=" scroll-reveal-bottom-top text-3xl md:text-4xl lg:text-5xl font-bold text-primary-color-two mt-3">
          Build. Scale. Thrive
        </h1>
        <p className="scroll-reveal-bottom-top text-text-color-dark mt-5 text-base lg:text-lg">
          Anchor Bridge Consulting is an innovative technology services and
          staff augmentation firm based in Fort Lauderdale, FL, USA and Lagos,
          Nigeria.
        </p>
        <p className="scroll-reveal-bottom-top text-text-color-dark mt-5 text-base lg:text-lg">
          We deliver high-impact solutions built around three core pillars:
          People, Process, and Technology—serving small to mid-sized businesses
          with technical talent placement and enterprise technical services.
          Understanding that technology is only as good as the people and
          processes behind it, we focus on serving businesses in the Retail,
          Logistics, Hospitality and Software Development sectors. We specialize
          in CRM services, website and mobile application development, and staff
          augmentation (both onshore and offshore). Our services are designed to
          drive meaningful improvements in our clients&#39; businesses&#39;
          efficiency, functionality, and profitability. We lead with people. We
          streamline processes. We power growth with technology. Think of Anchor
          Bridge as your world-class RevOps partner.
        </p>

        <button className="scroll-reveal-bottom-top bg-black rounded-full py-4 px-10 cursor-pointer text-white my-10 lg:mb-0">
          About Us
        </button>
      </div>

      {/* right div */}
      <div
        className="scroll-reveal-bottom-top w-full  lg:max-w-1/2 relative h-fit  flex flex-col gap-4 lg:gap-0 md:flex-row items-start mt-10 md:mt-14 lg:mt-0  "
        // style={{ height: WindowHeight - 80 }}
      >
        <div className="h-80 w-80 rounded-full bg-[#f0f3f9] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"></div>

        <div className="relative w-full md:w-1/2 lg:h-[350px] rounded-lg flex  flex-col md:flex-row lg:flex-col ">
          <Image
            className="w-full  h-[350px] lg:h-full object-cover rounded-lg "
            alt="futute proof"
            src="https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/CRM_2101930993-scaled.jpg"
            width={325}
            height={350}
            //   objectFit="contain"
          />
          <button
            onClick={() => setShowIframe(true)}
            className="hidden  bg-black h-20 w-[70px] rounded-br-2xl absolute bottom-0 right-0 lg:flex flex-col justify-center items-center"
          >
            <BsPlayCircle color="white" size={20} />
          </button>
        </div>

        <Image
          className="w-full md:w-1/2 h-[350px] object-cover rounded-lg  lg:-ml-32 lg:mt-52 lg:-z-20 "
          alt="future proof"
          src="https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/remote_2510723165-scaled.jpg"
          width={325}
          height={350}
          //   objectFit="contain"
        />
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
    </div>
  );
};

export default FutureProof;
