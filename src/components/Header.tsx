"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenuIcon from "@/icons/MenuIcon";
import { Dimensions } from "@/utils/Dimension";
import {
  BiEnvelope,
  BiLocationPlus,
  BiPhoneCall,
  BiSearch,
} from "react-icons/bi";
import logo from "../../public/logo.png";
import Image from "next/image";
import { navLinks } from "@/utils/navLinks";
import { CgMenuGridR } from "react-icons/cg";
import TopHeader from "./TopHeader";

const Header = ({ fromHome }: { fromHome: boolean }) => {
  const location = usePathname();

  const [pathname, setPathname] = useState<string>("");
  const [locationHash, setLocationHash] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(Dimensions.WindowWidth);

  const navHeight = Dimensions.WindowHeight - 80;

  const handleToggleMenu = () => {
    setToggleMenu(false);
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
    setLocationHash(window.location.hash);
  }, [location]);

  return (
    <header
      className=" w-full h-36 z-50"
      style={{
        top: fromHome ? 20 : 0,
        position: fromHome ? "absolute" : "relative",
      }}
    >
      {/* top header */}
      <TopHeader fromHome={fromHome} />
      {/* main header */}
      <div className={`${!fromHome && "w-full bg-white"}`}>
        <div
          className={`bg-white lg:container lg:w-full mx-auto h-20 flex flex-row items-center justify-between px-5 rounded-b-lg`}
        >
          <div className="w-[20%]">
            {/* logo */}
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Learn Chain Logo"
                className=" object-contain"
              />
            </Link>
          </div>

          <div className="flex flex-row items-center">
            {/* menu items */}
            <nav
              className={`text-sm md:text-xl lg:text-2xl fixed z-20 lg:relative lg:h-fit lg:flex lg:flex-row lg:items-center overflow-hidden 
            ${
              toggleMenu
                ? ` top-20 w-full flex flex-col items-center justify-center left-0 bg-bg-color transition ease-in-out duration-[700ms]`
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
                    color: pathname === item.href ? "#078586" : "",
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

            <div className="flex flex-row items-center gap-x-4 ">
              <button className="h-9 w-9 cursor-pointer">
                <BiSearch />
              </button>

              {/* crm button */}

              {location !== "/" && (
                <button className="bg-black hover:bg-white border border-black rounded-tl-lg rounded-br-lg text-white hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-tl-none hover:rounded-br-none  hover:text-black p-4 text-sm font-bold cursor-pointer duration-500">
                  CRM Services
                </button>
              )}
              {/* drop down */}
              <button className="w-[54px] h-[54px] rounded-full border border-gray-300 flex justify-center items-center cursor-pointer">
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
      </div>
    </header>
  );
};

export default Header;
