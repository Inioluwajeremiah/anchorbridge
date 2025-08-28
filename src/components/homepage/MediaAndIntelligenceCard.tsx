import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { ILink } from "../PageHeader";

export interface IMediaAndIntelligenceCard {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  date: string;
  links: ILink[];
}
const MediaAndIntelligenceCard: React.FC<IMediaAndIntelligenceCard> = ({
  title,
  description,
  link,
  imageUrl,
  date,
  links,
}) => {
  return (
    <div className="w-full md:w-full lg:w-[370px] bg-white flex flex-col items-start gap-6 rounded-lg hover:bg-[#f0f3f9]/20 duration-500 ease-linear shadow-box-shadow">
      {/* <div className=" h-[250px] bg-none w-full relative hover:bg-black  ">
        <p className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-black hover:bg-white text-white">
          {date}
        </p>

        <Image
          src={imageUrl}
          alt={title}
          width={370}
          height={250}
          objectFit="contain"
          className="h-[250px] w-full rounded-t-lg  "
        />
      </div> */}
      <div className="relative h-[250px] w-full overflow-hidden rounded-t-lg group">
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

        {/* Floating date */}
        <p className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-black text-white group-hover:bg-white group-hover:text-black transition duration-300 z-20">
          {date}
        </p>

        {/* Image with zoom effect on hover */}
        <Image
          src={imageUrl}
          alt={title}
          width={370}
          height={250}
          className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <Link href={link} className="w-full flex flex-row items-baseline gap-3">
          <BsPersonFill size={25} color="#000" />
          <p className="text-base">Media</p>
        </Link>

        <div className="border-y border-y-border-color-dark py-5 my-4 ">
          <Link
            href={link}
            className="text-2xl font-bold text-primary-color-two"
          >
            {title}
          </Link>
          <p className="text-text-color-dark text-lg">{description}</p>
        </div>
        <Link
          href={{
            pathname: link,
            query: {
              date,
              imageUrl,
              title,
              description,
              links: JSON.stringify(links),
            },
          }}
          className=" text-lg text-black rounded-full hover:bg-primary-color-three transition duration-300 "
        >
          Readmore <FaArrowRight className="inline ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default MediaAndIntelligenceCard;
