"use client";

import PageHeader from "@/components/PageHeader";
import ResourcesCard, {
  IResourcesCard,
} from "@/components/resources/ResourcesCard";
import { resourcesData } from "@/data/resourcesData";
import React, { useEffect, useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Resources = () => {
  const dataPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1); // 1-based for display
  const [currentData, setCurrentData] = useState<IResourcesCard[]>([]);

  const noOfPages = Math.ceil(resourcesData.length / dataPerPage);

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
    setCurrentData(
      resourcesData.slice(
        (currentPage - 1) * dataPerPage,
        currentPage * dataPerPage
      )
    );
  }, [currentPage]);

  return (
    <section>
      <PageHeader
        mediaDetails={false}
        title="Media"
        links={[
          { title: "Home", url: "/" },
          { title: "Media", url: "/media" },
        ]}
      />

      <div className="lg:container mx-auto flex flex-row justify-center items-center flex-wrap mt-10 gap-5">
        {currentData.length > 0 &&
          currentData.map((resource, index) => (
            <ResourcesCard
              id={resource.id}
              category={resource.category}
              title={resource.title}
              date={resource.date}
              image={resource.image}
              link={resource.link}
              links={resource.links}
              description={resource.description}
              content={resource.content}
              tags={resource.tags}
              key={index}
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
    </section>
  );
};

export default Resources;
