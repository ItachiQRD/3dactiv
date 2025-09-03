'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import AssetPath from '../../components/AssetPath'
import Footer from '../../components/Footer'

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-metal-100 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <AssetPath
            src="/images/mentions.avif"
            alt="Politique de confidentialité - 3D ACTIV"
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
            Politique de Confidentialité
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Protection et traitement de vos données personnelles
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
                Cette page vous informe de manière claire et transparente sur la manière dont vos données personnelles sont collectées, traitées et protégées lors de votre utilisation du site www.3dactiv.com, en conformité avec le Règlement Général sur la Protection des Données (RGPD) et la législation française en vigueur.
              </p>
              
              <p>
                Chez 3D ACTIV, la protection de vos données personnelles est une priorité. Cette politique de confidentialité vise à vous informer de manière claire, transparente et conforme à la législation sur la manière dont nous collectons, utilisons, protégeons et stockons vos données personnelles dans le cadre de nos activités.
              </p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">1. Identité du responsable de traitement</h2>
              <p><strong>Responsable du traitement :</strong></p>
              <ul className="mt-4 space-y-2">
                <li><strong>3D ACTIV</strong></li>
                <li><strong>Adresse :</strong> 14 Rue Édouard Nieuport, 92150 Suresnes, France</li>
                <li><strong>Email :</strong> contact@3dactiv.com</li>
              </ul>
              <p className="mt-4">3D ACTIV est une entreprise française spécialisée dans la fourniture de services techniques et humains dans les secteurs de l'énergie, du nucléaire, de l'industrie et des énergies renouvelables, opérant en France, en Europe et à l'international.</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">2. Finalités des traitements</h2>
              <p>Les données personnelles collectées sur le site www.3dactiv.com sont utilisées dans les finalités suivantes :</p>
              <ul className="mt-4 space-y-3 ml-6">
                <li>• Répondre à vos demandes via le formulaire de contact ;</li>
                <li>• Gérer les candidatures reçues via le formulaire "Job Search" ;</li>
                <li>• Assurer le suivi commercial avec nos partenaires et prospects ;</li>
                <li>• Améliorer l'expérience utilisateur et la sécurité du site ;</li>
                <li>• Respecter nos obligations légales, fiscales et réglementaires.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">3. Catégories de données collectées</h2>
              <p>Selon les finalités, les données suivantes peuvent être collectées :</p>
              <ul className="mt-4 space-y-3 ml-6">
                <li>• <strong>Identité :</strong> nom, prénom</li>
                <li>• <strong>Coordonnées :</strong> e-mail, téléphone, entreprise</li>
                <li>• <strong>Données professionnelles :</strong> CV, lettre de motivation, compétences</li>
                <li>• <strong>Données techniques :</strong> adresse IP, type de navigateur, données de navigation (via cookies, voir Politique de Cookies)</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">4. Base légale du traitement</h2>
              <p>Conformément à l'article 6 du RGPD, les traitements sont fondés :</p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• sur votre consentement (formulaires de contact, candidature, cookies) ;</li>
                <li>• sur l'exécution d'un contrat ou de mesures précontractuelles ;</li>
                <li>• sur notre intérêt légitime (suivi commercial, statistiques) ;</li>
                <li>• sur le respect d'obligations légales.</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">5. Durée de conservation des données</h2>
              <p>Les données sont conservées pour les durées suivantes :</p>
              <ul className="mt-4 space-y-3 ml-6">
                <li>• <strong>Données de contact :</strong> 3 ans après le dernier échange sans réponse ;</li>
                <li>• <strong>Données de candidature :</strong> 2 ans après réception en l'absence de recrutement ;</li>
                <li>• <strong>Données contractuelles :</strong> pendant la durée de la relation contractuelle, puis 5 à 10 ans selon les obligations comptables et fiscales ;</li>
                <li>• <strong>Cookies :</strong> jusqu'à 13 mois (voir Politique de Cookies).</li>
              </ul>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">6. Destinataires des données</h2>
              <p>Les données collectées sont uniquement destinées à :</p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• L'équipe interne de 3D ACTIV (RH, commercial, technique) ;</li>
                <li>• Les partenaires et sous-traitants autorisés dans le cadre strict des finalités ci-dessus ;</li>
                <li>• Les autorités administratives ou judiciaires en cas d'obligation légale.</li>
              </ul>
              <p className="mt-4"><strong>Aucune donnée n'est vendue ni cédée à des tiers non autorisés.</strong></p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">7. Transfert de données hors UE</h2>
              <p>3D ACTIV peut collaborer avec des partenaires internationaux. Lorsque des données sont transférées en dehors de l'Espace Économique Européen, nous veillons à ce que des garanties adéquates soient en place (clauses contractuelles types, décision d'adéquation, etc.).</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">8. Sécurité des données</h2>
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, accès non autorisé, altération ou divulgation, conformément à l'article 32 du RGPD (pare-feu, contrôle d'accès, chiffrement, hébergement sécurisé...).</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">9. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="mt-4 space-y-2 ml-6">
                <li>• Droit d'accès à vos données ;</li>
                <li>• Droit de rectification ;</li>
                <li>• Droit à l'effacement (droit à l'oubli) ;</li>
                <li>• Droit à la limitation du traitement ;</li>
                <li>• Droit d'opposition au traitement ;</li>
                <li>• Droit à la portabilité de vos données.</li>
              </ul>
              <p className="mt-4">Vous pouvez exercer vos droits à tout moment en nous contactant à <strong>contact@3dactiv.com</strong> ou par courrier à :</p>
              <p><strong>3D ACTIV – 14 Rue Édouard Nieuport, 92150 Suresnes – France.</strong></p>
              <p className="mt-4">En cas de désaccord non résolu, vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>

              <h2 className="text-2xl font-bold text-nordic-900 mt-12 mb-6">10. Modification de la politique</h2>
              <p>La présente politique de confidentialité peut être modifiée à tout moment pour refléter les évolutions législatives, réglementaires ou techniques. La version en vigueur est celle publiée sur le site à la date de votre consultation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PolitiqueConfidentialite
