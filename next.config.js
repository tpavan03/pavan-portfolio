/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1"],
  output: process.env.VERCEL ? undefined : "standalone",
  poweredByHeader: false,
};

module.exports = nextConfig;
