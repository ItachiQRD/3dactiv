'use client'

import { motion } from 'framer-motion'
import Navigation from '../../../components/Navigation'
import AssetPath from '../../../components/AssetPath'
import ImageWrapper from '../../../components/ImageWrapper'

const ControleNonDestructif = () => {
  const sections = [
    {
      id: 'services-cnd',
      title: 'Des services CND adaptés à chaque environnement industriel',
      content: `Nos équipes interviennent sur des sites industriels sensibles où la fiabilité du contrôle non destructif est un impératif : nucléaire, pétrole & gaz, énergies renouvelables, infrastructures métalliques, etc.

Nous adaptons les techniques utilisées aux contraintes spécifiques de chaque environnement : accessibilité, matériau, type de défaut attendu, conditions d'intervention.

Grâce à leur polyvalence, nos techniciens peuvent mettre en œuvre aussi bien des méthodes conventionnelles que des procédés avancés, selon le besoin :
• Inspections en zone confinée ou atmosphère contrôlée
• Opérations en hauteur, onshore, offshore ou milieux corrosifs
• Sites en activité nécessitant une coordination stricte avec la production

Nos ressources sont mobilisables rapidement, en France comme à l'international, avec une parfaite maîtrise des exigences terrain, des procédures sécurité et des référentiels clients.`
    },
    {
      id: 'controles-non-destructifs',
      title: 'Contrôles Non Destructifs',
      image: '/images/solutions/cnd/cnd1.avif',
      content: `3D ACTIV fournit des prestations de Contrôle Non Destructif (CND) en appui aux opérations de fabrication, de maintenance, ou d'inspection en service.

Nos techniciens interviennent dans des environnements à forte exigence réglementaire : nucléaire, oil & gas, énergie, infrastructures critiques.

➤ Méthodes conventionnelles (Basic Techniques)

Nous maîtrisons les méthodes CND dites conventionnelles, largement utilisées dans l'industrie pour détecter des défauts de surface ou de volume : VT - PT - MT - UT - RT

Ces techniques sont appliquées dans le respect strict des procédures client, des normes en vigueur, et des contraintes HSE.

➤ Méthodes avancées (Advanced Techniques)

Nous mobilisons également des techniciens formés aux méthodes plus spécialisées ou automatisées, adaptées aux inspections complexes ou à forte criticité : IRIS - TOFD - Phased Array UT (PAUT) - Pulsed Eddy Current (PEC) - Digital Radiography (DR) - ACFM (Alternating Current Field Measurement)

Ces techniques permettent une analyse fine, une traçabilité numérique, et une réduction des temps d'immobilisation.

➤ Certifications & Reconnaissance internationale

Nos intervenants sont qualifiés selon les principaux référentiels internationaux :
• ISO 9712
• PCN
• ASNT
• Autres équivalences reconnues selon le pays d'exécution ou les exigences client`,
      layout: 'left'
    },
    {
      id: 'pourquoi-choisir',
      title: 'Pourquoi choisir nos experts CND ?',
      image: '/images/solutions/cnd/cnd2.avif',
      content: `Nos intervenants sont sélectionnés pour leur expérience terrain, leur maîtrise technique, et leur capacité à travailler selon les standards et codes internationaux.

Chaque mission est adaptée au contexte local, au type de structure à inspecter, et aux exigences qualité du client.

Nous garantissons :
• La maîtrise des procédures CND selon la méthode appliquée
• La traçabilité documentaire complète
• Des rapports clairs, structurés, adaptés aux standards du site ou de l'exploitant
• L'adaptabilité aux langages techniques (anglais, français, etc.)`,
      layout: 'right'
    },
    {
      id: 'processus-selection',
      title: 'Un processus de sélection structuré & conforme',
      image: '/images/solutions/cnd/cnd3.avif',
      content: `Nos techniciens CND sont recrutés selon un processus de sélection rigoureux, conforme à notre système de management de la qualité ISO 9001.

Chaque profil est vérifié sur la base :
• Des certifications CND valides et vérifiables
• De l'expérience sectorielle (nucléaire, oil & gas, offshore, etc.)
• Des retours d'expériences sur chantiers en France et à l'international

Cette exigence garantit la mobilisation rapide de profils fiables, opérationnels sur des environnements critiques à fort enjeu réglementaire.`,
      layout: 'left'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/solutions/cnd/background.avif"
            alt="3DACTIV - Contrôle Non-Destructif"
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
                Contrôle Non-Destructif
              </h1>
              <p className="text-base text-nordic-700 text-center leading-relaxed mb-4">
                Le Contrôle Non Destructif (CND) est un maillon essentiel de la chaîne qualité dans les secteurs industriels à forte exigence réglementaire.
              </p>
              <p className="text-sm text-nordic-600 text-center leading-relaxed">
                Nous mobilisons des techniciens certifiés pour réaliser des examens CND fiables et traçables, conformes aux normes internationales, en France comme à l'étranger.
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
                        className="w-full h-auto min-h-[500px] object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent rounded-lg"></div>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent rounded-lg"></div>
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

export default ControleNonDestructif
