import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true }, // optional: keeps builds green while you wire deps
};

export default config;
