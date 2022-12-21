/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.coinranking.com',
       
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        // port: '',
        // pathname: '/account123/**',
      }
    ]
  }
}

module.exports = nextConfig
