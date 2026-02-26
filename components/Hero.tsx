'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      className="mx-auto max-w-4xl px-6 py-20 md:py-28"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <p className="font-sans text-sm font-medium uppercase tracking-wider text-accent">
        Data Scientist & ML Engineer
      </p>
      <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Abhi Erra
      </h1>
      <p className="mt-6 max-w-2xl font-serif text-xl text-gray-700 md:text-2xl leading-relaxed">
        I build modeling systems that improve real-world infrastructure.
      </p>
      <p className="mt-8 max-w-2xl font-sans text-gray-600 leading-relaxed">
        I design and build data-driven systems and machine learning solutions that address
        complex, real-world challenges. I specialize in modeling infrastructure that is not
        only effective but also reliable, interpretable, and built for production.
      </p>
    </motion.div>
  )
}
