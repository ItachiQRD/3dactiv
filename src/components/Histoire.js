'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AssetPath from './AssetPath'
import Link from 'next/link'

const Histoire = () => {
  return (
    <section id="histoire" className="relative min-h-screen flex items-center bg-gradient-to-b from-metal-400 via-metal-300 to-metal-200">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <AssetPath
          src="/images/histoire-3dactiv.avif"
          alt="3DACTIV - Notre histoire"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-nordic-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-nordic text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Empty for balance */}
          <div></div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-wide text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Notre vision, votre réussite
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed mb-8">
              <p>
                Fondée en 2018, 3D ACTIV mobilise des ressources humaines techniques qualifiées pour les secteurs à fortes exigences : énergie, nucléaire, oil & gas, énergies renouvelables.
              </p>
              <p>
                Nous intervenons en France et à l'international, avec des inspecteurs, techniciens CND certifiés et ingénieurs spécialisés, rigoureusement sélectionnés.
              </p>
              
              <div className="pt-4">
                <p>
                  Notre approche repose sur des relations durables, une communication transparente et la fidélisation des intervenants, pour assurer une collaboration équilibrée entre client, consultant et société.
                </p>
                <p>
                  Nous garantissons des prestations à haute valeur ajoutée, alliant exigence technique et engagement humain.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/histoire" className="btn-primary text-sm py-2 px-6 inline-block">
              Découvrir notre histoire
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Histoire
