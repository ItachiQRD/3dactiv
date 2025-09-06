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
      
      {/* Hero Section - Style overlay avec double image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image principale */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/inspection/background.avif"
            alt="Inspection industrielle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nordic-900/80 via-nordic-800/60 to-nordic-900/80"></div>
        </div>
        
        {/* Image de superposition */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/inspection/background1.png"
            alt="Inspection technique overlay"
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
        </div>
        
        {/* Overlay sombre pour le contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-nordic-900/90 via-nordic-800/70 to-nordic-700/50"></div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <div className="max-w-6xl mx-auto text-center">
              {/* Titre principal avec effet dramatique */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                  <span className="block text-4xl lg:text-5xl text-nordic-300 mb-4 font-light">EXPERTISE</span>
                  <span className="block text-7xl lg:text-9xl font-black text-white drop-shadow-2xl" style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}>
                    INSPECTION
                  </span>
                  <span className="block text-3xl lg:text-4xl text-accent-400 mt-4 font-medium tracking-wider">
                    TECHNIQUE INDUSTRIELLE
                  </span>
                </h1>
              </motion.div>
              
              {/* Description avec animation */}
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-xl lg:text-2xl text-nordic-200 leading-relaxed mb-6 font-light">
                  Nous proposons des prestations d'inspection technique sur l'ensemble du cycle projet, en appui aux démarches qualité, sécurité et conformité documentaire de nos clients.
                </p>
                <p className="text-lg text-nordic-300 leading-relaxed font-medium">
                  Notre objectif : vous accompagner avec rigueur, méthode et fiabilité, en France comme à l'international.
                </p>
              </motion.div>
              
              {/* Élément décoratif */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12"
              >
                <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full"></div>
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