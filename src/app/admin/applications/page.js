'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Search,
  Filter,
  Eye,
  Download,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Briefcase,
  Star,
  CheckCircle,
  XCircle,
  Clock,
  ArrowLeft,
  X
} from 'lucide-react'
import Link from 'next/link'

const ApplicationsManagement = () => {
  const [applications, setApplications] = useState([])
  const [filteredApplications, setFilteredApplications] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedJob, setSelectedJob] = useState('all')
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState(null)

  // Données de test
  useEffect(() => {
    const mockApplications = [
      {
        id: 1,
        candidateName: 'Marie Dubois',
        email: 'marie.dubois@email.com',
        phone: '+33 6 12 34 56 78',
        jobTitle: 'Inspecteur CND Nucléaire',
        jobCompany: 'EDF',
        location: 'Paris, France',
        status: 'pending',
        appliedDate: '2024-01-20',
        experience: '8 ans',
        education: 'Master en Physique Nucléaire',
        skills: ['CND', 'Inspection', 'Sécurité Nucléaire', 'ISO 9712'],
        coverLetter: 'Passionnée par le secteur nucléaire, je souhaite mettre à profit mes 8 années d\'expérience en inspection CND pour contribuer à la sûreté des installations EDF...',
        cvUrl: '/cvs/marie-dubois-cv.pdf',
        availability: 'Immédiate',
        salary: '55,000 €',
        notes: 'Profil très intéressant, expérience confirmée'
      },
      {
        id: 2,
        candidateName: 'Thomas Martin',
        email: 'thomas.martin@email.com',
        phone: '+33 6 98 76 54 32',
        jobTitle: 'Technicien Gaz & Pétrole',
        jobCompany: 'TotalEnergies',
        location: 'Marseille, France',
        status: 'reviewed',
        appliedDate: '2024-01-18',
        experience: '5 ans',
        education: 'BTS Maintenance Industrielle',
        skills: ['Maintenance', 'Inspection', 'Sécurité', 'Permis Bateau'],
        coverLetter: 'Technicien passionné par l\'industrie pétrolière, j\'ai développé une expertise solide en maintenance et inspection des installations offshore...',
        cvUrl: '/cvs/thomas-martin-cv.pdf',
        availability: '2 semaines',
        salary: '4,200 €',
        notes: 'Bon profil technique, à recontacter'
      },
      {
        id: 3,
        candidateName: 'Sophie Bernard',
        email: 'sophie.bernard@email.com',
        phone: '+33 6 45 67 89 01',
        jobTitle: 'Inspecteur CND Nucléaire',
        jobCompany: 'EDF',
        location: 'Paris, France',
        status: 'accepted',
        appliedDate: '2024-01-15',
        experience: '12 ans',
        education: 'Ingénieur CND',
        skills: ['CND', 'Nucléaire', 'Management', 'Audit'],
        coverLetter: 'Ingénieure CND avec 12 ans d\'expérience dans le secteur nucléaire, je maîtrise parfaitement les normes de sûreté...',
        cvUrl: '/cvs/sophie-bernard-cv.pdf',
        availability: 'Immédiate',
        salary: '65,000 €',
        notes: 'Profil excellent, recrutement validé'
      }
    ]
    setApplications(mockApplications)
    setFilteredApplications(mockApplications)
  }, [])

  // Filtrage et recherche
  useEffect(() => {
    let filtered = applications.filter(app => {
      const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           app.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus
      const matchesJob = selectedJob === 'all' || app.jobTitle === selectedJob
      return matchesSearch && matchesStatus && matchesJob
    })
    setFilteredApplications(filtered)
  }, [applications, searchTerm, selectedStatus, selectedJob])

  const handleStatusChange = (applicationId, newStatus) => {
    setApplications(applications.map(app => 
      app.id === applicationId ? { ...app, status: newStatus } : app
    ))
  }

  const openViewModal = (application) => {
    setSelectedApplication(application)
    setShowViewModal(true)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'reviewed': return 'bg-blue-100 text-blue-800'
      case 'accepted': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'pending': return 'En attente'
      case 'reviewed': return 'Consultée'
      case 'accepted': return 'Acceptée'
      case 'rejected': return 'Refusée'
      default: return 'Inconnu'
    }
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

  const statusOptions = [
    { value: 'pending', label: 'En attente' },
    { value: 'reviewed', label: 'Consultée' },
    { value: 'accepted', label: 'Acceptée' },
    { value: 'rejected', label: 'Refusée' }
  ]

  const uniqueJobs = [...new Set(applications.map(app => app.jobTitle))]

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
            <div className="text-right">
              <div className="text-2xl font-bold text-accent-600">{applications.length}</div>
              <div className="text-sm text-nordic-600">Candidatures totales</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-nordic py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {statusOptions.map((status) => {
            const count = applications.filter(app => app.status === status.value).length
            return (
              <motion.div
                key={status.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-nordic-600">{status.label}</p>
                    <p className="text-2xl font-bold text-nordic-900">{count}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${getStatusColor(status.value)}`}>
                    {getStatusIcon(status.value)}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Filtres et Recherche */}
        <div className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-nordic-400" />
              <input
                type="text"
                placeholder="Rechercher un candidat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>
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
            <select
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            >
              <option value="all">Tous les emplois</option>
              {uniqueJobs.map(job => (
                <option key={job} value={job}>{job}</option>
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
                    <h3 className="text-lg font-semibold text-nordic-900">{application.candidateName}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                      {getStatusLabel(application.status)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-nordic-600 mb-4">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{application.jobTitle}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{application.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Postulé le {new Date(application.appliedDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      <span>{application.experience} d'expérience</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-nordic-600">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{application.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{application.phone}</span>
                    </div>
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
                  <a
                    href={application.cvUrl}
                    download
                    className="p-2 text-nordic-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors duration-200"
                    title="Télécharger le CV"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Actions rapides de statut */}
              <div className="mt-4 pt-4 border-t border-nordic-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-nordic-500">Changer le statut :</span>
                    {statusOptions.map((status) => (
                      <button
                        key={status.value}
                        onClick={() => handleStatusChange(application.id, status.value)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-200 ${
                          application.status === status.value
                            ? 'bg-accent-600 text-white'
                            : 'bg-nordic-100 text-nordic-600 hover:bg-nordic-200'
                        }`}
                      >
                        {status.label}
                      </button>
                    ))}
                  </div>
                  <div className="text-sm text-nordic-500">
                    Salaire demandé : <span className="font-medium">{application.salary}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-nordic-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-nordic-600 mb-2">Aucune candidature trouvée</h3>
            <p className="text-nordic-500">Ajustez vos filtres ou attendez de nouvelles candidatures</p>
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
          onStatusChange={handleStatusChange}
          statusOptions={statusOptions}
        />
      )}
    </div>
  )
}

