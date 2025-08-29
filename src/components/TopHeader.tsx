import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";
import React from "react";
import {
  BiEnvelope,
  BiLocationPlus,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiPhoneCall,
} from "react-icons/bi";
import { BsArrowRight, BsInstagram, BsLinkedin } from "react-icons/bs";
const TopHeader = ({ fromHome }: { fromHome: boolean }) => {
  const { iconSize } = useWindowDimensions();
  return (
    <div className={`${!fromHome && "w-full bg-black"}`}>
      <div className="bg-black lg:container lg:w-full mx-auto h-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 py-3 text-[15px] md:text-sm px-5 rounded-t-lg  ">
        <div className="flex flex-row gap-8">
          {/* location */}
          <div className="hidden lg:flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <BiLocationPlus size={iconSize / 2} className="text-[#fff]" />
              <p className="text-white">Location</p>
            </div>
            <p className="text-[#fff]">
              Fort Lauderdale, FL, USA
              <span className="border-l border-l-[#fff] pl-2 ml-2">
                Lagos, Nigeria
              </span>
            </p>
          </div>
          {/* email */}
          <div className="flex flex-row items-center gap-4  ">
            <div className="flex flex-row items-center gap-2">
              <BiEnvelope size={iconSize / 2} className="text-[#fff]" />
              <p className="text-white hidden lg:block">Email</p>
            </div>
            <p className="text-[#fff]">info@anchorbridgeconsulting.com</p>
          </div>
        </div>
        {/* phone */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <BiPhoneCall size={iconSize / 2} className="text-[#fff]" />
            <p className="text-white hidden lg:block">Phone</p>
          </div>
          <p className="text-[#fff]">+1 954-751-5611</p>
        </div>

        {/* social media and sales force */}
        <div className="hidden xl:flex flex-row items-center gap-4">
          {/* social media  */}
          <div className="flex flex-row items-center gap-4 ">
            <Link
              href={
                "https://www.linkedin.com/company/anchor-bridge-consulting/"
              }
            >
              <BiLogoLinkedin size={iconSize / 2} color="#fff" />
            </Link>
            <Link href={"https://www.instagram.com/anchorbridgeconsulting/"}>
              <BiLogoInstagram size={iconSize / 2} color="#fff" />
            </Link>
          </div>
          {/* sales force */}

          <button className="bg-white rounded-md px-4 py-2 font-medium">
            <Link
              href={
                "https://anchorbridgeconsulting.com/service/salesforce-centric/"
              }
              className="flex flex-row items-center gap-2"
            >
              SALESFORCE-CENTRIC
              <BsArrowRight color="#000" size={25} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
