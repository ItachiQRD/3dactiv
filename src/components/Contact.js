'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    subject: '',
    message: '',
    files: null
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        position: '',
        subject: '',
        message: '',
        files: null
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@3dactiv.fr', 'recrutement@3dactiv.fr'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', '+33 1 23 45 67 90'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['14 Rue Edouard Nieuport', '92150 Suresnes, France'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Ven: 9h-18h', 'Sam: 9h-12h'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const subjects = [
    'Assistance Technique',
    'Contrôle Non-Destructif',
    'Inspection',
    'Recrutement',
    'Partenariat',
    'Autre'
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-metal-300 via-metal-200 to-metal-100">
      <div className="container-nordic">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-nordic-900 mb-6">
            Contact
          </h2>
          <p className="text-xl text-nordic-600 max-w-3xl mx-auto">
            Pour toute question, envoyez-nous un message ci-dessous.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-nordic-900 mb-8 text-center">
                Envoyez-nous un message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-nordic-900 mb-2">
                    Message envoyé !
                  </h4>
                  <p className="text-nordic-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-nordic-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-nordic-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      E‑mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Company & Position */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-nordic-700 mb-2">
                        Nom de l'entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-nordic-700 mb-2">
                        Poste
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Votre poste"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      Motif *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Sélectionnez un motif</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-nordic-700 mb-2">
                      Importation de fichiers
                    </label>
                    <input
                      type="file"
                      name="files"
                      onChange={handleChange}
                      multiple
                      className="w-full px-4 py-3 border border-nordic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="text-sm text-nordic-600 bg-nordic-50 p-4 rounded-lg">
                    <p className="mb-3">
                      3D ACTIV accorde une grande importance à votre confidentialité et n'utilisera vos données que pour gérer votre compte et fournir les services demandés.
                    </p>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1"
                      />
                      <span>
                        Je consens à la conservation et au traitement de mes données personnelles conformément à la Politique de confidentialité de 3D ACTIV
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                                          <button
                          type="submit"
                          className="btn-primary inline-flex items-center justify-center px-8 py-3 group"
                        >
                          Envoyer le message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Section Carte */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-nordic-900 mb-4">Notre Localisation</h3>
            <p className="text-nordic-600 max-w-2xl mx-auto">
              Retrouvez-nous au cœur de Suresnes, facilement accessible en transport en commun et en voiture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-nordic overflow-hidden"
          >
            <div className="h-96 w-full">
              <iframe 
                src="https://maps.google.com/maps?q=14+Rue+Edouard+Nieuport,+92150+Suresnes,+France&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation 3D ACTIV - 14 Rue Edouard Nieuport, 92150 Suresnes"
              ></iframe>
            </div>
            
            <div className="p-6 bg-nordic-50">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h4 className="font-semibold text-nordic-900 mb-2">3D ACTIV</h4>
                  <p className="text-nordic-600">14 Rue Edouard Nieuport</p>
                  <p className="text-nordic-600">92150 Suresnes, France</p>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=14%20Rue%20Edouard%20Nieuport,%2092150%20Suresnes,%20France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Itinéraire</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Contact
