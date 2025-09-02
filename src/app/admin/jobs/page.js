'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  ArrowLeft,
  X
} from 'lucide-react'
import Link from 'next/link'

const JobsManagement = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
    contactEmail: '',
    contactPhone: '',
    deadline: ''
  })

  // Données de test
  useEffect(() => {
    const mockJobs = [
      {
        id: 1,
        title: 'Inspecteur CND Nucléaire',
        company: 'EDF',
        location: 'Paris, France',
        type: 'full-time',
        salary: '45,000 - 65,000 €',
        description: 'Inspection et contrôle non-destructif dans le secteur nucléaire',
        requirements: 'Certification CND, expérience nucléaire requise',
        benefits: 'Mutuelle, prévoyance, formation continue',
        contactEmail: 'recrutement@edf.fr',
        contactPhone: '+33 1 40 42 22 22',
        deadline: '2024-12-31',
        status: 'active',
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        title: 'Technicien Gaz & Pétrole',
        company: 'TotalEnergies',
        location: 'Marseille, France',
        type: 'contract',
        salary: '3,500 - 4,500 €/mois',
        description: 'Maintenance et inspection des installations pétrolières',
        requirements: 'BTS maintenance, permis de conduire',
        benefits: 'Logement, transport, primes',
        contactEmail: 'jobs@totalenergies.com',
        contactPhone: '+33 4 91 29 40 00',
        deadline: '2024-11-30',
        status: 'active',
        createdAt: '2024-01-10'
      }
    ]
    setJobs(mockJobs)
    setFilteredJobs(mockJobs)
  }, [])

  // Filtrage et recherche
  useEffect(() => {
    let filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === 'all' || job.type === selectedType
      return matchesSearch && matchesType
    })
    setFilteredJobs(filtered)
  }, [jobs, searchTerm, selectedType])

  const handleCreateJob = (e) => {
    e.preventDefault()
    const newJob = {
      id: Date.now(),
      ...formData,
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0]
    }
    setJobs([...jobs, newJob])
    setShowCreateModal(false)
    resetForm()
  }

  const handleEditJob = (e) => {
    e.preventDefault()
    const updatedJobs = jobs.map(job => 
      job.id === selectedJob.id ? { ...job, ...formData } : job
    )
    setJobs(updatedJobs)
    setShowEditModal(false)
    setSelectedJob(null)
    resetForm()
  }

  const handleDeleteJob = (jobId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet emploi ?')) {
      setJobs(jobs.filter(job => job.id !== jobId))
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      location: '',
      type: 'full-time',
      salary: '',
      description: '',
      requirements: '',
      benefits: '',
      contactEmail: '',
      contactPhone: '',
      deadline: ''
    })
  }

  const openEditModal = (job) => {
    setSelectedJob(job)
    setFormData(job)
    setShowEditModal(true)
  }

  const openViewModal = (job) => {
    setSelectedJob(job)
    setShowViewModal(true)
  }

  const jobTypes = [
    { value: 'full-time', label: 'Temps plein' },
    { value: 'part-time', label: 'Temps partiel' },
    { value: 'contract', label: 'Contrat' },
    { value: 'internship', label: 'Stage' },
    { value: 'freelance', label: 'Freelance' }
  ]

  return (
    <div className="min-h-screen bg-nordic-50">
      {/* Header */}
      <header className="bg-white shadow-nordic-sm border-b border-nordic-100">
        <div className="container-nordic">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-nordic-600 hover:text-nordic-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-nordic-900">Gestion des Emplois</h1>
                <p className="text-sm text-nordic-600">Créez et gérez vos offres d'emploi</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Nouvel Emploi</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container-nordic py-8">
        {/* Filtres et Recherche */}
        <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-nordic-400" />
              <input
                type="text"
                placeholder="Rechercher un emploi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            >
              <option value="all">Tous les types</option>
              {jobTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            <div className="text-right">
              <span className="text-sm text-nordic-600">
                {filteredJobs.length} emploi{filteredJobs.length > 1 ? 's' : ''} trouvé{filteredJobs.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Liste des Emplois */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 hover:shadow-nordic-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-nordic-900 mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-nordic-600 mb-3">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.company}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-nordic-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {jobTypes.find(t => t.value === job.type)?.label}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </span>
                  </div>
                  <p className="text-nordic-600 text-sm line-clamp-2">{job.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {job.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                  <span className="text-xs text-nordic-500">
                    Expire le {new Date(job.deadline).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openViewModal(job)}
                    className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openEditModal(job)}
                    className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-nordic-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-nordic-600 mb-2">Aucun emploi trouvé</h3>
            <p className="text-nordic-500">Commencez par créer votre premier emploi</p>
          </div>
        )}
      </div>

      {/* Modal de Création */}
      {showCreateModal && (
        <JobFormModal
          title="Créer un nouvel emploi"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreateJob}
          onClose={() => {
            setShowCreateModal(false)
            resetForm()
          }}
          jobTypes={jobTypes}
        />
      )}

      {/* Modal d'Édition */}
      {showEditModal && (
        <JobFormModal
          title="Modifier l'emploi"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEditJob}
          onClose={() => {
            setShowEditModal(false)
            setSelectedJob(null)
            resetForm()
          }}
          jobTypes={jobTypes}
        />
      )}

      {/* Modal de Visualisation */}
      {showViewModal && selectedJob && (
        <JobViewModal
          job={selectedJob}
          onClose={() => {
            setShowViewModal(false)
            setSelectedJob(null)
          }}
          jobTypes={jobTypes}
        />
      )}
    </div>
  )
}

