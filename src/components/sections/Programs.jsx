import { PROGRAMS } from '../../data/programs'
import { useLoadingState } from '../../hooks/useLoadingState'
import SectionHeading from '../ui/SectionHeading'
import { ProgramCardSkeleton } from '../ui/Skeleton'
import ProgramCard from '../cards/ProgramCard'

export default function Programs() {
  const isLoading = useLoadingState(600)

  return (
    <section id="programs" className="py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why Evergreen"
          title="Here's how we help students find what they're good at."
          description="Four departments, one shared standard: every student leaves each year having grown somewhere new."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => <ProgramCardSkeleton key={i} />)
            : PROGRAMS.map((program, i) => <ProgramCard key={program.id} program={program} index={i} />)}
        </div>
      </div>
    </section>
  )
}
