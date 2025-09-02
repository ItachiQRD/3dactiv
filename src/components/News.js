'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Award } from 'lucide-react'
import { processImageUrl } from '../utils/assetPath'

const News = () => {
  const news = [
    {
      id: 1,
      title: '3DACTIV renforce sa position dans le secteur nucléaire',
      excerpt: 'Nouveau partenariat avec EDF pour le recrutement de 50 ingénieurs spécialisés en 2024',
      image: '/images/industries/nucleaire.avif',
      category: 'Nucléaire',
      date: '15 Jan 2024',
      readTime: '3 min',
      featured: true
    },
    {
      id: 2,
      title: 'Transition énergétique : 3DACTIV accompagne Engie',
      excerpt: 'Recrutement d\'une équipe complète pour le développement de parcs éoliens offshore',
      image: '/images/industries/energy.avif',
      category: 'Renouvelable',
      date: '10 Jan 2024',
      readTime: '4 min',
      featured: false
    },
    {
      id: 3,
      title: 'Nouveaux défis dans l\'industrie gazière',
      excerpt: '3DACTIV élargit son expertise avec de nouveaux partenaires internationaux',
      image: '/images/industries/gas.avif',
      category: 'Gaz',
      date: '5 Jan 2024',
      readTime: '5 min',
      featured: false
    },
    {
      id: 4,
      title: '3DACTIV célèbre ses 15 ans d\'excellence',
      excerpt: 'Retour sur 15 années de succès dans le recrutement énergétique français',
      image: '/images/histoire-3dactiv.avif',
      category: 'Entreprise',
      date: '1 Jan 2024',
      readTime: '6 min',
      featured: false
    }
  ]

  const trends = [
    {
      icon: TrendingUp,
      title: 'Croissance du marché',
      description: 'Le secteur énergétique français enregistre une croissance de 12% en 2023'
    },
    {
      icon: Users,
      title: 'Demande de talents',
      description: 'Plus de 2000 postes à pourvoir dans l\'énergie en 2024'
    },
    {
      icon: Award,
      title: 'Excellence reconnue',
      description: '3DACTIV reçoit le prix du meilleur cabinet de recrutement énergétique'
    }
  ]

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-nordic">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-nordic-900 mb-6">
            <span className="text-gradient">Actualités</span> & Tendances
          </h2>
          <p className="text-xl text-nordic-600 max-w-3xl mx-auto">
            Restez informés des dernières nouvelles du secteur énergétique 
            et de nos succès en recrutement.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          {news.filter(item => item.featured).map((article) => (
            <div key={article.id} className="card-hover overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-80 lg:h-full overflow-hidden">
                  <img
                    src={processImageUrl(article.image)}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Category & Date */}
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-nordic-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-nordic-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-nordic-900 mb-4 leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-lg text-nordic-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* CTA */}
                  <button className="btn-primary group w-fit">
                    Lire l'article complet
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {news.filter(item => !item.featured).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-hover h-full overflow-hidden">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={processImageUrl(article.image)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-nordic-100 text-nordic-700 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-nordic-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-nordic-900 mb-3 group-hover:text-accent-600 transition-colors duration-200">
                    {article.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-nordic-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Date */}
                  <div className="flex items-center space-x-2 text-nordic-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>

                  {/* CTA */}
                  <button className="btn-outline w-full group">
                    Lire plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trends Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-nordic-900 text-center mb-12">
            Tendances du Secteur
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <trend.icon className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-semibold text-nordic-900 mb-3">
                  {trend.title}
                </h4>
                <p className="text-nordic-600 leading-relaxed">
                  {trend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-nordic-50 to-accent-50 rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-nordic-900 mb-4">
              Restez informés
            </h3>
            <p className="text-lg text-nordic-600 mb-8">
              Recevez nos dernières actualités et insights du secteur énergétique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default News
