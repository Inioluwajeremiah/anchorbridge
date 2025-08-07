import Link from "next/link";
import React from "react";
import { CgChevronRight } from "react-icons/cg";
import Header from "./Header";

export interface ILink {
  title: string;
  url: string;
}
export interface IPageHeader {
  title: string;
  links: ILink[];
}
const PageHeader: React.FC<IPageHeader> = ({ title, links }) => {
  return (
    <>
      <Header fromHome={false} />
      <div className="w-full h-[40vh] bg-black">
        <div className="lg:container mx-auto w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold">{title}</h1>
          <div className="flex flex-row justify-center items-center mt-5 gap-2">
            {links.map((link, index) => (
              <div key={index} className="flex flex-row items-center border ">
                <Link
                  href={link.url}
                  key={index}
                  className={`${
                    index !== links.length - 1
                      ? "text-text-color-light"
                      : "text-white"
                  }  text-2xl font-bold`}
                >
                  {link.title}
                </Link>

                {index !== links.length - 1 && (
                  <CgChevronRight size={20} color="#fff" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
