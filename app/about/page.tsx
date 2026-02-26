import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'About — Abhi Erra',
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
          I came to data science and machine learning from a foundation in neurobiology, a
          background that taught me to think in terms of systems with interacting components
          and feedback loops. That perspective helps me focus on defining the right questions,
          measuring the right things, and building models whose assumptions are both explicit
          and testable. I’m comfortable with uncertainty and design models and pipelines so
          that their limitations are visible and improvable.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          I’ve worked on problems in healthcare, transportation, and infrastructure. I care
          deeply about the entire lifecycle of an ML system — from data quality and feature
          engineering to model choice, serving, monitoring, and documentation. I prefer owning
          the full loop from problem definition to deployed system rather than only building
          the model in isolation.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Interests" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          I’m drawn to domains where data systems touch real people and real infrastructure,
          including healthcare, public transit, energy, and supply chains. I focus on making
          machine-learning systems that are interpretable, robust, and fairly evaluated across
          different populations. I think critically about trade-offs between accuracy and
          simplicity, automation and human oversight, and short-term speed versus long-term
          maintainability. I believe in writing things down — whether design documents, evaluation
          criteria, or limitations — so that decisions and reasoning remain clear to others.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Values & direction" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          I want to work on problems that have public or societal impact. That doesn’t necessarily
          mean only in nonprofits or government — it means choosing roles and projects where
          outcomes improve something meaningful beyond a single metric or shareholder return,
          such as patient outcomes, equitable access to services, or more reliable infrastructure.
          I value clarity of purpose, ethics, rigor, and teams that take those seriously.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          Looking ahead, I see myself continuing to build and lead applied ML work — either as an
          individual contributor owning complex systems or as someone who helps shape how teams
          build, evaluate, and deploy them. I’m not chasing the latest algorithm for its own sake;
          I’m focused on systems that work in production and that teams can trust.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <Contact />

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
