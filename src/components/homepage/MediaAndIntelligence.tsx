import React from "react";
import MediaAndIntelligenceCard from "./MediaAndIntelligenceCard";

// const ExploreSolutionsData = [
//     {
//       title: "Why Every Business Needs a CRM",
//       description:
//         "In today’s fast-paced business environment, staying competitive demands more than just great products&hellip;",
//       link: "https://anchorbridgeconsulting.com/why-every-business-needs-a-crm-benefits-insights-and-best-practices/",
//       imageUrl:
//         "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/industrial-designers-working-3d-model-min-scaled.jpg",
//         date:"May 21, 2025 "
//     },

//     {
//       title: "Top Skills to Look for in Augmented Tech Teams",
//       description:
//         "Augmented tech teams are becoming the go-to solution for businesses looking to stay&hellip;",
//       link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
//       imageUrl:
//         "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/shutterstock_2167684185-scaled.jpg",
//         date:"August 1, 2025"
//     },
//     {
//       title: "Staff Augmentation vs. Traditional Hiring: What&#8217;s Best for Your Business? ",
//       description:
//         "In today&#8217;s fast-evolving tech landscape, companies are under pressure to innovate faster, adapt&hellip;",
//       icon: "",
//       link: "https://anchorbridgeconsulting.com/staff-augmentation-vs-traditional-hiring-whats-best-for-your-business/",
//       imageUrl:
//         "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/staffing_2500134851-scaled.jpg",
//         date:"June 20, 2025"
//     },
//   ];

const ExploreSolutionsData = [
  {
    date: "May 21, 2025",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2022/04/banner-12-2-min.jpg",
    title: "Why Every Business Needs a CRM",
    description:
      "In today’s fast-paced business environment, staying competitive demands more than just great products…",
    link: "https://anchorbridgeconsulting.com/why-every-business-needs-a-crm-benefits-insights-and-best-practices/",
  },
  {
    date: "August 1, 2025",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/industrial-designers-working-3d-model-min-scaled.jpg",
    title: "Top Skills to Look for in Augmented Tech Teams",
    description:
      "Augmented tech teams are becoming the go-to solution for businesses looking to stay…",
    link: "https://anchorbridgeconsulting.com/top-skills-to-look-for-in-augmented-tech-teams/",
  },
  {
    date: "June 20, 2025",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/shutterstock_2167684185-scaled.jpg",
    title:
      "Staff Augmentation vs. Traditional Hiring: What’s Best for Your Business?",
    description:
      "In today’s fast-evolving tech landscape, companies are under pressure to innovate faster, adapt…",
    link: "https://anchorbridgeconsulting.com/staff-augmentation-vs-traditional-hiring-whats-best-for-your-business/",
  },
];

const MediaAndIntelligence = () => {
  return (
    <section className=" bg-[#f0f3f9] py-20 ">
      <div className="container mx-auto">
        <h1 className="text-3xl text-center underline text-primary-color-two">
          Media
        </h1>
        <h1 className="text-5xl text-center font-bold text-primary-color-two my-5">
          Insights & Intelligence
        </h1>
      </div>

      <div className="lg:container  mx-auto grid grid-cols-3 gap-10 mt-10">
        {ExploreSolutionsData.map((solution, index) => (
          <MediaAndIntelligenceCard
            key={index}
            title={solution.title}
            description={solution.description}
            link={solution.link}
            imageUrl={solution.imageUrl}
            date={solution.date}
          />
        ))}
      </div>
    </section>
  );
};

export default MediaAndIntelligence;
