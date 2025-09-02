'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react'

const Portfolio = () => {
  // Projets récupérés de l'admin
  const projects = [
    {
      id: 1,
      title: 'Inspection CND Centrale Nucléaire Flamanville',
      category: 'nuclear',
      client: 'EDF',
      location: 'Flamanville, France',
      startDate: '2023-03-01',
      endDate: '2023-06-30',
      description: 'Inspection complète des soudures et structures de la centrale nucléaire de Flamanville, incluant contrôle ultrasonique, radiographique et magnétoscopique.',
      technologies: 'UT, RT, MT, PT, Phased Array',
      results: 'Détection de 3 défauts critiques, maintenance préventive planifiée, conformité aux normes ASME et RCC-M validée.',
      teamSize: '8 inspecteurs',
      budget: '450,000 €',
      imageUrl: '/images/portfolio/nuclear-inspection.jpg',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Maintenance Plateforme Offshore TotalEnergies',
      category: 'oil-gas',
      client: 'TotalEnergies',
      location: 'Mer du Nord, Norvège',
      startDate: '2023-08-15',
      endDate: '2023-11-30',
      description: 'Maintenance préventive et inspection des équipements de production offshore, incluant inspection des pipelines et structures sous-marines.',
      technologies: 'ROV, UT, RT, Corrosion Monitoring',
      results: 'Extension de la durée de vie de 5 ans, réduction des coûts de maintenance de 25%, zéro incident de sécurité.',
      teamSize: '12 techniciens',
      budget: '780,000 €',
      imageUrl: '/images/portfolio/offshore-maintenance.jpg',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Supervision Parc Éolien Offshore',
      category: 'renewable',
      client: 'Engie',
      location: 'Mer Baltique, Allemagne',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      description: 'Supervision complète de la construction et mise en service d\'un parc éolien offshore de 500 MW, incluant contrôle qualité et sécurité.',
      technologies: 'Drone, Lidar, Monitoring, QA/QC',
      results: 'Construction dans les délais, respect des normes environnementales, formation de l\'équipe locale.',
      teamSize: '15 superviseurs',
      budget: '1,200,000 €',
      imageUrl: '/images/portfolio/wind-farm.jpg',
      status: 'in-progress'
    }
  ]

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
          <img
            src="/3dactiv/images/portfolio/portfolio.avif"
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
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200"
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
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.value === project.category)?.label || project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status === 'completed' ? 'Terminé' : 
                       project.status === 'in-progress' ? 'En cours' : 'Planifié'}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {new Date(project.startDate).toLocaleDateString('fr-FR')} - {new Date(project.endDate).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      {project.teamSize}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(', ').map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Résultats :</h4>
                    <p className="text-slate-600 leading-relaxed text-justify">
                      {project.results}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-500">
                      <span className="font-medium text-slate-700">{project.client}</span>
                      <span className="ml-2 text-slate-400">•</span>
                      <span className="ml-2 font-medium text-slate-600">{project.budget}</span>
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