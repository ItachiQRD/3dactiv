'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FolderOpen,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  Users,
  Target,
  Award,
  ArrowLeft,
  X,
  ExternalLink
} from 'lucide-react'
import { processImageUrl } from '../../../utils/assetPath'
import Link from 'next/link'

const PortfolioManagement = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    category: 'nuclear',
    client: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    technologies: '',
    results: '',
    teamSize: '',
    budget: '',
    imageUrl: '',
    status: 'completed'
  })

  // Données de test
  useEffect(() => {
    const mockProjects = [
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
        status: 'completed',
        createdAt: '2024-01-15'
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
        status: 'completed',
        createdAt: '2024-01-10'
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
        status: 'in-progress',
        createdAt: '2024-01-05'
      }
    ]
    setProjects(mockProjects)
    setFilteredProjects(mockProjects)
  }, [])

  // Filtrage et recherche
  useEffect(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    setFilteredProjects(filtered)
  }, [projects, searchTerm, selectedCategory])

  const handleCreateProject = (e) => {
    e.preventDefault()
    const newProject = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setProjects([...projects, newProject])
    setShowCreateModal(false)
    resetForm()
  }

  const handleEditProject = (e) => {
    e.preventDefault()
    const updatedProjects = projects.map(project => 
      project.id === selectedProject.id ? { ...project, ...formData } : project
    )
    setProjects(updatedProjects)
    setShowEditModal(false)
    setSelectedProject(null)
    resetForm()
  }

  const handleDeleteProject = (projectId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      setProjects(projects.filter(project => project.id !== projectId))
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'nuclear',
      client: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
      technologies: '',
      results: '',
      teamSize: '',
      budget: '',
      imageUrl: '',
      status: 'completed'
    })
  }

  const openEditModal = (project) => {
    setSelectedProject(project)
    setFormData(project)
    setShowEditModal(true)
  }

  const openViewModal = (project) => {
    setSelectedProject(project)
    setShowViewModal(true)
  }

  const categories = [
    { value: 'nuclear', label: 'Nucléaire', color: 'from-red-500 to-red-600' },
    { value: 'oil-gas', label: 'Pétrole & Gaz', color: 'from-blue-500 to-blue-600' },
    { value: 'renewable', label: 'Énergies Renouvelables', color: 'from-green-500 to-green-600' },
    { value: 'industrial', label: 'Industriel', color: 'from-gray-500 to-gray-600' }
  ]

  const statusOptions = [
    { value: 'completed', label: 'Terminé', color: 'bg-green-100 text-green-800' },
    { value: 'in-progress', label: 'En cours', color: 'bg-blue-100 text-blue-800' },
    { value: 'planned', label: 'Planifié', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'on-hold', label: 'En pause', color: 'bg-gray-100 text-gray-800' }
  ]

  const getStatusColor = (status) => {
    return statusOptions.find(s => s.value === status)?.color || 'bg-gray-100 text-gray-800'
  }

  const getStatusLabel = (status) => {
    return statusOptions.find(s => s.value === status)?.label || 'Inconnu'
  }

  const getCategoryColor = (category) => {
    return categories.find(c => c.value === category)?.color || 'from-gray-500 to-gray-600'
  }

  const getCategoryLabel = (category) => {
    return categories.find(c => c.value === category)?.label || 'Autre'
  }

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
                <h1 className="text-xl font-semibold text-nordic-900">Gestion du Portfolio</h1>
                <p className="text-sm text-nordic-600">Créez et gérez vos projets de référence</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Nouveau Projet</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container-nordic py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Total Projets</p>
                <p className="text-2xl font-bold text-nordic-900">{projects.length}</p>
              </div>
              <div className="p-3 bg-accent-100 rounded-lg">
                <FolderOpen className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Terminés</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {projects.filter(p => p.status === 'completed').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">En cours</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {projects.filter(p => p.status === 'in-progress').length}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Budget Total</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {projects.reduce((sum, p) => sum + parseInt(p.budget.replace(/[^\d]/g, '')), 0).toLocaleString()} €
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filtres et Recherche */}
        <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-nordic-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
            <div className="text-right">
              <span className="text-sm text-nordic-600">
                {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-nordic border border-nordic-100 hover:shadow-nordic-lg transition-all duration-300"
            >
              {/* Image du projet */}
              <div className="relative h-48 bg-gradient-to-br from-nordic-100 to-nordic-200">
                {project.imageUrl ? (
                  <img
                    src={processImageUrl(project.imageUrl)}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderOpen className="w-16 h-16 text-nordic-400" />
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-nordic-900 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="space-y-2 text-sm text-nordic-600 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {new Date(project.startDate).toLocaleDateString('fr-FR')} - {new Date(project.endDate).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>

                <p className="text-nordic-600 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-nordic-500">
                    <span className="font-medium">{project.budget}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => openViewModal(project)}
                      className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                      title="Voir les détails"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => openEditModal(project)}
                      className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderOpen className="w-16 h-16 text-nordic-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-nordic-600 mb-2">Aucun projet trouvé</h3>
            <p className="text-nordic-500">Commencez par créer votre premier projet</p>
          </div>
        )}
      </div>

      {/* Modal de Création */}
      {showCreateModal && (
        <ProjectFormModal
          title="Créer un nouveau projet"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreateProject}
          onClose={() => {
            setShowCreateModal(false)
            resetForm()
          }}
          categories={categories}
          statusOptions={statusOptions}
        />
      )}

      {/* Modal d'Édition */}
      {showEditModal && (
        <ProjectFormModal
          title="Modifier le projet"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEditProject}
          onClose={() => {
            setShowEditModal(false)
            setSelectedProject(null)
            resetForm()
          }}
          categories={categories}
          statusOptions={statusOptions}
        />
      )}

      {/* Modal de Visualisation */}
      {showViewModal && selectedProject && (
        <ProjectViewModal
          project={selectedProject}
          onClose={() => {
            setShowViewModal(false)
            setSelectedProject(null)
          }}
          categories={categories}
          statusOptions={statusOptions}
        />
      )}
    </div>
  )
}

