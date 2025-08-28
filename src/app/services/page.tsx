import PageHeader from "@/components/PageHeader";
import ServicesCard from "@/components/services/ServicesCard";
import { servicesData } from "@/data/servicesData";
import React from "react";

const Services = () => {
  return (
    <div className="">
      <PageHeader
        title="Services"
        links={[
          { title: "Home", url: "/" },
          { title: "Services", url: "/services" },
        ]}
      />

      <div className="lg:container px-5 w-full self-center mx-auto flex flex-row justify-start items-center flex-wrap mt-10 gap-x-10 gap-y-12 py-20">
        {servicesData.length > 0 &&
          servicesData.map((service, index) => (
            <ServicesCard
              id={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.image}
              link={service.link}
              links={service.links}
              key={index}
              introText={service.introText}
              l1={service.l1}
              l2={service.l2}
              l3={service.l3}
              l4Image={service.l4Image}
              r1={service.r1}
              r2={service.r2}
              r3={service.r3}
              qaList={service.qaList}
            />
          ))}
      </div>
    </div>
  );
};

export default Services;
