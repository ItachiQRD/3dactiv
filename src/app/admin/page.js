'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Users,
  FolderOpen,
  UserPlus,
  Newspaper,
  Settings,
  LogOut,
  Plus,
  Search,
  Filter,
  XCircle,
  Home,
  TrendingUp,
  TrendingDown,
  Building2
} from 'lucide-react'
import AssetPath from '../../components/AssetPath'
import Link from 'next/link'
import dataManager from '../../utils/dataManager'

// Composant de connexion (défini AVANT AdminDashboard)
const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulation de connexion (à remplacer par votre API)
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === '3dactiv2024') {
        localStorage.setItem('adminToken', 'fake-jwt-token')
        onLogin(true)
      } else {
        setError('Identifiants incorrects')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-nordic-50 flex items-center justify-center px-4">
      {/* Bouton Retour à l'accueil */}
      <Link 
        href="/"
        className="absolute top-6 left-6 z-10 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200"
      >
        <Home className="w-5 h-5 text-nordic-600" />
        <span className="text-nordic-700 font-medium">Accueil</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-nordic-lg p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <AssetPath
            src="/images/logo-3dactiv.png"
            alt="3DACTIV Logo"
            className="h-12 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-nordic-900">Connexion Admin</h1>
          <p className="text-nordic-600 mt-2">Accédez à votre espace administrateur</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-nordic-700 mb-2">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
              placeholder="admin"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-nordic-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-nordic-600">
          <p>Identifiants de test :</p>
          <p><strong>admin</strong> / <strong>3dactiv2024</strong></p>
        </div>
      </motion.div>
    </div>
  )
}

// Composant principal du dashboard (défini APRÈS AdminLogin)
const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    jobs: 0,
    applications: 0,
    partners: 0,
    portfolio: 0
  })
  const [activeTab, setActiveTab] = useState('dashboard')

  // Vérification de l'authentification
  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (token) {
      // Ici on pourrait vérifier la validité du token avec l'API
      setIsAuthenticated(true)
      setUser({ name: 'Admin 3DACTIV', role: 'Administrateur' })
    }
  }, [])

  // Charger les statistiques
  useEffect(() => {
    const loadStats = () => {
      const jobs = dataManager.getData('jobs').filter(job => job.status === 'published').length
      const applications = dataManager.getData('applications').length
      const partners = dataManager.getData('partners').filter(partner => partner.status === 'active').length
      const portfolio = dataManager.getData('portfolio').length
      
      setStats({ jobs, applications, partners, portfolio })
    }
    
    loadStats()
    
    // Écouter les changements dans localStorage
    const handleStorageChange = (e) => {
      if (Object.values(dataManager.storageKeys).includes(e.key)) {
        loadStats()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const adminModules = [
    {
      id: 'jobs',
      title: 'Gestion des Emplois',
      description: 'Créer, modifier et supprimer des offres d\'emploi',
      icon: Briefcase,
      href: '/admin/jobs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'applications',
      title: 'Candidatures',
      description: 'Consulter et gérer les candidatures reçues',
      icon: Users,
      href: '/admin/candidatures',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Modifier le portfolio et les réalisations',
      icon: FolderOpen,
      href: '/admin/portfolio',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'partners',
      title: 'Partenaires',
      description: 'Ajouter ou supprimer des partenaires',
      icon: UserPlus,
      href: '/admin/partenaires',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'news',
      title: 'Actualités',
      description: 'Gérer les articles et actualités',
      icon: Newspaper,
      href: '/admin/news',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'settings',
      title: 'Paramètres',
      description: 'Configuration du site et de l\'admin',
      icon: Settings,
      href: '/admin/settings',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const statsData = [
    { 
      label: 'Emplois Actifs', 
      value: stats.jobs.toString(), 
      change: '+0%', 
      changeType: 'neutral',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Candidatures', 
      value: stats.applications.toString(), 
      change: '+0%', 
      changeType: 'neutral',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'Partenaires', 
      value: stats.partners.toString(), 
      change: '+0%', 
      changeType: 'neutral',
      icon: Building2,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: 'Projets Portfolio', 
      value: stats.portfolio.toString(), 
      change: '+0%', 
      changeType: 'neutral',
      icon: FolderOpen,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />
  }

  return (
    <div className="min-h-screen bg-nordic-50">
      {/* Header */}
      <header className="bg-white shadow-nordic-sm border-b border-nordic-100">
        <div className="container-nordic">
          <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
              <AssetPath
                src="/images/logo-3dactiv.png"
                alt="3DACTIV Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-nordic-900">Admin Panel</span>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center space-x-2 px-3 py-2 bg-nordic-600 text-white rounded-lg hover:bg-nordic-700 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Accueil</span>
              </Link>
              <div className="text-right">
                <div className="text-sm font-medium text-nordic-900">{user?.name}</div>
                <div className="text-xs text-nordic-600">{user?.role}</div>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('adminToken')
                  setIsAuthenticated(false)
                }}
                className="flex items-center space-x-2 text-nordic-600 hover:text-nordic-900 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-nordic py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-nordic-900 mb-2">
            Bienvenue dans votre espace administrateur
          </h1>
          <p className="text-nordic-600">
            Gérez votre site 3DACTIV, les emplois, candidatures et partenaires
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {statsData.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-nordic-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-nordic-900">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.changeType === 'positive' ? (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : stat.changeType === 'negative' ? (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    ) : null}
                    <span className={`text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-nordic-500'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Admin Modules Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {adminModules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-nordic border border-nordic-100 hover:shadow-nordic-lg hover:border-accent-200 transition-all duration-300 group-hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-nordic-900 mb-2 group-hover:text-accent-600 transition-colors duration-200">
                  {module.title}
                </h3>
                <p className="text-nordic-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-xl p-6 shadow-nordic border border-nordic-100"
        >
          <h3 className="text-lg font-semibold text-nordic-900 mb-4">Actions Rapides</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/admin/jobs" className="btn-primary inline-flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Nouvel Emploi</span>
            </Link>
            <Link href="/admin/candidatures" className="btn-outline inline-flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Voir Candidatures</span>
            </Link>
            <Link href="/admin/partenaires" className="btn-outline inline-flex items-center space-x-2">
              <UserPlus className="w-4 h-4" />
              <span>Nouveau Partenaire</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard
