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
        Abhijeeth Erra
      </h1>
      <p className="mt-6 max-w-2xl font-serif text-xl text-gray-700 md:text-2xl leading-relaxed">
        I build modeling systems that improve real-world infrastructure.
      </p>
      <p className="mt-8 max-w-2xl font-sans text-gray-600 leading-relaxed">
        I work at the intersection of data, systems, and impact. My background in
        neurobiology taught me to think in circuits and feedback loops; I now apply
        that lens to ML pipelines, evaluation frameworks, and infrastructure that
        has to work under real-world constraints. I care about models that are
        interpretable, robust, and built for production.
      </p>
    </motion.div>
  )
}
