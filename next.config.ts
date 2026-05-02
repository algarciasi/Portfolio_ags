import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // 👈 IMPORTANTE: no exponer source maps
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // quita console.logs
  },
};

export default nextConfig;