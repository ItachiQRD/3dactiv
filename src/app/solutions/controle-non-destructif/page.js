'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import AssetPath from '../../../components/AssetPath'
import ImageWrapper from '../../../components/ImageWrapper'
import { ArrowRight, Send } from 'lucide-react'

const ControleNonDestructif = () => {
  const sections = [
    {
      id: 'cnd-expertise',
      title: 'Le Contrôle Non Destructif : une expertise technique de pointe',
      content: `Le Contrôle Non Destructif (CND) est un maillon essentiel de la chaîne qualité dans les secteurs industriels à forte exigence réglementaire.

Nous mobilisons des techniciens certifiés pour réaliser des examens CND fiables et traçables, conformes aux normes internationales, en France comme à l'étranger.

Nos domaines d'expertise :
• Radiographie industrielle (RT)
• Ultrasons (UT)
• Magnétoscopie (MT)
• Liquides pénétrants (PT)
• Courants de Foucault (ET)
• Contrôle visuel (VT)

Chaque technique est adaptée aux spécificités de vos équipements et aux exigences réglementaires de votre secteur d'activité.`
    },
    {
      id: 'certifications-normes',
      title: 'Certifications et conformité aux normes internationales',
      image: '/images/solutions/cnd/cnd1.avif',
      content: `Nos techniciens CND sont certifiés selon les standards internationaux les plus exigeants :

Certifications principales :
• ISO 9712 (niveaux 1, 2 et 3)
• ASNT (American Society for Nondestructive Testing)
• PCN (Personnel Certification in Nondestructive Testing)
• COFREND (Comité français d'essais non destructifs)

Normes et codes applicables :
• ASME (American Society of Mechanical Engineers)
• API (American Petroleum Institute)
• EN (Normes européennes)
• PED (Pressure Equipment Directive)
• RCC-M (Règles de conception et de construction des matériels)

Cette expertise nous permet d'intervenir sur des projets critiques dans les secteurs nucléaire, pétrochimique, aéronautique et énergétique.`,
      layout: 'left'
    },
    {
      id: 'methodes-cnd',
      title: 'Méthodes CND et applications industrielles',
      image: '/images/solutions/cnd/cnd2.avif',
      content: `Nous maîtrisons l'ensemble des techniques CND pour répondre à vos besoins spécifiques :

Radiographie industrielle :
• Contrôle de soudures et assemblages
• Détection de défauts internes
• Contrôle de corrosion et d'érosion

Ultrasons :
• Mesure d'épaisseur
• Détection de défauts de soudure
• Contrôle de l'intégrité des matériaux

Magnétoscopie et liquides pénétrants :
• Détection de fissures de surface
• Contrôle de pièces magnétiques et non-magnétiques
• Inspection de composants critiques

Chaque méthode est choisie en fonction de la nature des défauts recherchés et des contraintes techniques du projet.`,
      layout: 'right'
    },
    {
      id: 'traçabilite-qualite',
      title: 'Traçabilité et assurance qualité',
      image: '/images/solutions/cnd/cnd3.avif',
      content: `La traçabilité est au cœur de notre démarche qualité pour garantir la fiabilité de nos interventions :

Documentation technique :
• Procédures d'examen personnalisées
• Rapports d'inspection détaillés
• Certificats de conformité
• Archives numériques sécurisées

Assurance qualité :
• Contrôles croisés et validation
• Formation continue des techniciens
• Mise à jour des certifications
• Audit qualité régulier

Cette approche rigoureuse garantit la conformité de nos prestations aux exigences les plus strictes et assure la pérennité de vos équipements industriels.`,
      layout: 'left'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section - Design 2: Image en pleine largeur avec overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/cnd/background.avif"
            alt="Contrôle Non Destructif"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nordic-900/80 via-nordic-800/60 to-nordic-900/80"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Image principale */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-1 order-2 lg:order-1"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWrapper
                      src="/images/solutions/cnd/cnd1.avif"
                      alt="Contrôle Non Destructif"
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nordic-900/30 to-transparent"></div>
                  </div>
                </motion.div>
                
                {/* Contenu texte */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-2 order-1 lg:order-2 space-y-8"
                >
                  <motion.h1 
                    className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Contrôle Non-Destructif
                  </motion.h1>
                  
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <p className="text-xl text-nordic-200 leading-relaxed">
                      Le Contrôle Non Destructif (CND) est un maillon essentiel de la chaîne qualité dans les secteurs industriels à forte exigence réglementaire.
                    </p>
                    <p className="text-lg text-nordic-300 leading-relaxed">
                      Nous mobilisons des techniciens certifiés pour réaliser des examens CND fiables et traçables, conformes aux normes internationales, en France comme à l'étranger.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections de contenu */}
      <div className="py-24">
        {sections.map((section, index) => (
          <section key={section.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="container-nordic">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${section.layout === 'right' ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={section.layout === 'right' ? 'lg:col-start-2' : ''}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl lg:text-4xl font-bold text-nordic-900">
                      {section.title}
                    </h2>
                    <div className="text-nordic-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                </div>
                
                {section.image && (
                  <div className={section.layout === 'right' ? 'lg:col-start-1' : ''}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <ImageWrapper
                        src={section.image}
                        alt={section.title}
                        className="w-full h-96 object-cover"
                      />
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent-600 to-accent-700">
        <div className="container-nordic">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Besoin d'expertise CND pour vos projets ?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Nos techniciens certifiés sont à votre disposition pour des prestations CND conformes aux normes internationales les plus exigeantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-accent-50 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Demander un devis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent-600 transition-colors duration-200 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                En savoir plus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ControleNonDestructif