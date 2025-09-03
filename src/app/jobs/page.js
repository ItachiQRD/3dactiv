'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Clock,
  Building2,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react'
import dataManager from '../../utils/dataManager'
import Link from 'next/link'

const JobsPage = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  // Charger les emplois depuis le DataManager
  useEffect(() => {
    const loadJobs = () => {
      // Récupérer tous les emplois et filtrer seulement les publiés
      const allJobs = dataManager.getData('jobs')
      const publishedJobs = allJobs.filter(job => job.status === 'published')
      setJobs(publishedJobs)
      setFilteredJobs(publishedJobs)
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

  // Filtrage des emplois
  useEffect(() => {
    let filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (selectedType !== 'all') {
      filtered = filtered.filter(job => job.type === selectedType)
    }

    if (selectedLocation !== 'all') {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(selectedLocation.toLowerCase()))
    }

    setFilteredJobs(filtered)
  }, [searchTerm, selectedType, selectedLocation, jobs])

  const getTypeColor = (type) => {
    switch (type) {
      case 'CDI': return 'bg-blue-100 text-blue-800'
      case 'CDD': return 'bg-orange-100 text-orange-800'
      case 'Freelance': return 'bg-purple-100 text-purple-800'
      case 'Stage': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const isDeadlineSoon = (deadline) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7 && diffDays > 0
  }

  const getUniqueLocations = () => {
    const locations = jobs.map(job => job.location.split(',')[0].trim())
    return [...new Set(locations)]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-nordic-600 to-nordic-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Opportunités de Carrière
            </h1>
            <p className="text-xl text-nordic-100 max-w-3xl mx-auto">
              Rejoignez notre équipe d'experts et participez aux projets les plus innovants 
              dans les secteurs de l'énergie, du nucléaire et de l'industrie.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filtres */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un poste..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nordic-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nordic-500 focus:border-transparent"
            >
              <option value="all">Tous les types</option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="Freelance">Freelance</option>
              <option value="Stage">Stage</option>
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nordic-500 focus:border-transparent"
            >
              <option value="all">Toutes les villes</option>
              {getUniqueLocations().map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Liste des emplois */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-5 h-5" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-5 h-5" />
                          <span>{job.location}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    {job.salary && (
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-green-600 font-semibold">
                          <DollarSign className="w-5 h-5" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Publié le {new Date(job.publishedAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                    {job.deadline && (
                      <div className={`flex items-center space-x-1 ${isDeadlineSoon(job.deadline) ? 'text-red-600' : ''}`}>
                        <Clock className="w-4 h-4" />
                        <span>
                          Clôture: {new Date(job.deadline).toLocaleDateString('fr-FR')}
                          {isDeadlineSoon(job.deadline) && ' (Bientôt!)'}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{job.applications} candidatures</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 lg:ml-6">
                  <Link
                    href={`/jobs/${job.id}`}
                    className="flex items-center justify-center space-x-2 bg-nordic-600 text-white px-6 py-3 rounded-lg hover:bg-nordic-700 transition-colors"
                  >
                    <span>Voir l'offre</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/jobs/${job.id}/apply`}
                    className="flex items-center justify-center space-x-2 border border-nordic-600 text-nordic-600 px-6 py-3 rounded-lg hover:bg-nordic-50 transition-colors"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Postuler</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune offre trouvée</h3>
            <p className="text-gray-500">
              {searchTerm || selectedType !== 'all' || selectedLocation !== 'all' 
                ? 'Essayez de modifier vos critères de recherche.' 
                : 'Aucune offre d\'emploi n\'est actuellement disponible.'}
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-nordic-600 to-nordic-700 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas votre poste idéal ?</h2>
          <p className="text-nordic-100 mb-6 max-w-2xl mx-auto">
            Envoyez-nous votre candidature spontanée. Nous gardons votre profil en base 
            et vous contacterons dès qu'une opportunité correspond à votre profil.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-nordic-600 px-6 py-3 rounded-lg font-semibold hover:bg-nordic-50 transition-colors"
          >
            <span>Candidature spontanée</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default JobsPage
