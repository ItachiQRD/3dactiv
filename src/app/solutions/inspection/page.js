'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import AssetPath from '../../../components/AssetPath'
import ImageWrapper from '../../../components/ImageWrapper'

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
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/inspection/background.avif"
            alt="3DACTIV - Inspection"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container-nordic">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-t-xl p-8 lg:p-12 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-nordic-900 text-center mb-6">
                Inspection
              </h1>
              <p className="text-base text-nordic-700 text-center leading-relaxed mb-4">
                Nous proposons des prestations d'inspection technique sur l'ensemble du cycle projet, en appui aux démarches qualité, sécurité et conformité documentaire de nos clients.
              </p>
              <p className="text-sm text-nordic-600 text-center leading-relaxed">
                Notre objectif : vous accompagner avec rigueur, méthode et fiabilité, en France comme à l'international.
              </p>
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
