'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, Home, ArrowLeft } from 'lucide-react'
import AssetPath from '../../components/AssetPath'

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation de connexion
    setTimeout(() => {
      setIsLoading(false)
      // Redirection vers l'admin après connexion
      window.location.href = '/admin'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      {/* Bouton Retour à l'accueil */}
      <Link 
        href="/"
        className="absolute top-6 left-6 z-10 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200"
      >
        <Home className="w-5 h-5 text-nordic-600" />
        <span className="text-nordic-700 font-medium">Accueil</span>
      </Link>

      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header avec logo */}
          <div className="bg-gradient-to-r from-nordic-600 to-nordic-700 p-8 text-center">
            <div className="flex justify-center mb-4">
              <AssetPath
                src="/images/logo-3dactiv.png"
                alt="3D ACTIV Logo"
                className="h-16 w-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Connexion Admin
            </h1>
            <p className="text-nordic-200">
              Accédez à l'interface d'administration
            </p>
          </div>

          {/* Formulaire de connexion */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-nordic-700 mb-2">
                  Adresse e-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-nordic-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-500 focus:border-transparent transition-colors duration-200"
                    placeholder="admin@3dactiv.fr"
                  />
                </div>
              </div>

              {/* Mot de passe */}
              <div>
                <label className="block text-sm font-medium text-nordic-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-nordic-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nordic-500 focus:border-transparent transition-colors duration-200"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-nordic-400 hover:text-nordic-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-nordic-600 border-nordic-300 rounded focus:ring-nordic-500"
                  />
                  <span className="ml-2 text-sm text-nordic-600">
                    Se souvenir de moi
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-nordic-600 hover:text-nordic-800 transition-colors duration-200"
                >
                  Mot de passe oublié ?
                </a>
              </div>

              {/* Bouton de connexion */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-nordic-600 to-nordic-700 text-white py-3 px-4 rounded-lg font-medium hover:from-nordic-700 hover:to-nordic-800 focus:outline-none focus:ring-2 focus:ring-nordic-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Connexion en cours...
                  </div>
                ) : (
                  'Se connecter'
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-nordic-500">
                Accès réservé aux administrateurs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Connexion
