export default function TagBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent transition-colors hover:bg-accent/15">
      {label}
    </span>
  )
}
