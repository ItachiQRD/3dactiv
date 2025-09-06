'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import AssetPath from '../../../components/AssetPath'
import ImageWrapper from '../../../components/ImageWrapper'
import { ArrowRight, Send } from 'lucide-react'

const Inspection = () => {
  const sections = [
    {
      id: 'inspections-techniques',
      title: 'Des inspections techniques au service de la conformité',
      content: `En France : un appui qualité au service de vos obligations contractuelles

Dans le contexte français, nos inspecteurs interviennent en renfort technique pour superviser la bonne exécution des fabrications ou interventions sur site, tout en assurant une traçabilité documentaire conforme aux exigences contractuelles.

Nos prestations ne relèvent pas d'un organisme notifié, mais s'intègrent aux systèmes qualité des donneurs d'ordre, en cohérence avec les référentiels internes, les cahiers des charges, ou les procédures d'auto-contrôle.

Cela inclut notamment :
• Le suivi qualité fabrication (points clés, essais, PV, inspections visuelles)
• La gestion documentaire (plans, certificats, fiches de suivi, etc.)
• La vérification terrain du respect des spécifications techniques

À l'international : conformité réglementaire et standards applicables

À l'étranger, nos inspecteurs interviennent dans le cadre de projets soumis à des standards réglementaires internationaux ou sectoriels : ASME, API, ISO, PED, EN, BS, DNV, etc.

Nos prestations permettent d'appuyer nos clients dans :
• La vérification de conformité aux normes techniques locales ou contractuelles
• La supervision d'équipements sensibles dans le respect des codes applicables
• Le reporting structuré conforme aux exigences des EPC, opérateurs ou autorités`
    },
    {
      id: 'pourquoi-choisir',
      title: 'Pourquoi choisir 3D ACTIV pour vos projets d\'inspection industrielle ?',
      image: '/images/solutions/inspection/inspection1.avif',
      content: `Nous apportons un renfort technique ciblé, grâce à des profils expérimentés, autonomes, et à l'écoute des réalités terrain.

Nos inspecteurs sont capables de s'adapter à vos contraintes opérationnelles, vos documents qualité, et aux exigences de vos clients finaux.

Nos engagements :
• Une intégration fluide dans vos projets et vos équipes
• Une exécution rigoureuse des contrôles et relevés
• Une fiabilité documentaire pour vos dossiers de conformité
• Un accompagnement réactif et ajusté selon votre environnement (nucléaire, oil & gas, infrastructures, énergie…)`,
      layout: 'left'
    },
    {
      id: 'inspection-suivi',
      title: 'Inspection & Suivi de Conformité',
      image: '/images/solutions/inspection/inspection2.avif',
      content: `Nous intervenons sur des missions de suivi d'exécution, de vérification terrain, de relecture documentaire et d'inspection visuelle, en France et à l'étranger.

Nos prestations incluent :
• La supervision de points de contrôle qualité
• L'inspection soudure, revêtement, essais mécaniques
• La revue de documents techniques et le visa de conformité contractuelle
• Le reporting qualité à destination du client, du donneur d'ordre ou du service qualité`,
      layout: 'right'
    },
    {
      id: 'rigueur-certifiee',
      title: 'Une rigueur certifiée pour vos équipements industriels',
      image: '/images/solutions/inspection/inspection3.avif',
      content: `Chaque mission est exécutée selon une approche structurée, en lien avec vos objectifs de qualité, de performance technique et de sécurité.

Nous veillons à ce que nos interventions s'intègrent aux exigences projet, qu'elles soient définies par vos référentiels internes, ceux de l'EPC, ou les normes en vigueur.

Notre rigueur s'appuie sur :
• La traçabilité des interventions
• Le respect des procédures HSE
• La fiabilité des livrables techniques`,
      layout: 'left'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navigation />
      
      {/* Hero Section - Design Industriel Professionnel */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-nordic-900 to-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/inspection/background.avif"
            alt="Inspection industrielle"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Overlay avec effet industriel */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-nordic-900/90 to-slate-800/95"></div>
        
        {/* Éléments décoratifs industriels */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-accent-500/20 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 border border-accent-500/30 rounded-full"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent-500/25 rounded-full"
            animate={{ 
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Contenu texte */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Badge industriel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center space-x-3 bg-accent-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-500/30"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                    <span className="text-accent-300 text-sm font-medium tracking-wider">EXPERTISE TECHNIQUE</span>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="block text-accent-400">INSPECTION</span>
                    <span className="block text-3xl lg:text-4xl text-nordic-300 font-light mt-2">TECHNIQUE INDUSTRIELLE</span>
                  </motion.h1>
                  
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <p className="text-xl text-nordic-200 leading-relaxed">
                      Nous proposons des prestations d'inspection technique sur l'ensemble du cycle projet, en appui aux démarches qualité, sécurité et conformité documentaire de nos clients.
                    </p>
                    <p className="text-lg text-nordic-300 leading-relaxed">
                      Notre objectif : vous accompagner avec rigueur, méthode et fiabilité, en France comme à l'international.
                    </p>
                  </motion.div>
                  
                  {/* Barre de progression décorative */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"
                  />
                </motion.div>
                
                {/* Image illustrative avec cadre industriel */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Cadre industriel */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent-600/20 to-accent-500/20 rounded-2xl blur-sm"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent-500/30">
                      <ImageWrapper
                        src="/images/solutions/inspection/head.png"
                        alt="Inspection technique"
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    </div>
                    
                    {/* Éléments décoratifs */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
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
              Prêt à optimiser vos inspections industrielles ?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Contactez nos experts pour discuter de vos besoins en inspection technique et découvrir comment nous pouvons vous accompagner.
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

export default Inspection