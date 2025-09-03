'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Newspaper,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock,
  User,
  Tag,
  Eye as EyeIcon,
  ArrowLeft,
  X,
  Upload,
  ExternalLink
} from 'lucide-react'
import ImageWrapper from '../../../components/ImageWrapper'
import Link from 'next/link'

const NewsManagement = () => {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'industry',
    author: '',
    imageUrl: '',
    tags: '',
    status: 'draft',
    publishDate: '',
    readTime: ''
  })

  // Données de test
  useEffect(() => {
    const mockArticles = [
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
        views: 1247,
        createdAt: '2024-01-15'
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
        views: 892,
        createdAt: '2024-01-10'
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
        status: 'draft',
        publishDate: '',
        readTime: '4 min',
        views: 0,
        createdAt: '2024-01-05'
      }
    ]
    setArticles(mockArticles)
    setFilteredArticles(mockArticles)
  }, [])

  // Filtrage et recherche
  useEffect(() => {
    let filtered = articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.author.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      const matchesStatus = selectedStatus === 'all' || article.status === selectedStatus
      return matchesSearch && matchesCategory && matchesStatus
    })
    setFilteredArticles(filtered)
  }, [articles, searchTerm, selectedCategory, selectedStatus])

  const handleCreateArticle = (e) => {
    e.preventDefault()
    const newArticle = {
      id: Date.now(),
      ...formData,
      views: 0,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setArticles([...articles, newArticle])
    setShowCreateModal(false)
    resetForm()
  }

  const handleEditArticle = (e) => {
    e.preventDefault()
    const updatedArticles = articles.map(article => 
      article.id === selectedArticle.id ? { ...article, ...formData } : article
    )
    setArticles(updatedArticles)
    setShowEditModal(false)
    setSelectedArticle(null)
    resetForm()
  }

  const handleDeleteArticle = (articleId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setArticles(articles.filter(article => article.id !== articleId))
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'industry',
      author: '',
      imageUrl: '',
      tags: '',
      status: 'draft',
      publishDate: '',
      readTime: ''
    })
  }

  const openEditModal = (article) => {
    setSelectedArticle(article)
    setFormData(article)
    setShowEditModal(true)
  }

  const openViewModal = (article) => {
    setSelectedArticle(article)
    setShowViewModal(true)
  }

  const categories = [
    { value: 'industry', label: 'Industrie', color: 'from-blue-500 to-blue-600' },
    { value: 'nuclear', label: 'Nucléaire', color: 'from-red-500 to-red-600' },
    { value: 'oil-gas', label: 'Pétrole & Gaz', color: 'from-orange-500 to-orange-600' },
    { value: 'renewable', label: 'Énergies Renouvelables', color: 'from-green-500 to-green-600' },
    { value: 'training', label: 'Formation', color: 'from-purple-500 to-purple-600' },
    { value: 'technology', label: 'Technologie', color: 'from-teal-500 to-teal-600' }
  ]

  const statusOptions = [
    { value: 'draft', label: 'Brouillon', color: 'bg-gray-100 text-gray-800' },
    { value: 'published', label: 'Publié', color: 'bg-green-100 text-green-800' },
    { value: 'archived', label: 'Archivé', color: 'bg-yellow-100 text-yellow-800' }
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
                <h1 className="text-xl font-semibold text-nordic-900">Gestion des Actualités</h1>
                <p className="text-sm text-nordic-600">Créez et gérez vos articles et actualités</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Nouvel Article</span>
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
                <p className="text-sm font-medium text-nordic-600">Total Articles</p>
                <p className="text-2xl font-bold text-nordic-900">{articles.length}</p>
              </div>
              <div className="p-3 bg-accent-100 rounded-lg">
                <Newspaper className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Publiés</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {articles.filter(a => a.status === 'published').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <EyeIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Brouillons</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {articles.filter(a => a.status === 'draft').length}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Vues Total</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {articles.reduce((sum, a) => sum + a.views, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <EyeIcon className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filtres et Recherche */}
        <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-nordic-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
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
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            >
              <option value="all">Tous les statuts</option>
              {statusOptions.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
            <div className="text-right">
              <span className="text-sm text-nordic-600">
                {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Liste des Articles */}
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 hover:shadow-nordic-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-lg font-semibold text-nordic-900">{article.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(article.status)}`}>
                      {getStatusLabel(article.status)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                      {getCategoryLabel(article.category)}
                    </span>
                  </div>
                  
                  <p className="text-nordic-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-nordic-600 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {article.publishDate 
                          ? new Date(article.publishDate).toLocaleDateString('fr-FR')
                          : 'Non publié'
                        }
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <EyeIcon className="w-4 h-4 mr-2" />
                      <span>{article.views} vues</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {article.tags.split(',').map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-nordic-100 text-nordic-700 rounded-full text-xs"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => openViewModal(article)}
                    className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                    title="Voir les détails"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openEditModal(article)}
                    className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                    title="Modifier"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteArticle(article.id)}
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

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Newspaper className="w-16 h-16 text-nordic-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-nordic-600 mb-2">Aucun article trouvé</h3>
            <p className="text-nordic-500">Commencez par créer votre premier article</p>
          </div>
        )}
      </div>

      {/* Modal de Création */}
      {showCreateModal && (
        <ArticleFormModal
          title="Créer un nouvel article"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreateArticle}
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
        <ArticleFormModal
          title="Modifier l'article"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEditArticle}
          onClose={() => {
            setShowEditModal(false)
            setSelectedArticle(null)
            resetForm()
          }}
          categories={categories}
          statusOptions={statusOptions}
        />
      )}

      {/* Modal de Visualisation */}
      {showViewModal && selectedArticle && (
        <ArticleViewModal
          article={selectedArticle}
          onClose={() => {
            setShowViewModal(false)
            setSelectedArticle(null)
          }}
          categories={categories}
          statusOptions={statusOptions}
        />
      )}
    </div>
  )
}

