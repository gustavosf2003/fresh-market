/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
