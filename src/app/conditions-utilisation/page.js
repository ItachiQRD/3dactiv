'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import AssetPath from '../../components/AssetPath'

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-metal-100 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/mentions.avif"
            alt="Conditions Générales d'Utilisation - 3D ACTIV"
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
            Conditions Générales d'Utilisation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Règles d'accès et d'utilisation du site 3D ACTIV
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
                Cette page définit les règles d'accès, de navigation et d'utilisation du site www.3dactiv.com, afin de garantir un usage responsable, sécurisé et conforme à la législation en vigueur.
              </p>
              
              <p>
                En consultant ce site, tout utilisateur accepte pleinement les présentes conditions générales d'utilisation, rédigées dans le respect du droit français et des obligations légales applicables.
              </p>

              <p>
                Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités d'accès et d'utilisation du site internet www.3dactiv.com édité par la société 3D ACTIV.
              </p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">1. Mentions légales</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>3D ACTIV</strong></p>
                <ul className="mt-4 space-y-2">
                  <li><strong>Siège social :</strong> 14 Rue Édouard Nieuport, 92150 Suresnes, France</li>
                  <li><strong>Email :</strong> contact@3dactiv.com</li>
                  <li><strong>SIRET / RCS :</strong> 84995020900015</li>
                  <li><strong>CODE NAF ou APE :</strong> 7112B - Ingénierie, études techniques</li>
                  <li><strong>FORME JURIDIQUE :</strong> Société à responsabilité limitée (SARL)</li>
                </ul>
                <p className="mt-4">3D ACTIV est une société française opérant dans les secteurs de l'énergie, du nucléaire, de l'industrie, de l'oil & gas et des énergies renouvelables. Elle intervient en France, en Europe et à l'international.</p>
              </div>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">2. Objet du site</h2>
              <p>Le site www.3dactiv.com a pour vocation de :</p>
              <ul className="mt-4 space-y-3 ml-6">
                <li>• Présenter l'entreprise, ses expertises et ses secteurs d'intervention ;</li>
                <li>• Mettre à disposition des informations sur ses services et ses offres d'emploi ;</li>
                <li>• Permettre aux utilisateurs de contacter l'entreprise via un formulaire ;</li>
                <li>• Offrir aux candidats un espace de candidature simplifié.</li>
              </ul>
              <p className="mt-4">L'utilisation du Site implique l'acceptation pleine et entière des présentes CGU. Si vous refusez tout ou partie de ces conditions, vous êtes invité à ne pas utiliser le Site.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">3. Accès au site</h2>
              <ul className="space-y-3">
                <li>• Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Tous les coûts liés à l'accès (matériel, logiciels, connexion) sont à la charge de l'utilisateur.</li>
                <li>• L'éditeur se réserve le droit d'interrompre ou de suspendre l'accès au site, pour maintenance, mise à jour, ou tout autre motif sans préavis.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">4. Comportement de l'utilisateur</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p>En accédant au Site, l'utilisateur s'engage à :</p>
                <ul className="mt-4 space-y-2 ml-6">
                  <li>• Utiliser le Site uniquement à des fins légales et non commerciales (hors partenaires) ;</li>
                  <li>• Ne pas perturber ou tenter de perturber le fonctionnement du Site ;</li>
                  <li>• Ne pas introduire de virus ou tout autre code malveillant ;</li>
                  <li>• Ne pas tenter d'accéder à des zones non autorisées.</li>
                </ul>
                <p className="mt-4">Tout manquement pourra entraîner la suppression de l'accès au site et, si nécessaire, des poursuites judiciaires.</p>
              </div>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">5. Données personnelles</h2>
              <ul className="space-y-3">
                <li>• L'utilisation du Site peut entraîner la collecte et le traitement de données personnelles (via formulaires, cookies, etc.).</li>
                <li>• Ces traitements sont réalisés conformément au Règlement Général sur la Protection des Données (RGPD) et à la Loi Informatique et Libertés modifiée.</li>
                <li>• Pour plus d'informations, consultez notre Politique de Confidentialité et notre Politique de Cookies.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">6. Propriété intellectuelle</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li>• Tous les éléments du Site (textes, images, graphismes, logos, icônes, fichiers, contenus, structure) sont la propriété exclusive de 3D ACTIV ou font l'objet d'une licence d'utilisation.</li>
                  <li>• Toute reproduction, diffusion, modification, adaptation ou extraction, totale ou partielle, est strictement interdite sans l'autorisation préalable et écrite de 3D ACTIV.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">7. Responsabilité</h2>
              <p>L'éditeur du Site ne peut être tenu responsable :</p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• D'interruptions temporaires du service ;</li>
                <li>• D'inexactitudes, erreurs ou omissions involontaires dans les contenus ;</li>
                <li>• De tout dommage indirect lié à l'usage du site (perte de données, de temps, de revenus).</li>
              </ul>
              <p className="mt-4">L'utilisateur utilise le Site sous sa seule responsabilité.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">8. Liens hypertextes</h2>
              <p>Le Site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif et n'impliquent aucune responsabilité de 3D ACTIV quant à leur contenu, leur politique de confidentialité ou leur sécurité.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">9. Modification des CGU</h2>
              <p>3D ACTIV se réserve le droit de modifier les présentes CGU à tout moment, sans préavis. L'utilisateur est invité à les consulter régulièrement.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">10. Loi applicable & juridiction compétente</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li>• Les présentes CGU sont régies par le droit français.</li>
                  <li>• Tout litige relatif à l'interprétation ou l'exécution de ces conditions relèvera des tribunaux compétents du ressort de Paris, sauf disposition légale impérative contraire.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ConditionsUtilisation
