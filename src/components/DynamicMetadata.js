'use client'

import { useEffect } from 'react'

const DynamicMetadata = ({ title, description, keywords, authors }) => {
  useEffect(() => {
    // Mettre à jour le titre de la page
    if (title) {
      document.title = title
    }
    
    // Mettre à jour la meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = description
        document.head.appendChild(meta)
      }
    }
    
    // Mettre à jour les keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'keywords'
        meta.content = keywords
        document.head.appendChild(meta)
      }
    }
    
  }, [title, description, keywords, authors])
  
  return null
}

export default DynamicMetadata
