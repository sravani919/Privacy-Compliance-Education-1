import type { NextConfig } from "next";

const repo = "/Privacy-Compliance-Education-1";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? repo : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
