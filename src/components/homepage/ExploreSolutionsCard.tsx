import Image from "next/image";
import React from "react";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";

export interface IExploreSolutionsCard {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}
const ExploreSolutionsCard: React.FC<IExploreSolutionsCard> = ({
  title,
  description,
  link,
  imageUrl,
}) => {
  return (
    <div className="bg-white flex flex-col items-start gap-6 rounded-lg p-6 hover:bg-[#f0f3f9]/20 duration-500 ease-linear shadow-box-shadow">
      <Image
        src={imageUrl}
        alt={title + " image"}
        width={300}
        height={200}
        objectFit="cover"
        className="h-[200px] w-full rounded-lg"
      />

      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-16 h-16 bg-black flex flex-col justify-center items-center rounded-lg shadow-lg nt-10">
          <FaThumbsUp size={30} color="#fff" />
        </div>
        <FaThumbsUp size={30} color="#fafafa" />
      </div>
      <h2 className="text-2xl font-bold text-primary-color-two">{title}</h2>
      <p className="text-text-color-dark text-lg">{description}</p>
      <a
        href={link}
        className=" text-lg text-black rounded-full hover:bg-primary-color-three transition duration-300"
      >
        Readmore <FaArrowRight className="inline ml-2" />
      </a>
    </div>
  );
};

export default ExploreSolutionsCard;
