interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-10">
      <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl font-sans text-lg text-gray-600">{subtitle}</p>
      )}
    </header>
  )
}
