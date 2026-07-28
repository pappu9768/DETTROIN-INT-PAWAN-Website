import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Button from '../ui/Button'
import Seal from '../ui/Seal'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-radial-fade pt-16 sm:pt-20">
      <div className="container-page grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr,0.95fr] lg:gap-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start gap-7"
        >
          <span className="eyebrow">Krishna Grand Trunk Campus &middot; CBSE Affiliated</span>

          <h1 className="max-w-xl text-4xl font-normal leading-[1.08] text-parchment sm:text-5xl lg:text-6xl">
            Where curiosity <em className="font-display italic text-brass">puts down roots.</em>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-parchment-muted sm:text-lg">
            We are committed to high-quality teaching that grows intellectually curious, self-motivated
            learners with a lasting love of finding things out.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#admissions" variant="primary">
              Enroll for 2026-27
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#about" variant="ghost">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Explore the campus
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-ink-line shadow-seal">
            <img
              src="https://picsum.photos/seed/evergreen-hero-main/900/1100"
              alt="Students collaborating on a project in the Evergreen International Academy library"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-6 -top-6 hidden rounded-full border border-ink-line bg-ink-soft p-3 shadow-seal sm:block">
            <Seal size={64} spin />
          </div>

          <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl border border-ink-line bg-ink-soft/95 p-4 backdrop-blur-sm sm:left-10 sm:right-10">
            <div>
              <p className="font-display text-2xl text-brass">5 acres</p>
              <p className="text-xs text-parchment-muted">of open, green campus</p>
            </div>
            <div className="h-8 w-px bg-ink-line" />
            <div>
              <p className="font-display text-2xl text-brass">28 yrs</p>
              <p className="text-xs text-parchment-muted">of teaching, learning, growing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
