import { motion } from 'framer-motion'

/**
 * Consistent eyebrow + heading + optional supporting copy, used to open
 * every major section on the page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl sm:text-4xl font-medium leading-[1.1] ${light ? 'text-parchment' : 'text-parchment'}`}>
        {title}
      </h2>
      {description && <p className="text-base text-parchment-muted leading-relaxed">{description}</p>}
    </motion.div>
  )
}
