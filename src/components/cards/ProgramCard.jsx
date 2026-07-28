import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

/**
 * Card used in the "Programs" section (Academics, Admissions,
 * Co-Curricular, Gallery). Image lifts and the arrow nudges on hover;
 * both are disabled automatically for users who prefer reduced motion
 * via the whileHover + CSS media query combination.
 */
export default function ProgramCard({ program, index = 0 }) {
  const { title, description, image, href } = program

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-line bg-ink-soft transition-colors duration-300 hover:border-brass/50 focus-visible:outline-2 focus-visible:outline-brass"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-parchment">{title}</h3>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-brass transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm leading-relaxed text-parchment-muted">{description}</p>
      </div>
    </motion.a>
  )
}
