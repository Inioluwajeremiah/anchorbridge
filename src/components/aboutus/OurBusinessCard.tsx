import Image from "next/image";
import React from "react";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";

export interface IOurBusinessCard {
  index: number;
  title: string;
  description: string;
  values: string[];
  imageUrl: string;
}
const OurBusinessCard: React.FC<IOurBusinessCard> = ({
  index,
  title,
  description,
  values,
  imageUrl,
}) => {
  return (
    <div className=" flex flex-col items-start gap-6  hover:bg-[#f0f3f9]/20 duration-500 ease-linear ">
      {index === 0 && (
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          objectFit="cover"
          className="h-[200px] w-full rounded-lg mb-4"
        />
      )}
      <div className="bg-white rounded-lg flex flex-col justify-center items-center p-6 shadow-box-shadow">
        <div className="w-full flex flex-row items-center justify-center">
          <div className="w-16 h-16 bg-black flex flex-col justify-center items-center rounded-lg shadow-lg nt-10">
            <FaThumbsUp size={30} color="#fff" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-primary-color-two text-center mt-4">
          {title}
        </h2>
        <p className="text-text-color-dark text-lg text-center mt-4 mb-4">
          {description}
        </p>

        {values.length > 0 &&
          values.map((value, idx) => (
            <li
              key={idx}
              className="text-lg self-start text-text-color-dark mb-1"
            >
              {value}
            </li>
          ))}
      </div>
      {index === 2 && (
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          objectFit="cover"
          className="h-[200px] w-full rounded-lg mt-4"
        />
      )}
    </div>
  );
};

export default OurBusinessCard;
