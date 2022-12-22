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

      },
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',

      },
      {
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',

      },
      {
        protocol: 'https',
        hostname: 'tse4.mm.bing.net',

      },
      {
        protocol: 'https',
        hostname: 'tse5.mm.bing.net',

      },
      {
        protocol: 'https',
        hostname: 'tse3.explicit.bing.net',

      },
      {
        protocol: 'https',
        hostname: 'tse2.explicit.bing.net',

      },
      {
        protocol: 'https',
        hostname: 'tse1.explicit.bing.net',

      },
    ]
  }
}

module.exports = nextConfig
