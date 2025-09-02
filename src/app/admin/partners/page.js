'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  UserPlus,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Globe,
  Calendar,
  MapPin,
  Building,
  Star,
  ExternalLink,
  ArrowLeft,
  X,
  Upload
} from 'lucide-react'
import Link from 'next/link'

const PartnersManagement = () => {
  const [partners, setPartners] = useState([])
  const [filteredPartners, setFilteredPartners] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSector, setSelectedSector] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedPartner, setSelectedPartner] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    sector: 'nuclear',
    website: '',
    logo: '',
    description: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    address: '',
    partnershipDate: '',
    status: 'active',
    notes: ''
  })

  // Données de test
  useEffect(() => {
    const mockPartners = [
      {
        id: 1,
        name: 'EDF',
        sector: 'nuclear',
        website: 'https://www.edf.fr',
        logo: '/logos/edf-logo.png',
        description: 'Électricité de France, leader français de la production d\'électricité et principal exploitant du parc nucléaire français.',
        contactPerson: 'Marie Dupont',
        contactEmail: 'marie.dupont@edf.fr',
        contactPhone: '+33 1 40 42 22 22',
        address: '22-30 Avenue de Wagram, 75008 Paris, France',
        partnershipDate: '2018-06-15',
        status: 'active',
        notes: 'Partenaire historique, excellent relationnel, projets réguliers',
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        name: 'TotalEnergies',
        sector: 'oil-gas',
        website: 'https://www.totalenergies.com',
        logo: '/logos/total-logo.png',
        description: 'Major international de l\'énergie, spécialisé dans le pétrole, le gaz naturel et les énergies renouvelables.',
        contactPerson: 'Jean Martin',
        contactEmail: 'jean.martin@totalenergies.com',
        contactPhone: '+33 1 47 44 46 46',
        address: '2 Place Jean Millier, 92400 Courbevoie, France',
        partnershipDate: '2019-03-20',
        status: 'active',
        notes: 'Partenaire offshore, projets internationaux, équipes qualifiées',
        createdAt: '2024-01-10'
      },
      {
        id: 3,
        name: 'Engie',
        sector: 'renewable',
        website: 'https://www.engie.com',
        logo: '/logos/engie-logo.png',
        description: 'Groupe énergétique mondial, leader de la transition énergétique vers une économie neutre en carbone.',
        contactPerson: 'Sophie Bernard',
        contactEmail: 'sophie.bernard@engie.com',
        contactPhone: '+33 1 44 22 44 22',
        address: '1 Place Samuel de Champlain, 92400 Courbevoie, France',
        partnershipDate: '2020-01-10',
        status: 'active',
        notes: 'Focus énergies renouvelables, projets éoliens et solaires',
        createdAt: '2024-01-05'
      },
      {
        id: 4,
        name: 'Framatome',
        sector: 'nuclear',
        website: 'https://www.framatome.com',
        logo: '/logos/framatome-logo.png',
        description: 'Expert mondial du nucléaire civil, spécialisé dans la conception et la construction de centrales nucléaires.',
        contactPerson: 'Pierre Durand',
        contactEmail: 'pierre.durand@framatome.com',
        contactPhone: '+33 1 44 96 70 00',
        address: '1 Place de la Coupole, 92400 Courbevoie, France',
        partnershipDate: '2018-09-12',
        status: 'active',
        notes: 'Expertise technique nucléaire, formation continue, innovation',
        createdAt: '2024-01-01'
      }
    ]
    setPartners(mockPartners)
    setFilteredPartners(mockPartners)
  }, [])

  // Filtrage et recherche
  useEffect(() => {
    let filtered = partners.filter(partner => {
      const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           partner.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSector = selectedSector === 'all' || partner.sector === selectedSector
      return matchesSearch && matchesSector
    })
    setFilteredPartners(filtered)
  }, [partners, searchTerm, selectedSector])

  const handleCreatePartner = (e) => {
    e.preventDefault()
    const newPartner = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setPartners([...partners, newPartner])
    setShowCreateModal(false)
    resetForm()
  }

  const handleEditPartner = (e) => {
    e.preventDefault()
    const updatedPartners = partners.map(partner => 
      partner.id === selectedPartner.id ? { ...partner, ...formData } : partner
    )
    setPartners(updatedPartners)
    setShowEditModal(false)
    setSelectedPartner(null)
    resetForm()
  }

  const handleDeletePartner = (partnerId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce partenaire ?')) {
      setPartners(partners.filter(partner => partner.id !== partnerId))
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      sector: 'nuclear',
      website: '',
      logo: '',
      description: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      address: '',
      partnershipDate: '',
      status: 'active',
      notes: ''
    })
  }

  const openEditModal = (partner) => {
    setSelectedPartner(partner)
    setFormData(partner)
    setShowEditModal(true)
  }

  const openViewModal = (partner) => {
    setSelectedPartner(partner)
    setShowViewModal(true)
  }

  const sectors = [
    { value: 'nuclear', label: 'Nucléaire', color: 'from-red-500 to-red-600' },
    { value: 'oil-gas', label: 'Pétrole & Gaz', color: 'from-blue-500 to-blue-600' },
    { value: 'renewable', label: 'Énergies Renouvelables', color: 'from-green-500 to-green-600' },
    { value: 'industrial', label: 'Industriel', color: 'from-gray-500 to-gray-600' },
    { value: 'consulting', label: 'Conseil', color: 'from-purple-500 to-purple-600' }
  ]

  const statusOptions = [
    { value: 'active', label: 'Actif', color: 'bg-green-100 text-green-800' },
    { value: 'inactive', label: 'Inactif', color: 'bg-gray-100 text-gray-800' },
    { value: 'pending', label: 'En attente', color: 'bg-yellow-100 text-yellow-800' }
  ]

  const getStatusColor = (status) => {
    return statusOptions.find(s => s.value === status)?.color || 'bg-gray-100 text-gray-800'
  }

  const getStatusLabel = (status) => {
    return statusOptions.find(s => s.value === status)?.label || 'Inconnu'
  }

  const getSectorColor = (sector) => {
    return sectors.find(s => s.value === sector)?.color || 'from-gray-500 to-gray-600'
  }

  const getSectorLabel = (sector) => {
    return sectors.find(s => s.value === sector)?.label || 'Autre'
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
                <h1 className="text-xl font-semibold text-nordic-900">Gestion des Partenaires</h1>
                <p className="text-sm text-nordic-600">Créez et gérez vos partenaires commerciaux</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Nouveau Partenaire</span>
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
                <p className="text-sm font-medium text-nordic-600">Total Partenaires</p>
                <p className="text-2xl font-bold text-nordic-900">{partners.length}</p>
              </div>
              <div className="p-3 bg-accent-100 rounded-lg">
                <UserPlus className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Actifs</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {partners.filter(p => p.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Star className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Secteurs</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {new Set(partners.map(p => p.sector)).size}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Partenariats</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {partners.filter(p => p.status === 'active').length} actifs
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
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
                placeholder="Rechercher un partenaire..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            >
              <option value="all">Tous les secteurs</option>
              {sectors.map(sector => (
                <option key={sector.value} value={sector.value}>{sector.label}</option>
              ))}
            </select>
            <div className="text-right">
              <span className="text-sm text-nordic-600">
                {filteredPartners.length} partenaire{filteredPartners.length > 1 ? 's' : ''} trouvé{filteredPartners.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Grille des Partenaires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-nordic border border-nordic-100 hover:shadow-nordic-lg transition-all duration-300"
            >
              {/* Logo et informations principales */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-16 h-16 bg-nordic-100 rounded-lg flex items-center justify-center">
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={`Logo ${partner.name}`}
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          <Building className="w-8 h-8 text-nordic-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-nordic-900">{partner.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getSectorColor(partner.sector)} text-white`}>
                          {getSectorLabel(partner.sector)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-nordic-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="line-clamp-1">{partner.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Partenaire depuis {new Date(partner.partnershipDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>

                    <p className="text-nordic-600 text-sm line-clamp-3 mb-4">
                      {partner.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(partner.status)}`}>
                        {getStatusLabel(partner.status)}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => openViewModal(partner)}
                          className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                          title="Voir les détails"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openEditModal(partner)}
                          className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                          title="Modifier"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePartner(partner.id)}
                          className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <UserPlus className="w-16 h-16 text-nordic-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-nordic-600 mb-2">Aucun partenaire trouvé</h3>
            <p className="text-nordic-500">Commencez par créer votre premier partenaire</p>
          </div>
        )}
      </div>

      {/* Modal de Création */}
      {showCreateModal && (
        <PartnerFormModal
          title="Créer un nouveau partenaire"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreatePartner}
          onClose={() => {
            setShowCreateModal(false)
            resetForm()
          }}
          sectors={sectors}
          statusOptions={statusOptions}
        />
      )}

      {/* Modal d'Édition */}
      {showEditModal && (
        <PartnerFormModal
          title="Modifier le partenaire"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEditPartner}
          onClose={() => {
            setShowEditModal(false)
            setSelectedPartner(null)
            resetForm()
          }}
          sectors={sectors}
          statusOptions={statusOptions}
        />
      )}

      {/* Modal de Visualisation */}
      {showViewModal && selectedPartner && (
        <PartnerViewModal
          partner={selectedPartner}
          onClose={() => {
            setShowViewModal(false)
            setSelectedPartner(null)
          }}
          sectors={sectors}
          statusOptions={statusOptions}
        />
      )}
    </div>
  )
}

