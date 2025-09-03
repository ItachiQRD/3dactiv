'use client'

import { motion } from 'framer-motion'
import ImageWrapper from './ImageWrapper'

const Industries = () => {
  const industries = [
    {
      id: 'nucleaire',
      title: 'Nucléaire',
      description: 'Nous fournissons des techniciens CND, ingénieurs et inspecteurs pour des projets de maintenance, arrêts de tranche, constructions neuves et démantèlement, dans le strict respect des normes de sûreté nucléaire.',
      image: '/images/industries/nucleaire.avif'
    },
    {
      id: 'petrole-gaz',
      title: 'Pétrole & Gaz',
      description: 'Nous accompagnons les projets onshore et offshore en France et à l\'international, en mobilisant des profils qualifiés pour l\'inspection, le CND, le commissioning et la maintenance industrielle.',
      image: '/images/industries/gas.avif'
    },
    {
      id: 'renouvelables',
      title: 'Énergies Renouvelables',
      description: 'Nous mettons à disposition des experts techniques pour des projets éoliens, solaires et hydrauliques, couvrant le CND, l\'inspection qualité et la supervision de chantiers, au service de la transition énergétique.',
      image: '/images/industries/energy.avif'
    }
  ]

  return (
    <section id="industries" className="section-padding bg-gradient-to-b from-white via-metal-100 to-metal-200">
      <div className="container-nordic">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-nordic-900 mb-6">
            Nos Champs d'Actions
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-hover h-full flex flex-col">
                {/* Image Header - Plus grande et sans overlay */}
                <div className="relative h-64 rounded-t-xl overflow-hidden">
                  <ImageWrapper
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-nordic-900 mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-nordic-600 mb-6 flex-1 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* CTA - Bouton plus petit */}
                  <button className="btn-outline w-full group mt-auto py-2 px-4 text-sm">
                    Découvrir
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
