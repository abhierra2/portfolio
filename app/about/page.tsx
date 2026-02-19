import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'About — Abhijeeth Erra',
  description:
    'Background in neurobiology and data science. Interest in infrastructure, healthcare, and systems modeling.',
}

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Link
        href="/"
        className="mb-8 inline-block font-sans text-sm text-gray-500 transition-colors hover:text-accent"
      >
        ← Back to home
      </Link>

      <header className="mb-12">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          About
        </h1>
      </header>

      <section className="mb-16">
        <SectionHeader title="Background" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          I came to data science and ML from neurobiology. That background gave me
          a durable way of thinking: systems with many interacting parts,
          feedback loops, and the importance of measuring the right things
          before drawing conclusions. I am comfortable with uncertainty and
          with building models that are explicitly approximate—then
          designing pipelines and evaluations so that those approximations
          are visible and improvable.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          I have worked on problems in healthcare (behavioral risk, clinical
          decision support), transportation (ETA, demand, operations), and
          infrastructure more broadly. I care about the full stack: data
          quality, feature engineering, model choice, serving, monitoring,
          and documentation. I prefer to own the loop from question to
          deployed system rather than only the model in the middle.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Interests" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          I am drawn to domains where models touch real people and real
          infrastructure: healthcare, public transit, energy, supply chain.
          I am interested in how we make ML systems interpretable and
          robust, how we evaluate them fairly across populations, and
          how we integrate them into existing workflows without
          pretending they are infallible.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          I think a lot about tradeoffs—between accuracy and simplicity,
          between automation and human oversight, between speed to ship
          and long-term maintainability. I believe in writing things
          down: design docs, evaluation criteria, and limitations, so
          that the next person (or the future me) can understand why
          decisions were made.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Values & direction" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          I want to work on problems that have public impact. That does not
          mean only nonprofits or government—it means choosing roles and
          projects where the outcome improves something beyond a single
          metric or shareholder return: patient outcomes, equitable
          access to services, or more reliable infrastructure. I am
          willing to trade some upside for clarity of purpose and
          for teams that take ethics and rigor seriously.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          Long term, I see myself continuing to build and lead technical
          work in applied ML—either as an IC who owns complex systems or
          as someone who helps shape what gets built and how it is
          evaluated. I am not chasing the latest architecture for its
          own sake; I am interested in systems that work in production
          and that teams can trust.
        </p>
      </section>

      <footer className="pt-8">
        <Link
          href="/"
          className="font-sans text-sm text-accent transition-colors hover:underline"
        >
          ← Back to home
        </Link>
      </footer>
    </article>
  )
}
