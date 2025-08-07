"use client";

import { useEffect, useState } from "react";
import HeaderII from "./HeaderII";

export default function ScrollRevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeaderII, setShowHeaderII] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setShowHeaderII(true);
      } else {
        setShowHeaderII(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-1000 ${
          showHeaderII
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* show header II here. It is the same for all pages */}
        <HeaderII />
      </div>
      {children}
    </>
  );
}
