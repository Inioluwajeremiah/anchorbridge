import Link from "next/link";
import React from "react";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedinIn } from "react-icons/lia";

const FooterIV = () => {
  return (
    <div className=" w-full text-white">
      <h1 className="text-white text-3xl mb-2">Subscribe</h1>
      <p className="text-text-color-light">
        Join our Newsletters to receive Offers and <br /> Updates in your Inbox.
      </p>
      <div className="w-full flex flex-row items-center justify-between gap-2 bg-[rgba(255, 255, 255, 0.06)] mt-2 border border-border-color-dark-two rounded-lg px-2 py-1">
        <input
          placeholder="Your Email Address"
          type="text"
          className="flex-1 outline-none"
        />
        <button className="bg-[#040307] p-2 rounded-lg text-white">
          SIGN UP
        </button>
      </div>
      <p className="text-text-color-light mt-2 "> We Promise, No Spamming!</p>

      <div className="flex flex-row items-center gap-4 mt-2">
        <Link
          href={"https://www.linkedin.com/company/anchor-bridge-consulting/"}
        >
          <LiaLinkedinIn />
        </Link>
        <Link href={"https://www.instagram.com/anchorbridgeconsulting/"}>
          <ImInstagram />
        </Link>
      </div>
    </div>
  );
};

export default FooterIV;
