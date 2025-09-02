'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Solutions = () => {
  const solutions = [
    {
      id: 'inspection',
      title: 'Inspection',
      description: 'Nous mettons à disposition des inspecteurs qualifiés pour le suivi qualité, la conformité réglementaire et le contrôle soudure sur projets neufs, en maintenance ou en rénovation.',
      image: '/images/solutions/Inspection.avif',
      href: '/solutions/inspection'
    },
    {
      id: 'cnd',
      title: 'Contrôle Non-Destructif',
      description: 'Nos techniciens certifiés interviennent en France et à l\'international pour tous types de contrôle non-destructif, dans le respect des normes et codes en vigueur.',
      image: '/images/solutions/cnd.avif',
      href: '/solutions/controle-non-destructif'
    },
    {
      id: 'assistance',
      title: 'Assistance Technique',
      description: 'Nous fournissons des techniciens, ingénieurs et superviseurs pour vos projets en construction, maintenance, supervision et coordination sécurité, avec des profils opérationnels et autonomes.',
      image: '/images/solutions/Assistance.avif',
      href: '/solutions/assistance-technique'
    }
  ]

  return (
    <section id="solutions" className="section-padding bg-gradient-to-b from-metal-200 via-metal-300 to-metal-400">
      <div className="container-nordic">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-nordic-900 mb-6">
            Nos Solutions
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-hover h-full flex flex-col">
                {/* Image Header - Plus grande et sans overlay */}
                <div className="relative h-64 rounded-t-xl overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-nordic-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-nordic-600 mb-6 flex-1 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* CTA - Bouton plus petit */}
                  <Link href={solution.href} className="btn-outline w-full group mt-auto py-2 px-4 text-sm text-center block">
                    Découvrir
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