// Composant Modal de Formulaire
const JobFormModal = ({ title, formData, setFormData, onSubmit, onClose, jobTypes }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-nordic-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-nordic-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-nordic-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-nordic-400 hover:text-nordic-600 rounded-lg hover:bg-nordic-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Titre du poste *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: Inspecteur CND Nucléaire"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Entreprise *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: EDF"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Localisation *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: Paris, France"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Type de contrat *
              </label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Salaire
              </label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: 45,000 - 65,000 €"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Date limite
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Description du poste *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Décrivez les missions et responsabilités du poste..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Profil recherché
              </label>
              <textarea
                rows={3}
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Compétences, expérience et formation requises..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Avantages
              </label>
              <textarea
                rows={3}
                value={formData.benefits}
                onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Mutuelle, prévoyance, formation, etc..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Email de contact
              </label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="recrutement@entreprise.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Téléphone de contact
              </label>
              <input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="+33 1 23 45 67 89"
              />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-nordic-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-nordic-600 border border-nordic-200 rounded-lg hover:bg-nordic-50 transition-colors duration-200"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn-primary px-6 py-2"
            >
              {title.includes('Créer') ? 'Créer l\'emploi' : 'Modifier l\'emploi'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

// Composant Modal de Visualisation
const JobViewModal = ({ job, onClose, jobTypes }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-nordic-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-nordic-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-nordic-900">Détails de l'emploi</h2>
            <button
              onClick={onClose}
              className="p-2 text-nordic-400 hover:text-nordic-600 rounded-lg hover:bg-nordic-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-nordic-900 mb-4">{job.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 text-nordic-400 mr-3" />
                  <span className="text-nordic-600">{job.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-nordic-400 mr-3" />
                  <span className="text-nordic-600">{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-nordic-400 mr-3" />
                  <span className="text-nordic-600">
                    {jobTypes.find(t => t.value === job.type)?.label}
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 text-nordic-400 mr-3" />
                  <span className="text-nordic-600">{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-nordic-400 mr-3" />
                  <span className="text-nordic-600">
                    Expire le {new Date(job.deadline).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Description</h4>
              <p className="text-nordic-600 text-sm mb-4">{job.description}</p>
              
              <h4 className="font-medium text-nordic-900 mb-3">Profil recherché</h4>
              <p className="text-nordic-600 text-sm mb-4">{job.requirements}</p>
              
              <h4 className="font-medium text-nordic-900 mb-3">Avantages</h4>
              <p className="text-nordic-600 text-sm">{job.benefits}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-nordic-100">
            <h4 className="font-medium text-nordic-900 mb-3">Contact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-nordic-500">Email :</span>
                <p className="text-nordic-600">{job.contactEmail}</p>
              </div>
              <div>
                <span className="text-sm text-nordic-500">Téléphone :</span>
                <p className="text-nordic-600">{job.contactPhone}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-8 pt-6 border-t border-nordic-100">
            <button
              onClick={onClose}
              className="btn-primary px-6 py-2"
            >
              Fermer
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default JobsManagement
