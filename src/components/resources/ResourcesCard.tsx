"use client";

import Link from "next/link";
import React from "react";
import { BiFolder } from "react-icons/bi";
import { ILink } from "../PageHeader";
import Image from "next/image";

export interface IResourcesCard {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  link: string;
  links: ILink[];
  description: string;
  content: string;
  tags: string[];
}
const ResourcesCard: React.FC<IResourcesCard> = ({
  id,
  category,
  date,
  title,
  image,
  link,
  links,
  description,
  content,
  tags,
}) => {
  return (
    <Link
      href={{
        pathname: link,
        query: {
          id: id,
          date,
          image,
          title,
          description,
          links: JSON.stringify(links),
          content: content,
          tags: tags,
        },
      }}
      className={`w-[30%] h-[55vh] bg-[#f0f3f9]/20 relative rounded-2xl bg-[url(${image})] flex flex-col items-center gap-6 p-6 bg-cover bg-center duration-500 ease-linear shadow-box-shadow text-white group `}
    >
      <Image
        layout="fill"
        src={image}
        alt={title + " image"}
        className="rounded-2xl"
      />
      {/* Always-visible transparent black background */}
      <div className="absolute inset-0 bg-black/50 z-10 rounded-2xl" />

      {/* Additional darker overlay on hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-2xl" />

      {/* Content sits on top of both overlays */}
      <div className="w-full flex flex-row items-center gap-2 z-30">
        <BiFolder size={25} color="#fff" />
        <h3 className="text-lg">{category}</h3>
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center mt-4 z-30">
        <p className="text-white text-lg text-center">{date}</p>
        <h2 className="text-2xl font-bold text-white text-center">{title}</h2>
      </div>
    </Link>
  );
};

export default ResourcesCard;
