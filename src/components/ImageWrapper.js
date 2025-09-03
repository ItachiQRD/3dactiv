'use client'

import { useState, useEffect } from 'react'

const ImageWrapper = ({ src, alt, className, ...props }) => {
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
    
    // Ne pas ajouter de préfixe pour les images base64 ou les URLs complètes
    const isBase64 = src.startsWith('data:')
    const isFullUrl = src.startsWith('http://') || src.startsWith('https://')
    const needsPrefix = prefix && !src.startsWith(prefix) && !isBase64 && !isFullUrl
    
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
      mounted: true
    })
  }, [src])

  // Pendant l'hydratation, utiliser le src original pour éviter les différences SSR/CSR
  if (!mounted) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        {...props} 
      />
    )
  }

  return (
    <img 
      src={finalSrc} 
      alt={alt} 
      className={className} 
      {...props} 
    />
  )
}

export default ImageWrapper
