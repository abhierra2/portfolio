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
          A lightweight end-to-end analytics project for evaluating ETA accuracy and
          route-quality proxy metrics using NYC Taxi trip data. Accurate Estimated
          Time of Arrival (ETA) predictions matter for user experience, driver
          planning, and operations. This project trains a PyTorch neural network to
          predict trip duration, computes accuracy metrics across segments, identifies
          failure modes, and proposes an experiment design for production deployment.
          The repo is structured for clarity and reproducibility: data load →
          schema and derived columns → model training → metrics computation →
          analysis and visualizations.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Architecture overview" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The pipeline is organized into clear steps. Raw NYC taxi data (e.g. from NYC
          TLC) is loaded from <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">data/raw.csv</code>, normalized for
          column naming (e.g. <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">tpep_pickup_datetime</code> vs{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">lpep_pickup_datetime</code>), and cleaned: trip
          duration and Haversine distance are computed; invalid rows (negative
          duration, missing coordinates, unrealistic trips) are filtered. Clean data
          is loaded into PostgreSQL (<code className="rounded bg-gray-100 px-1 py-0.5 text-sm">trips_clean</code>).
        </p>
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          SQL scripts define derived columns (hour of day, day of week, distance
          buckets), indexes, and train/eval splits (70/30). A PyTorch model is
          trained on the training set and saved; a metrics script loads the model,
          generates predictions for evaluation trips, and computes MAE, MedAE, P90,
          and % within thresholds. Analysis and visualizations (error histograms,
          error by distance/hour/day, calibration plots) are produced in Python.
          Optional Spark is supported for large datasets via a <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">--use-spark</code> flag.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Technical depth" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The model is a feedforward neural network (MLP) with inputs: Haversine
          distance (km), hour and day of week (cyclical sin/cos encoding), distance
          bucket (one-hot: &lt;1mi, 1–3mi, 3–5mi, 5–10mi, 10+mi), and normalized
          pickup/dropoff coordinates. Hidden layers are [128, 64, 32] with ReLU and
          dropout (0.2); output is predicted trip duration in seconds. Loss is MAE;
          optimizer is Adam (lr 0.001). Training uses early stopping on validation
          loss (20% of training data); train/val/test are split temporally to avoid
          leakage.
        </p>
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Primary metrics: Mean Absolute Error (MAE), Median Absolute Error (MedAE),
          P90 absolute error, and % of trips within ±10% or ±20% of actual duration.
          Metrics are segmented by distance bucket, hour of day, and day of week so
          failure modes can be localized. The project documents expected column
          formats and supports automatic column mapping for common NYC taxi schema
          variations.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Tradeoffs" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          The design prioritizes end-to-end reproducibility and analytical clarity
          over real-time serving. PostgreSQL holds the source of truth and supports
          flexible SQL for segmentation; the PyTorch model is trained offline and
          used for batch prediction in the metrics step. Using a single market (NYC)
          allows tying results to known traffic and geography; expanding to more
          cities would require schema and segment definitions to stay comparable.
        </p>
        <p className="font-sans text-gray-700 leading-relaxed">
          Spark is optional so the project runs on a laptop with Pandas for smaller
          datasets; for large files, <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">--use-spark</code> speeds up load and
          compute. The model does not use route geometry or real-time traffic—only
          trip-level and temporal features—so it reflects a baseline that can be
          improved with richer data in a production setting.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Failure modes & experiment design" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Documented failure modes include: short trips (&lt;1 mile) with higher
          relative error due to fixed overhead (lights, stops); peak hours with
          higher traffic variability; dense urban areas with complex routing; and
          long trips (10+ miles) with mixed highway/city conditions. The repo
          proposes an online experiment: control (current model) vs treatment
          (e.g. segment-aware calibration, additional features). Primary metrics
          would be MedAE and P90; guardrails would include driver cancel rate,
          reroute rate, and user satisfaction. Duration, traffic split, and sample
          size are outlined for power and guardrail analysis.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="mb-16">
        <SectionHeader title="Limitations & future work" />
        <p className="mb-4 font-sans text-gray-700 leading-relaxed">
          Current limitations: no route information (only OD and distance), no
          real-time traffic, and a static model that requires retraining. Future
          directions include route-based features (road type, intersections),
          real-time traffic integration, uncertainty quantification (e.g. confidence
          intervals), and continuous or online learning. The scaling-to-production
          section in the repo outlines feature stores, model serving, monitoring,
          and A/B testing infrastructure.
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
