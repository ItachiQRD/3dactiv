'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const Presentation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const [counts, setCounts] = useState({
    year: 0,
    projects: 0,
    incidents: 0,
    experience: 0,
    experts: 0,
    terrain: 0
  })


  const stats = [
    { key: 'year', number: 2018, label: 'Année de création' },
    { key: 'projects', number: 50, label: 'Projets réalisés en France et à l\'international' },
    { key: 'incidents', number: 0, label: 'Incident - Sécurité maîtrisée' },
    { key: 'experience', number: 20, label: 'Années d\'expérience terrain combinée' },
    { key: 'experts', number: 20, label: 'Experts spécialistes mobilisables' },
    { key: 'terrain', number: 100, label: 'Terrain - Solutions adaptées aux réalités industrielles' }
  ]

  useEffect(() => {
    if (isInView) {
      // Réinitialiser les compteurs à 0 à chaque fois qu'on entre dans la section
      setCounts({
        year: 0,
        projects: 0,
        incidents: 0,
        experience: 0,
        experts: 0,
        terrain: 0
      })

      const duration = 2000 // 2 secondes
      const steps = 60
      const stepDuration = duration / steps

      const timer = setInterval(() => {
        setCounts(prev => ({
          year: Math.min(prev.year + Math.ceil(2018 / steps), 2018),
          projects: Math.min(prev.projects + Math.ceil(50 / steps), 50),
          incidents: 0, // Reste à 0
          experience: Math.min(prev.experience + Math.ceil(20 / steps), 20),
          experts: Math.min(prev.experts + Math.ceil(20 / steps), 20),
          terrain: Math.min(prev.terrain + Math.ceil(100 / steps), 100)
        }))
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section id="presentation" className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-metal-50 to-metal-100">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/team.avif"
          alt="3DACTIV - Notre équipe"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-nordic-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-left mb-16 ml-16">
          <h2 className="text-5xl lg:text-6xl font-medium mb-6 tracking-wide uppercase bg-gradient-to-r from-blue-400 via-slate-300 to-gray-400 bg-clip-text text-transparent animate-gradient font-logo">
            3DACTIV c'est...
          </h2>
        </div>

        {/* Stats Grid - Two Columns */}
        <div ref={ref} className="relative max-w-4xl">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-400 transform -translate-x-1/2"></div>
          
          {/* Stats Grid - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-16">
              {stats.slice(0, 3).map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-left relative"
                >
                  <div className="space-y-3">
                    <div className="text-2xl lg:text-3xl font-light tracking-wide text-accent-300">
                      {stat.key === 'year' && counts.year}
                      {stat.key === 'projects' && `+${counts.projects} projets`}
                      {stat.key === 'incidents' && `${counts.incidents} incidents`}
                    </div>
                    <div className="text-sm text-nordic-200 max-w-md leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-16">
              {stats.slice(3, 6).map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-left relative"
                >
                  <div className="space-y-3">
                    <div className="text-2xl lg:text-3xl font-light tracking-wide text-accent-300">
                      {stat.key === 'experience' && (
                        <>
                          <span className="text-nordic-200">Avec </span>
                          <span>+{counts.experience} ans</span>
                        </>
                      )}
                      {stat.key === 'experts' && (
                        <>
                          <span className="text-nordic-200">Grâce à </span>
                          <span>+{counts.experts} experts</span>
                        </>
                      )}
                      {stat.key === 'terrain' && (
                        <>
                          <span>{counts.terrain}% </span>
                          <span className="text-nordic-200">terrain</span>
                        </>
                        )}
                    </div>
                    <div className="text-sm text-nordic-200 max-w-md leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
