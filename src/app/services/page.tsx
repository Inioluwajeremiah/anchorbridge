import PageHeader from "@/components/PageHeader";
import ServicesCard from "@/components/services/ServicesCard";
import React from "react";

const servicesData = [
  {
    title: "Salesforce-Centric",
    description:
      "Our deep Salesforce expertise and commitment to end-to-end delivery help organizations ...",
    link: "https://anchorbridgeconsulting.com/service/salesforce-centric/",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/crm-service_2306742311-scaled.jpg",
  },
  {
    title: "Staff Augmentation",
    description:
      "Flexible onshore and offshore staffing—bringing Africa’s best tech talent and North America’s…",
    link: "https://anchorbridgeconsulting.com/service/staff-augmentation/",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/staffing_2500134851-scaled.jpg",
  },
  {
    title: "CRM Services",
    description:
      "Transform how your business operates through our CRM and automation solutions and…",
    link: "https://anchorbridgeconsulting.com/service/crm-services/",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/crm-service_2306742311-scaled.jpg",
  },
  {
    title: "Application Development",
    description:
      "Building modern, secure, and scalable applications—custom-designed to transform operations, connect...",
    link: "https://anchorbridgeconsulting.com/service/application-development/",
    image:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/Development_2108122673-scaled.jpg",
  },
];

const Services = () => {
  return (
    <div className="py-20">
      <PageHeader
        title="Services"
        links={[
          { title: "Home", url: "/" },
          { title: "Services", url: "/services" },
        ]}
      />

      <div className="lg:container px-5 w-full self-center mx-auto flex flex-row justify-start items-center flex-wrap mt-10 gap-x-10 gap-y-12">
        {servicesData.length > 0 &&
          servicesData.map((service, index) => (
            <ServicesCard
              title={service.title}
              description={service.description}
              imageUrl={service.image}
              link={service.link}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Services;
