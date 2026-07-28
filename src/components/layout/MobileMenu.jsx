import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_LINKS } from '../../data/navigation'
import Button from '../ui/Button'

/**
 * Full-screen mobile navigation drawer. Mounted once in Navbar and
 * toggled via `open`; handles its own enter/exit animation.
 */
export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="flex h-full flex-col"
          >
            <div className="container-page flex items-center justify-between py-5">
              <span className="font-display text-lg text-parchment">Krishna</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full border border-ink-line p-2 text-parchment transition-colors hover:border-brass/60 hover:text-brass"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="container-page flex flex-1 flex-col justify-center gap-1 pb-16">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="border-b border-ink-line py-4 font-display text-3xl text-parchment transition-colors hover:text-brass"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="mt-8 flex flex-col gap-3">
                <Button href="#admissions" variant="primary" onClick={onClose}>
                  Enroll Now
                </Button>
                <Button href="#fees" variant="ghost" onClick={onClose}>
                  Pay School Fee
                </Button>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
