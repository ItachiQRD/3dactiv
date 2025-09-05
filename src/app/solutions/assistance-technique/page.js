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
      
      {/* Hero Section - Design 3: Centré avec image en superposition */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/assistance/background.avif"
            alt="Assistance Technique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nordic-900/60 via-nordic-800/40 to-nordic-900/80"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <div className="max-w-4xl mx-auto text-center">
              {/* Titre principal */}
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Assistance Technique
              </motion.h1>
              
              {/* Description */}
              <motion.div
                className="max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl text-nordic-200 leading-relaxed mb-6">
                  Nous apportons à nos partenaires industriels un soutien opérationnel structuré pour renforcer leurs équipes, sur site comme en environnement d'ingénierie.
                </p>
                <p className="text-lg text-nordic-300 leading-relaxed">
                  Nos intervenants sont sélectionnés pour leur expertise technique, leur autonomie, et leur capacité à évoluer dans des contextes industriels exigeants, en France comme à l'international.
                </p>
              </motion.div>
              
              {/* Image illustrative centrée */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative max-w-2xl mx-auto"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWrapper
                    src="/images/solutions/assistance/assistance1.avif"
                    alt="Assistance Technique"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nordic-900/40 to-transparent"></div>
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