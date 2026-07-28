import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

/**
 * Poster-style card for the Events & Gallery grid. On hover, the image
 * scales gently and a details panel slides up, similar to a program
 * poster catching your eye as you walk past it.
 */
export default function EventCard({ event, index = 0 }) {
  const { title, category, date, image } = event

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className="group relative flex aspect-[3/4] cursor-pointer flex-col overflow-hidden rounded-2xl border border-ink-line bg-ink-soft focus-within:outline-2 focus-within:outline-brass"
      tabIndex={0}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="eyebrow relative z-10 m-4 w-fit rounded-full border border-brass/40 bg-ink/60 px-3 py-1 backdrop-blur-sm">
        {category}
      </span>

      <div className="relative z-10 mt-auto flex flex-col gap-2 p-5 transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-lg font-medium leading-snug text-parchment">{title}</h3>
        <div className="flex items-center gap-2 text-xs text-parchment-muted">
          <Calendar className="h-3.5 w-3.5 text-brass" aria-hidden="true" />
          <time>{date}</time>
        </div>
      </div>
    </motion.article>
  )
}
