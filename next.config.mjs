/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enlightio.com",
      },
    ],
  },
};

export default nextConfig;
