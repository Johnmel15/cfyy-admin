import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    middlewarePrefetch: "strict", // Ensure middleware runs correctly
  },
};

export default nextConfig;
