import React from "react";
import ContactForm from "../contactus/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const imageUrls = [
  {
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/representation-user-experience-interface-design-min-scaled.jpg",
    alt: "scalable mobile and web app",
  },
  {
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/diverse-students-group-engaging-video-call-with-physician-min-scaled.jpg",
    alt: "offshore tech talent with Anchor Bridge Consulting",
  },
  {
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/customer-relationship-management-concept-min-scaled.jpg",
    alt: "increase ROI with CRM at Anchor Bridge Consulting",
  },
  {
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2025/08/industrial-designers-working-3d-model-min-scaled.jpg",
    alt: "staff augmented tech team",
  },
  {
    imageUrl:
      "https://anchorbridgeconsulting.com/wp-content/uploads/2021/10/Remote_Staff_2510723165.jpg",
    alt: "remote tech talent",
  },
];

const ContactModal = ({ toggleModal }: { toggleModal: boolean }) => {
  return (
    <div
      className={` w-full flex flex-col lg:flex-row justify-start items-start  overflow-y-scroll bg-gray-500/20 rounded-2xl `}
    >
      <ContactForm />

      <div className="w-full lg:w-[60%] h-full  p-4 md:p-6 lg:p-8">
        {/* anchor bridge logo */}

        <div className="w-[20%] mb-8 ">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Learn Chain Logo"
              className=" object-contain"
              width={200}
              height={70}
            />
          </Link>
        </div>
        <p className="text-base lg:text-lg text-text-color-dark mb-4 ">
          We deliver high-impact solutions built around three core pillars:
          People, Process, and Technology—serving small to mid-sized businesses
          with technical talent placement and enterprise technical services.
        </p>
        <Link
          href={"/services"}
          className="text-sm md:text-base font-semibold uppercase mt-4 text-text-color-dark"
        >
          See Our Offering
        </Link>

        <div className="border-y border-y-border-color-dark py-6 md:py-8 lg:py-10 mt-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-color-two ">
            Resources
          </h1>

          <div className="w-full flex flex-row flex-wrap items-center gap-2 gap-x-2 mt-4">
            {imageUrls.map((item, index) => (
              <Link
                href="https://anchorbridgeconsulting.com/service/crm-services/"
                key={index}
                className="group relative block w-20 h-20 rounded-lg overflow-hidden"
              >
                <Image
                  width={100}
                  height={100}
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-20 h-20 rounded-lg transition-transform duration-300 group-hover:scale-105"
                />

                <div className="w-20 h-20 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center">
                  <BsArrowRightCircleFill color="#fff" size={32} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-4 md:mt-6 lg:mt-8 text-text-color-dark">
          © 2025 Anchor Bridge Consulting. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
