'use client'

import { useState, useEffect } from 'react'

const ImageWrapper = ({ src, alt, className, ...props }) => {
  const [finalSrc, setFinalSrc] = useState(src)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
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
    console.log('ImageWrapper Debug:', {
      hostname: window.location.hostname,
      isGitHubPages,
      isOVH,
      isProduction,
      prefix,
      originalSrc: src,
      finalSrc: newSrc,
      isClient: true
    })
  }, [src])

  return (
    <img 
      src={isClient ? finalSrc : src} 
      alt={alt} 
      className={className} 
      {...props} 
    />
  )
}

export default ImageWrapper
