/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SPOTIFY_ACCOUNT_API_URL: process.env.SPOTIFY_ACCOUNT_API_URL || "",
    SPOTIFY_API_URL: process.env.SPOTIFY_API_URL || "",
    CLIENT_ID: process.env.CLIENT_ID || "",
    CLIENT_SECRET: process.env.CLIENT_SECRET || "",
  },
};

module.exports = nextConfig;
