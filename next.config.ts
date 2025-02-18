import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com', // Ganti dengan domain tempat gambar di-host
      },
    ],
  },
};

export default nextConfig;