// Composant Modal de Formulaire
const ArticleFormModal = ({ title, formData, setFormData, onSubmit, onClose, categories, statusOptions }) => {
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
                Titre de l'article *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: Nouveaux défis de la transition énergétique"
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
                Auteur *
              </label>
              <input
                type="text"
                required
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: Marie Dubois"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Temps de lecture
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: 5 min"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Date de publication
              </label>
              <input
                type="date"
                value={formData.publishDate}
                onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
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
                Extrait *
              </label>
              <textarea
                required
                rows={3}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Résumé court de l'article..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Contenu de l'article *
              </label>
              <textarea
                required
                rows={8}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Contenu complet de l'article..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: énergie, transition, industrie, 2024"
              />
              <p className="text-xs text-nordic-500 mt-1">Séparez les tags par des virgules</p>
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
              {title.includes('Créer') ? 'Créer l\'article' : 'Modifier l\'article'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

// Composant Modal de Visualisation
const ArticleViewModal = ({ article, onClose, categories, statusOptions }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-nordic-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-nordic-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-nordic-900">Détails de l'article</h2>
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
              {article.imageUrl ? (
                <ImageWrapper
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-64 bg-nordic-100 rounded-lg flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-nordic-400" />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-nordic-900 mb-4">{article.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-nordic-700">Auteur</label>
                  <p className="text-nordic-900">{article.author}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Catégorie</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                    {getCategoryLabel(article.category)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Statut</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(article.status)}`}>
                    {getStatusLabel(article.status)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Date de publication</label>
                  <p className="text-nordic-900">
                    {article.publishDate 
                      ? new Date(article.publishDate).toLocaleDateString('fr-FR')
                      : 'Non publié'
                    }
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Temps de lecture</label>
                  <p className="text-nordic-900">{article.readTime}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Vues</label>
                  <p className="text-nordic-900 font-medium">{article.views}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Extrait et contenu */}
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Extrait</h4>
              <div className="bg-nordic-50 rounded-lg p-4">
                <p className="text-nordic-700 leading-relaxed">{article.excerpt}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Contenu</h4>
              <div className="bg-nordic-50 rounded-lg p-4">
                <p className="text-nordic-700 leading-relaxed whitespace-pre-wrap">{article.content}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.split(',').map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm"
                  >
                    {tag.trim()}
                  </span>
                ))}
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

export default NewsManagement

