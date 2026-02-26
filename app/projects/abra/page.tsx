import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import TagBadge from '@/components/TagBadge'

export const metadata: Metadata = {
  title: 'ABRA — Auditory Brainstem Response Analyzer',
  description:
    'ABR analysis pipeline with preprocessing and CNN models for automated peak finding and threshold detection. Streamlit app, .arf, .tsv, .asc, .csv.',
}

export default function ABRAPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Link
        href="/"
        className="mb-8 inline-block font-sans text-sm text-gray-500 transition-colors hover:text-accent"
      >
        ← Back to home
      </Link>

      <header className="mb-12">
        <div className="mb-4 flex flex-wrap gap-2">
          <TagBadge label="Python" />
          <TagBadge label="PyTorch" />
          <TagBadge label="CNN" />
          <TagBadge label="Neuroscience" />
        </div>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          ABRA
        </h1>
        <p className="mt-2 font-sans text-lg text-gray-600">
          Auditory Brainstem Response Analyzer
        </p>
      </header>

      <section className="mb-16">
        <p className="font-sans text-gray-700 leading-relaxed">
          <strong>ABRA</strong> is a machine-learning-driven analysis pipeline designed to automate
          and standardize the interpretation of <strong>Auditory Brainstem Responses (ABRs)</strong>
          — a key electrophysiological signal used in hearing and neuroscience research.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="What ABRA Does" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Traditionally, ABR analysis requires manual marking of waveform features and subjective
          judgment to determine hearing thresholds. ABRA replaces this with a reproducible,
          data-driven workflow that <strong>preprocesses raw ABR recordings</strong> from multiple
          file formats, uses <strong>two convolutional neural networks (CNNs)</strong> to <strong>
          locate the Wave I peak in each waveform</strong> and <strong> estimate the auditory
          detection threshold based on stacked waveform responses</strong>, and delivers structured
          outputs including <strong>peak latencies, amplitudes, and threshold estimates </strong>
          for review, export, and further analysis.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="How It Works" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          <ol className="list-decimal list-inside">
            <li>
              <strong>Input & Preprocessing - </strong> Raw data (e.g., .arf, .tsv, .asc, or
              standardized .csv) are normalized, aligned, and cleaned to a consistent format that
              the machine-learning models expect. This includes harmonizing level and frequency
              scales and optional filtering.
            </li>
            <li>
              <strong>Machine Learning Models - </strong> <strong>Peak-finding CNN:</strong> Trained
              to identify the key ABR waveform feature (Wave I) across noisy and variable data.
              <strong> Thresholding CNN:</strong> Learns to predict the lowest stimulus level at which
              an auditory response is present.
            </li>
            <li>
              <strong>Interactive Analysis & Export - </strong> A <strong>Streamlit web app </strong>
              lets users batch-upload data, view model outputs, manually override predictions, and
              export results for downstream use.
            </li>
          </ol>
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Benefits" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          <ul className="list-disc list-inside">
            <li>
              <strong>Automates a traditionally manual, subjective task,</strong> reducing time and
              variability.
            </li>
            <li>
              <strong>Improves reproducibility</strong> across datasets and laboratories.
            </li>
            <li>
              <strong>Integrates human-in-the-loop control,</strong> allowing corrections where
              needed.
            </li>
            <li>
              <strong>Supports multiple common ABR data formats</strong> out of the box.</li>
          </ul>
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Tradeoffs & Future Directions" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Using learned models offers consistency and speed, but individual predictions are less
          interpretable than rule-based systems. To balance this:
          <ul className="list-disc list-inside">
            <li>
              ABRA keeps preprocessing explicit and format-aware.
            </li>  
            <li>
              The web interface supports manual edits and quality control.
            </li>
            <li>
              Future work may include confidence estimates, expanded format support, and deeper
              model architectures.
            </li>
          </ul>
        </p>
      </section>

      <footer className="pt-8 flex flex-wrap items-center gap-4">
        <a
          href="https://github.com/ucsdmanorlab/abranalysis"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-accent transition-colors hover:underline"
        >
          View on GitHub →
        </a>
        <a
          href="https://www.nature.com/articles/s41598-026-38045-1"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-accent transition-colors hover:underline"
        >
          Link to paper →
        </a>
        <Link
          href="/"
          className="font-sans text-sm text-gray-500 transition-colors hover:text-accent"
        >
          ← Back to home
        </Link>
      </footer>
    </article>
  )
}
