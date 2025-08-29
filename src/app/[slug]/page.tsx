"use client";

import PageHeader, { ILink } from "@/components/PageHeader";
import { StaffAugmentationData } from "@/components/homepage/StaffAugmentationData";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import StaffAugmentationImage from "../../../public/staff_augmentation.jpg";
import { FaFacebook, FaSkype, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import RelatedPosts from "@/components/related_posts/RelatedPosts";
import { servicesData } from "@/data/servicesData";
import { tagCloudLinks } from "@/data/tagCloudLinks";

const shareLinks = [
  {
    title: "facebook",
    link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
    icon: <FaFacebook />,
  },
  {
    title: "twitter",
    link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
    icon: <BsTwitter />,
  },
  {
    title: "whatsapp",
    link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
    icon: <FaWhatsapp />,
  },
  {
    title: "telegram",
    link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
    icon: <FaTelegram />,
  },
  {
    title: "skype",
    link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
    icon: <FaSkype />,
  },
];

const tagLinks = [
  { title: "Staff Augmentation", link: "/tag/staff-augmentation/" },
];

// const

const Page = () => {
  const searchParams = useSearchParams();
  const currentResourceId = searchParams.get("id");
  const links = searchParams.get("links");
  const date = searchParams.get("date");
  const imageUrl = searchParams.get("imageUrl");
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const parsedLink = JSON.parse(links || "");
  const headerLinks: ILink[] = parsedLink.map((link: ILink) => ({
    title: link.title,
    url: link.url,
  }));

  console.log("links:", links);
  console.log("date:", date);
  console.log("image:", imageUrl);
  console.log("title:", title);
  console.log("description:", description);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <PageHeader title={title || ""} links={headerLinks} mediaDetails={true} />
      {/* main content */}
      <div className="lg:container mx-auto flex flex-row items-start min-h-[50vh] ">
        {/* */}
        <div className="w-[70%] border-r border-r-border-color-dark  pr-20 py-20">
          {/* <Image src={staffAugmentation} width={"%"} height={}/> */}

          {/* <div className="w-[60%] h-40"> */}
          <Image
            // src={require("../../../public/staff_augmentation.jpg")}
            src={StaffAugmentationImage}
            width={window?.innerWidth * 0.6}
            height={150}
            // layout="fill"
            alt="Staff Augmentation Image"
            className="rounded-3xl h-[60vh] object-center"
          />
          {/* </div> */}

          <p
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: StaffAugmentationData.intro }}
          ></p>

          <h1 className="text-[#2a2f3b] text-4xl mt-6">
            {StaffAugmentationData.mainTitle}
          </h1>
          <ul className="flex flex-col items-start text-[#4a4e56] text-base">
            {StaffAugmentationData.subtitle.map((item, index) => (
              <li key={index}>
                <h3 className="font-bold mt-4">{item.title}</h3>
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </li>
            ))}
          </ul>

          {/* next steps */}
          <h1 className="text-[#2a2f3b] text-4xl mt-6">Next Steps?</h1>
          <p className="text-[#4a4e56] mt-4">
            By focusing on sourcing augmented tech teams with the right blend of
            technical expertise, adaptability, communication skills, cultural
            alignment, security awareness, and ownership, we help organizations
            go beyond simply filling roles. Our approach ensures you gain a
            <b> strategic partner</b> that can accelerate delivery, strengthen
            innovation, and integrate seamlessly with your existing workforce
          </p>

          {/* ready to scale with us */}

          <div className="text-[#4a4e56] text-base">
            <h3 className="font-bold mt-4 ">Ready to Scale with us? </h3>
            <p className="mt-4">
              Call <b>+1 954-751-5611</b> or email in<span>**</span>@{" "}
              <span>anchorbridgeconsulting</span>.com to start the conversation.
              You can also<b> book a discovery call</b> with our staff
              augmentation experts to connect with your ideal top-tech team.
            </p>
            <p className="mt-4">
              Anchor Bridge Consulting — here for all your tech sourcing needs.
            </p>
            <p className="font-bold mt-4">People. Process. Technology.</p>
          </div>

          {/* tags */}

          <div className="flex flex-row justify-between text-[#4a4e56] border-y border-y-border-color-dark py-6 mt-6 w-full">
            <div className="w-1/2">
              <h2>TAGS</h2>
              <div className="flex flex-row gap-x-2 mt-2">
                {tagLinks.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="p-2 rounded-md text-[#4a4e56] hover:bg-black hover:text-white duration-100 border border-border-color-dark"
                    title={item.title}
                  >
                    <p className="uppercase text-sm">#{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-end items-end">
              <h2 className=" ">SHARE</h2>
              <div className="flex flex-row gap-x-2 mt-2">
                {shareLinks.map((item, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 flex flex-col justify-center items-center  border border-border-color-dark cursor-pointer rounded-tr-4xl rounded-bl-4xl rounded-tl-4xl rounded-br-4xl hover:bg-black hover:text-white hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-lg hover:rounded-br-lg duration-1000"
                    title={item.title}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* related posts */}
          <RelatedPosts currentResourceId={currentResourceId || ""} />
        </div>

        {/* aside */}
        <div className="w-[30%] py-20 px-10">
          {/* search bar */}
          <div className="border border-border-color-dark rounded-lg flex flex-row items-center p-2 ">
            <input
              type="Search"
              placeholder="Enter The Key Words Here"
              className="flex-1 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>

          <h2 className="text-lg font-bold mt-10 text-start text-text-color-dark relative before:content-[''] before:inline-block before:w-8 before:h-0.5 before:bg-text-color-dark before:mr-2 before:ml-2 before:align-middle after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-text-color-dark after:mr-2 after:align-middle after:rounded-full after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 ">
            Anchor Bridge Consulting
          </h2>

          <div className="flex flex-col justify-center items-center mt-6 bg-primary-color-two text-text-color-dark px-4 py-6 rounded-xl">
            <h3 className="uppercase text-white  ">Media Desk</h3>
            {/* <div className="w-[20%] h-[500px]"> */}
            <Image
              src="https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/cropped-ACB-Logo-scaled-1.png"
              alt="authourimage"
              width={window.innerWidth * 0.2}
              height={500}
              // layout="fill"
              className="mt-4 object-contain"
            />
            {/* </div> */}

            <p className="mt-4 text-center">
              Connecting businesses with top-tier African tech talent.
              Empowering growth through smart, scalable workforce solutions.
            </p>
          </div>

          <h2 className="text-lg font-bold mt-10 text-start text-text-color-dark relative before:content-[''] before:inline-block before:w-8 before:h-0.5 before:bg-text-color-dark before:mr-2 before:ml-2 before:align-middle after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-text-color-dark after:mr-2 after:align-middle after:rounded-full after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 ">
            Post Categories
          </h2>
          {/* post categoris */}
          <div className="mt-6 px-4 rounded-lg flex flex-col justify-start items-start border border-border-color-dark ">
            {servicesData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`w-full py-4 text-text-color-dark text-sm ${
                  index >= servicesData.length - 1
                    ? "border-0"
                    : "border-b border-b-border-color-dark"
                }`}
              >
                <p>{item.title}</p>
              </Link>
            ))}
          </div>

          {/* tag cloud */}
          <h3 className="text-text-color-dark mt-10">Tag Clouds</h3>

          <div className="flex flex-row gap-2 flex-wrap mt-4 ">
            {tagCloudLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="uppercase border border-border-color-dark p-2 rounded-md text-xs text-text-color-dark  hover:bg-black rounded-tl-lg rounded-br-lg  hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-tl-none hover:rounded-br-none  hover:text-white cursor-pointer duration-1000"
              >
                #{item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
