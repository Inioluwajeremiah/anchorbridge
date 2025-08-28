import { useEffect, useState } from "react";
import RelatedPostCard from "./RelatePostCard";
import { resourcesData } from "@/data/resourcesData";
import { IResourcesCard } from "../resources/ResourcesCard";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

interface IRelatedPosts {
  currentResourceId: string;
}
const RelatedPosts: React.FC<IRelatedPosts> = ({ currentResourceId }) => {
  const dataPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<IResourcesCard[]>([]);
  const [filteredData, setFilteredData] = useState<IResourcesCard[]>([]);

  const noOfPages = Math.ceil(filteredData.length / dataPerPage);

  console.log("currentData at related posts ====>>", currentData);
  console.log("filteredData at related posts===>", filteredData);
  console.log("currentResourceId ===>>> ", currentResourceId);
  console.log("no of pages at related posts ===>>> ", noOfPages);
  console.log("current page at related posts ===>>> ", currentPage);

  const handleNext = () => {
    if (currentPage < noOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setCurrentData(
      filteredData.slice(
        (currentPage - 1) * dataPerPage,
        currentPage * dataPerPage
      )
    );
  }, [currentPage, filteredData]);

  useEffect(() => {
    const relatedPosts = resourcesData.filter(
      (item) => item.id !== currentResourceId
    );
    setFilteredData(relatedPosts);
    setCurrentPage(1);
  }, [currentResourceId]);

  return (
    <div className="mt-10">
      <div className="w-full text-[#4a4e56] text-base flex flex-row items-center justify-between">
        <h3 className="font-bold mt-4 text-3xl ">Related Posts</h3>
        <div className="flex flex-row items-center gap-x-2 ">
          {/* Previous button - moved to left */}
          <button
            disabled={currentPage > 1 ? false : true}
            onClick={handlePrev}
            className="h-12 w-12 flex flex-col justify-center items-center border border-border-color-dark rounded-full cursor-pointer"
          >
            <CgChevronLeft color="black" size={24} />
          </button>

          {/* Next button - moved to right */}
          <button
            disabled={currentPage < noOfPages ? false : true}
            onClick={handleNext}
            className="h-12 w-12 flex flex-col justify-center items-center border border-border-color-dark rounded-full cursor-pointer"
          >
            <CgChevronRight color="black" size={24} />
          </button>
        </div>
      </div>

      {/* Related posts */}
      <div className=" flex flex-row justify-center items-center flex-wrap mt-10 gap-5">
        {currentData.length > 0 &&
          currentData.map((item, _) => (
            <RelatedPostCard
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
    </div>
  );
};

export default RelatedPosts;
