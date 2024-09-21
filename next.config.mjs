/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enlightio.com",
      },
      {
        protocol: "https",
        hostname: "24ai.tech",
      },
    ],
  },
};

export default nextConfig;
