/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.coinranking.com',

      },
      {
        protocol: 'https',
        hostname: 'www.bing.com',

      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',

      }
    ]
  }
}

module.exports = nextConfig
