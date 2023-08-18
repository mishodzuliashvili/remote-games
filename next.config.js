/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow all images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
