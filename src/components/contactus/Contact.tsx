import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPhone } from "react-icons/pi";

const linksData = [
  {
    title: "Office Address",
    description: "Fort Lauderdale, FL, USA | Lagos, Nigeria",
  },
  {
    title: "General Enquiries",
    description:
      "Phone: +1 954-751-5611 & Email: in**@********************ng.com",
  },
  {
    title: "Operation Hours",
    description: "Mon-Fri: 09.00 to 05.00 EDT",
  },
];

const Contact = () => {
  return (
    <div className="w-1/2 p-7">
      <h1 className="text-3xl underline text-primary-color-two">
        People Process Technology
      </h1>
      <h1 className="text-5xl font-bold text-primary-color-two my-5">
        Talk To Our Expert Team
      </h1>
      <p className="text-text-color-dark text-lg">
        Send a message through given form or call If your enquiry is time
        sensitive please use below contact details.
      </p>

      <div className="w-full flex flex-col justify-start items-start">
        {linksData.map((link, index) => (
          <div
            key={index}
            className="w-full flex flex-row items-center justify-start gap-3 mt-3 border border-text-color-dark-two p-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <div className="bg-black flex flex-col justify-center items-center h-10 w-10 rounded-full ">
              {index === 0 || index === 1 ? (
                <CiLocationOn color="#fff" />
              ) : (
                <PiPhone color="#fff" />
              )}
            </div>
            <div>
              <p className="text-xl font-bold">{link.title}</p>
              <p className="text-lg mt-1">{link.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center gap-4 mt-6">
        <Link
          href={"https://www.linkedin.com/company/anchor-bridge-consulting/"}
          className="h-10 w-10 rounded-full flex flex-col justify-center items-center bg-text-color-light"
        >
          <LiaLinkedinIn color="#4a4e56" />
        </Link>
        <Link
          href={"https://www.instagram.com/anchorbridgeconsulting/"}
          className="h-10 w-10 rounded-full flex flex-col justify-center items-center bg-text-color-light"
        >
          <ImInstagram color="#4a4e56" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
