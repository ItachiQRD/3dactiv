'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import { MapPin, Clock, Briefcase, ArrowRight, Upload, Send } from 'lucide-react'
import { useState } from 'react'

const Emplois = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  // Mock data - en réalité, ces données viendraient de l'admin
  const jobs = [
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
      category: 'CND'
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
      category: 'Inspection'
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
      category: 'Ingénierie'
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
      category: 'Supervision'
    }
  ]

  const categories = ['Tous', 'CND', 'Inspection', 'Ingénierie', 'Supervision']

  const ApplicationForm = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      motivation: '',
      cv: null
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      // Ici, on enverrait la candidature à l'admin
      console.log('Candidature envoyée:', { job, formData })
      alert('Votre candidature a été envoyée avec succès !')
      onClose()
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
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  CV (PDF) *
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                  <Upload size={32} className="mx-auto text-slate-400 mb-2" />
                  <p className="text-slate-600">Glissez-déposez votre CV ou cliquez pour sélectionner</p>
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => setFormData({...formData, cv: e.target.files[0]})}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
                    Sélectionner un fichier
                  </label>
                </div>
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
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Envoyer ma candidature
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
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/emplois-hero.jpg"
            alt="Emplois 3D ACTIV"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 via-blue-800/70 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 container-nordic text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Emplois
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Rejoignez notre équipe d'experts et participez à des projets d'envergure
            </p>
          </motion.div>
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
            {jobs.map((job, index) => (
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
