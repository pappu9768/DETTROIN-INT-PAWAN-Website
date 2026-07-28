import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Seal from '../ui/Seal'

export default function CTASection() {
  return (
    <section id="admissions" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[32px] border border-ink-line bg-ink-raised px-6 py-16 text-center sm:px-16"
        >
          <div className="absolute -right-10 -top-10 opacity-40 sm:opacity-100">
            <Seal size={140} spin />
          </div>

          <span className="eyebrow">Admissions Open &middot; 2026&ndash;27</span>
          <h2 className="max-w-xl text-3xl font-normal leading-tight text-parchment sm:text-4xl">
            Give your child a campus built for curiosity.
          </h2>
          <p className="max-w-md text-parchment-muted">
            Applications for Nursery through Grade 12 are open now. Seats are limited per section.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="#top" variant="primary">
              Start your application
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#top" variant="ghost">
              Talk to admissions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
