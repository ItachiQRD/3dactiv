'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import { ExternalLink } from 'lucide-react'
import AssetPath from '../../components/AssetPath'
import ImageWrapper from '../../components/ImageWrapper'
import { useState, useEffect } from 'react'
import dataManager from '../../utils/dataManager'

const Portfolio = () => {
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Charger les projets depuis le DataManager
  useEffect(() => {
    const loadProjects = () => {
      const allProjects = dataManager.getData('portfolio')
      setProjects(allProjects)
    }
    
    loadProjects()
    
    // Écouter les changements dans localStorage
    const handleStorageChange = (e) => {
      if (e.key === dataManager.storageKeys.portfolio) {
        loadProjects()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Filtrer les projets par catégorie
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'nuclear', label: 'Nucléaire' },
    { value: 'oil-gas', label: 'Pétrole & Gaz' },
    { value: 'renewable', label: 'Énergies Renouvelables' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/portfolio/portfolio.avif"
            alt="3DACTIV - Portfolio"
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
              <h1 className="text-5xl lg:text-7xl font-bold text-nordic-900 text-center mb-6">
                Projets & Réalisations
              </h1>
              <p className="text-lg text-nordic-700 text-center leading-relaxed">
                Au fil des années, 3D ACTIV est intervenu sur des projets d'envergure en France et à l'international, dans des environnements à forte exigence industrielle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container-nordic">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-nordic-700 leading-relaxed text-justify"
            >
              <p>
                De la construction de nouvelles installations à la maintenance d'unités existantes, en passant par les phases critiques de mise en service ou de démantèlement, nous avons su apporter un renfort technique structuré et ciblé, répondant aux standards élevés de sûreté, de qualité et de performance.
              </p>
              
              <p>
                Ce portfolio illustre notre engagement auprès de nos partenaires dans les secteurs du nucléaire, de l'oil & gas, des énergies renouvelables et des infrastructures énergétiques, en mettant en lumière :
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>notre capacité d'adaptation sur le terrain,</li>
                <li>la technicité des compétences mobilisées,</li>
                <li>et la fiabilité de notre accompagnement, tout au long du cycle projet.</li>
              </ul>
              
              <p>
                Que vous soyez acteur industriel à la recherche de compétences fiables, ou professionnel technique souhaitant intégrer des projets exigeants, 3D ACTIV est prêt à construire avec vous une collaboration durable et engagée.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-b from-white via-gray-100 to-gray-200">
        <div className="container-nordic">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 border rounded-lg transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-slate-300 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-gray-200 via-gray-100 to-white">
        <div className="container-nordic">
          {filteredProjects.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <ImageWrapper
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.value === project.category)?.label || project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                      <div className="text-sm text-slate-500">
                        <span className="font-medium text-slate-700">
                          {new Date(project.createdAt).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        Voir le projet
                        <ExternalLink size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-medium text-slate-600 mb-2">Aucun projet trouvé</h3>
              <p className="text-slate-500">
                {selectedCategory === 'all' 
                  ? 'Aucun projet n\'est disponible pour le moment.' 
                  : `Aucun projet dans la catégorie "${categories.find(cat => cat.value === selectedCategory)?.label}".`
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="container-nordic text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Votre Projet, Notre Expertise
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Découvrez comment nous pouvons vous accompagner dans la réussite de vos projets industriels.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium uppercase tracking-wider transition-colors duration-200">
                Discuter de votre projet
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 font-medium uppercase tracking-wider transition-colors duration-200">
                Voir nos solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio