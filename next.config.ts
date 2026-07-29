import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/costume-cart-check",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
