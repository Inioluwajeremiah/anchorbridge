import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export interface IExploreSolutionsCard {
  index: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}
const ExploreSolutionsCard: React.FC<IExploreSolutionsCard> = ({
  index,
  title,
  description,
  link,
  imageUrl,
}) => {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-primary-color-two mb-2">
        {title}
      </h2>
      <p className="text-text-color-dark mb-4">{description}</p>
      <a
        href={link}
        className="bg-primary-color-two text-white px-4 py-2 rounded-full hover:bg-primary-color-three transition duration-300"
      >
        Readmore <FaArrowRight className="inline ml-2" />
      </a>
    </div>
  );
};

export default ExploreSolutionsCard;
