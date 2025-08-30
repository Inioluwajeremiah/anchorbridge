import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone", //use only for production when deploying to github
  images: {
    unoptimized: true,
    domains: ["anchorbridgeconsulting.com", "themepanthers.com"],
  },
};

export default nextConfig;
