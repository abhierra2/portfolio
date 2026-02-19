import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'

export default function HomePage() {
  const featuredProjects = [
    {
      title: 'ABRA',
      summary:
        'ML pipeline for automated analysis of Auditory Brainstem Responses (ABRs) in mice: preprocessing + Convolutional Neural Network (CNN) models for automated peak finding and threshold detection. Streamlit app for batch upload and metrics/visualizations export.',
      href: '/projects/abra',
      tags: ['Python', 'PyTorch', 'Streamlit', 'Keras', 'MLFlow','CNN', 'Neuroscience'],
    },
    {
      title: 'ETA Accuracy & Route Quality Analysis',
      summary:
        'End-to-end analytics for ETA accuracy using NYC Taxi trip data: PyTorch model, PostgreSQL, segmentation metrics, and failure-mode analysis.',
      href: '/projects/taxi',
      tags: ['Python', 'PyTorch', 'PostgreSQL', 'Spark'],
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
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
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
          <SectionHeader title="On Modeling & Impact" />
          <div className="space-y-6 font-sans text-gray-700 leading-relaxed">
            <p>
              Good modeling is not about fitting curves—it is about encoding assumptions
              explicitly, testing them, and designing systems that fail gracefully. I
              am drawn to problems where the stakes are high and the data is messy:
              healthcare, transportation, and public infrastructure. In those domains,
              a model is only as good as its integration with the rest of the stack and
              the clarity of its limitations.
            </p>
            <p>
              I believe in building for the long term: documentation, evaluation
              frameworks, and tradeoff reasoning that outlast any single model
              version. The goal is not to impress with complexity but to deliver
              reliable, interpretable systems that teams can trust and iterate on.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/80">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <p className="font-sans text-sm text-gray-500">
            © {new Date().getFullYear()} Abhijeeth Erra. Built with Next.js and
            Tailwind.
          </p>
        </div>
      </footer>
    </>
  )
}
