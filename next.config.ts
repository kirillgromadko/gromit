import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gromitstroy.by",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
