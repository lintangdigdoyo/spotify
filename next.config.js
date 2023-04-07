const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: false,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  /** @type {import('next').NextConfig} */
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co"],
  },
  env: {
    SPOTIFY_ACCOUNT_API_URL: process.env.SPOTIFY_ACCOUNT_API_URL || "",
    SPOTIFY_API_URL: process.env.SPOTIFY_API_URL || "",
    CLIENT_ID: process.env.CLIENT_ID || "",
    CLIENT_SECRET: process.env.CLIENT_SECRET || "",
  },
});
