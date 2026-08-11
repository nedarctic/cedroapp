import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-79ed953562964dbfa4ff96ef322c18ac.r2.dev",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
