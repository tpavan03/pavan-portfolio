/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.VERCEL ? undefined : "standalone",
  poweredByHeader: false,
};

module.exports = nextConfig;
