'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ImageWrapper from './ImageWrapper'
import dataManager from '../utils/dataManager'

const Partenaires = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [partners, setPartners] = useState([])

  // Charger les partenaires depuis le DataManager
  useEffect(() => {
    const loadPartners = () => {
      // Récupérer tous les partenaires et filtrer seulement les actifs
      const allPartners = dataManager.getData('partners')
      const activePartners = allPartners.filter(partner => partner.status === 'active')
      setPartners(activePartners)
    }
    
    loadPartners()
    
    // Écouter les changements dans localStorage
    const handleStorageChange = (e) => {
      if (e.key === dataManager.storageKeys.partners) {
        loadPartners()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 100)
    }, 50) // Smooth scrolling

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="partenaires" className="section-padding bg-gradient-to-b from-metal-100 via-metal-200 to-metal-300 overflow-hidden">
      <div className="container-nordic">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-nordic-900 mb-6">
            Ils nous ont fait confiance
          </h2>
          <p className="text-xl text-nordic-600 max-w-2xl mx-auto">
            Nous collaborons avec les plus grandes entreprises du secteur énergétique
          </p>
        </motion.div>

        {/* Carousel Linéaire */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="flex space-x-8 animate-scroll">
            {/* Premier groupe de logos */}
            <div className="flex space-x-8 flex-shrink-0">
              {partners.map((partner) => (
                <div key={partner.id} className="group">
                  <div className="w-32 h-20 bg-white rounded-xl shadow-nordic p-4 flex items-center justify-center group-hover:shadow-nordic-lg transition-all duration-300 hover:scale-105">
                    <ImageWrapper
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xs font-medium text-nordic-700 group-hover:text-accent-600 transition-colors duration-200">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Deuxième groupe de logos (dupliqué pour le défilement continu) */}
            <div className="flex space-x-8 flex-shrink-0">
              {partners.map((partner) => (
                <div key={`${partner.id}-duplicate`} className="group">
                  <div className="w-32 h-20 bg-white rounded-xl shadow-nordic p-4 flex items-center justify-center group-hover:shadow-nordic-lg transition-all duration-300 hover:scale-105">
                    <ImageWrapper
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xs font-medium text-nordic-700 group-hover:text-accent-600 transition-colors duration-200">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partenaires
