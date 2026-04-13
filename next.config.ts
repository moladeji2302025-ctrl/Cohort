import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/history",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nigcomsat.gov.ng",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
