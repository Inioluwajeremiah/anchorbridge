"use client";

import PageHeader from "@/components/PageHeader";
import ResourcesCard, {
  IResourcesCard,
} from "@/components/resources/ResourcesCard";
import React, { useEffect, useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const resourcesData: IResourcesCard[] = [
  {
    title: "Top Skills to Look for in Augmented Tech Teams",
    date: "August 1, 2025",
    category: "Staff Augmentation",

    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/industrial-designers-working-3d-model-min-scaled.jpg",
    link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
  },
  {
    title:
      "Bridging Borders: Accessible African Tech Talent for the Global Market",
    date: "July 23, 2025",
    category: "News",

    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/Remote_Staff_2510723165.jpg",
    link: "https://anchorbridgeconsulting.com/bridging-borders-accessible-african-tech-talent-for-the-global-market/",
  },
  {
    title: "Anchor Bridge and Athlos Cloud Partner on Scalable CRM Solutions",
    date: "July 18, 2025",
    category: "CRM services",

    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/07/happy-joyful-diverse-business-partners-greeting-each-other-min-scaled.jpg",
    link: "https://anchorbridgeconsulting.com/anchor-bridge-and-athlos-cloud-partner-on-scalable-crm-solutions/",
  },
  {
    title: "How to Build Scalable Mobile Apps: 7 Must-Know Strategies",
    date: "July 17, 2025",
    category: "App Development",

    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/07/man-working-with-computer-side-view-min-scaled.jpg",
    link: "https://anchorbridgeconsulting.com/how-to-build-scalable-mobile-apps-7-must-know-strategies/",
  },
  {
    title:
      "Staff Augmentation vs. Traditional Hiring: What’s Best for Your Business?",
    date: "June 20, 2025",
    category: "Staff Augmentation",

    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/shutterstock_2167684185-scaled.jpg",
    link: "https://anchorbridgeconsulting.com/staff-augmentation-vs-traditional-hiring-whats-best-for-your-business/",
  },
  {
    title:
      "Anchor Bridge and Dkloud Partners to deliver Salesforce and CRM Solutions",
    date: "June 16, 2025",
    category: "CRM services",

    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/shutterstock_2312975143-compressed-scaled.jpg",
    link: "https://anchorbridgeconsulting.com/anchor-bridge-and-dkloud-partners-to-deliver-salesforce-and-crm-solutions/",
  },

  {
    title:
      "Anchor Bridge and Ace Talent partners to shape the Future of Tech Talent",
    date: "June 13, 2025",
    category: "News",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/shutterstock_2149962241-compressed2-scaled.jpg",
    link: "https://anchorbridgeconsulting.com/anchor-bridge-and-ace-talent-partners-to-shape-the-future-of-tech-talent/",
  },
  {
    title:
      "Anchor Bridge Consulting Partners with Pipedrive to deliver Sales-Driven CRM Solutions",
    date: "June 3, 2025",
    category: "CRM services",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/shutterstock_2627344579-scaled.jpg",
    link: "https://anchorbridgeconsulting.com/anchor-bridge-consulting-partners-with-pipedrive-to-deliver-sales-driven-crm-solutions/",
  },
  {
    title: "Anchor Bridge Consulting Joins Monday.com as Authorized Partner",
    date: "May 27, 2025",
    category: "CRM services",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2022/04/banner-11-1-bg-min-2.jpg",
    link: "https://anchorbridgeconsulting.com/anchor-bridge-consulting-joins-monday-com-as-authorized-partner/",
  },
  {
    title:
      "Empowering Tech Communities from Florida to Lagos: A Week with Anchor Bridge Consulting",
    date: "May 26, 2025",
    category: "News",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/revslider/slider-1/slider-home-12-n-3.jpg",
    link: "https://anchorbridgeconsulting.com/empowering-tech-communities-from-florida-to-lagos-a-week-with-anchor-bridge-consulting/",
  },
  {
    title: "Why Every Business Needs a CRM",
    date: "May 21, 2025",
    category: "CRM services",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2022/04/banner-12-2-min.jpg",
    link: "https://anchorbridgeconsulting.com/why-every-business-needs-a-crm-benefits-insights-and-best-practices/",
  },
];

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
        title="Resources"
        links={[
          { title: "Home", url: "/" },
          { title: "Resources", url: "/resources" },
        ]}
      />

      <div className="lg:container mx-auto flex flex-row justify-center items-center flex-wrap mt-10 gap-5">
        {currentData.length > 0 &&
          currentData.map((resource, index) => (
            <ResourcesCard
              category={resource.category}
              title={resource.title}
              date={resource.date}
              image={resource.image}
              link={resource.link}
              key={index}
            />
          ))}
      </div>

      {/* Fixed pagination */}
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
