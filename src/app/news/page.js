'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import { Calendar, User, ArrowRight } from 'lucide-react'
import AssetPath from '../../components/AssetPath'
import ImageWrapper from '../../components/ImageWrapper'

const News = () => {
  // Articles récupérés de l'admin
  const articles = [
    {
      id: 1,
      title: 'Nouveaux défis de la transition énergétique en 2024',
      excerpt: 'Analyse des enjeux et opportunités de la transition énergétique dans le secteur industriel français.',
      content: 'La transition énergétique représente un défi majeur pour l\'industrie française en 2024. Avec l\'objectif de neutralité carbone d\'ici 2050, les entreprises du secteur énergétique doivent adapter leurs processus et former leurs équipes aux nouvelles technologies...',
      category: 'industry',
      author: 'Marie Dubois',
      imageUrl: '/images/news/transition-energetique.jpg',
      tags: 'transition énergétique, industrie, 2024, neutralité carbone',
      status: 'published',
      publishDate: '2024-01-20',
      readTime: '5 min',
      views: 1247
    },
    {
      id: 2,
      title: 'Innovations CND dans le secteur nucléaire',
      excerpt: 'Découverte des dernières avancées en contrôle non-destructif pour la sûreté nucléaire.',
      content: 'Les technologies de contrôle non-destructif (CND) évoluent rapidement pour répondre aux exigences croissantes de sûreté dans le secteur nucléaire. Les nouvelles méthodes d\'inspection par ultrasons, radiographie et thermographie permettent...',
      category: 'nuclear',
      author: 'Thomas Martin',
      imageUrl: '/images/news/innovations-cnd.jpg',
      tags: 'CND, nucléaire, innovation, sûreté, inspection',
      status: 'published',
      publishDate: '2024-01-18',
      readTime: '7 min',
      views: 892
    },
    {
      id: 3,
      title: 'Formation continue : un enjeu majeur pour l\'énergie',
      excerpt: 'L\'importance de la formation continue dans un secteur en constante évolution.',
      content: 'Dans un secteur énergétique en pleine mutation, la formation continue des professionnels devient un enjeu stratégique. Les nouvelles réglementations, technologies et méthodes de travail nécessitent une mise à jour constante des compétences...',
      category: 'training',
      author: 'Sophie Bernard',
      imageUrl: '/images/news/formation-continue.jpg',
      tags: 'formation, énergie, compétences, évolution',
      status: 'published',
      publishDate: '2024-01-15',
      readTime: '4 min',
      views: 456
    }
  ]

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'industry', label: 'Industrie' },
    { value: 'nuclear', label: 'Nucléaire' },
    { value: 'training', label: 'Formation' }
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
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <ImageWrapper
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {categories.find(cat => cat.value === article.category)?.label || article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-nordic-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-nordic-600 mb-4 line-clamp-3 text-sm leading-relaxed text-justify">
                    {article.excerpt}
                  </p>
                  
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
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-nordic-400">
                      {article.readTime} • {article.views} vues
                    </span>
                    <button className="text-accent-600 hover:text-accent-700 font-medium text-sm flex items-center">
                      Lire
                      <ArrowRight size={12} className="ml-1" />
                    </button>
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
