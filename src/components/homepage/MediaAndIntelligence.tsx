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
    link: "/why-every-business-needs-a-crm-benefits-insights-and-best-practices/",
    links: [
      { title: "Home", url: "/" },
      { title: "CRM Services", url: "/category/crm-services/" },
    ],
  },
  {
    date: "August 1, 2025",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/industrial-designers-working-3d-model-min-scaled.jpg",
    title: "Top Skills to Look for in Augmented Tech Teams",
    description:
      "Augmented tech teams are becoming the go-to solution for businesses looking to stay…",
    link: "/top-skills-to-look-for-in-augmented-tech-teams/",
    links: [
      { title: "Home", url: "/" },
      { title: "Staff Augmentation", url: "/category/staff-augmentation/" },
    ],
  },
  {
    date: "June 20, 2025",
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/06/shutterstock_2167684185-scaled.jpg",
    title:
      "Staff Augmentation vs. Traditional Hiring: What’s Best for Your Business?",
    description:
      "In today’s fast-evolving tech landscape, companies are under pressure to innovate faster, adapt…",
    link: "/staff-augmentation-vs-traditional-hiring-whats-best-for-your-business/",
    links: [
      { title: "Home", url: "/" },
      { title: "Staff Augmentation", url: "/category/staff-augmentation/" },
    ],
  },
];

const MediaAndIntelligence = () => {
  return (
    <section className="w-full bg-[#f0f3f9] py-20 ">
      <div className="w-full lg:container mx-auto">
        <h1 className="scroll-reveal-bottom-top text-xl md:text-2xl lg:text-3xl text-center underline text-primary-color-two">
          Media
        </h1>
        <h1 className="scroll-reveal-bottom-top text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary-color-two my-5">
          Insights & Intelligence
        </h1>
      </div>

      <div className="w-full lg:container scroll-reveal-bottom-top mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10 mt-10">
        {ExploreSolutionsData.map((solution, index) => (
          <MediaAndIntelligenceCard
            key={index}
            title={solution.title}
            description={solution.description}
            link={solution.link}
            imageUrl={solution.imageUrl}
            date={solution.date}
            links={solution.links}
          />
        ))}
      </div>
    </section>
  );
};

export default MediaAndIntelligence;
