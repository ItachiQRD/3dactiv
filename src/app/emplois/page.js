'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import AssetPath from '../../components/AssetPath'
import { MapPin, Clock, Briefcase, ArrowRight, Upload, Send, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import dataManager from '../../utils/dataManager'
import FileUpload from '../../components/FileUpload'

const Emplois = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  const [jobs, setJobs] = useState([])

  // Charger les emplois depuis le DataManager
  useEffect(() => {
    const loadJobs = () => {
      const allJobs = dataManager.getData('jobs')
      // Filtrer seulement les emplois publiés
      const publishedJobs = allJobs.filter(job => job.status === 'published')
      setJobs(publishedJobs)
    }
    
    loadJobs()
    
    // Écouter les changements dans localStorage
    const handleStorageChange = (e) => {
      if (e.key === dataManager.storageKeys.jobs) {
        loadJobs()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Données par défaut si aucun emploi n'est trouvé
  const defaultJobs = [
    {
      id: 1,
      title: 'Technicien CND - Radiographie',
      company: '3D ACTIV',
      location: 'Paris, France',
      type: 'CDI',
      experience: '3-5 ans',
      salary: '35-45k€',
      description: 'Nous recherchons un technicien CND spécialisé en radiographie pour nos projets nucléaires et industriels.',
      requirements: [
        'Certification ISO 9712 niveau 2 minimum',
        'Expérience en radiographie industrielle',
        'Connaissance des normes nucléaires',
        'Permis B obligatoire'
      ],
      benefits: [
        'Formation continue',
        'Mutuelle d\'entreprise',
        'Tickets restaurant',
        'Prime de déplacement'
      ],
      postedDate: '2024-01-15',
      category: 'CND',
      status: 'published'
    },
    {
      id: 2,
      title: 'Inspecteur Soudure',
      company: '3D ACTIV',
      location: 'Lyon, France',
      type: 'CDD',
      experience: '2-4 ans',
      salary: '30-40k€',
      description: 'Inspecteur soudure pour projets pétroliers et gaziers en France et à l\'international.',
      requirements: [
        'Certification CSWIP 3.1 ou équivalent',
        'Expérience en inspection soudure',
        'Anglais technique',
        'Mobilité internationale'
      ],
      benefits: [
        'Prime d\'expatriation',
        'Logement pris en charge',
        'Assurance santé internationale',
        'Formation certifiante'
      ],
      postedDate: '2024-01-12',
      category: 'Inspection',
      status: 'published'
    },
    {
      id: 3,
      title: 'Ingénieur Méthodes CND',
      company: '3D ACTIV',
      location: 'Marseille, France',
      type: 'CDI',
      experience: '5-8 ans',
      salary: '45-60k€',
      description: 'Ingénieur méthodes pour développer et optimiser nos procédures CND.',
      requirements: [
        'Diplôme ingénieur ou équivalent',
        'Expérience en méthodes CND',
        'Connaissance des normes ASME, API',
        'Maîtrise des outils de gestion de projet'
      ],
      benefits: [
        'Participation aux bénéfices',
        'Voiture de fonction',
        'Télétravail partiel',
        'Formation continue'
      ],
      postedDate: '2024-01-10',
      category: 'Ingénierie',
      status: 'published'
    },
    {
      id: 4,
      title: 'Superviseur de Chantier',
      company: '3D ACTIV',
      location: 'Nantes, France',
      type: 'CDI',
      experience: '4-6 ans',
      salary: '40-50k€',
      description: 'Superviseur de chantier pour projets énergies renouvelables.',
      requirements: [
        'Expérience en supervision de chantier',
        'Connaissance HSE',
        'Permis B + CACES',
        'Sens du leadership'
      ],
      benefits: [
        'Prime de performance',
        'Équipements de protection',
        'Formation HSE',
        'Évolution de carrière'
      ],
      postedDate: '2024-01-08',
      category: 'Supervision',
      status: 'published'
    }
  ]

  // Utiliser les emplois par défaut si aucun n'est chargé
  const displayJobs = jobs.length > 0 ? jobs : defaultJobs

  const categories = ['Tous', 'CND', 'Inspection', 'Ingénierie', 'Supervision']

  const ApplicationForm = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      motivation: '',
      cv: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      
      try {
        // Créer la candidature
        const application = {
          id: Date.now(),
          jobId: job.id,
          jobTitle: job.title,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          motivation: formData.motivation,
          cv: formData.cv,
          status: 'pending',
          submittedAt: new Date().toISOString(),
          createdAt: new Date().toISOString().split('T')[0]
        }
        
        // Sauvegarder la candidature
        dataManager.addItem('applications', application)
        
        alert('Votre candidature a été envoyée avec succès !')
        onClose()
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la candidature:', error)
        alert('Une erreur est survenue. Veuillez réessayer.')
      } finally {
        setIsSubmitting(false)
      }
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Candidature - {job.title}
              </h2>
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Expérience professionnelle *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Décrivez votre expérience professionnelle..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Lettre de motivation *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Pourquoi souhaitez-vous rejoindre 3D ACTIV ?"
                />
              </div>

              <div>
                <FileUpload
                  value={formData.cv}
                  onChange={(cv) => setFormData({ ...formData, cv })}
                  label="CV (PDF, DOC, DOCX, TXT)"
                  accept=".pdf,.doc,.docx,.txt,image/*"
                  maxSize={10 * 1024 * 1024} // 10MB
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Envoyer ma candidature
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section - Style 4: Minimaliste avec Search Bar et Animations Fluides */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <AssetPath
            src="/images/team.avif"
            alt="Emplois 3D ACTIV"
            className="w-full h-full object-cover"
          />
          {/* Overlay animé */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-nordic-900/60 via-nordic-800/40 to-nordic-700/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative z-10 w-full px-4">
          <div className="container-nordic">
            <div className="max-w-5xl mx-auto">
              {/* Header avec animations séquentielles */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 80
                }}
                className="text-center mb-16"
              >
                {/* Badge animé */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7,
                    type: "spring",
                    stiffness: 120
                  }}
                  className="mb-8"
                >
                  <motion.div 
                    className="inline-flex items-center space-x-3 bg-accent-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent-400/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-accent-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="text-accent-200 text-sm font-medium tracking-wider">CARRIÈRES INDUSTRIELLES</span>
                  </motion.div>
                </motion.div>
                
                {/* Titre avec animation en cascade */}
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.9,
                    type: "spring",
                    stiffness: 60
                  }}
                >
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    Rejoignez
                  </motion.span>
                  <motion.span 
                    className="block text-accent-400"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    3D ACTIV
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg lg:text-xl text-nordic-200 max-w-3xl mx-auto leading-relaxed"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.5,
                    type: "spring",
                    stiffness: 50
                  }}
                >
                  Participez à des projets d'envergure dans l'industrie énergétique avec notre équipe d'experts
                </motion.p>
              </motion.div>

              {/* Search Bar avec animations fluides */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 1.7,
                  type: "spring",
                  stiffness: 80
                }}
                className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/20"
              >
                <div className="space-y-8">
                  {/* Header de la search bar */}
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.9 }}
                  >
                    <h2 className="text-3xl font-bold text-nordic-900 mb-3">Trouvez votre poste idéal</h2>
                    <p className="text-nordic-600 text-lg">Recherchez parmi nos offres d'emploi spécialisées</p>
                  </motion.div>
                  
                  {/* Barre de recherche principale */}
                  <motion.div 
                    className="flex flex-col lg:flex-row gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.1 }}
                  >
                    <div className="flex-1">
                      <motion.div 
                        className="relative"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <input
                          type="text"
                          placeholder="Mots-clés, poste, compétences..."
                          className="w-full px-8 py-5 pl-14 border-2 border-nordic-200 rounded-2xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-lg"
                        />
                        <motion.div 
                          className="absolute left-5 top-1/2 transform -translate-y-1/2"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Search className="w-6 h-6 text-nordic-400" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.select 
                        className="px-6 py-5 border-2 border-nordic-200 rounded-2xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 bg-white text-lg"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <option>Tous les secteurs</option>
                        <option>CND</option>
                        <option>Inspection</option>
                        <option>Ingénierie</option>
                        <option>Supervision</option>
                      </motion.select>
                      
                      <motion.select 
                        className="px-6 py-5 border-2 border-nordic-200 rounded-2xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 bg-white text-lg"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <option>Toutes les localisations</option>
                        <option>Paris</option>
                        <option>Lyon</option>
                        <option>Marseille</option>
                        <option>International</option>
                      </motion.select>
                      
                      <motion.button 
                        className="bg-accent-600 hover:bg-accent-700 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 shadow-lg text-lg"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Rechercher
                      </motion.button>
                    </div>
                  </motion.div>
                  
                  {/* Quick filters avec animations */}
                  <motion.div 
                    className="flex flex-wrap gap-3 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.3 }}
                  >
                    {['CDI', 'CDD', 'Freelance', 'Stage'].map((type, index) => (
                      <motion.button
                        key={type}
                        className="px-6 py-3 bg-nordic-100 hover:bg-accent-600 hover:text-white text-nordic-700 rounded-full text-sm font-medium transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 2.5 + index * 0.1,
                          type: "spring",
                          stiffness: 150
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgb(59, 130, 246)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {type}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 bg-white">
        <div className="container-nordic">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Trouvez votre poste idéal</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Découvrez nos offres d'emploi et postulez en quelques clics
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Rechercher un poste..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-nordic">
          <div className="grid gap-8">
            {displayJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.category}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {job.salary}
                      </div>
                    </div>
                    
                    <div className="text-sm text-slate-500">
                      Publié le {new Date(job.postedDate).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      Voir les détails
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedJob(job)
                        setShowApplicationForm(true)
                      }}
                      className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      Postuler
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <ApplicationForm
          job={selectedJob}
          onClose={() => {
            setShowApplicationForm(false)
            setSelectedJob(null)
          }}
        />
      )}
    </div>
  )
}

export default Emplois
