/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "**" },
      { protocol: "https", hostname: "**" },
    ],
  },
  experimental: {
    serverActions: true,
    serverActions: {
      bodySizeLimit: "25mb",
    },
  },
};

export default nextConfig;
