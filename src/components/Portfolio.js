'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AssetPath from './AssetPath'

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-metal-200 via-metal-100 to-white">
      <div className="container-nordic">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nordic-900 mb-4 sm:mb-6">
            Notre Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-nordic-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
            Découvrez nos réalisations et succès dans le recrutement énergétique
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-nordic-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-cover"
            >
              <source src="/3dactiv/videos/portfolio.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center px-4"
        >
          <Link href="/portfolio" className="btn-primary text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 inline-block">
            Découvrir nos réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
