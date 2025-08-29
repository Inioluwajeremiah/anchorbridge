"use client";

import PageHeader, { ILink } from "@/components/PageHeader";
import { servicesData } from "@/data/servicesData";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import ServiceIcon from "../../../../public/images/serviceicon.png";
import { IL1, IQa } from "@/components/services/ServicesCard";
import { PiPlay } from "react-icons/pi";

interface ISubServiceCard {
  title: string;
  description: string;
}

const SubServiceCard: React.FC<ISubServiceCard> = ({ title, description }) => {
  return (
    <div className="rounded-2xl p-6 shadow-lg flex flex-row items-start gap-x-6 mt-4">
      <Image alt={title + "icon"} src={ServiceIcon} width={50} height={50} />
      <div>
        <h3 className="text-xl lg:text-2xl text-primary-color-two font-semibold">
          {title}
        </h3>
        <p className="mt-4 text-text-color-dark text-base lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};
const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  // const links = searchParams.get("links");
  // const image = searchParams.get("image");
  // const title = searchParams.get("title");
  // const introText = searchParams.get("introText");
  // const l1 = searchParams.get("l1");
  // const getl2 = searchParams.get("l2");
  // const getl3 = searchParams.get("l3");
  // const l4Image = searchParams.get("l4Image");
  // const getr1 = searchParams.get("r1");
  // const getr2 = searchParams.get("r2");
  // const getr3 = searchParams.get("r3");
  // const getqaList = searchParams.get("qaList");

  // const l2 = getl2 ? JSON.parse(getl2) : "";
  // const l3 = getl3 ? JSON.parse(getl3) : "";
  // const r1 = getr1 ? JSON.parse(getr1) : "";
  // const r2 = getr2 ? JSON.parse(getr2) : "";
  // const r3 = getr3 ? JSON.parse(getr3) : "";
  // const qaList = getqaList ? JSON.parse(getqaList) : "";

  // const parsedLink = links ? JSON.parse(links) : "";

  // const headerLinks: ILink[] = parsedLink.map((link: any) => ({
  //   title: link.title,
  //   url: link.url,
  // }));

  const filteredData = id
    ? servicesData.find((item) => item.id === id)
    : servicesData[0];

  console.log("filteredData at service slug ==>>>", filteredData);

  const [activeQa, setActiveQa] = useState("0");

  const handleToggleQA = (index: string) => {
    if (activeQa === index) {
      setActiveQa("");
    } else {
      setActiveQa(index);
    }
  };

  return (
    <div>
      <PageHeader
        // title={title || ""}
        // links={headerLinks}
        title={filteredData?.title || ""}
        links={filteredData?.links || []}
        mediaDetails={false}
      />
      {/* main content */}
      <div className="lg:container mx-auto flex flex-col-reverse lg:flex-row items-start min-h-[50vh] ">
        {/* navbar */}
        <div className="w-[94%] mx-auto lg:mx-0 lg:w-[30%] py-20 lg:border-r border-r-border-color-dark   lg:pr-20">
          {/* our services */}
          <h2 className="text-lg font-bold mt-10 text-start text-text-color-dark relative before:content-[''] before:inline-block before:w-8 before:h-0.5 before:bg-text-color-dark before:mr-2 before:ml-2 before:align-middle after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-text-color-dark after:mr-2 after:align-middle after:rounded-full after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 ">
            Our Services
          </h2>
          {/* categoris */}
          <div className="mt-6 px-4 rounded-lg flex flex-col justify-start items-start  ">
            {servicesData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                // after:content-['>'] after:text-2xl
                className={`w-full flex flex-row text-base items-center justify-between py-4 text-text-color-dark hover:text-black  ${
                  index >= servicesData.length - 1
                    ? "border-0"
                    : "border-b border-b-border-color-dark"
                }`}
              >
                <p>{item.title}</p>
                <CgChevronRight size={24} color="#4a4e56" />
              </Link>
            ))}
          </div>

          {/* download guid */}
          <div className="bg-black rounded-2xl p-10 mt-10 flex flex-col justify-center items-center">
            <p className="text-xl text-white text-center font-semibold">
              Get our Complete Service Offering Guide.
            </p>
            <button className="mt-4 font-semibold bg-white py-4 px-8 rounded-tl-2xl rounded-br-2xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-2xl hover:rounded-bl-2xl duration-1000">
              Download
            </button>
          </div>

          {/* have questions */}

          <div
            className={`w-full mt-20 h-[55vh] bg-[#f0f3f9]/20 relative rounded-2xl flex flex-col items-center gap-6 px-6 pt-6 bg-cover bg-center duration-500 ease-linear shadow-box-shadow text-white group `}
          >
            <Image
              layout="fill"
              alt={filteredData?.title + " image"}
              className="rounded-2xl object-center object-cover"
              src={
                "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-sidebar-contact-bg.jpg"
              }
            />

            <div className="h-full w-full flex flex-col justify-between items-center mt-4 z-30">
              <div>
                <h2 className="text-2xl font-bold text-white text-center">
                  Have Questions?
                </h2>
                <p className="text-white text-lg text-center">
                  Our team of experts is on standby and ready to help.
                </p>
              </div>

              <div className="flex flex-col">
                <button className="text-white mb-4">+1 954-751-5611</button>
                <button className="h-14 -mb-7 border border-black font-semibold bg-black text-white hover:bg-white hover:text-black py-4 px-8 rounded-tl-2xl rounded-br-2xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-2xl hover:rounded-bl-2xl duration-1000">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[94%] mx-auto lg:mx-0 lg:w-[70%]  py-20 lg:pl-10">
          <h1 className="text-text-color-dark font-semibold text-2xl md:text-3xl lg:text-4xl">
            {filteredData?.title}
          </h1>
          <p className="text-base lg:text-lg text-text-color-dark mt-4">
            {filteredData?.introText}
          </p>

          <div className="flex flex-col lg:flex-row items-start gap-x-10 mt-6 ">
            {/* left div */}
            <div className="w-full lg:w-1/2">
              <p className="mt-4 text-base lg:text-lg text-text-color-dark">
                {filteredData?.l1}
              </p>

              {filteredData?.l2 && (
                <SubServiceCard
                  title={filteredData?.l2.title}
                  description={filteredData?.l2.description}
                />
              )}

              {filteredData?.l3 && (
                <SubServiceCard
                  title={filteredData?.l3.title}
                  description={filteredData?.l3.description}
                />
              )}

              <Image
                src={filteredData?.l4Image || ""}
                alt={filteredData?.title + " image"}
                width={window.innerWidth * 0.3}
                height={500}
                className="mt-10 rounded-lg object-contain"
              />
            </div>
            {/* right div */}
            <div className="w-full lg:w-1/2">
              {filteredData?.r1 && (
                <SubServiceCard
                  title={filteredData?.r1.title}
                  description={filteredData?.r1.description}
                />
              )}
              {filteredData?.r2 && (
                <SubServiceCard
                  title={filteredData?.r2.title}
                  description={filteredData?.r2.description}
                />
              )}

              <h1 className="mt-10 text-text-color-dark text-xl md:text-2xl lg:text-3xl font-semibold">
                {filteredData?.r3.title}
              </h1>
              <p className="text-text-color-dark mt-4 text-lg">
                {filteredData?.r3.description}
              </p>

              {filteredData?.r3.lists.map((item: IL1, index: number) => (
                <div key={index} className="mt-10 ">
                  <h3 className="font-semibold text-lg: lg:text-xl text-text-color-dark">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-text-color-dark mt-4">
                    {item.description}
                  </p>
                </div>
              ))}

              <div></div>
            </div>
          </div>

          {/* questions and answers block */}

          <h1 className="text-text-color-dark font-semibold text-2xl md:text-3xl lg:text-4xl mt-10">
            {filteredData?.qaList.title}
          </h1>

          {filteredData?.qaList.qa.map((item: IQa, index: number) => (
            <div
              key={item.id}
              className="w-full bg-[#f0f3f9] mt-4 border border-border-color-dark rounded-lg"
            >
              <button
                onClick={() => handleToggleQA(index.toString())}
                className={`w-full cursor-pointer ${
                  activeQa === index.toString() ? "bg-white" : ""
                } flex flex-row justify-between items-center border border-border-color-dark rounded-lg p-4`}
              >
                <label className="text-text-color-dark text-base  lg:text-lg">
                  {item.question}
                </label>
                <span
                  className={`w-10 h-10 flex flex-col items-center justify-center rounded-md duration-1000 ${
                    activeQa === index.toString() ? "bg-black" : "bg-white"
                  }`}
                >
                  <PiPlay
                    size={24}
                    color={activeQa === index.toString() ? "#fff" : "#000"}
                  />
                </span>
              </button>
              {/* {activeQa === index.toString() && ( */}
              {/* <p
                className={`p-4 text-lg text-link-color-dark ${
                  activeQa === index.toString()
                    ? " -translate-y-full opacity-0   "
                    : "translate-y-0  opacity-100 "
                }  transition-transform duration-1000 `}
              >
                {item.answer}
              </p> */}
              {/* )} */}

              <p
                className={`text-base lg:text-lg text-link-color-dark transition-all duration-1000 ease-in-out ${
                  activeQa === index.toString()
                    ? "opacity-100 h-fit p-4"
                    : "opacity-0 h-0"
                }`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
