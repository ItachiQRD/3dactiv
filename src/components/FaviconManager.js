'use client'

import { useEffect } from 'react'

const FaviconManager = () => {
  useEffect(() => {
    // Détecter l'environnement côté client
    const isGitHubPages = window.location.hostname.includes('github.io')
    const isOVH = window.location.hostname.includes('ovh')
    const isProduction = process.env.NODE_ENV === 'production'
    
    // Déterminer le préfixe selon l'environnement
    let prefix = ''
    if (isGitHubPages) {
      prefix = '/3dactiv'
    } else if (isOVH) {
      prefix = ''
    } else if (isProduction) {
      prefix = ''
    }
    
    // Fonction pour créer un favicon à partir du logo
    const createFaviconFromLogo = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = 32
      canvas.height = 32
      
      // Créer un fond bleu (couleur accent)
      ctx.fillStyle = '#3B82F6'
      ctx.fillRect(0, 0, 32, 32)
      
      // Ajouter le texte "3D" en blanc
      ctx.fillStyle = '#FFFFFF'
      ctx.font = 'bold 16px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('3D', 16, 16)
      
      // Convertir en data URL
      return canvas.toDataURL('image/png')
    }
    
    // Mettre à jour les favicons
    const updateFavicons = () => {
      // Supprimer les anciens favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
      existingFavicons.forEach(favicon => favicon.remove())
      
      // Créer un favicon personnalisé à partir du logo
      const customFavicon = createFaviconFromLogo()
      
      // Ajouter les nouveaux favicons
      const favicon16 = document.createElement('link')
      favicon16.rel = 'icon'
      favicon16.type = 'image/png'
      favicon16.sizes = '16x16'
      favicon16.href = customFavicon
      document.head.appendChild(favicon16)
      
      const favicon32 = document.createElement('link')
      favicon32.rel = 'icon'
      favicon32.type = 'image/png'
      favicon32.sizes = '32x32'
      favicon32.href = customFavicon
      document.head.appendChild(favicon32)
      
      const faviconIco = document.createElement('link')
      faviconIco.rel = 'shortcut icon'
      faviconIco.href = customFavicon
      document.head.appendChild(faviconIco)
      
      const appleIcon = document.createElement('link')
      appleIcon.rel = 'apple-touch-icon'
      appleIcon.sizes = '32x32'
      appleIcon.href = customFavicon
      document.head.appendChild(appleIcon)
      
      // Essayer de charger le logo original comme favicon de fallback
      const logoImg = new Image()
      logoImg.onload = () => {
        const logoCanvas = document.createElement('canvas')
        const logoCtx = logoCanvas.getContext('2d')
        logoCanvas.width = 32
        logoCanvas.height = 32
        
        // Dessiner le logo redimensionné
        logoCtx.drawImage(logoImg, 0, 0, 32, 32)
        
        // Remplacer les favicons par le logo
        const logoDataUrl = logoCanvas.toDataURL('image/png')
        favicon16.href = logoDataUrl
        favicon32.href = logoDataUrl
        faviconIco.href = logoDataUrl
        appleIcon.href = logoDataUrl
      }
      logoImg.onerror = () => {
        // Si le logo ne charge pas, garder le favicon personnalisé
        console.log('Logo not found, using custom favicon')
      }
      logoImg.src = `${prefix}/images/logo-3dactiv.png`
    }
    
    // Mettre à jour le titre de la page avec un emoji ou un symbole
    const updatePageTitle = () => {
      const originalTitle = document.title
      // Ajouter un emoji ou symbole avant le titre
      if (!originalTitle.includes('🔧') && !originalTitle.includes('⚙️')) {
        document.title = `🔧 ${originalTitle}`
      }
    }
    
    updateFavicons()
    updatePageTitle()
    
    // Debug en console
    console.log('FaviconManager Debug:', {
      hostname: window.location.hostname,
      isGitHubPages,
      isOVH,
      isProduction,
      prefix,
      title: document.title
    })
    
  }, [])
  
  return null
}

export default FaviconManager
