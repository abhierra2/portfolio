import SectionHeader from '@/components/SectionHeader'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:eabhijeeth2000@gmail.com',
    description: 'Say hello',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abhijeetherra',
    description: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/abhierra2',
    description: 'Code and projects',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200/80 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <SectionHeader
          title="Contact me"
          subtitle="Open to collaboration, consulting, and roles where ML meets real-world impact."
        />
        <ul className="flex flex-wrap gap-6">
          {contactLinks.map(({ label, href, description }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group inline-flex flex-col font-sans"
              >
                <span className="font-medium text-accent transition-colors group-hover:underline">
                  {label}
                </span>
                <span className="text-sm text-gray-500">{description}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
