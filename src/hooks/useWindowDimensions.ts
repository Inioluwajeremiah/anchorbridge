"use client";

import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    iconSize: 20,
  });

  useEffect(() => {
    const getIconSize = (width: number): number => {
      if (width < 640) return 20;
      if (width < 768) return 24;
      if (width < 1024) return 30;
      if (width < 1280) return 36;
      return 40;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const iconSize = getIconSize(width);

      setWindowSize({
        width,
        height,
        iconSize,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
