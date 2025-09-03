'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import AssetPath from '../../components/AssetPath'
import Footer from '../../components/Footer'

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-metal-100 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/mentions.avif"
            alt="Politique de cookies - 3D ACTIV"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-nordic-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-nordic text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Politique de Cookies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Informations sur l'utilisation des cookies et traceurs sur notre site
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container-nordic">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto prose prose-lg prose-nordic"
          >
            <div className="text-gray-700 leading-relaxed space-y-8">
              <p>
                Cette page vous informe de manière claire et transparente sur l'utilisation des cookies et autres traceurs lors de votre navigation sur le site www.3dactiv.com, conformément aux obligations légales en vigueur.
              </p>
              
              <p>
                Elle vous permet de comprendre leur finalité, leur durée de conservation, ainsi que vos droits et les moyens dont vous disposez pour gérer vos préférences en matière de confidentialité.
              </p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">1. Éditeur du site</h2>
              <p><strong>3D ACTIV</strong></p>
              <ul className="mt-4 space-y-2">
                <li><strong>Siège social :</strong> 14 Rue Édouard Nieuport, 92150 Suresnes, France</li>
                <li><strong>Contact :</strong> contact@3dactiv.com</li>
              </ul>
              <p className="mt-4">Société française collaborant avec des acteurs européens et internationaux dans les secteurs de l'industrie, de l'énergie et de l'ingénierie technique.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">2. Qu'est-ce qu'un cookie ?</h2>
              <ul className="space-y-3">
                <li>• Un cookie est un petit fichier texte déposé et stocké sur votre appareil (ordinateur, tablette, smartphone) lors de la consultation d'un site web.</li>
                <li>• Les cookies ont de multiples usages : permettre le bon fonctionnement du site, enregistrer vos préférences, analyser la fréquentation, ou personnaliser les contenus affichés.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">3. Types de cookies utilisés sur ce site</h2>
              <p>Le site www.3dactiv.com utilise les catégories de cookies suivantes :</p>
              
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-nordic-900 mb-3">🔹 Cookies strictement nécessaires (obligatoires)</h3>
                  <p>Ces cookies sont essentiels pour vous permettre de naviguer sur le site et d'utiliser ses fonctionnalités de base (ex : accès sécurisé, gestion de session, formulaires de contact).</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-nordic-900 mb-3">🔹 Cookies de performance / statistiques (avec consentement)</h3>
                  <p>Ces cookies collectent des informations anonymes sur la manière dont les visiteurs utilisent le site (nombre de visites, pages consultées, temps passé…).</p>
                  <p className="mt-2">Ils nous permettent d'améliorer l'expérience utilisateur et d'optimiser le contenu.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-nordic-900 mb-3">🔹 Cookies de personnalisation (avec consentement)</h3>
                  <p>Ils mémorisent vos préférences d'affichage et vos choix afin d'améliorer votre navigation future (ex : langue, résolution d'écran, préférences utilisateur).</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-nordic-900 mb-3">🔹 Cookies tiers (avec consentement)</h3>
                  <p>Certains contenus ou fonctionnalités intégrés (ex : vidéos, boutons de partage, cartes interactives, outils de recrutement) peuvent déposer des cookies provenant de services externes (YouTube, LinkedIn, Google Maps…).</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">4. Gestion du consentement</h2>
              <p>Conformément au RGPD et à la directive ePrivacy, votre consentement explicite est requis pour l'activation des cookies non essentiels.</p>
              <p className="mt-4">Un bandeau de consentement apparaît lors de votre première visite et vous permet :</p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• d'accepter tous les cookies,</li>
                <li>• de les refuser tous,</li>
                <li>• ou de les personnaliser selon vos préférences.</li>
              </ul>
              <p className="mt-4">Vous pouvez à tout moment modifier ou retirer votre consentement via le lien [Gestion des cookies] (à intégrer dans le site) situé en bas de page.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">5. Durée de conservation</h2>
              <ul className="space-y-3">
                <li>• Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur dépôt sur votre appareil, conformément à la réglementation en vigueur.</li>
                <li>• Les données collectées via ces cookies sont conservées au maximum 25 mois, de manière anonymisée ou pseudonymisée selon le cas.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">6. Données personnelles et cookies</h2>
              <ul className="space-y-3">
                <li>• Les cookies peuvent entraîner un traitement de données à caractère personnel, notamment les adresses IP ou les identifiants de navigation.</li>
                <li>• Ces traitements sont réalisés par 3D ACTIV ou ses prestataires en conformité avec le Règlement Général sur la Protection des Données (RGPD).</li>
                <li>• Pour en savoir plus sur vos droits, consultez notre Politique de Confidentialité.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">7. Vos droits</h2>
              <p>Vous disposez à tout moment des droits suivants sur vos données :</p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• Accès</li>
                <li>• Rectification</li>
                <li>• Effacement</li>
                <li>• Limitation du traitement</li>
                <li>• Portabilité</li>
                <li>• Opposition</li>
              </ul>
              <p className="mt-4">Vous pouvez exercer vos droits en contactant <strong>contact@3dactiv.com</strong> ou en adressant un courrier à :</p>
              <p><strong>3D ACTIV – 14 Rue Édouard Nieuport, 92150 Suresnes – France.</strong></p>
              <p className="mt-4">En cas de désaccord, vous avez la possibilité de saisir la CNIL (www.cnil.fr).</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">8. Modification de la politique de cookies</h2>
              <ul className="space-y-3">
                <li>• La présente politique est susceptible d'évoluer à tout moment afin de refléter les évolutions légales ou techniques.</li>
                <li>• Nous vous invitons à la consulter régulièrement pour rester informé.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PolitiqueCookies
