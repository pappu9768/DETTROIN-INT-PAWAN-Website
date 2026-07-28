import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const COLLAGE = [
  { seed: 'evergreen-about-1', className: 'col-span-2 row-span-2' },
  { seed: 'evergreen-about-2', className: 'col-span-1 row-span-1' },
  { seed: 'evergreen-about-3', className: 'col-span-1 row-span-1' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {COLLAGE.map((item, i) => (
            <motion.div
              key={item.seed}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`overflow-hidden rounded-2xl border border-ink-line ${item.className}`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/500/500`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Evergreen"
            title="Twenty-eight years of teaching students to ask better questions."
          />
          <p className="text-parchment-muted leading-relaxed">
            Set across five acres away from the noise of the city, our campus gives students the room to
            focus on academic and co-curricular excellence alike. A fully equipped library, science
            laboratories, a theatre, and dedicated sports facilities support the overall development of
            every child who walks through our gates.
          </p>
          <p className="text-parchment-muted leading-relaxed">
            We are committed to sound moral values, a scientific temperament, and the kind of personal
            counselling that prepares students for a genuinely competitive world, while keeping them
            grounded in a sense of community and cultural pride.
          </p>

          <dl className="grid grid-cols-2 gap-6 border-t border-ink-line pt-6">
            <div>
              <dt className="eyebrow mb-1">Founded</dt>
              <dd className="font-display text-xl text-parchment">1998</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Campus</dt>
              <dd className="font-display text-xl text-parchment">5 Acres</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
