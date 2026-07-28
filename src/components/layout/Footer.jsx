import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import { FOOTER_COLUMNS } from '../../data/navigation'
import Seal from '../ui/Seal'

const SOCIALS = [
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr,2fr]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Seal size={48} />
            <div>
              <p className="font-display text-lg text-parchment">Evergreen International Academy</p>
              <p className="text-sm text-parchment-muted">Dedicated to curious minds.</p>
            </div>
          </div>

          <ul className="flex flex-col gap-3 text-sm text-parchment-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <span>Grand Trunk Road, Riverside District, 202001, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <a href="tel:+910000000000" className="hover:text-brass">
                +91 000-00-00000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <a href="mailto:info@evergreenacademy.edu" className="hover:text-brass">
                info@evergreenacademy.edu
              </a>
            </li>
          </ul>

          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-parchment-muted transition-colors duration-200 hover:border-brass/60 hover:text-brass"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h4 className="font-mono text-xs uppercase tracking-widest2 text-brass">{col.heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-parchment-muted transition-colors duration-150 hover:text-parchment">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rule" />

      <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-parchment-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Evergreen International Academy. All rights reserved.</p>
        <p className="font-mono">School Code: EVGRN</p>
      </div>
    </footer>
  )
}
