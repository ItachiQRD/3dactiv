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
  // Optimisations pour éviter les erreurs de chunks
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Désactiver la génération de chunks séparés pour éviter les erreurs
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;