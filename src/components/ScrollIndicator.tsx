"use client";

import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Circle settings
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed h-16 w-16 bottom-32 right-20 cursor-pointer"
      onClick={handleScrollToTop}
    >
      <div className="w-full h-full">
        <svg className=" w-16 h-16 " viewBox="0 0 60 60">
          {/* Background ring */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#d1d5db"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Progress ring */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#000"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 30 30)"
          />
        </svg>
        <BiChevronUp
          size={32}
          color="#000"
          className=" top-4 right-4  absolute "
        />
      </div>
    </button>
  );
};

export default ScrollIndicator;
