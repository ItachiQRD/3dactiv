'use client'

import { usePathname } from 'next/navigation'

const AssetPath = ({ src, alt, className, ...props }) => {
  const pathname = usePathname()
  
  // Détecter l'environnement
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io')
  const isOVH = typeof window !== 'undefined' && window.location.hostname.includes('ovh')
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
  
  const finalSrc = needsPrefix ? `${prefix}${src}` : src
  
  if (src.endsWith('.mp4') || src.endsWith('.webm')) {
    return (
      <source src={finalSrc} {...props} />
    )
  }
  
  return (
    <img src={finalSrc} alt={alt} className={className} {...props} />
  )
}

export default AssetPath
