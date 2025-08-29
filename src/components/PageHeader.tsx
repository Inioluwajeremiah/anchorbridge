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
  mediaDetails?: boolean;
}
const PageHeader: React.FC<IPageHeader> = ({ title, links, mediaDetails }) => {
  return (
    <div>
      <Header fromHome={false} />

      <div className=" w-full h-[60vh] bg-black">
        <div className="lg:container mx-auto  h-full">
          <div className=" flex flex-col justify-between items-start h-full ">
            <div className=" flex-1 w-full flex flex-col justify-center items-center">
              <h1 className="text-white max-w-[60%] text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                {title}
              </h1>

              <div className="flex flex-row justify-center items-center mt-5 gap-2">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center border "
                  >
                    <Link
                      href={{
                        pathname: link.url,
                        query: {
                          links: JSON.stringify(links),
                          title: links[links.length - 1].title,
                        },
                      }}
                      key={index}
                      className={`${
                        index !== links.length - 1
                          ? "text-text-color-light"
                          : "text-white"
                      } uppercase  text-base font-semibold`}
                      // className={`${"uppercase text-text-color-light"} text-base font-semibold`}
                    >
                      {link.title}
                    </Link>

                    {(index !== links.length - 1 || mediaDetails === true) && (
                      <CgChevronRight size={20} color="#aaafb8" />
                    )}
                    {/* <CgChevronRight size={20} color="#aaafb8" /> */}
                  </div>
                ))}

                {mediaDetails && (
                  <p className="uppercase text-white text-base font-semibold">
                    {title}
                  </p>
                )}
              </div>
            </div>

            {mediaDetails && (
              <h3 className="uppercase text-white text-base font-semibold pb-6">
                {links[links.length - 1].title}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
