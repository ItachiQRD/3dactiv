// Fonction utilitaire pour gérer les chemins d'assets selon l'environnement
export const getAssetPath = (src) => {
  // Si on est côté serveur (SSR), retourner le chemin original
  if (typeof window === 'undefined') {
    return src
  }
  
  // Détecter l'environnement côté client
  const isGitHubPages = window.location.hostname.includes('github.io')
  const isOVH = window.location.hostname.includes('ovh')
  const isProduction = process.env.NODE_ENV === 'production'
  
  // Déterminer le préfixe selon l'environnement
  let prefix = ''
  if (isGitHubPages) {
    prefix = '/3dactiv'
  } else if (isOVH) {
    // Pour OVH, pas de préfixe nécessaire
    prefix = ''
  } else if (isProduction) {
    // Pour d'autres hébergeurs en production
    prefix = ''
  }
  
  // Si on a un préfixe et que le chemin ne commence pas par ce préfixe
  const needsPrefix = prefix && !src.startsWith(prefix)
  
  return needsPrefix ? `${prefix}${src}` : src
}

// Fonction pour les images dans les données
export const processImageUrl = (imageUrl) => {
  return getAssetPath(imageUrl)
}