// Composant Modal de Formulaire
const ProjectFormModal = ({ title, formData, setFormData, onSubmit, onClose, categories, statusOptions }) => {
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
                Titre du projet *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: Inspection CND Centrale Nucléaire"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Catégorie *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Client *
              </label>
              <input
                type="text"
                required
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
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
                placeholder="Ex: Flamanville, France"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Date de début *
              </label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Date de fin
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Statut *
              </label>
              <select
                required
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                {statusOptions.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Taille de l'équipe
              </label>
              <input
                type="text"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: 8 inspecteurs"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Budget
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: 450,000 €"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                URL de l'image
              </label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="https://exemple.com/image.jpg"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Description du projet *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Décrivez le projet, les objectifs, les défis..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Technologies utilisées
              </label>
              <textarea
                rows={3}
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Listez les technologies, méthodes, équipements utilisés..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Résultats obtenus
              </label>
              <textarea
                rows={3}
                value={formData.results}
                onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Décrivez les résultats, impacts, améliorations..."
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
              {title.includes('Créer') ? 'Créer le projet' : 'Modifier le projet'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

// Composant Modal de Visualisation
const ProjectViewModal = ({ project, onClose, categories, statusOptions }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-nordic-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-nordic-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-nordic-900">Détails du projet</h2>
            <button
              onClick={onClose}
              className="p-2 text-nordic-400 hover:text-nordic-600 rounded-lg hover:bg-nordic-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Image et informations principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              {project.imageUrl ? (
                <img
                  src={processImageUrl(project.imageUrl)}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-64 bg-nordic-100 rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-16 h-16 text-nordic-400" />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-nordic-900 mb-4">{project.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-nordic-700">Client</label>
                  <p className="text-nordic-900">{project.client}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Localisation</label>
                  <p className="text-nordic-900">{project.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Période</label>
                  <p className="text-nordic-900">
                    {new Date(project.startDate).toLocaleDateString('fr-FR')} - {new Date(project.endDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Statut</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Catégorie</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Équipe</label>
                  <p className="text-nordic-900">{project.teamSize}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Budget</label>
                  <p className="text-nordic-900 font-medium">{project.budget}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description et détails */}
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Description</h4>
              <p className="text-nordic-700 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Technologies utilisées</h4>
              <p className="text-nordic-700">{project.technologies}</p>
            </div>

            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Résultats obtenus</h4>
              <p className="text-nordic-700">{project.results}</p>
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

export default PortfolioManagement
