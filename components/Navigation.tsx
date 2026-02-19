import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg font-bold text-gray-900 transition-colors hover:text-accent"
          >
            Abhijeeth Erra
          </Link>
          <ul className="flex gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-sm font-medium text-gray-600 transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
