import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.loca.lt",
  ],
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
 