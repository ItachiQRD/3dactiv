/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
