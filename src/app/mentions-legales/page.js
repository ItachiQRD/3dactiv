'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import AssetPath from '../../components/AssetPath'

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-metal-100 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/mentions.avif"
            alt="Mentions légales - 3D ACTIV"
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
            Mentions Légales
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Informations légales et conditions d'utilisation du site 3D ACTIV
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
                Cette page contient l'ensemble des informations légales relatives à l'édition, la gestion, l'hébergement et l'utilisation du site www.3dactiv.com, conformément à la législation française en vigueur.
              </p>
              
              <p>
                Elle précise également les droits des utilisateurs en matière de données personnelles, de propriété intellectuelle et de responsabilité, dans le respect du RGPD et de la loi pour la confiance dans l'économie numérique (LCEN).
              </p>

              <p>
                Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les utilisateurs et visiteurs du site internet www.3dactiv.com sont informés des présentes mentions légales.
              </p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">1. Éditeur du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Le présent site est édité par :</strong> 3D ACTIV</p>
                <p>Entreprise spécialisée dans la fourniture de services techniques et industriels dans les secteurs de l'énergie, de l'oil & gas, du nucléaire et des énergies renouvelables.</p>
                <ul className="mt-4 space-y-2">
                  <li><strong>Siège social :</strong> 14 Rue Édouard Nieuport, 92150 Suresnes, France</li>
                  <li><strong>Adresse e-mail :</strong> contact@3dactiv.com</li>
                  <li><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</li>
                  <li><strong>N° SIRET :</strong> 84995020900015</li>
                  <li><strong>TVA intracommunautaire :</strong> FR96849950209</li>
                  <li><strong>Code APE / NAF :</strong> 7112B - Ingénierie, études techniques</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">2. Hébergement du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Le site est hébergé par :</strong> OVH</p>
                <ul className="mt-4 space-y-2">
                  <li><strong>Adresse :</strong> 2, rue Kellermann, 59100 Roubaix</li>
                  <li><strong>Contact e-mail :</strong> contact@3dactiv.com</li>
                  <li><strong>Site web de l'hébergeur :</strong> www.ovhcloud.com/fr/</li>
                </ul>
                <p className="mt-4">Ce prestataire assure le stockage permanent des données conformément à la législation française et européenne en vigueur.</p>
              </div>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">3. Contenu du site</h2>
              <ul className="space-y-3">
                <li>• Le site www.3dactiv.com a pour objet de présenter les activités, services et offres d'emploi de la société 3D ACTIV.</li>
                <li>• Les informations fournies sont régulièrement mises à jour, mais peuvent contenir des inexactitudes ou des omissions involontaires.</li>
                <li>• 3D ACTIV se réserve le droit de modifier le contenu du site à tout moment, sans préavis.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">4. Propriété intellectuelle</h2>
              <ul className="space-y-3">
                <li>• Tous les éléments (textes, images, vidéos, logos, graphismes, icônes, design, base de données, structure du site…) présents sur le site www.3dactiv.com sont protégés par le Code de la propriété intellectuelle et restent la propriété exclusive de 3D ACTIV ou de leurs auteurs respectifs en cas de licence ou cession.</li>
                <li>• Toute reproduction, diffusion, modification ou adaptation, totale ou partielle, sans l'autorisation expresse de 3D ACTIV est strictement interdite et constitue un délit de contrefaçon puni par la loi.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">5. Protection des données personnelles – RGPD</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p>Conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679) et à la Loi Informatique et Libertés modifiée, les données collectées via les formulaires (contact, candidature, etc.) sont strictement utilisées dans le cadre de la gestion de la relation commerciale et du recrutement.</p>
                
                <div className="mt-6">
                  <p><strong>Responsable du traitement :</strong> 3D ACTIV</p>
                  <p><strong>Finalité :</strong> gestion des candidatures, traitement des demandes, envoi de communications professionnelles</p>
                  <p><strong>Durée de conservation :</strong> maximum 24 mois à compter du dernier contact</p>
                </div>

                <div className="mt-6">
                  <p>Les utilisateurs disposent d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de leurs données.</p>
                  <p>Ces droits peuvent être exercés en envoyant un e-mail à <strong>contact@3dactiv.com</strong> ou par courrier postal à l'adresse du siège social.</p>
                  <p>En cas de réclamation, vous pouvez également saisir la CNIL (www.cnil.fr).</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">6. Cookies</h2>
              <ul className="space-y-3">
                <li>• Le site www.3dactiv.com peut être amené à utiliser des cookies à des fins de mesure d'audience, de navigation ou de personnalisation.</li>
                <li>• L'utilisateur peut paramétrer ses préférences depuis le bandeau de consentement ou directement dans son navigateur.</li>
                <li>• Pour en savoir plus, consultez notre Politique de cookies.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">7. Responsabilité</h2>
              <p>3D ACTIV ne saurait être tenue responsable en cas :</p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• d'interruption temporaire ou permanente du site,</li>
                <li>• de bugs techniques ou d'intrusion externe,</li>
                <li>• de dommages indirects résultant de l'usage du site ou des informations qu'il contient.</li>
              </ul>
              <p className="mt-4">L'utilisateur est seul responsable de l'utilisation qu'il fait du site et des informations fournies.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">8. Droit applicable & juridiction compétente</h2>
              <ul className="space-y-3">
                <li>• Les présentes mentions légales sont régies par le droit français.</li>
                <li>• En cas de litige, compétence exclusive est attribuée aux tribunaux français du ressort du siège de la société, sauf disposition légale impérative contraire.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MentionsLegales
