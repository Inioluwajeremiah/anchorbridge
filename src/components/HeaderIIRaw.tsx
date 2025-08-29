"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenuIcon from "@/icons/MenuIcon";

import { BiSearch } from "react-icons/bi";
// import logo from "../../public/logo.png";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { navLinks } from "@/utils/navLinks";
import { CgMenuGridR } from "react-icons/cg";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Modal from "./Modal";
import ContactModal from "./homepage/ContactModal";

const HeaderII = ({}) => {
  const location = usePathname();
  const { width, height } = useWindowDimensions();

  const [pathname, setPathname] = useState<string>("");

  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(width);
  const [toggleModal, setToggleModal] = useState(false);

  const navHeight = height - 80;

  const handleToggleMenu = () => {
    setToggleMenu(false);
  };
  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setToggleMenu(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    setPathname(location);
  }, [location]);

  return (
    <>
      <header className="bg-white w-full h-20 bg-bg-color z-50">
        {/* main header */}
        <div className="w-[94%] lg:container lg:w-full mx-auto h-20 flex flex-row items-center justify-between ">
          <div className="w-[20%]">
            {/* logo */}
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Learn Chain Logo"
                className=" object-contain"
                width={200}
                height={70}
              />
            </Link>
          </div>

          <div className="flex flex-row items-center">
            {/* menu items */}
            <nav
              className={`text-sm md:text-xl lg:text-2xl fixed z-20 lg:relative lg:h-fit lg:flex lg:flex-row lg:items-center overflow-hidden 
            ${
              toggleMenu
                ? ` top-20 w-full flex flex-col items-center justify-center left-0 bg-white/50 transition ease-in-out duration-[700ms]`
                : "-left-[1500px] lg:left-5 "
            }
            `}
              style={{ height: toggleMenu ? navHeight : "" }}
            >
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleToggleMenu}
                  className={`p-4 text-lg font-bold rounded-md ${
                    toggleMenu
                      ? "translate-x-4 ease-linear duration-[700ms]"
                      : ""
                  }`}
                  style={{
                    color: pathname === item.href ? "#078586" : "#000",
                    marginRight: 10,
                    marginBottom: toggleMenu ? 40 : "",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            {/* search and menu button */}

            <div className="hidden lg:flex flex-row items-center gap-x-4 ">
              <button className="h-9 w-9 cursor-pointer">
                <BiSearch />
              </button>

              {/* crm button */}

              {/* {location === "/services" && (
              <button className="bg-black hover:bg-white border border-black rounded-tl-lg rounded-br-lg text-white hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-tl-none hover:rounded-br-none  hover:text-black p-4 text-sm font-bold cursor-pointer duration-500">
                CRM Services
              </button>
            )} */}
              {/* drop down */}
              <button
                onClick={handleToggleModal}
                className="hidden w-[54px] h-[54px] rounded-full border border-gray-300 lg:flex justify-center items-center cursor-pointer"
              >
                <div className="bg-black h-9 w-9 transition-all duration-300 ease-out hover:scale-[1.5] rounded-full p-2 flex justify-center items-center">
                  <CgMenuGridR color="#fff" size={20} className="" />
                </div>
              </button>
            </div>

            {/* menu icon */}
            <button
              className="lg:hidden"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <HamburgerMenuIcon color="#000" />
            </button>
          </div>
        </div>
      </header>

      {/* {toggleModal && ( */}
      <Modal toggleModal={toggleModal} handleToggleModal={handleToggleModal}>
        {" "}
        <ContactModal />
      </Modal>
    </>
  );
};

export default HeaderII;
