'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import { Calendar, User, ArrowRight, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import AssetPath from '../../components/AssetPath'
import ImageWrapper from '../../components/ImageWrapper'
import { useState, useEffect } from 'react'
import dataManager from '../../utils/dataManager'

const News = () => {
  const [articles, setArticles] = useState([])

  // Fonction pour générer des statistiques automatiques basées sur l'ID de l'article
  const generateStats = (articleId) => {
    // Utiliser l'ID comme seed pour des statistiques cohérentes
    const seed = articleId * 12345
    const random = (seed) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }
    
    // Générer des statistiques réalistes basées sur l'âge de l'article
    const baseViews = Math.floor(random(seed) * 2000) + 500
    const baseLikes = Math.floor(random(seed + 1) * 50) + 10
    const baseComments = Math.floor(random(seed + 2) * 15) + 2
    
    return {
      views: baseViews,
      likes: baseLikes,
      comments: baseComments
    }
  }

  // Charger les articles depuis le DataManager
  useEffect(() => {
    const loadArticles = () => {
      const allArticles = dataManager.getData('news')
      // Filtrer seulement les articles publiés et ajouter les statistiques automatiques
      const publishedArticles = allArticles
        .filter(article => article.status === 'published')
        .map(article => ({
          ...article,
          ...generateStats(article.id)
        }))
      setArticles(publishedArticles)
    }
    
    loadArticles()
    
    // Écouter les changements dans localStorage
    const handleStorageChange = (e) => {
      if (e.key === dataManager.storageKeys.news) {
        loadArticles()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Fonction pour créer un slug à partir du titre
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-')
  }

  // Utiliser les articles chargés depuis le dataManager
  const displayArticles = articles

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'industry', label: 'Industrie' },
    { value: 'technology', label: 'Technologie' },
    { value: 'company', label: 'Entreprise' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/news/news.avif"
            alt="3DACTIV - Actualités"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-t-xl p-8 lg:p-12 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-nordic-900 text-center mb-6">
                Actualités
              </h1>
              <p className="text-base text-nordic-700 text-center leading-relaxed mb-4">
                Découvrez les actualités, conseils techniques et innovations du secteur industriel dans notre blog.
              </p>
              <p className="text-sm text-nordic-600 text-center leading-relaxed">
                3D ACTIV, expert en solutions techniques et inspections spécialisées vous informe sur les dernières actualités, innovations et bonnes pratiques du secteur industriel et technique.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container-nordic">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-nordic-900">
              Nos Posts
            </h2>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <Link href={`/news/${createSlug(article.title)}`}>
                  <div className="relative">
                    <ImageWrapper
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-accent-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {categories.find(cat => cat.value === article.category)?.label || article.category}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <Link href={`/news/${createSlug(article.title)}`}>
                    <h3 className="text-lg font-bold text-nordic-900 mb-3 line-clamp-2 group-hover:text-accent-600 transition-colors duration-200">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <Link href={`/news/${createSlug(article.title)}`}>
                    <p className="text-nordic-600 mb-4 line-clamp-3 text-sm leading-relaxed text-justify cursor-pointer hover:text-accent-600 transition-colors duration-200">
                      {article.excerpt}
                    </p>
                  </Link>
                  
                  <div className="flex items-center justify-between text-xs text-nordic-500 mb-4">
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{new Date(article.publishDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-xs text-nordic-400">
                      <span>{article.readTime} • {article.views} vues</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-nordic-500">
                        <Heart size={12} className="mr-1" />
                        <span>{article.likes || 0}</span>
                      </div>
                      <div className="flex items-center text-nordic-500">
                        <MessageCircle size={12} className="mr-1" />
                        <span>{article.comments || 0}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end">
                    <Link 
                      href={`/news/${createSlug(article.title)}`}
                      className="text-accent-600 hover:text-accent-700 font-medium text-sm flex items-center transition-colors duration-200"
                    >
                      Lire
                      <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
