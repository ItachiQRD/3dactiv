'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Atom, Wind } from 'lucide-react'
import Navigation from '../../components/Navigation'

const Industries = () => {
  const industries = [
    {
      id: 'nucleaire',
      title: 'Nucléaire',
      icon: Atom,
      image: '/images/industries/nucleaire-page.avif',
      description: 'Le secteur nucléaire impose un niveau d\'exigence technique, réglementaire et documentaire parmi les plus stricts de l\'industrie.',
      fullText: `3D ACTIV intervient aux côtés des exploitants, maîtres d'ouvrage, donneurs d'ordre et prestataires spécialisés, tout au long du cycle de vie des installations : de la construction d'unités neuves à la maintenance en exploitation, en passant par les arrêts de tranche et les opérations de démantèlement.

Nos intervenants : techniciens, ingénieurs, inspecteurs sont formés et expérimentés pour répondre aux exigences de sûreté et de qualité du secteur nucléaire. Leurs missions couvrent notamment :
• Contrôle qualité, revue documentaire et gestion des dossiers constructeurs
• Contrôle non destructif (CND) : RT, UT, MT, PT, VT
• Inspection réglementaire, soudure, conformité des équipements sous pression
• Supervision de travaux, planification, coordination technique, pilotage de lots

Toutes nos prestations sont réalisées dans le respect des référentiels en vigueur (ESPN, RCC-M, ISO 19443) et des directives de l'ASN, avec un haut niveau de traçabilité, de rigueur documentaire et d'engagement sur la conformité.`,
      layout: 'left' // Image à gauche, texte à droite
    },
    {
      id: 'petrole-gaz',
      title: 'Oil & Gas',
      icon: Zap,
      image: '/images/industries/gas-page.avif',
      description: 'Dans un secteur où les délais, la sécurité et la qualité conditionnent la réussite des projets, 3D ACTIV intervient auprès des acteurs de l\'industrie pétrolière et gazière, en France comme à l\'international, sur des projets onshore et offshore.',
      fullText: `Nous accompagnons nos clients : opérateurs, EPC, sociétés d'ingénierie et sous-traitants spécialisés sur l'ensemble de la chaîne de valeur :

Upstream : études de réservoirs, forage, installations de surface, ingénierie flow assurance, méthodes d'installation, essais et mise en production

Downstream : raffinerie, traitement, distribution, inspection d'équipements sous pression, maintenance des infrastructures, revamping d'unités

Nos compétences couvrent toutes les étapes du cycle projet :
• FEED & detail engineering, SIT, fabrication, commissioning
• Supervision de chantier, Project Control, planning
• Inspection terrain, CND, maintenance industrielle

Nos profils sont sélectionnés pour leur expérience de terrain, leur expériences internationale, et leur capacité à évoluer dans des contextes HSE exigeants.

Nous garantissons des prestations fiables, réactives et conformes aux standards internationaux.`,
      layout: 'right' // Image à droite, texte à gauche
    },
    {
      id: 'renouvelables',
      title: 'Énergies Renouvelables',
      icon: Wind,
      image: '/images/industries/energy-page.avif',
      description: 'La transition énergétique impose une montée en compétence rapide, structurée et durable.',
      fullText: `3D ACTIV accompagne les projets éoliens (onshore & offshore), solaires photovoltaïques, hydroélectriques et hybrides, en fournissant des ressources humaines techniques ciblées, prêtes à intervenir sur des sites aux contraintes multiples.

Nos prestations couvrent :
• Inspection qualité et CND sur fondations, structures métalliques ou assemblages en hauteur
• Commissioning, essais, HSE, supervision de travaux et raccordement électrique
• Ingénierie électricité/mécanique, maintenance préventive, corrective et repowering
• Coordination terrain et accompagnement en phase chantier, y compris dans des environnements soumis à des exigences environnementales ou réglementaires renforcées

Grâce à notre réseau d'intervenants disponibles, qualifiés et expérimentés, nous apportons une réponse concrète aux besoins de flexibilité, fiabilité et montée en performance des acteurs du renouvelable.`,
      layout: 'left' // Image à gauche, texte à droite
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-black">
        <div className="absolute inset-0 w-full h-full">
                     <img
             src="/3dactiv/images/industries/background.avif"
             alt="Industries énergétiques"
             className="w-full h-full object-cover opacity-40"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-blue-900/50 to-black/60"></div>
        </div>

        <div className="relative z-10 container-nordic">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              
                             <h1 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                 Nos Champs d'Action
               </h1>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-200 space-y-6"
            >
                             <p className="text-sm leading-relaxed text-justify">
                 Les secteurs industriels que nous accompagnons exigent rigueur, réactivité et maîtrise technique.
               </p>
               <p className="text-sm leading-relaxed text-justify">
                 Qu'il s'agisse d'énergie nucléaire, d'Oil & Gas ou de projets liés aux énergies renouvelables, nous mobilisons des compétences ciblées pour répondre aux enjeux complexes de chaque filière.
               </p>
               <p className="text-gray-200 text-sm">
                 Notre connaissance des environnements de terrain nous permet d'apporter des solutions humaines adaptées, en phase avec les standards opérationnels et réglementaires.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section key={industry.id} className="py-24 bg-white">
          <div className="container-nordic">
            {industry.layout === 'left' ? (
              // Image à gauche, texte à droite
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="order-2 lg:order-1"
                >
                  <div className="relative">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="order-1 lg:order-2 space-y-8"
                >
                                     <div className="mb-6">
                     <h2 className="text-xl lg:text-2xl font-bold text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                       {industry.title}
                     </h2>
                   </div>

                                     <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium text-justify">
                     {industry.description}
                   </p>

                   <div className="text-xs text-gray-600 leading-relaxed space-y-2 text-justify">
                     {industry.fullText.split('\n').map((paragraph, index) => (
                       <p key={index} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
                         {paragraph}
                       </p>
                     ))}
                   </div>


                </motion.div>
              </div>
            ) : (
              // Image à droite, texte à gauche
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                                     <div className="mb-6">
                     <h2 className="text-xl lg:text-2xl font-bold text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                       {industry.title}
                     </h2>
                   </div>

                                     <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium text-justify">
                     {industry.description}
                   </p>

                   <div className="text-xs text-gray-600 leading-relaxed space-y-2 text-justify">
                     {industry.fullText.split('\n').map((paragraph, index) => (
                       <p key={index} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
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
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="container-nordic text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                         <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
               Prêt à collaborer ?
             </h2>
             <p className="text-sm text-gray-300 mb-8 max-w-3xl mx-auto">
               Découvrez comment notre expertise peut répondre à vos besoins spécifiques dans l'industrie énergétique.
             </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium uppercase tracking-wider transition-colors duration-200">
                Nous contacter
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 font-medium uppercase tracking-wider transition-colors duration-200">
                Voir nos solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries