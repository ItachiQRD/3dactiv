'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  ArrowLeft,
  X,
  Building2,
  Globe,
  Phone,
  Mail
} from 'lucide-react'
import ImageUpload from '../../../components/ImageUpload'
import Link from 'next/link'

const PartenairesManagement = () => {
  const [partenaires, setPartenaires] = useState([])
  const [filteredPartenaires, setFilteredPartenaires] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingPartner, setEditingPartner] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    website: '',
    description: '',
    sector: '',
    contact: '',
    email: '',
    phone: '',
    status: 'active'
  })

  // Données de démonstration
  useEffect(() => {
    const demoPartenaires = [
      {
        id: 1,
        name: 'EDF',
        logo: '/images/partners/edf-logo.png',
        website: 'https://www.edf.fr',
        description: 'Électricien français, leader mondial de l\'énergie bas carbone',
        sector: 'Énergie',
        contact: 'Jean Dupont',
        email: 'contact@edf.fr',
        phone: '+33 1 40 42 22 22',
        status: 'active',
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        name: 'ENGIE',
        logo: '/images/partners/engie-logo.png',
        website: 'https://www.engie.com',
        description: 'Groupe énergétique mondial, leader de la transition énergétique',
        sector: 'Énergie',
        contact: 'Marie Martin',
        email: 'contact@engie.com',
        phone: '+33 1 44 22 00 00',
        status: 'active',
        createdAt: '2024-01-20'
      },
      {
        id: 3,
        name: 'AREVA',
        logo: '/images/partners/areva-logo.png',
        website: 'https://www.areva.com',
        description: 'Spécialiste du cycle du combustible nucléaire',
        sector: 'Nucléaire',
        contact: 'Pierre Durand',
        email: 'contact@areva.com',
        phone: '+33 1 34 96 00 00',
        status: 'active',
        createdAt: '2024-02-01'
      }
    ]
    setPartenaires(demoPartenaires)
    setFilteredPartenaires(demoPartenaires)
  }, [])

  // Filtrage des partenaires
  useEffect(() => {
    const filtered = partenaires.filter(partner =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPartenaires(filtered)
  }, [searchTerm, partenaires])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingPartner) {
      // Modification
      const updatedPartenaires = partenaires.map(partner =>
        partner.id === editingPartner.id
          ? { ...partner, ...formData, updatedAt: new Date().toISOString().split('T')[0] }
          : partner
      )
      setPartenaires(updatedPartenaires)
    } else {
      // Ajout
      const newPartner = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString().split('T')[0]
      }
      setPartenaires([newPartner, ...partenaires])
    }
    
    resetForm()
  }

  const handleEdit = (partner) => {
    setEditingPartner(partner)
    setFormData(partner)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce partenaire ?')) {
      setPartenaires(partenaires.filter(partner => partner.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      logo: '',
      website: '',
      description: '',
      sector: '',
      contact: '',
      email: '',
      phone: '',
      status: 'active'
    })
    setEditingPartner(null)
    setShowForm(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Actif'
      case 'inactive': return 'Inactif'
      case 'pending': return 'En attente'
      default: return 'Inconnu'
    }
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h1 className="text-2xl font-bold text-gray-900">
                  {editingPartner ? 'Modifier le partenaire' : 'Nouveau partenaire'}
                </h1>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du partenaire *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: EDF"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secteur d'activité
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner un secteur</option>
                    <option value="Énergie">Énergie</option>
                    <option value="Nucléaire">Nucléaire</option>
                    <option value="Pétrole & Gaz">Pétrole & Gaz</option>
                    <option value="Renouvelables">Renouvelables</option>
                    <option value="Industrie">Industrie</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <ImageUpload
                  value={formData.logo}
                  onChange={(logo) => setFormData({ ...formData, logo })}
                  label="Logo du partenaire"
                  accept="image/*"
                  maxSize={2 * 1024 * 1024} // 2MB
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site web
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://www.exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Description du partenaire..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nom du contact"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contact@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Statut
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="active">Actif</option>
                  <option value="inactive">Inactif</option>
                  <option value="pending">En attente</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingPartner ? 'Modifier' : 'Créer'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Gestion des Partenaires</h1>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Nouveau partenaire</span>
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un partenaire..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartenaires.map((partner) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-12 h-12 object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${partner.logo ? 'hidden' : 'flex'}`}>
                      <Building2 className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                      <p className="text-sm text-gray-500">{partner.sector}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(partner.status)}`}>
                    {getStatusText(partner.status)}
                  </span>
                </div>

                {partner.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {partner.description}
                  </p>
                )}

                <div className="space-y-2 mb-4">
                  {partner.website && (
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Globe className="w-4 h-4" />
                      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        Site web
                      </a>
                    </div>
                  )}
                  {partner.email && (
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Mail className="w-4 h-4" />
                      <span>{partner.email}</span>
                    </div>
                  )}
                  {partner.phone && (
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Phone className="w-4 h-4" />
                      <span>{partner.phone}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(partner)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Modifier"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(partner.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPartenaires.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun partenaire trouvé</h3>
              <p className="text-gray-500">
                {searchTerm ? 'Essayez de modifier votre recherche.' : 'Commencez par ajouter votre premier partenaire.'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default PartenairesManagement
