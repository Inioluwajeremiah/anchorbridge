import Link from "next/link";
import React from "react";
import FooterI from "./FooterI";
import FooterII from "./FooterII";
import FooterIII from "./FooterIII";
import FooterIV from "./FooterIV";
import ScrollIndicator from "../ScrollIndicator";

const Footer = () => {
  return (
    <footer className="w-full bg-[#080B23] ">
      <div className="lg:container w-[90%] lg:w-full mx-auto  py-20 ">
        {/* <div className="  flex  flex-row items-start justify-between"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FooterI />
          <FooterII />
          <FooterIII />
          <FooterIV />
          {/* scroll indicator */}
          <ScrollIndicator />
        </div>
      </div>
      {/* bottom footer */}
      <div className="h-fit md:h-20 bg-[#1d1431] border-t border-t-text-color-dark py-4 md:py-0">
        <div className="lg:container h-full w-[90%] text-white lg:w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 ">
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
          <p className="mt-2 md:mt-0">
            © 2025 Anchor Bridge Consulting. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
