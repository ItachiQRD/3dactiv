/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Configuration adaptative selon l'environnement
  basePath: process.env.BASE_PATH || (process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES ? '/3dactiv' : ''),
  assetPrefix: process.env.ASSET_PREFIX || (process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES ? '/3dactiv' : ''),
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Forcer la copie des assets statiques
  experimental: {
    outputFileTracingRoot: undefined,
  },
};

module.exports = nextConfig;