"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { IResourcesCard } from "../resources/ResourcesCard";
import { BiFolder } from "react-icons/bi";

const CategoryCard: React.FC<IResourcesCard> = ({
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
          category: category,
          date,
          image,
          title,
          description,
          links: JSON.stringify(links),
          content: content,
          tags: tags,
        },
      }}
      className="w-[370px] flex flex-col items-start gap-6 rounded-lg bg-[#f0f3f9] duration-500 ease-linear shadow-box-shadow"
    >
      <div className="relative h-[250px] w-full overflow-hidden rounded-t-lg group">
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

        {/* Image with zoom effect on hover */}
        <Image
          src={image}
          alt={title}
          width={370}
          height={250}
          className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/*  date */}
        <p className="w-12 h-12 rounded-full border-2 border-white -mt-5 px-4 py-2 rounded-tl-lg rounded-br-lg bg-black text-white   transition duration-300">
          {date}
        </p>
      </div>

      <div className="p-6">
        <p className="uppercase text-center flex flow-row items-center justify-center gap-2">
          <BiFolder size={24} color="#000" />
          {category}
        </p>

        <div className=" py-5 my-4 ">
          <p className="text-2xl font-bold text-primary-color-two text-center">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
