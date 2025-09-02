'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

const Histoire = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section avec background */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/3dactiv/images/histoire/background.avif"
            alt="3DACTIV - Notre histoire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-nordic-900/60"></div>
        </div>
        
        <div className="relative z-10 w-full pb-20">
          <div className="container-nordic">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white text-center"
            >
              Notre Histoire
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Lettre du fondateur */}
      <section className="py-20 bg-gradient-to-b from-metal-100 to-metal-200">
        <div className="container-nordic">
          <div className="max-w-4xl mx-auto">
            {/* Contenu de la lettre */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 lg:p-12 rounded-xl shadow-lg border-l-4 border-accent-600"
            >
              {/* En-tête de lettre */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-nordic-900 mb-4">Un mot du fondateur</h2>
                <div className="w-24 h-1 bg-accent-600 mx-auto"></div>
              </div>
              <div className="space-y-6 text-nordic-700 leading-relaxed text-justify">
                <p className="text-lg">
                  Nous sommes animés par une conviction simple : ce sont les femmes et les hommes de terrain qui font la réussite des projets industriels.
                </p>
                
                <p>
                  Depuis notre création en 2018, nous œuvrons avec constance pour atteindre un objectif clair : relier les bonnes compétences aux bons environnements, avec exigence, transparence et engagement.
                </p>

                <p>
                  Notre entreprise est née d'un constat vécu sur le terrain : dans des secteurs exigeants et parfois rigides, il manquait un véritable lien humain, une approche plus souple et plus attentive aux réalités vécues par chacun.
                </p>

                <p>
                  3D ACTIV s'est construite avec cette volonté de créer des ponts : entre les clients et leurs besoins techniques précis, et les prestataires qui détiennent le savoir-faire opérationnel. Entre ces deux mondes parfois cloisonnés, nous avons voulu jouer un rôle d'articulation et de confiance.
                </p>

                <p>
                  Notre ambition n'est pas la croissance à tout prix, mais la construction de relations fiables et pérennes, fondées sur la clarté, la responsabilité et le respect mutuel.
                </p>

                <p>
                  Notre histoire, c'est celle des femmes et des hommes qui nous font confiance, aujourd'hui comme demain : À nos clients, nous garantissons une haute exigence de qualité, de sécurité et de conformité à chaque étape de mission.
                </p>

                <p>
                  À nos intervenants, nous offrons un cadre professionnel stable, humain et respectueux, leur permettant de se concentrer sur l'essentiel : le travail bien fait.
                </p>

                <p>
                  Chaque partenariat que nous nouons est envisagé dans la durée. Nous croyons en la valeur du dialogue, en la montée en compétences, en l'écoute constante des enjeux de terrain.
                </p>

                <p>
                  3D ACTIV, c'est avant tout une équipe engagée, sérieuse et réactive, qui agit avec rigueur et intégrité pour faire en sorte que le savoir-faire serve toujours la performance.
                </p>

                {/* Signature */}
                <div className="text-right mt-12 pt-6 border-t border-nordic-200">
                  <p className="text-nordic-600 font-medium">
                    — Fondateur & Dirigeant de 3D ACTIV —
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 bg-gradient-to-b from-metal-200 to-metal-300">
        <div className="container-nordic">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-nordic-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-lg text-nordic-600 max-w-4xl mx-auto leading-relaxed">
              Chez 3D ACTIV, nos valeurs fondamentales guident chaque projet industriel que nous accompagnons, 
              alliant expertise technique, réactivité et innovation pour répondre aux défis des secteurs de l'énergie, 
              du nucléaire et de l'industrie.
            </p>
          </motion.div>

          {/* 3 colonnes avec traits verticaux */}
          <div className="relative">
            {/* Traits verticaux de séparation */}
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-accent-600 transform -translate-x-1/2"></div>
            <div className="absolute left-2/3 top-0 bottom-0 w-px bg-accent-600 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Excellence technique */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center p-6"
              >
                <h3 className="text-2xl font-bold text-nordic-900 mb-4">Excellence technique</h3>
                <p className="text-nordic-600 leading-relaxed">
                  Nous garantissons un haut niveau d'expertise, de rigueur et de précision dans chaque mission, 
                  quel que soit le contexte ou l'environnement.
                </p>
              </motion.div>

              {/* Engagement humain */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center p-6"
              >
                <h3 className="text-2xl font-bold text-nordic-900 mb-4">Engagement humain</h3>
                <p className="text-nordic-600 leading-relaxed">
                  Nous plaçons l'humain au cœur de notre approche : écoute, sécurité, intégration et fidélisation 
                  guident chaque collaboration.
                </p>
              </motion.div>

              {/* Fiabilité opérationnelle */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center p-6"
              >
                <h3 className="text-2xl font-bold text-nordic-900 mb-4">Fiabilité opérationnelle</h3>
                <p className="text-nordic-600 leading-relaxed">
                  Nous assurons une continuité de service stable et réactive, en adaptant nos solutions aux contraintes 
                  du terrain et aux enjeux de performance.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Histoire