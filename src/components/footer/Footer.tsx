import Link from "next/link";
import React from "react";
import FooterI from "./FooterI";
import FooterII from "./FooterII";
import FooterIII from "./FooterIII";
import FooterIV from "./FooterIV";

const Footer = () => {
  return (
    <footer className="w-full bg-[#080B23] ">
      <div className="lg:container w-[90%] lg:w-full mx-auto  py-20 ">
        <div className="  flex flex-row items-start justify-between">
          <FooterI />
          <FooterII />
          <FooterIII />
          <FooterIV />
        </div>
      </div>
      {/* bottom footer */}
      <div className="h-20 bg-[#1d1431] border-t border-t-text-color-dark">
        <div className="lg:container h-full w-[90%] text-white lg:w-full mx-auto flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4 ">
            <Link
              href="https://anchorbridgeconsulting.com/privacy-policy"
              rel='"nofollow"'
            >
              Privacy Policy
            </Link>
            <Link
              href="https://anchorbridgeconsulting.com/terms-and-conditions"
              rel='"nofollow"'
            >
              Terms and Conditions
            </Link>
          </div>
          <p>© 2025 Anchor Bridge Consulting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
