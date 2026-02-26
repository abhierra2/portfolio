import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import TagBadge from '@/components/TagBadge'

export const metadata: Metadata = {
  title: 'ETA Accuracy & Route Quality Analysis',
  description:
    'End-to-end analytics for ETA accuracy using NYC Taxi trip data: PyTorch model, PostgreSQL, metrics, and failure-mode analysis.',
}

export default function TaxiPage() {
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
          <TagBadge label="PostgreSQL" />
          <TagBadge label="Spark" />
        </div>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          ETA Accuracy & Route Quality Analysis
        </h1>
        <p className="mt-2 font-sans text-lg text-gray-600">
          End-to-end analytics for evaluating ETA accuracy using NYC Taxi trip data
        </p>
      </header>

      <section className="mb-16">
        <p className="font-sans text-gray-700 leading-relaxed">
          ETA Accuracy & Route Quality Analysis is an end-to-end analytics project that evaluates
          the accuracy of Estimated Time of Arrival (ETA) predictions and route quality using New
          York City taxi trip data. Accurate ETA predictions are important for user experience,
          driver planning, and operations. This project trains a neural network model in PyTorch
          to predict trip duration, computes accuracy metrics across different segments, identifies
          common failure modes, and outlines an experiment design for potential production deployment.
        </p>
        <br />
        <p className="font-sans text-gray-700 leading-relaxed">
          The repository is structured for clarity and reproducibility with a clear progression:
          loading raw data, applying a consistent schema and derived columns, training the model,
          calculating metrics, and producing analysis and visualizations.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Architecture overview" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The pipeline begins by loading raw NYC taxi trip data. The data is normalized for column
          naming differences and cleaned by computing trip duration and Haversine distance. Invalid
          rows with negative durations, missing coordinates, or unrealistic trips are removed. Clean
          data is stored in PostgreSQL tables. SQL scripts then define useful derived columns such
          as hour of day, day of week, and distance buckets, along with train/evaluation splits. A
          feedforward neural network with distance and temporal features is trained in PyTorch and
          used to generate predictions. Evaluation metrics including Mean Absolute Error (MAE),
          Median Absolute Error (MedAE), 90th percentile error (P90), and percentages of trips
          within ±10% or ±20% of the actual duration are computed. Visualizations like error histograms
          and calibration plots support deeper analysis. Spark support is optional for processing
          larger datasets.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Technical depth" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The model uses features such as Haversine distance, encoded hour and day of week, distance
          buckets, and normalized pickup/dropoff coordinates. It is trained with early stopping and
          evaluated on temporally separated splits to avoid leakage. Metrics are segmented by distance,
          hour, and day so that performance can be understood across different conditions. Automatic
          column mapping allows the pipeline to accommodate common schema variations.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Tradeoffs" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          This design emphasizes reproducibility and analytical clarity rather than real-time serving.
          PostgreSQL serves as the source of truth for data and supports flexible SQL queries. The
          PyTorch model is trained offline and used in batch prediction during evaluation. Operating
          within a single market (NYC) ties results to known urban characteristics but would require
          adjustments to compare across different cities. The baseline model only uses trip-level and
          temporal features without route geometry or real-time traffic, leaving room for improvement
          in more production-oriented systems.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Failure modes & experiment design" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Common failure modes include short trips that show higher relative error due to fixed
          overhead, peak travel hours with high traffic variability, dense urban routing complexity,
          and long trips with mixed highway and city conditions. The project proposes an online
          experiment comparing a control model with a treatment model that includes segment-aware
          calibration or additional features. Key evaluation metrics would include MedAE and P90,
          with guardrails based on driver cancel rates, reroutes, and user satisfaction.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Limitations & future work" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Current limitations include the lack of explicit route information, no real-time traffic
          integration, and a static model that must be retrained periodically. Future improvements
          could incorporate richer route-based features, uncertainty quantification, continuous
          learning, and production-scale components such as feature stores, model serving, and
          monitoring infrastructure.
        </p>
      </section>

      <footer className="pt-8 flex flex-wrap items-center gap-4">
        <a
          href="https://github.com/abhierra2/eta-accuracy-analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-accent transition-colors hover:underline"
        >
          View on GitHub →
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
