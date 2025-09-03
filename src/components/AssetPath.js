'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const AssetPath = ({ src, alt, className, ...props }) => {
  const pathname = usePathname()
  const [finalSrc, setFinalSrc] = useState(src)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
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
    
    const newSrc = needsPrefix ? `${prefix}${src}` : src
    setFinalSrc(newSrc)
    
    // Debug en console
    console.log('AssetPath Debug:', {
      hostname: window.location.hostname,
      isGitHubPages,
      isOVH,
      isProduction,
      prefix,
      originalSrc: src,
      finalSrc: newSrc,
      mounted: true
    })
  }, [src])
  
  // Pendant l'hydratation, utiliser le src original pour éviter les différences SSR/CSR
  if (!mounted) {
    if (src.endsWith('.mp4') || src.endsWith('.webm')) {
      return (
        <source src={src} {...props} />
      )
    }
    return (
      <img src={src} alt={alt} className={className} {...props} />
    )
  }
  
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
