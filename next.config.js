/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/3dactiv' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/3dactiv' : '',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
};

module.exports = nextConfig;