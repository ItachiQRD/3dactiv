'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import ImageWrapper from './ImageWrapper'
import { 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Heart, 
  MessageCircle, 
  ArrowLeft,
  Share2,
  Tag
} from 'lucide-react'
import dataManager from '../utils/dataManager'

const NewsArticleClient = () => {
  const params = useParams()
  const router = useRouter()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [loading, setLoading] = useState(true)

  // Fonction pour générer des statistiques automatiques
  const generateStats = (articleId) => {
    const seed = articleId * 12345
    const random = (seed) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }
    
    const baseViews = Math.floor(random(seed) * 2000) + 500
    const baseLikes = Math.floor(random(seed + 1) * 50) + 10
    const baseComments = Math.floor(random(seed + 2) * 15) + 2
    
    return {
      views: baseViews,
      likes: baseLikes,
      comments: baseComments
    }
  }

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

  // Charger l'article
  useEffect(() => {
    const loadArticle = () => {
      const allArticles = dataManager.getData('news')
      const publishedArticles = allArticles.filter(article => article.status === 'published')
      
      // Trouver l'article par slug
      const foundArticle = publishedArticles.find(article => 
        createSlug(article.title) === params.slug
      )
      
      if (foundArticle) {
        const articleWithStats = {
          ...foundArticle,
          ...generateStats(foundArticle.id)
        }
        setArticle(articleWithStats)
        
        // Charger des articles liés (même catégorie, exclure l'article actuel)
        const related = publishedArticles
          .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
          .slice(0, 3)
          .map(a => ({ ...a, ...generateStats(a.id) }))
        setRelatedArticles(related)
      }
      
      setLoading(false)
    }
    
    loadArticle()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container-nordic py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container-nordic py-20 text-center">
          <h1 className="text-4xl font-bold text-nordic-900 mb-4">Article non trouvé</h1>
          <p className="text-nordic-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
          <button
            onClick={() => router.push('/news')}
            className="inline-flex items-center px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux actualités
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container-nordic">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-nordic-600 mb-8">
              <button
                onClick={() => router.push('/news')}
                className="hover:text-accent-600 transition-colors duration-200"
              >
                Actualités
              </button>
              <span>/</span>
              <span className="text-nordic-900 font-medium">{article.title}</span>
            </nav>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
                  {article.category === 'company' ? 'Entreprise' : 
                   article.category === 'industry' ? 'Industrie' : 
                   article.category === 'technology' ? 'Technologie' : article.category}
                </span>
                <span className="text-sm text-nordic-500">
                  {new Date(article.publishDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-nordic-900 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-nordic-600 leading-relaxed mb-8">
                {article.excerpt}
              </p>

              {/* Author & Stats */}
              <div className="flex flex-wrap items-center justify-between py-6 border-t border-b border-nordic-200">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-nordic-600">
                    <User className="w-5 h-5 mr-2" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center text-nordic-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-nordic-500">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>{article.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>{article.comments}</span>
                  </div>
                  <button className="flex items-center text-nordic-600 hover:text-accent-600 transition-colors duration-200">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-nordic">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-nordic overflow-hidden"
                >
                  {/* Featured Image */}
                  <div className="relative h-64 lg:h-96">
                    <ImageWrapper
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Article Body */}
                  <div className="p-8 lg:p-12">
                    <div className="prose prose-lg max-w-none">
                      <div className="text-nordic-700 leading-relaxed whitespace-pre-line">
                        {article.content}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    {article.tags && (
                      <div className="mt-8 pt-8 border-t border-nordic-200">
                        <div className="flex items-center mb-4">
                          <Tag className="w-5 h-5 text-nordic-600 mr-2" />
                          <span className="font-medium text-nordic-900">Tags</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.split(',').map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-nordic-100 text-nordic-700 rounded-full text-sm hover:bg-accent-100 hover:text-accent-700 transition-colors duration-200 cursor-pointer"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.aside
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* Author Card */}
                  <div className="bg-white rounded-xl p-6 shadow-nordic">
                    <h3 className="font-semibold text-nordic-900 mb-4">À propos de l'auteur</h3>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-accent-600" />
                      </div>
                      <div>
                        <p className="font-medium text-nordic-900">{article.author}</p>
                        <p className="text-sm text-nordic-600">Expert 3D ACTIV</p>
                      </div>
                    </div>
                  </div>

                  {/* Related Articles */}
                  {relatedArticles.length > 0 && (
                    <div className="bg-white rounded-xl p-6 shadow-nordic">
                      <h3 className="font-semibold text-nordic-900 mb-4">Articles similaires</h3>
                      <div className="space-y-4">
                        {relatedArticles.map((relatedArticle) => (
                          <div
                            key={relatedArticle.id}
                            className="group cursor-pointer"
                            onClick={() => router.push(`/news/${createSlug(relatedArticle.title)}`)}
                          >
                            <div className="flex space-x-3">
                              <div className="w-16 h-16 bg-nordic-100 rounded-lg overflow-hidden flex-shrink-0">
                                <ImageWrapper
                                  src={relatedArticle.imageUrl}
                                  alt={relatedArticle.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-nordic-900 group-hover:text-accent-600 transition-colors duration-200 line-clamp-2 text-sm">
                                  {relatedArticle.title}
                                </h4>
                                <div className="flex items-center text-xs text-nordic-500 mt-1">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  <span>{new Date(relatedArticle.publishDate).toLocaleDateString('fr-FR')}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Back to News */}
                  <div className="bg-accent-50 rounded-xl p-6">
                    <button
                      onClick={() => router.push('/news')}
                      className="w-full flex items-center justify-center space-x-2 text-accent-700 hover:text-accent-800 transition-colors duration-200"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="font-medium">Retour aux actualités</span>
                    </button>
                  </div>
                </motion.aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsArticleClient
