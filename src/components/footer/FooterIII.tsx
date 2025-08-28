import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiPhone } from "react-icons/pi";

const linksData = [
  {
    title: "Headquarters",
    description: "Fort Lauderdale, FL, USA",
  },
  {
    title: "Africa Office",
    description: "Lagos, Nigeria",
  },
  {
    title: "Phone",
    description: "+1 954-751-5611",
  },
];

const FooterIII = () => {
  return (
    <div className="w-full text-white flex flex-col justify-start items-start">
      <h1 className="text-white text-3xl mb-2">Get In Touch</h1>
      <div className="flex flex-col justify-start items-start">
        {linksData.map((link, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-start gap-3 mt-3"
          >
            <div className="bg-black flex flex-col justify-center items-center h-10 w-10 rounded-2xl ">
              {index === 0 || index === 1 ? (
                <CiLocationOn color="#fff" />
              ) : (
                <PiPhone color="#fff" />
              )}
            </div>
            <p>{link.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterIII;
