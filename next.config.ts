import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  images: {
    unoptimized: true,
    domains: ["anchorbridgeconsulting.com", "themepanthers.com"],
  },
};

export default nextConfig;
