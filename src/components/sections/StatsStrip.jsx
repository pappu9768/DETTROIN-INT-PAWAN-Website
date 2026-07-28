import { motion } from 'framer-motion'
import { STATS } from '../../data/stats'

export default function StatsStrip() {
  return (
    <section aria-label="School statistics" className="border-y border-ink-line bg-ink-soft">
      <div className="container-page grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col gap-1 border-l border-ink-line pl-4 first:border-l-0 first:pl-0 sm:pl-6"
          >
            <span className="font-display text-2xl text-brass sm:text-3xl">{stat.value}</span>
            <span className="text-xs text-parchment-muted sm:text-sm">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
