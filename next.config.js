/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/getbooklist",
        destination: "https://books-api.nomadcoders.workers.dev/lists",
      },
    ];
  },
};

module.exports = nextConfig;
