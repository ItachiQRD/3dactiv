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
import ImageWrapper from '../../../components/ImageWrapper'
import ImageUpload from '../../../components/ImageUpload'
import Link from 'next/link'
import dataManager from '../../../utils/dataManager'

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
    description: '',
    imageUrl: '',
    category: 'nuclear'
  })

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

  // Filtrage et recherche
  useEffect(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    dataManager.addItem('portfolio', newProject)
    setShowCreateModal(false)
    resetForm()
  }

  const handleEditProject = (e) => {
    e.preventDefault()
    dataManager.updateItem('portfolio', selectedProject.id, formData)
    setShowEditModal(false)
    setSelectedProject(null)
    resetForm()
  }

  const handleDeleteProject = (projectId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      dataManager.deleteItem('portfolio', projectId)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      category: 'nuclear'
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
                <p className="text-sm font-medium text-nordic-600">Nucléaire</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {projects.filter(p => p.category === 'nuclear').length}
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <Target className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Pétrole & Gaz</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {projects.filter(p => p.category === 'oil-gas').length}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Renouvelables</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {projects.filter(p => p.category === 'renewable').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
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
                  <ImageWrapper
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderOpen className="w-16 h-16 text-nordic-400" />
                  </div>
                )}
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

                <p className="text-nordic-600 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-end space-x-2">
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
        />
      )}
    </div>
  )
}

// Composant Modal de Formulaire
const ProjectFormModal = ({ title, formData, setFormData, onSubmit, onClose, categories }) => {
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
            <div className="md:col-span-2">
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
              <ImageUpload
                value={formData.imageUrl}
                onChange={(imageUrl) => setFormData({ ...formData, imageUrl })}
                label="Image du projet"
                accept="image/*"
                maxSize={5 * 1024 * 1024} // 5MB
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Description du projet *
              </label>
              <textarea
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Décrivez le projet, les objectifs, les défis, les technologies utilisées, les résultats obtenus..."
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
const ProjectViewModal = ({ project, onClose, categories }) => {
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
                <ImageWrapper
                  src={project.imageUrl}
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
                  <label className="text-sm font-medium text-nordic-700">Catégorie</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Date de création</label>
                  <p className="text-nordic-900">
                    {new Date(project.createdAt).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Description</h4>
              <p className="text-nordic-700 leading-relaxed whitespace-pre-wrap">{project.description}</p>
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
