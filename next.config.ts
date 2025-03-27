import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fastlp' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fastlp/' : '',
};

export default nextConfig;
