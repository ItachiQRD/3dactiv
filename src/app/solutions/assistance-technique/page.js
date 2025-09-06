'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import AssetPath from '../../../components/AssetPath'
import ImageWrapper from '../../../components/ImageWrapper'
import { ArrowRight, Send } from 'lucide-react'

const AssistanceTechnique = () => {
  const sections = [
    {
      id: 'assistance-expertise',
      title: 'Assistance technique : un soutien opérationnel structuré',
      content: `Nous apportons à nos partenaires industriels un soutien opérationnel structuré pour renforcer leurs équipes, sur site comme en environnement d'ingénierie.

Nos intervenants sont sélectionnés pour leur expertise technique, leur autonomie, et leur capacité à évoluer dans des contextes industriels exigeants, en France comme à l'international.

Domaines d'intervention :
• Ingénierie de projet et conception
• Supervision de chantier et coordination
• Expertise technique spécialisée
• Formation et transfert de compétences
• Support technique et maintenance

Chaque mission est adaptée aux spécificités de votre projet et aux exigences de votre environnement industriel.`
    },
    {
      id: 'profils-experts',
      title: 'Profils experts et compétences techniques',
      image: '/images/solutions/assistance/assistance1.avif',
      content: `Nos intervenants sont rigoureusement sélectionnés selon des critères d'excellence technique et opérationnelle :

Compétences techniques :
• Diplômes d'ingénieur ou équivalents
• Certifications sectorielles (HSE, qualité, sécurité)
• Expérience terrain dans les secteurs industriels
• Maîtrise des outils et méthodes de projet

Expertise métier :
• Nucléaire et énergies renouvelables
• Pétrochimie et oil & gas
• Aéronautique et défense
• Infrastructures industrielles

Cette expertise diversifiée nous permet de répondre aux besoins les plus spécifiques de nos clients, en France comme à l'international.`,
      layout: 'left'
    },
    {
      id: 'missions-terrain',
      title: 'Missions terrain et environnement d\'ingénierie',
      image: '/images/solutions/assistance/assistance2.avif',
      content: `Nous intervenons dans des contextes variés pour apporter notre expertise technique :

Missions sur site :
• Supervision de chantier et coordination
• Expertise technique spécialisée
• Formation des équipes locales
• Support opérationnel et maintenance

Environnement d'ingénierie :
• Conception et dimensionnement
• Études techniques et calculs
• Rédaction de spécifications
• Suivi de projet et reporting

Chaque mission est planifiée selon vos contraintes opérationnelles et s'intègre parfaitement dans vos équipes existantes.`,
      layout: 'right'
    },
    {
      id: 'accompagnement-projet',
      title: 'Accompagnement projet et transfert de compétences',
      image: '/images/solutions/assistance/assistance3.avif',
      content: `Notre approche privilégie l'autonomie et le transfert de compétences pour renforcer durablement vos équipes :

Méthodologie d'intervention :
• Intégration rapide dans vos équipes
• Transfert de connaissances et de méthodes
• Formation des équipes locales
• Documentation et capitalisation

Suivi et évaluation :
• Reporting régulier et transparent
• Évaluation des performances
• Ajustements selon les besoins
• Pérennisation des acquis

Cette approche garantit une montée en compétences durable de vos équipes et une autonomie progressive dans la gestion de vos projets.`,
      layout: 'left'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation />
      
      {/* Hero Section - Design Équipe & Collaboration */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900">
        {/* Background Pattern Collaboration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/assistance/background.avif"
            alt="Assistance Technique"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        
        {/* Overlay collaboration */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-violet-900/90 to-slate-900/95"></div>
        
        {/* Éléments décoratifs collaboration simplifiés */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-24 left-24 w-28 h-28 border-2 border-purple-400/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-24 right-24 w-20 h-20 border-2 border-purple-400/30 rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <div className="max-w-6xl mx-auto text-center">
              {/* Badge collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 mb-8"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 text-sm font-medium tracking-wider">SOUTIEN OPÉRATIONNEL</span>
              </motion.div>
              
              {/* Titre principal */}
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block text-purple-400">ASSISTANCE</span>
                <span className="block text-3xl lg:text-4xl text-violet-300 font-light mt-2">TECHNIQUE & EXPERTISE</span>
              </motion.h1>
              
              {/* Description */}
              <motion.div
                className="max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-xl text-nordic-200 leading-relaxed mb-6">
                  Nous apportons à nos partenaires industriels un soutien opérationnel structuré pour renforcer leurs équipes, sur site comme en environnement d'ingénierie.
                </p>
                <p className="text-lg text-nordic-300 leading-relaxed">
                  Nos intervenants sont sélectionnés pour leur expertise technique, leur autonomie, et leur capacité à évoluer dans des contextes industriels exigeants, en France comme à l'international.
                </p>
              </motion.div>
              
              {/* Image illustrative avec cadre collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative max-w-3xl mx-auto"
              >
                <div className="relative">
                  {/* Cadre collaboration avec effet de profondeur */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-400/30 bg-slate-800/50 backdrop-blur-sm">
                    <ImageWrapper
                      src="/images/solutions/assistance/head.png"
                      alt="Assistance Technique"
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    
                    {/* Éléments décoratifs collaboration */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Indicateurs d'expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex justify-center space-x-8 mt-12"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-nordic-300">Ingénierie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span className="text-sm text-nordic-300">Formation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-nordic-300">Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span className="text-sm text-nordic-300">Expertise</span>
                </div>
              </motion.div>
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
              Besoin de renforcer vos équipes techniques ?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Nos experts techniques sont à votre disposition pour vous accompagner dans vos projets les plus exigeants, en France comme à l'international.
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

export default AssistanceTechnique