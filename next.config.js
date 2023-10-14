/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx'],
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
