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
      
      {/* Hero Section - Design Laboratoire Technique */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
        {/* Background Pattern Technique */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/cnd/background.avif"
            alt="Contrôle Non Destructif"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Overlay technique */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/90 to-slate-900/95"></div>
        
        {/* Éléments décoratifs techniques */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-32 right-32 w-20 h-20 border-2 border-emerald-400/30 rounded-full"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-16 h-16 border-2 border-emerald-400/40 rounded-full"
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-12 h-12 border border-emerald-400/20 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                {/* Image principale */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-2 order-2 lg:order-1"
                >
                  <div className="relative">
                    {/* Cadre technique avec effet de laboratoire */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-lg"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-400/30 bg-slate-800/50 backdrop-blur-sm">
                      <ImageWrapper
                        src="/images/solutions/cnd/cnd1.avif"
                        alt="Contrôle Non Destructif"
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                      
                      {/* Overlay technique */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Contenu texte */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-3 order-1 lg:order-2 space-y-8"
                >
                  {/* Badge technique */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-flex items-center space-x-3 bg-emerald-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-300 text-sm font-medium tracking-wider">CERTIFICATION QUALITÉ</span>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="block text-emerald-400">CONTRÔLE</span>
                    <span className="block text-3xl lg:text-4xl text-blue-300 font-light mt-2">NON-DESTRUCTIF</span>
                  </motion.h1>
                  
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <p className="text-xl text-nordic-200 leading-relaxed">
                      Le Contrôle Non Destructif (CND) est un maillon essentiel de la chaîne qualité dans les secteurs industriels à forte exigence réglementaire.
                    </p>
                    <p className="text-lg text-nordic-300 leading-relaxed">
                      Nous mobilisons des techniciens certifiés pour réaliser des examens CND fiables et traçables, conformes aux normes internationales, en France comme à l'étranger.
                    </p>
                  </motion.div>
                  
                  {/* Indicateurs techniques */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm text-nordic-300">ISO 9712</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-nordic-300">ASNT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm text-nordic-300">COFREND</span>
                    </div>
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