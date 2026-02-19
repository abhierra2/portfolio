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
          ABRA is an Auditory Brainstem Response (ABR) analysis pipeline whose core
          is a pair of convolutional neural networks built on top of a
          preprocessing stage: a <strong>peak-finding CNN</strong> that localizes
          the Wave I peak, and a <strong>thresholding CNN</strong> that predicts 
          the signal detection threshold from waveform-stack data.
          Raw ABR data (Tucker Davis .arf, EPFL .tsv/.asc, or standardized .csv) is
          normalized and cleaned first; the preprocessed waveforms then feed into
          these models to automate what has traditionally required manual marking and
          subjective threshold calls. Users can run this pipeline via a Streamlit web app
          for batch upload and analysis, with optional manual override. The project
          is developed with the UCSD Manor Lab; method and validation are described
          in the bioRxiv preprint.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="From preprocessing to CNNs" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Preprocessing takes raw files and
          produces a unified representation of ABR waveforms: format-specific
          parsing (e.g. attenuation vs absolute dB SPL for .arf), alignment of
          level and frequency dimensions, and optional filtering or baseline
          correction. The result is a vector representation of each waveform
          that the CNNs expect for peak-finding and thresholding.
        </p>
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The <strong>peak-finding CNN</strong> operates on these preprocessed
          waveforms. It is a convolutional network (1D convolutions along the time
          axis) trained to regress peak
          locations for wave I of the ABR.
          The model learns to be robust to
          noise and level-dependent morphology so that peak tables can be generated
          automatically across conditions.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          The <strong>thresholding CNN</strong> takes preprocessed
          waveform-stack data and predicts the signal detection threshold—the stimulus level
          (e.g. dB SPL) at which the ABR is deemed present. This is done viaclassification (
          present/absent per level), with the CNN capturing the relationship
          between waveform shape and detectability. Together, the peak and
          threshold models turn raw preprocessed ABR data into structured outputs
          (peak latencies/amplitudes, threshold estimates) that the Streamlit app
          surfaces for users to review and export.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Training & evaluation" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The convolutional neural networks are trained on
          <strong> diverse datasets collected from multiple experimental settings</strong>.
          This multi-site, multi-protocol training data is intended to improve
          generalization so that the peak-finding and thresholding models perform well
          across different laboratories, acquisition systems, and stimulus
          parameters. Before training, each ABR is put through a data augmentation pipeline
          including random noise addition, random amplitude scaling, and random time shift,
          allowing the model to learn to be robust to and generalize for new data with these variations.
          Preprocessed waveform-stack data are used as inputs; labels are expert manual
          annotations (peak latencies and amplitudes, threshold judgments) so that
          the models learn to replicate expert-level decisions in a consistent,
          automated way. The training data is split into training, validation, and test sets to evaluate the model's performance.
        </p>
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          <strong>Evaluation</strong> demonstrates that ABRA&rsquo;s
          deep learning models achieve <strong>performance comparable to expert
          human annotators</strong> on the key ABR metrics: peak amplitude, peak
          latency, and auditory threshold estimates. In addition, the toolbox
          <strong> dramatically reduces analysis time</strong> compared to manual
          marking and threshold calls, and it <strong>enhances reproducibility</strong>{' '}
          across datasets from different laboratories—addressing the variability
          and limited reproducibility that traditionally accompany subjective
          manual ABR interpretation. The app is used in the lab for batch analysis:
          preprocessing runs first, then the CNNs produce peak tables and threshold
          estimates that users can review and edit before export.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Technical depth" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Preprocessing supports Tucker Davis .arf (with optional attenuation→dB SPL
          handling), EPFL .tsv and .asc, and .csv with <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">Level(dB)</code> and{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">Freq(Hz)</code> and a data vector per row. The
          pipeline normalizes sampling, alignment, and units so that the
          peak-finding and thresholding CNNs receive fixed-size or padded
          inputs. Model artifacts (saved weights, config) are loaded at
          inference; the Streamlit app (<code className="rounded bg-gray-100 px-1 py-0.5 text-sm">ABRA.py</code>) calls
          into the preprocessing and model code, then renders tables and plots.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          The codebase is organized so that preprocessing, peak model, and
          threshold model are distinct modules; <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">utils</code> hold shared
          logic, and <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">notebooks</code> demonstrate usage. An API-only
          install (<code className="rounded bg-gray-100 px-1 py-0.5 text-sm">requirements-api.txt</code>) allows
          programmatic use of the preprocessing and CNN inference without the web
          UI. Local runs use <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">streamlit run ABRA.py</code> in a
          conda environment (Python 3.12).
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Tradeoffs" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Using CNNs for peak finding and thresholding trades interpretability for
          automation and consistency: the models learn from data rather than
          hand-tuned rules, but individual predictions are not easily explained.
          Preprocessing is kept explicit and format-aware so that the CNNs see a
          consistent input distribution; domain shifts (e.g. new acquisition
          systems or protocols) may require retraining or fine-tuning. The
          Streamlit UI and manual-edit workflows provide a safety net—researchers
          can override model outputs and export corrected results—so the system
          remains suitable for high-throughput batch analysis with human-in-the-loop
          quality control.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Limitations & future work" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The CNNs are trained on data from supported formats and acquisition
          paradigms; performance may degrade on very different hardware or
          protocols without retraining. Future work may include shared or
          multi-task backbones for peak and threshold models, uncertainty
          estimates (e.g. confidence intervals for threshold), and integration
          with additional export and lab pipeline tools. The open-source repo
          documents installation, usage, and extension points for the
          preprocessing and CNN inference pipeline.
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
          href="https://www.biorxiv.org/content/10.1101/2024.06.20.599815v2"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-accent transition-colors hover:underline"
        >
          Preprint (bioRxiv) →
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
