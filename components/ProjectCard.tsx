'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TagBadge from './TagBadge'

interface ProjectCardProps {
  title: string
  summary: string
  href: string
  tags: string[]
  image?: string
}

const MotionLink = motion(Link)

export default function ProjectCard({ title, summary, href, tags, image }: ProjectCardProps) {
  return (
    <MotionLink
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-card hover:border-gray-300/80 hover:shadow-card-hover"
      whileHover={{ y: -4 }}
      transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
    >
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-gray-900 transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-3 flex-1 font-sans text-gray-600 leading-relaxed">{summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
      </div>
      {image && (
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-b-lg bg-gray-100">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="object-fill"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </MotionLink>
  )
}
