'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import TagBadge from './TagBadge'

interface ProjectCardProps {
  title: string
  summary: string
  href: string
  tags: string[]
}

const MotionLink = motion(Link)

export default function ProjectCard({ title, summary, href, tags }: ProjectCardProps) {
  return (
    <MotionLink
      href={href}
      className="group block rounded-lg border border-gray-200/80 bg-white p-6 shadow-card hover:border-gray-300/80 hover:shadow-card-hover"
      whileHover={{ y: -4 }}
      transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
    >
      <h3 className="font-serif text-xl font-bold text-gray-900 transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-3 font-sans text-gray-600 leading-relaxed">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </MotionLink>
  )
}
