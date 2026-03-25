import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/desco-derm",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
