import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsArrowRightCircleFill } from "react-icons/bs";
const imageUrls = [
  "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/project-6-img.jpg",
  "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/project-5-img.jpg",
  "https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/shutterstock_2528253439-scaled.jpg",
  "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/crm-service_2306742311-scaled.jpg",
  "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/project-2-img.jpg",
  "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/project-1-img.jpg",
];

const FooterI = () => {
  return (
    <div className="w-full">
      <h1 className="text-white text-3xl mb-4">Anchor Bridge Consulting</h1>
      <div className=" flex flex-row flex-wrap items-center gap-2 lg:grid lg:grid-cols-3 mt-4 gap-x-2 lg:w-[270px]  ">
        {imageUrls.map((url, index) => (
          //   <Link
          //     href="https://anchorbridgeconsulting.com/service/crm-services/"
          //     key={index}
          //     className="min-w-20 min-h-20 rounded-lg group"
          //   >
          //     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          //       <BsArrowRightCircleFill color="#fff" />
          //     </div>
          //     <img
          //       src={url}
          //       alt={`Image ${index + 1}`}
          //       className="w-full h-auto mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
          //     />
          //   </Link>
          <Link
            href="https://anchorbridgeconsulting.com/service/crm-services/"
            key={index}
            className="group relative block w-20 h-20 rounded-lg overflow-hidden"
          >
            <Image
              width={80}
              height={80}
              src={url}
              alt={`Image ${index + 1}`}
              className="w-20 h-20 rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            <div className="w-20 h-20 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center">
              <BsArrowRightCircleFill color="#fff" size={32} />
            </div>
          </Link>
        ))}
      </div>
      <p className="text-white mt-4">
        We deliver high-impact solutions built around three core pillars:
        People, Process, and Technology—serving small to mid-sized businesses
        with technical talent placement and enterprise technical services.
      </p>
      <Link
        href="https://anchorbridgeconsulting.com/media/"
        target='"_blank"'
        rel='"nofollow"'
        className="w-fit bg-black text-white flex flex-row items-center justify-between gap-4 p-4 rounded-lg hover:white hover:scale-110 duration-500 mt-4"
      >
        MEDIA RESOURCES <BsArrowRight color="white" />
      </Link>
    </div>
  );
};

export default FooterI;
