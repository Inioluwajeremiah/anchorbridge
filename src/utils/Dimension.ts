"use client";

export const Dimensions = {
  WindowWidth: typeof window !== "undefined" ? window.innerWidth : 0,
  WindowHeight: typeof window !== "undefined" ? window.innerHeight : 0,
  iconSize:
    window.innerWidth < 640
      ? 20
      : window.innerWidth < 768
      ? 24
      : window.innerWidth < 1024
      ? 30
      : window.innerWidth < 1280
      ? 36
      : 40,
};