// Composant Modal de Formulaire
const PartnerFormModal = ({ title, formData, setFormData, onSubmit, onClose, sectors, statusOptions }) => {
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
                Nom du partenaire *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: EDF"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Secteur d'activité *
              </label>
              <select
                required
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                {sectors.map(sector => (
                  <option key={sector.value} value={sector.value}>{sector.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Site web
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="https://www.exemple.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                URL du logo
              </label>
              <input
                type="url"
                value={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="https://exemple.com/logo.png"
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
                Date de partenariat *
              </label>
              <input
                type="date"
                required
                value={formData.partnershipDate}
                onChange={(e) => setFormData({ ...formData, partnershipDate: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Personne de contact
              </label>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: Marie Dupont"
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
                placeholder="contact@exemple.com"
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

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Adresse
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Ex: 123 Rue de la Paix, 75001 Paris, France"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Description *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Décrivez le partenaire, ses activités, son expertise..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-nordic-700 mb-2">
                Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Informations complémentaires, historique, points d'attention..."
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
              {title.includes('Créer') ? 'Créer le partenaire' : 'Modifier le partenaire'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

// Composant Modal de Visualisation
const PartnerViewModal = ({ partner, onClose, sectors, statusOptions }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-nordic-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-nordic-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-nordic-900">Détails du partenaire</h2>
            <button
              onClick={onClose}
              className="p-2 text-nordic-400 hover:text-nordic-600 rounded-lg hover:bg-nordic-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Logo et informations principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="w-32 h-32 bg-nordic-100 rounded-lg flex items-center justify-center mb-4">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="w-24 h-24 object-contain"
                  />
                ) : (
                  <Building className="w-16 h-16 text-nordic-400" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-nordic-900 mb-4">{partner.name}</h3>
              
              <div className="space-y-3">
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getSectorColor(partner.sector)} text-white`}>
                    {getSectorLabel(partner.sector)}
                  </span>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(partner.status)}`}>
                    {getStatusLabel(partner.status)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-nordic-700">Site web</label>
                  {partner.website ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent-600 hover:text-accent-700 mt-1"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {partner.website}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <p className="text-nordic-500 mt-1">Non renseigné</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Date de partenariat</label>
                  <p className="text-nordic-900 mt-1">
                    {new Date(partner.partnershipDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Adresse</label>
                  <p className="text-nordic-900 mt-1">{partner.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h4 className="font-medium text-nordic-900 mb-3">Description</h4>
            <p className="text-nordic-700 leading-relaxed">{partner.description}</p>
          </div>

          {/* Contact et notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Contact</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-nordic-500">Personne :</span>
                  <p className="text-nordic-900">{partner.contactPerson || 'Non renseigné'}</p>
                </div>
                <div>
                  <span className="text-sm text-nordic-500">Email :</span>
                  <p className="text-nordic-900">{partner.contactEmail || 'Non renseigné'}</p>
                </div>
                <div>
                  <span className="text-sm text-nordic-500">Téléphone :</span>
                  <p className="text-nordic-900">{partner.contactPhone || 'Non renseigné'}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Notes</h4>
              <div className="bg-nordic-50 rounded-lg p-4">
                <p className="text-nordic-700 text-sm">
                  {partner.notes || 'Aucune note ajoutée'}
                </p>
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

export default PartnersManagement
