import { Dimensions } from "@/utils/Dimension";
import React from "react";
import { BiEnvelope, BiLocationPlus, BiPhoneCall } from "react-icons/bi";

const TopHeader = ({ fromHome }: { fromHome: boolean }) => {
  return (
    <div className={`${!fromHome && "w-full bg-black"}`}>
      <div className="bg-black lg:container lg:w-full mx-auto h-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 py-3 text-[15px] md:text-sm px-5 rounded-t-lg  ">
        <div className="flex flex-row gap-8">
          {/* location */}
          <div className="hidden lg:flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <BiLocationPlus
                size={Dimensions.iconSize / 2}
                className="text-[#aaafb8]"
              />
              <p className="text-white">Location</p>
            </div>
            <p className="text-[#aaafb8]">
              Fort Lauderdale, FL, USA
              <span className="border-l border-l-[#aaafb8] pl-2 ml-2">
                Lagos, Nigeria
              </span>
            </p>
          </div>
          {/* email */}
          <div className="flex flex-row items-center gap-4  ">
            <div className="flex flex-row items-center gap-2">
              <BiEnvelope
                size={Dimensions.iconSize / 2}
                className="text-[#aaafb8]"
              />
              <p className="text-white hidden lg:block">Email</p>
            </div>
            <p className="text-[#aaafb8]">info@anchorbridgeconsulting.com</p>
          </div>
        </div>
        {/* phone */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <BiPhoneCall
              size={Dimensions.iconSize / 2}
              className="text-[#aaafb8]"
            />
            <p className="text-white hidden lg:block">Phone</p>
          </div>
          <p className="text-[#aaafb8]">+1 954-751-5611</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
