'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import AssetPath from '../../../components/AssetPath'
import { processImageUrl } from '../../../utils/assetPath'

const AssistanceTechnique = () => {
  const sections = [
    {
      id: 'expertise-terrain',
      title: 'Expertise opérationnelle sur site industriel',
      content: `Nos collaborateurs interviennent directement au sein de chantiers, unités de production et plateformes énergétiques, dans des secteurs tels que le nucléaire, l'oil & gas, les énergies renouvelables ou les infrastructures lourdes.

Leur mission : assurer la supervision et l'exécution des étapes critiques, tout en veillant au respect des exigences en matière de qualité, sécurité et planning.

Nous déployons notamment :
• Techniciens spécialisés en maintenance, installation et suivi technique
• Superviseurs de chantier assurant le contrôle et la coordination des travaux
• Experts en commissioning et essais pour la validation des performances techniques
• Coordinateurs HSE, intégrés aux protocoles de sécurité et de prévention

Chaque intervention est structurée pour répondre aux réalités du terrain : délais, co-activité, normes strictes et environnement à haut niveau de sécurité.`
    },
    {
      id: 'competences-ingenierie',
      title: 'Compétences techniques en environnement d\'ingénierie',
      image: '/images/solutions/assistance/assistance1.avif',
      content: `En complément des missions terrain, 3D ACTIV mobilise des profils capables d'agir en phases de préparation, de suivi et de pilotage, au sein de bureaux d'études et cellules de gestion de projet.

Ces compétences permettent de fluidifier le lien entre conception et exécution, et de garantir la maîtrise technique et documentaire de chaque étape.

Nous couvrons notamment :
• Ingénieurs méthode et qualité pour structurer et optimiser la préparation des travaux
• Spécialistes planning et Project Control pour le suivi des délais, coûts et ressources
• Chargés de gestion documentaire pour assurer la traçabilité et la conformité des livrables
• Experts en coordination multi-acteurs pour centraliser les échanges entre conception, fabrication et chantier

Ces profils garantissent une continuité entre la phase d'ingénierie et le terrain, contribuant à la performance globale des projets.`,
      layout: 'left'
    },
    {
      id: 'pourquoi-choisir',
      title: 'Pourquoi choisir nos experts en assistance technique ?',
      image: '/images/solutions/assistance/assistance2.avif',
      content: `Depuis 2018, 3D ACTIV a bâti un réseau de spécialistes fiables, capables de s'intégrer rapidement et efficacement aux environnements industriels les plus exigeants.

Nos intervenants apportent un renfort ciblé et réactif, qu'il s'agisse d'un appui ponctuel ou d'un accompagnement long terme.

Nous nous engageons à :
• Mobiliser rapidement des profils qualifiés et opérationnels
• Soutenir vos équipes sur les phases critiques : préparation, supervision, essais ou mise en service
• Garantir le respect des standards qualité, HSE et planning
• Assurer un suivi régulier pour optimiser l'intégration et la performance des missions`,
      layout: 'right'
    },
    {
      id: 'processus-qualite',
      title: 'Un processus qualité structuré et conforme',
      image: '/images/solutions/assistance/assistance3.avif',
      content: `Chaque profil est sélectionné via un processus d'évaluation rigoureux, basé sur des critères techniques, comportementaux et documentaires.

Ce dispositif nous permet de garantir l'efficacité et la fiabilité des interventions, tout en assurant une intégration harmonieuse au sein de vos équipes et de vos projets.

Notre suivi de mission, couplé à un retour d'expérience systématique, permet de maintenir un haut niveau de qualité et de performance dans chacune de nos prestations.`,
      layout: 'left'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/assistance/background.avif"
            alt="3DACTIV - Assistance Technique"
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
                Assistance Technique
              </h1>
              <p className="text-base text-nordic-700 text-center leading-relaxed mb-4">
                Nous apportons à nos partenaires industriels un soutien opérationnel structuré pour renforcer leurs équipes, sur site comme en environnement d'ingénierie.
              </p>
              <p className="text-sm text-nordic-600 text-center leading-relaxed">
                Nos intervenants sont sélectionnés pour leur expertise technique, leur autonomie, et leur capacité à évoluer dans des contextes industriels exigeants, en France comme à l'international.
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
                      <img
                        src={processImageUrl(section.image)}
                        alt={section.title}
                        className="w-full h-auto min-h-[500px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-lg"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 space-y-6"
                  >
                    <h2 className="text-2xl lg:text-3xl font-bold text-nordic-900 text-center">
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
                    <h2 className="text-2xl lg:text-3xl font-bold text-nordic-900 text-center">
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
                      <img
                        src={processImageUrl(section.image)}
                        alt={section.title}
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-lg"></div>
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

export default AssistanceTechnique
