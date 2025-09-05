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
      
      {/* Hero Section - Style Grid avec Stats */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/inspection/background.avif"
            alt="Inspection industrielle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-nordic-900/80 via-nordic-800/60 to-nordic-700/40"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center space-x-2 bg-accent-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent-400/30 mb-8"
              >
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                <span className="text-accent-200 text-sm font-medium">EXPERTISE TECHNIQUE</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6"
              >
                <span className="block">Inspection</span>
                <span className="block text-accent-400">Industrielle</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-nordic-200 max-w-3xl mx-auto"
              >
                Expertise technique et conformité réglementaire pour vos projets industriels les plus exigeants
              </motion.p>
            </div>
            
            {/* Grid de stats et services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  number: "500+",
                  label: "Inspections réalisées",
                  icon: "🔍",
                  color: "from-blue-500/20 to-blue-600/20",
                  borderColor: "border-blue-400/30"
                },
                {
                  number: "15+",
                  label: "Années d'expérience",
                  icon: "⏰",
                  color: "from-green-500/20 to-green-600/20",
                  borderColor: "border-green-400/30"
                },
                {
                  number: "100%",
                  label: "Conformité réglementaire",
                  icon: "✅",
                  color: "from-accent-500/20 to-accent-600/20",
                  borderColor: "border-accent-400/30"
                },
                {
                  number: "24/7",
                  label: "Disponibilité",
                  icon: "🚀",
                  color: "from-purple-500/20 to-purple-600/20",
                  borderColor: "border-purple-400/30"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02
                  }}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${stat.borderColor} hover:bg-white/15 transition-all duration-300 text-center`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-nordic-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Services grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Inspection Visuelle",
                  description: "Contrôles visuels approfondis selon les normes en vigueur",
                  features: ["VT - Visuel", "PT - Pénétration", "Conformité ISO"]
                },
                {
                  title: "Contrôles Spécialisés",
                  description: "Techniques avancées pour détecter les défauts cachés",
                  features: ["Ultrasons", "Magnétoscopie", "Radiographie"]
                },
                {
                  title: "Certification",
                  description: "Validation et certification selon les standards internationaux",
                  features: ["ISO 9712", "PCN", "ASNT Level II/III"]
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.0 + index * 0.2,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02
                  }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-nordic-200 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.2 + index * 0.2 + featureIndex * 0.1
                        }}
                        className="flex items-center space-x-2 text-accent-300"
                      >
                        <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="bg-accent-600 hover:bg-accent-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <span>Découvrir nos services</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <button className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl font-semibold transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <span>Contactez-nous</span>
                  <Send className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <section key={section.id} className="py-20 bg-white">
          <div className="container-nordic">
            {section.image ? (
              section.layout === 'left' ? (
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                  >
                    <div className="relative">
                      <ImageWrapper
                        src={section.image}
                        alt={section.title}
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 space-y-6"
                  >
                    <h2 className="text-2xl lg:text-3xl font-bold text-nordic-900">
                      {section.title}
                    </h2>
                    <div className="text-sm text-nordic-700 leading-relaxed space-y-3 text-justify">
                      {section.content.split('\n').map((paragraph, index) => (
                        <p key={index} className={paragraph.startsWith('•') ? 'ml-4 relative' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl lg:text-3xl font-bold text-nordic-900">
                      {section.title}
                    </h2>
                    <div className="text-sm text-nordic-700 leading-relaxed space-y-3 text-justify">
                      {section.content.split('\n').map((paragraph, index) => (
                        <p key={index} className={paragraph.startsWith('•') ? 'ml-4 relative' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative">
                      <ImageWrapper
                        src={section.image}
                        alt={section.title}
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
                    </div>
                  </motion.div>
                </div>
              )
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center space-y-6"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-nordic-900">
                  {section.title}
                </h2>
                <div className="text-sm text-nordic-700 leading-relaxed space-y-3 text-justify">
                  {section.content.split('\n').map((paragraph, index) => (
                    <p key={index} className={paragraph.startsWith('•') ? 'ml-4 relative' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      ))}


    </div>
  )
}

export default Inspection
