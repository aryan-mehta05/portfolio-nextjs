/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com", "drive.google.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
