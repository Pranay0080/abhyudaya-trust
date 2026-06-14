import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abhyudayatrust.org",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
