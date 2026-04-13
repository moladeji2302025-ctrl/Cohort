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
  async redirects() {
    // Redirect root "/" to the basePath so visiting the production
    // URL does not return 404: NOT_FOUND.
    return [
      {
        source: "/",
        destination: "/history",
        permanent: false,
        basePath: false, // evaluate against the actual URL, not basePath-prefixed path
      },
    ];
  },
};

export default nextConfig;
