"use client";

import Image from "next/image";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { ILink } from "../PageHeader";

export interface IL1 {
  title: string;
  description: string;
}

export interface IR3 extends IL1 {
  lists: IL1[];
}
export interface IQa {
  id: string;
  question: string;
  answer: string;
}

export interface IQaList {
  title: string;
  qa: IQa[];
}
export interface IServicesCard {
  id: string;
  description: string;
  title: string;
  imageUrl: string;
  link: string;
  links: ILink[];
  introText: string;
  l1: string;
  l2: IL1;
  l3?: IL1;
  l4Image: string;
  r1: IL1;
  r2: IL1;
  r3: IR3;
  qaList: IQaList;
}

const ServicesCard: React.FC<IServicesCard> = ({
  id,
  title,
  description,
  link,
  imageUrl,
  links,
  introText,
  l1,
  l2,
  l3,
  l4Image,
  r1,
  r2,
  r3,
  qaList,
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
        <Link
          href={{
            pathname: link,
            query: {
              id: id,
              title: title,
              description: description,
              link: link,
              image: imageUrl,
              links: JSON.stringify(links),
              introText,
              l1,
              l2: JSON.stringify(l2),
              l3: JSON.stringify(l3),
              l4Image: l4Image,
              r1: JSON.stringify(r1),
              r2: JSON.stringify(r2),
              r3: JSON.stringify(r3),
              qaList: JSON.stringify(qaList),
            },
          }}
          className="h-14 px-6 text-lg flex flex-row justify-center items-center bg-black text-white rounded-full hover:bg-primary-color-three transition duration-300 -mb-12"
        >
          Readmore <FaArrowRight className="inline ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
