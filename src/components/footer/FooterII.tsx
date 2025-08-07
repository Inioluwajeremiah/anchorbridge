import { link } from "fs";
import Link from "next/link";
import React from "react";

const linksData = [
  {
    title: "CRM Services",
    url: "https://anchorbridgeconsulting.com/service/crm-services/",
  },
  {
    title: "Staff Augmentation",
    url: "https://anchorbridgeconsulting.com/service/staff-augmentation/",
  },
  {
    title: "Application Development",
    url: "https://anchorbridgeconsulting.com/service/application-development/",
  },
  {
    title: "Contact Us",
    url: "https://anchorbridgeconsulting.com/contact/",
  },
];

const FooterII = () => {
  return (
    <div className="text-white flex flex-col justify-start items-start">
      <h1 className="text-white text-3xl mb-2">Useful Links</h1>
      <div className="flex flex-col justify-start items-start">
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="mt-2 text-text-color-light"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterII;
