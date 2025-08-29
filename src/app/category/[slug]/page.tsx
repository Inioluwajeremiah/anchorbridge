"use client";

import PageHeader, { ILink } from "@/components/PageHeader";
import CategoryCard from "@/components/category/CategoryCard";
import { IResourcesCard } from "@/components/resources/ResourcesCard";
import { resourcesData } from "@/data/resourcesData";
import { servicesData } from "@/data/servicesData";
import { tagCloudLinks } from "@/data/tagCloudLinks";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Page = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const links = searchParams.get("links");
  //   const category = searchParams.get("category");

  const parsedLink = JSON.parse(links || "");
  const headerLinks: ILink[] = parsedLink.map((link: ILink) => ({
    title: link.title,
    url: link.url,
  }));

  const dataPerPage = 4;

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // 1-based for display
  const [currentData, setCurrentData] = useState<IResourcesCard[]>([]);
  const [filteredData, setFilteredData] = useState<IResourcesCard[]>([]);

  console.log("filteredData at category ===>> ", filteredData);
  console.log("currentData at category==>> ", currentData);

  const noOfPages = Math.ceil(filteredData.length / dataPerPage);

  const handleNext = () => {
    if (currentPage < noOfPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setCurrentData(
        resourcesData.slice((newPage - 1) * dataPerPage, newPage * dataPerPage)
      );
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setCurrentData(
        resourcesData.slice((newPage - 1) * dataPerPage, newPage * dataPerPage)
      );
    }
  };

  const handlePaginatedButton = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentData(
      resourcesData.slice(
        (pageNumber - 1) * dataPerPage,
        pageNumber * dataPerPage
      )
    );
  };

  useEffect(() => {
    const filteredData = resourcesData.filter(
      (item) =>
        item.category.toLowerCase() ===
        parsedLink[parsedLink.length - 1].title.toLowerCase()
    );
    setFilteredData(filteredData);
    setCurrentPage(1);
  }, [parsedLink]);

  useEffect(() => {
    if (filteredData.length > 0) {
      setCurrentData(
        filteredData.slice(
          (currentPage - 1) * dataPerPage,
          currentPage * dataPerPage
        )
      );
    }
  }, [currentPage, filteredData]);

  return (
    <div>
      <PageHeader
        title={title || ""}
        links={headerLinks}
        mediaDetails={false}
      />
      {/* main content */}
      <div className="lg:container mx-auto flex flex-row items-start min-h-[50vh] ">
        {/* */}
        <div className="w-[70%] border-r border-r-border-color-dark  pr-20 py-20">
          <div className=" flex flex-row justify-start items-center flex-wrap mt-10 gap-5">
            {currentData.length > 0 &&
              currentData.map((item) => (
                <CategoryCard
                  id={item.id}
                  category={item.category}
                  title={item.title}
                  date={item.date}
                  image={item.image}
                  link={item.link}
                  links={item.links}
                  description={item.description}
                  content={item.content}
                  tags={item.tags}
                  key={item.id}
                />
              ))}
          </div>

          {/*  pagination */}
          <div className="flex flex-row justify-center items-center py-10 gap-4">
            {/* Previous button - moved to left */}
            {currentPage > 1 && (
              <button
                onClick={handlePrev}
                className="h-12 w-12 flex flex-col justify-center items-center rounded-full cursor-pointer"
              >
                <CgChevronLeft color="black" size={24} />
              </button>
            )}

            {/* Page numbers */}
            {Array.from({ length: noOfPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePaginatedButton(index + 1)}
                className={`h-12 w-12 flex flex-col justify-center items-center rounded-full text-lg font-bold cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-inherit text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next button - moved to right */}
            {currentPage < noOfPages && (
              <button
                onClick={handleNext}
                className="h-12 w-12 flex flex-col justify-center items-center rounded-full cursor-pointer"
              >
                <CgChevronRight color="black" size={24} />
              </button>
            )}
          </div>
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
            <Image
              src="https://anchorbridgeconsulting.com/wp-content/uploads/2025/05/cropped-ACB-Logo-scaled-1.png"
              alt="authourimage"
              width={window.innerWidth * 0.2}
              height={500}
              // layout="fill"
              className="mt-4 object-contain"
            />

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
