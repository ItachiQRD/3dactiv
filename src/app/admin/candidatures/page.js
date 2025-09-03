'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Eye,
  Download,
  Calendar,
  Mail,
  Phone,
  FileText,
  ArrowLeft,
  X,
  CheckCircle,
  Clock,
  XCircle,
  Trash2,
  Lock,
  Unlock,
  Home
} from 'lucide-react'
import ImageWrapper from '../../../components/ImageWrapper'
import dataManager from '../../../utils/dataManager'
import Link from 'next/link'

const CandidaturesManagement = () => {
  const [applications, setApplications] = useState([])
  const [filteredApplications, setFilteredApplications] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState(null)

  // Charger les candidatures depuis le DataManager
  useEffect(() => {
    const loadApplications = () => {
      const allApplications = dataManager.getData('applications')
      setApplications(allApplications)
    }
    
    loadApplications()
    
    // Écouter les changements dans localStorage
    const handleStorageChange = (e) => {
      if (e.key === dataManager.storageKeys.applications) {
        loadApplications()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Filtrage et recherche
  useEffect(() => {
    let filtered = applications.filter(application => {
      const matchesSearch = application.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           application.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           application.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = selectedStatus === 'all' || application.status === selectedStatus
      return matchesSearch && matchesStatus
    })
    setFilteredApplications(filtered)
  }, [applications, searchTerm, selectedStatus])

  const updateApplicationStatus = (applicationId, newStatus) => {
    dataManager.updateItem('applications', applicationId, { status: newStatus })
  }

  const deleteApplication = (applicationId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette candidature ? Cette action est irréversible.')) {
      dataManager.deleteItem('applications', applicationId)
    }
  }

  const toggleApplicationLock = (applicationId, currentLocked) => {
    dataManager.updateItem('applications', applicationId, { locked: !currentLocked })
  }

  const openViewModal = (application) => {
    setSelectedApplication(application)
    setShowViewModal(true)
  }

  const statusOptions = [
    { value: 'all', label: 'Toutes', color: 'bg-gray-100 text-gray-800' },
    { value: 'pending', label: 'En attente', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'reviewed', label: 'Examinée', color: 'bg-blue-100 text-blue-800' },
    { value: 'accepted', label: 'Acceptée', color: 'bg-green-100 text-green-800' },
    { value: 'rejected', label: 'Refusée', color: 'bg-red-100 text-red-800' }
  ]

  const getLockedCount = () => {
    return applications.filter(a => a.locked).length
  }

  const getStatusColor = (status) => {
    return statusOptions.find(s => s.value === status)?.color || 'bg-gray-100 text-gray-800'
  }

  const getStatusLabel = (status) => {
    return statusOptions.find(s => s.value === status)?.label || 'Inconnu'
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'reviewed': return <Eye className="w-4 h-4" />
      case 'accepted': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
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
                <h1 className="text-xl font-semibold text-nordic-900">Gestion des Candidatures</h1>
                <p className="text-sm text-nordic-600">Consultez et gérez les candidatures reçues</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link 
                href="/" 
                className="flex items-center space-x-2 px-4 py-2 bg-nordic-600 text-white rounded-lg hover:bg-nordic-700 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Retour à l'accueil</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container-nordic py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Total Candidatures</p>
                <p className="text-2xl font-bold text-nordic-900">{applications.length}</p>
              </div>
              <div className="p-3 bg-accent-100 rounded-lg">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">En attente</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {applications.filter(a => a.status === 'pending').length}
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
                <p className="text-sm font-medium text-nordic-600">Acceptées</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {applications.filter(a => a.status === 'accepted').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Refusées</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {applications.filter(a => a.status === 'rejected').length}
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-nordic-600">Verrouillées</p>
                <p className="text-2xl font-bold text-nordic-900">
                  {getLockedCount()}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filtres et Recherche */}
        <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une candidature..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            >
              {statusOptions.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
            <div className="text-right">
              <span className="text-sm text-nordic-600">
                {filteredApplications.length} candidature{filteredApplications.length > 1 ? 's' : ''} trouvée{filteredApplications.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Liste des Candidatures */}
        <div className="space-y-4">
          {filteredApplications.map((application) => (
            <motion.div
              key={application.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 hover:shadow-nordic-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-lg font-semibold text-nordic-900">
                      {application.firstName} {application.lastName}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)} flex items-center`}>
                      {getStatusIcon(application.status)}
                      <span className="ml-1">{getStatusLabel(application.status)}</span>
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-nordic-600 mb-4">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{application.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{application.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {new Date(application.submittedAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-nordic-600">
                      <span className="font-medium">Poste :</span> {application.jobTitle}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    {application.cv && (
                      <span className="px-2 py-1 bg-nordic-100 text-nordic-700 rounded-full text-xs flex items-center">
                        <FileText className="w-3 h-3 mr-1" />
                        CV joint
                      </span>
                    )}
                    {application.locked && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs flex items-center">
                        <Lock className="w-3 h-3 mr-1" />
                        Verrouillée
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => openViewModal(application)}
                    className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                    title="Voir les détails"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  
                  {!application.locked && application.status === 'pending' && (
                    <>
                      <button
                        onClick={() => updateApplicationStatus(application.id, 'accepted')}
                        className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors duration-200"
                        title="Accepter"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => updateApplicationStatus(application.id, 'rejected')}
                        className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        title="Refuser"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  
                  <button
                    onClick={() => toggleApplicationLock(application.id, application.locked)}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      application.locked 
                        ? 'text-green-600 hover:text-green-700 hover:bg-green-50' 
                        : 'text-purple-600 hover:text-purple-700 hover:bg-purple-50'
                    }`}
                    title={application.locked ? "Déverrouiller" : "Verrouiller"}
                  >
                    {application.locked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => deleteApplication(application.id)}
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

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-nordic-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-nordic-600 mb-2">Aucune candidature trouvée</h3>
            <p className="text-nordic-500">Les candidatures apparaîtront ici une fois reçues</p>
          </div>
        )}
      </div>

      {/* Modal de Visualisation */}
      {showViewModal && selectedApplication && (
        <ApplicationViewModal
          application={selectedApplication}
          onClose={() => {
            setShowViewModal(false)
            setSelectedApplication(null)
          }}
          onStatusUpdate={updateApplicationStatus}
        />
      )}
    </div>
  )
}

// Composant Modal de Visualisation
const ApplicationViewModal = ({ application, onClose, onStatusUpdate }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-nordic-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-nordic-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-nordic-900">Détails de la candidature</h2>
            <button
              onClick={onClose}
              className="p-2 text-nordic-400 hover:text-nordic-600 rounded-lg hover:bg-nordic-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Informations personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-nordic-900 mb-4">
                {application.firstName} {application.lastName}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-nordic-700">Email</label>
                  <p className="text-nordic-900">{application.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Téléphone</label>
                  <p className="text-nordic-900">{application.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Poste candidaté</label>
                  <p className="text-nordic-900">{application.jobTitle}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Date de candidature</label>
                  <p className="text-nordic-900">
                    {new Date(application.submittedAt).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              {application.cv && (
                <div>
                  <label className="text-sm font-medium text-nordic-700 mb-2">CV</label>
                  <div className="border border-nordic-200 rounded-lg p-4">
                    {application.cv.startsWith('data:image/') ? (
                      // Prévisualisation d'image
                      <div className="space-y-3">
                        <ImageWrapper
                          src={application.cv}
                          alt="CV du candidat"
                          className="w-full h-64 object-contain bg-gray-50 rounded"
                        />
                        <button
                          onClick={() => {
                            const link = document.createElement('a')
                            link.href = application.cv
                            link.download = `CV_${application.nom}_${application.prenom}.jpg`
                            link.click()
                          }}
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          <span>Télécharger le CV</span>
                        </button>
                      </div>
                    ) : (
                      // Fichier non-image (PDF, DOC, etc.)
                      <div className="space-y-3">
                        <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                          <div className="text-center">
                            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600 font-medium">Fichier CV</p>
                            <p className="text-sm text-gray-500 mt-1">
                              {application.cv.includes('pdf') ? 'PDF' : 
                               application.cv.includes('doc') ? 'Document Word' : 
                               application.cv.includes('txt') ? 'Fichier texte' : 'Fichier'}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => {
                              // Ouvrir le fichier dans un nouvel onglet pour prévisualisation
                              const newWindow = window.open()
                              newWindow.document.write(`
                                <html>
                                  <head><title>CV - ${application.nom} ${application.prenom}</title></head>
                                  <body style="margin:0; padding:20px; background:#f5f5f5;">
                                    <div style="max-width:800px; margin:0 auto; background:white; padding:20px; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                                      <h2 style="color:#333; margin-bottom:20px;">CV de ${application.nom} ${application.prenom}</h2>
                                      <div style="text-align:center; padding:40px;">
                                        <p style="color:#666; font-size:16px;">Ce fichier ne peut pas être prévisualisé directement.</p>
                                        <p style="color:#999; font-size:14px; margin-top:10px;">Veuillez le télécharger pour le consulter.</p>
                                      </div>
                                    </div>
                                  </body>
                                </html>
                              `)
                            }}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Prévisualiser</span>
                          </button>
                          <button
                            onClick={() => {
                              const link = document.createElement('a')
                              link.href = application.cv
                              link.download = `CV_${application.nom}_${application.prenom}.${application.cv.includes('pdf') ? 'pdf' : application.cv.includes('doc') ? 'doc' : 'txt'}`
                              link.click()
                            }}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            <span>Télécharger</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Expérience et motivation */}
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Expérience professionnelle</h4>
              <div className="bg-nordic-50 rounded-lg p-4">
                <p className="text-nordic-700 leading-relaxed whitespace-pre-wrap">{application.experience}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-nordic-900 mb-3">Lettre de motivation</h4>
              <div className="bg-nordic-50 rounded-lg p-4">
                <p className="text-nordic-700 leading-relaxed whitespace-pre-wrap">{application.motivation}</p>
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

export default CandidaturesManagement
