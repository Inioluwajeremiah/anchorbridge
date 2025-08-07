"use client";

import Image from "next/image";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import React from "react";

export interface IServicesCard {
  description: string;
  title: string;
  imageUrl: string;
  link: string;
}

const ServicesCard: React.FC<IServicesCard> = ({
  title,
  description,
  link,
  imageUrl,
}) => {
  return (
    <div className="bg-white w-[30%] border-t border-t-black flex flex-col justify-center items-center gap-6 rounded-b-lg border border-text-color-light shadow-box-shadow cursor-pointer group  relative">
      {/* Image Container */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={250}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-0 bg-black/50 group-hover:h-full transition-all duration-1000 ease-in-out z-10"></div>
      </div>

      {/* Thumbs Up Icon */}
      <div className="w-full h-16 flex flex-row items-center justify-center -mt-14 z-20">
        <div className="w-16 h-16 rounded-full bg-black flex flex-col justify-center items-center shadow-lg">
          <FaThumbsUp size={30} color="#fff" />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6 flex flex-col justify-center items-center gap-6">
        <h2 className="text-2xl font-bold text-primary-color-two text-center">
          {title}
        </h2>
        <p className="text-center text-text-color-dark text-lg">
          {description}
        </p>
        <a
          href={link}
          className="h-14 px-6 text-lg flex flex-row justify-center items-center bg-black text-white rounded-full hover:bg-primary-color-three transition duration-300 -mb-12"
        >
          Readmore <FaArrowRight className="inline ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
