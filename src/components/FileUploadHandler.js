'use client'

import { useState } from 'react'

// Fonction utilitaire pour gérer l'upload de fichiers
export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const uploadFile = async (file, onSuccess, onError) => {
    setIsUploading(true)
    setUploadProgress(0)

    try {
      // Simuler l'upload avec une barre de progression
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval)
            return 90
          }
          return prev + 10
        })
      }, 100)

      // Simuler le délai d'upload
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Créer une URL locale pour l'image
      const imageUrl = URL.createObjectURL(file)
      
      setUploadProgress(100)
      clearInterval(interval)
      
      // Simuler un petit délai pour voir la barre à 100%
      setTimeout(() => {
        setIsUploading(false)
        setUploadProgress(0)
        onSuccess(imageUrl)
      }, 300)

    } catch (error) {
      setIsUploading(false)
      setUploadProgress(0)
      onError(error)
    }
  }

  return {
    isUploading,
    uploadProgress,
    uploadFile
  }
}

// Fonction pour valider les fichiers
export const validateFile = (file, options = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB par défaut
    allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/avif']
  } = options

  const errors = []

  // Vérifier le type de fichier
  if (!allowedTypes.includes(file.type)) {
    errors.push(`Type de fichier non supporté. Types acceptés : ${allowedTypes.join(', ')}`)
  }

  // Vérifier la taille
  if (file.size > maxSize) {
    errors.push(`Fichier trop volumineux. Taille maximale : ${maxSize / (1024 * 1024)}MB`)
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Fonction pour générer un nom de fichier unique
export const generateUniqueFileName = (originalName) => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  const fileExtension = originalName.split('.').pop()
  return `upload-${timestamp}-${random}.${fileExtension}`
}

// Fonction pour redimensionner une image (optionnel)
export const resizeImage = (file, maxWidth = 1920, maxHeight = 1080, quality = 0.8) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.onload = () => {
      // Calculer les nouvelles dimensions
      let { width, height } = img
      
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height)
        width *= ratio
        height *= ratio
      }

      // Redimensionner le canvas
      canvas.width = width
      canvas.height = height

      // Dessiner l'image redimensionnée
      ctx.drawImage(img, 0, 0, width, height)

      // Convertir en blob
      canvas.toBlob(resolve, file.type, quality)
    }

    img.src = URL.createObjectURL(file)
  })
}