// Composant Modal de Visualisation
const ApplicationViewModal = ({ application, onClose, onStatusChange, statusOptions }) => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations du candidat */}
            <div>
              <h3 className="text-lg font-semibold text-nordic-900 mb-4">Informations du candidat</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-nordic-700">Nom complet</label>
                  <p className="text-nordic-900">{application.candidateName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Email</label>
                  <p className="text-nordic-900">{application.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Téléphone</label>
                  <p className="text-nordic-900">{application.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Expérience</label>
                  <p className="text-nordic-900">{application.experience}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Formation</label>
                  <p className="text-nordic-900">{application.education}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Disponibilité</label>
                  <p className="text-nordic-900">{application.availability}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Salaire demandé</label>
                  <p className="text-nordic-900 font-medium">{application.salary}</p>
                </div>
              </div>
            </div>

            {/* Informations du poste et compétences */}
            <div>
              <h3 className="text-lg font-semibold text-nordic-900 mb-4">Poste et compétences</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-nordic-700">Poste</label>
                  <p className="text-nordic-900">{application.jobTitle}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Entreprise</label>
                  <p className="text-nordic-900">{application.jobCompany}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Localisation</label>
                  <p className="text-nordic-900">{application.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Date de candidature</label>
                  <p className="text-nordic-900">{new Date(application.appliedDate).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-nordic-700">Compétences</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {application.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lettre de motivation */}
          <div className="mt-8 pt-6 border-t border-nordic-100">
            <h4 className="font-medium text-nordic-900 mb-3">Lettre de motivation</h4>
            <div className="bg-nordic-50 rounded-lg p-4">
              <p className="text-nordic-700 text-sm leading-relaxed">{application.coverLetter}</p>
            </div>
          </div>

          {/* Notes et actions */}
          <div className="mt-8 pt-6 border-t border-nordic-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-nordic-900 mb-3">Notes</h4>
                <textarea
                  defaultValue={application.notes}
                  className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  rows={3}
                  placeholder="Ajoutez vos notes sur ce candidat..."
                />
              </div>
              <div>
                <h4 className="font-medium text-nordic-900 mb-3">Actions</h4>
                <div className="space-y-2">
                  <a
                    href={application.cvUrl}
                    download
                    className="btn-primary w-full text-center py-2"
                  >
                    <Download className="w-4 h-4 mr-2 inline" />
                    Télécharger le CV
                  </a>
                  <a
                    href={`mailto:${application.email}`}
                    className="btn-outline w-full text-center py-2"
                  >
                    <Mail className="w-4 h-4 mr-2 inline" />
                    Contacter par email
                  </a>
                  <a
                    href={`tel:${application.phone}`}
                    className="btn-outline w-full text-center py-2"
                  >
                    <Phone className="w-4 h-4 mr-2 inline" />
                    Appeler
                  </a>
                </div>
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

export default ApplicationsManagement
