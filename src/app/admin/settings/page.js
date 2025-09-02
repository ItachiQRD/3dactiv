'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Settings,
  Save,
  ArrowLeft,
  User,
  Shield,
  Globe,
  Mail,
  Bell,
  Database,
  Palette,
  FileText,
  Trash2,
  Download,
  Upload,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

const SettingsManagement = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [isLoading, setIsLoading] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null)

  // Données de profil
  const [profileData, setProfileData] = useState({
    firstName: 'Admin',
    lastName: '3DACTIV',
    email: 'admin@3dactiv.com',
    phone: '+33 1 23 45 67 89',
    role: 'Administrateur',
    avatar: '/images/admin-avatar.jpg'
  })

  // Données de sécurité
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    sessionTimeout: 30
  })

  // Données du site
  const [siteData, setSiteData] = useState({
    siteName: '3DACTIV',
    siteDescription: 'Cabinet de recrutement spécialisé dans l\'industrie énergétique',
    contactEmail: 'contact@3dactiv.com',
    contactPhone: '+33 1 23 45 67 89',
    address: '123 Rue de l\'Énergie, 75001 Paris, France',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/3dactiv',
      twitter: 'https://twitter.com/3dactiv',
      facebook: 'https://facebook.com/3dactiv'
    }
  })

  // Données des notifications
  const [notificationData, setNotificationData] = useState({
    emailNotifications: true,
    newApplications: true,
    newJobs: true,
    systemUpdates: false,
    marketingEmails: false,
    dailyDigest: true
  })

  // Données de la base de données
  const [databaseData, setDatabaseData] = useState({
    lastBackup: '2024-01-20 14:30:00',
    backupFrequency: 'daily',
    autoBackup: true,
    retentionDays: 30
  })

  const handleSave = async (section) => {
    setIsLoading(true)
    setSaveStatus(null)

    try {
      // Simulation d'une sauvegarde
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSaveStatus({
        type: 'success',
        message: `${section} sauvegardé avec succès !`
      })

      // Effacer le message après 3 secondes
      setTimeout(() => setSaveStatus(null), 3000)
    } catch (error) {
      setSaveStatus({
        type: 'error',
        message: `Erreur lors de la sauvegarde de ${section}`
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    if (securityData.newPassword !== securityData.confirmPassword) {
      setSaveStatus({
        type: 'error',
        message: 'Les mots de passe ne correspondent pas'
      })
      return
    }
    await handleSave('le mot de passe')
    setSecurityData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      twoFactorEnabled: securityData.twoFactorEnabled,
      sessionTimeout: securityData.sessionTimeout
    })
  }

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'site', label: 'Site Web', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'database', label: 'Base de Données', icon: Database },
    { id: 'appearance', label: 'Apparence', icon: Palette }
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
                <h1 className="text-xl font-semibold text-nordic-900">Paramètres</h1>
                <p className="text-sm text-nordic-600">Configurez votre espace administrateur</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-nordic-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="container-nordic py-8">
        {/* Navigation des onglets */}
        <div className="bg-white rounded-xl p-2 shadow-nordic border border-nordic-100 mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-accent-600 text-white shadow-sm'
                      : 'text-nordic-600 hover:text-nordic-900 hover:bg-nordic-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Message de statut */}
        {saveStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
              saveStatus.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {saveStatus.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{saveStatus.message}</span>
          </motion.div>
        )}

        {/* Contenu des onglets */}
        <div className="bg-white rounded-xl shadow-nordic border border-nordic-100">
          {/* Onglet Profil */}
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-nordic-900 mb-6">Profil Administrateur</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Rôle
                  </label>
                  <input
                    type="text"
                    value={profileData.role}
                    disabled
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg bg-nordic-50 text-nordic-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Avatar
                  </label>
                  <input
                    type="url"
                    value={profileData.avatar}
                    onChange={(e) => setProfileData({ ...profileData, avatar: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="https://exemple.com/avatar.jpg"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8 pt-6 border-t border-nordic-100">
                <button
                  onClick={() => handleSave('le profil')}
                  disabled={isLoading}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isLoading ? 'Sauvegarde...' : 'Sauvegarder le profil'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Onglet Sécurité */}
          {activeTab === 'security' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-nordic-900 mb-6">Sécurité</h2>
              
              <form onSubmit={handlePasswordChange} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      Mot de passe actuel *
                    </label>
                    <input
                      type="password"
                      required
                      value={securityData.currentPassword}
                      onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      Nouveau mot de passe *
                    </label>
                    <input
                      type="password"
                      required
                      value={securityData.newPassword}
                      onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      Confirmer le nouveau mot de passe *
                    </label>
                    <input
                      type="password"
                      required
                      value={securityData.confirmPassword}
                      onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      Timeout de session (minutes)
                    </label>
                    <select
                      value={securityData.sessionTimeout}
                      onChange={(e) => setSecurityData({ ...securityData, sessionTimeout: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    >
                      <option value={15}>15 minutes</option>
                      <option value={30}>30 minutes</option>
                      <option value={60}>1 heure</option>
                      <option value={120}>2 heures</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="twoFactor"
                    checked={securityData.twoFactorEnabled}
                    onChange={(e) => setSecurityData({ ...securityData, twoFactorEnabled: e.target.checked })}
                    className="w-4 h-4 text-accent-600 border-nordic-300 rounded focus:ring-accent-500"
                  />
                  <label htmlFor="twoFactor" className="text-sm font-medium text-nordic-700">
                    Activer l'authentification à deux facteurs
                  </label>
                </div>

                <div className="flex justify-end pt-6 border-t border-nordic-100">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isLoading ? 'Sauvegarde...' : 'Changer le mot de passe'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Onglet Site Web */}
          {activeTab === 'site' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-nordic-900 mb-6">Configuration du Site</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Nom du site *
                  </label>
                  <input
                    type="text"
                    value={siteData.siteName}
                    onChange={(e) => setSiteData({ ...siteData, siteName: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Email de contact *
                  </label>
                  <input
                    type="email"
                    value={siteData.contactEmail}
                    onChange={(e) => setSiteData({ ...siteData, contactEmail: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Téléphone de contact
                  </label>
                  <input
                    type="tel"
                    value={siteData.contactPhone}
                    onChange={(e) => setSiteData({ ...siteData, contactPhone: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={siteData.socialMedia.linkedin}
                    onChange={(e) => setSiteData({ 
                      ...siteData, 
                      socialMedia: { ...siteData.socialMedia, linkedin: e.target.value }
                    })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Description du site
                  </label>
                  <textarea
                    rows={3}
                    value={siteData.siteDescription}
                    onChange={(e) => setSiteData({ ...siteData, siteDescription: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={siteData.address}
                    onChange={(e) => setSiteData({ ...siteData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8 pt-6 border-t border-nordic-100">
                <button
                  onClick={() => handleSave('la configuration du site')}
                  disabled={isLoading}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isLoading ? 'Sauvegarde...' : 'Sauvegarder la configuration'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Onglet Notifications */}
          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-nordic-900 mb-6">Préférences de Notifications</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-nordic-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-nordic-900">Notifications par email</h3>
                    <p className="text-sm text-nordic-600">Recevoir les notifications par email</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationData.emailNotifications}
                    onChange={(e) => setNotificationData({ ...notificationData, emailNotifications: e.target.checked })}
                    className="w-5 h-5 text-accent-600 border-nordic-300 rounded focus:ring-accent-500"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-nordic-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-nordic-900">Nouvelles candidatures</h3>
                    <p className="text-sm text-nordic-600">Être notifié des nouvelles candidatures</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationData.newApplications}
                    onChange={(e) => setNotificationData({ ...notificationData, newApplications: e.target.checked })}
                    className="w-5 h-5 text-accent-600 border-nordic-300 rounded focus:ring-accent-500"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-nordic-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-nordic-900">Nouveaux emplois</h3>
                    <p className="text-sm text-nordic-600">Être notifié des nouveaux emplois créés</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationData.newJobs}
                    onChange={(e) => setNotificationData({ ...notificationData, newJobs: e.target.checked })}
                    className="w-5 h-5 text-accent-600 border-nordic-300 rounded focus:ring-accent-500"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-nordic-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-nordic-900">Mises à jour système</h3>
                    <p className="text-sm text-nordic-600">Recevoir les notifications de maintenance</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationData.systemUpdates}
                    onChange={(e) => setNotificationData({ ...notificationData, systemUpdates: e.target.checked })}
                    className="w-5 h-5 text-accent-600 border-nordic-300 rounded focus:ring-accent-500"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-nordic-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-nordic-900">Résumé quotidien</h3>
                    <p className="text-sm text-nordic-600">Recevoir un résumé quotidien des activités</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationData.dailyDigest}
                    onChange={(e) => setNotificationData({ ...notificationData, dailyDigest: e.target.checked })}
                    className="w-5 h-5 text-accent-600 border-nordic-300 rounded focus:ring-accent-500"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8 pt-6 border-t border-nordic-100">
                <button
                  onClick={() => handleSave('les préférences de notifications')}
                  disabled={isLoading}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isLoading ? 'Sauvegarde...' : 'Sauvegarder les préférences'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Onglet Base de Données */}
          {activeTab === 'database' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-nordic-900 mb-6">Gestion de la Base de Données</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Dernière sauvegarde</h3>
                  <p className="text-sm text-nordic-600">{databaseData.lastBackup}</p>
                </div>

                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Fréquence de sauvegarde</h3>
                  <p className="text-sm text-nordic-600">{databaseData.backupFrequency}</p>
                </div>

                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Sauvegarde automatique</h3>
                  <p className="text-sm text-nordic-600">{databaseData.autoBackup ? 'Activée' : 'Désactivée'}</p>
                </div>

                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Rétention</h3>
                  <p className="text-sm text-nordic-600">{databaseData.retentionDays} jours</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-nordic-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-nordic-900">Sauvegarde automatique</h3>
                    <p className="text-sm text-nordic-600">Effectuer des sauvegardes automatiques</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={databaseData.autoBackup}
                    onChange={(e) => setDatabaseData({ ...databaseData, autoBackup: e.target.checked })}
                    className="w-5 h-5 text-accent-600 border-nordic-300 rounded focus:ring-accent-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Fréquence de sauvegarde
                  </label>
                  <select
                    value={databaseData.backupFrequency}
                    onChange={(e) => setDatabaseData({ ...databaseData, backupFrequency: e.target.value })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="daily">Quotidienne</option>
                    <option value="weekly">Hebdomadaire</option>
                    <option value="monthly">Mensuelle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-nordic-700 mb-2">
                    Rétention des sauvegardes (jours)
                  </label>
                  <input
                    type="number"
                    value={databaseData.retentionDays}
                    onChange={(e) => setDatabaseData({ ...databaseData, retentionDays: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    min="1"
                    max="365"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8 pt-6 border-t border-nordic-100">
                <div className="flex space-x-3">
                  <button className="btn-outline inline-flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Sauvegarde manuelle</span>
                  </button>
                  <button className="btn-outline inline-flex items-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Restaurer</span>
                  </button>
                </div>

                <button
                  onClick={() => handleSave('la configuration de la base de données')}
                  disabled={isLoading}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isLoading ? 'Sauvegarde...' : 'Sauvegarder la configuration'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Onglet Apparence */}
          {activeTab === 'appearance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-nordic-900 mb-6">Personnalisation de l'Interface</h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Thème actuel</h3>
                  <p className="text-sm text-nordic-600">Style Nordic Clean (par défaut)</p>
                </div>

                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Palette de couleurs</h3>
                  <p className="text-sm text-nordic-600">Blanc, gris clair, bleu-gris, bleu accent</p>
                </div>

                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Typographie</h3>
                  <p className="text-sm text-nordic-600">Inter, SF Pro Display, Playfair Display</p>
                </div>

                <div className="p-4 bg-nordic-50 rounded-lg">
                  <h3 className="font-medium text-nordic-900 mb-2">Espacement</h3>
                  <p className="text-sm text-nordic-600">Système 8px, ombres subtiles</p>
                </div>

                <div className="text-center py-8">
                  <Palette className="w-16 h-16 text-nordic-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-nordic-600 mb-2">Personnalisation avancée</h3>
                  <p className="text-nordic-500 mb-4">
                    Les options de personnalisation avancées seront disponibles dans une prochaine version.
                  </p>
                  <button className="btn-outline" disabled>
                    Personnaliser l'apparence
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SettingsManagement

