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
import { GrClose } from "react-icons/gr";

const HeaderII = ({}) => {
  const location = usePathname();
  const { width, height } = useWindowDimensions();

  const [pathname, setPathname] = useState<string>("");

  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(width);
  const [toggleModal, setToggleModal] = useState(false);

  const navHeight = height + 200;

  const handleToggleMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.id !== "navMenu") {
      setToggleMenu(false);
    }
    // setToggleMenu(false);
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

          <div
            className={`fixed lg:relative left-0 top-0 w-full h-screen lg:h-auto bg-white/50 z-50 transition-transform ease-in-out duration-1000 flex flex-row justify-start items-start lg:justify-center lg:items-center
    ${toggleMenu ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
            onClick={handleToggleMenu}
            style={{
              height: toggleMenu
                ? navHeight
                : // : !toggleMenu && windowWidth < 1024
                  // ? navHeight // this produces inperfect behaviour in the sense that not the full screen slides back that is why min-h-[2000px] was used
                  "",
            }}
          >
            {/* menu items */}
            <nav
              id="navMenu"
              className={`text-sm md:text-xl lg:text-2xl fixed z-20 lg:relative lg:h-fit lg:flex lg:flex-row lg:items-center 
                 ${
                   toggleMenu
                     ? ` w-full md:w-1/2 flex flex-col items-start justify-start bg-white`
                     : `bg-white`
                 }
                `}
              style={{
                height: toggleMenu
                  ? navHeight
                  : // : !toggleMenu && windowWidth < 1024
                    // ? navHeight // this produces inperfect behaviour in the sense that not the full screen slides back that is why min-h-[2000px] was used
                    "",
              }}
            >
              {/* search box on navbar only */}
              <div className={`lg:hidden w-[94%] mx-auto`}>
                {/* close button */}
                <button
                  onClick={handleToggleMenu}
                  className="h-12 w-12 flex flex-col items-center justify-center ml-auto rounded-full border border-border-color-dark mt-10 "
                >
                  <GrClose size={20} color=" #e4e7ee" />
                </button>
                <div className="w-full flex flex-row items-center border border-border-color-dark rounded-lg p-2 mt-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 font-thin"
                  />
                  <div className="h-9 w-9 flex flex-col justify-center items-center shadow-md rounded-md bg-black">
                    <BiSearch size={24} color="#fff" />
                  </div>
                </div>
              </div>
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleToggleMenu}
                  className={` p-4 text-lg font-bold  ${
                    toggleMenu
                      ? `px-4 ${
                          index === navLinks.length - 1
                            ? ""
                            : "border-b border-b-border-color-dark"
                        } pt-6 pb-2 w-[94%] px-0 rounded-none `
                      : ""
                  }`}
                  style={{
                    color: pathname === item.href ? "#078586" : "",
                    marginRight: 10,
                    // marginBottom: toggleMenu ? 40 : "",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:w-1/2 bg-white/50 lg:none"></div>
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
        <ContactModal />
      </Modal>
    </>
  );
};

export default HeaderII;
