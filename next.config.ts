/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['cdn.10minuteschool.com', 's3.ap-southeast-1.amazonaws.com'],
  },
}

module.exports = nextConfig
