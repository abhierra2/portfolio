import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import Contact from '@/components/Contact'

export default function HomePage() {
  const featuredProjects = [
    {
      title: 'ABRA',
      summary:
        'A full-stack ML solution for automating the analysis of Auditory Brainstem Responses\
         (ABRs) in mice, including data preprocessing, convolutional neural network-based peak\
         detection, threshold analysis, and a Streamlit UI for batch uploads and visualization.',
      href: '/projects/abra',
      tags: ['Python', 'PyTorch', 'Streamlit', 'Keras', 'MLFlow','CNN', 'Neuroscience'],
      image: '/projects/ABRA.jpg',
    },
    {
      title: 'ETA Accuracy & Route Quality Analysis',
      summary:
        'An end-to-end analytics platform to evaluate and improve ETA predictions using NYC taxi\
         trip data. Includes model development in PyTorch, PostgreSQL integration, advanced\
         segmentation metrics, and detailed failure-mode analyses.',
      href: '/projects/taxi',
      tags: ['Python', 'PyTorch', 'PostgreSQL', 'Spark'],
      image: '/projects/taxi.jpg',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-200/80 bg-white">
        <Hero />
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <SectionHeader
          title="Featured Projects"
          subtitle="Systems and analyses built for clarity and deployment."
        />
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:items-stretch">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <p className="mt-8 font-sans text-sm text-gray-500">
          <Link href="/about" className="text-accent transition-colors hover:underline">
            More about my background and approach →
          </Link>
        </p>
      </section>

      {/* Philosophy */}
      <section className="border-t border-gray-200/80 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <SectionHeader title="Philosophy on Data and Modeling" />
          <div className="space-y-6 font-sans text-gray-700 leading-relaxed">
            <p>
            I believe strong modeling is defined by clarity of assumptions,
            rigorous evaluation, and systems that fail gracefully when confronted with
            real-world complexity. I’m drawn to challenging domains like healthcare,
            transportation, and public infrastructure, where ambiguity, messy data, and
            high stakes demand thoughtful design.
            </p>
            <p>
            Rather than favoring complexity for its own sake, I prioritize:
            <br />
            <br />
            <ul className="list-disc list-inside">
              <li>Interpretable models that stakeholders can understand</li>
              <li>Robust evaluation frameworks tied to real performance</li>
              <li>Sustainable systems that integrate with product and infrastructure stacks</li>
            </ul>
            <br />
            The goal is not just to fit data — but to build tools and systems that teams can trust and iterate on in production.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-gray-200/80">
        <div className="mx-auto max-w-4xl px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-sans text-sm text-gray-500">
            © {new Date().getFullYear()} Abhi Erra. Built with Next.js and
            Tailwind.
          </p>
          <Link
            href="/#contact"
            className="font-sans text-sm text-accent transition-colors hover:underline"
          >
            Contact
          </Link>
        </div>
      </footer>
    </>
  )
}
