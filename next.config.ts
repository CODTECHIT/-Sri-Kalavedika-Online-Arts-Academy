import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    root: typeof __dirname !== 'undefined' ? __dirname : process.cwd(),
  },
};

export default nextConfig;

