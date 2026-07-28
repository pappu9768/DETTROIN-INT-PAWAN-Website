import { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { NAV_LINKS } from '../../data/navigation'
import { useScrollTop } from '../../hooks/useScrollTop'
import Button from '../ui/Button'
import Seal from '../ui/Seal'
import MobileMenu from './MobileMenu'

/**
 * Sticky, blurred navbar. Gains a border/background once the page has
 * scrolled past a small threshold (see useScrollTop) so it reads as
 * "floating" over the hero at the very top.
 */
export default function Navbar() {
  const scrolled = useScrollTop(12)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-line bg-ink/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Evergreen International Academy home">
          <Seal size={40} />
          <span className="hidden font-display text-lg leading-tight text-parchment sm:block">
            Evergreen
            <span className="block text-xs font-body font-normal tracking-widest2 text-parchment-muted">
              INTERNATIONAL ACADEMY
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group relative">
              <a
                href={link.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-parchment-muted transition-colors duration-200 hover:text-parchment"
              >
                {link.label}
                {link.children && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                )}
              </a>

              {link.children && (
                <div className="invisible absolute left-0 top-full flex min-w-[220px] flex-col gap-1 rounded-xl border border-ink-line bg-ink-soft p-2 opacity-0 shadow-seal transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="rounded-lg px-3 py-2 text-sm text-parchment-muted transition-colors duration-150 hover:bg-ink-raised hover:text-brass"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#fees" variant="ghost" className="px-5 py-2.5 text-xs">
            Pay Fee
          </Button>
          <Button href="#admissions" variant="primary" className="px-5 py-2.5 text-xs">
            Enroll Now
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-full border border-ink-line p-2.5 text-parchment md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
