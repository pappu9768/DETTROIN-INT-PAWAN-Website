import { EVENTS } from '../../data/events'
import { useLoadingState } from '../../hooks/useLoadingState'
import SectionHeading from '../ui/SectionHeading'
import { EventCardSkeleton } from '../ui/Skeleton'
import EventCard from '../cards/EventCard'
import Button from '../ui/Button'

export default function EventsGallery() {
  const isLoading = useLoadingState(900)

  return (
    <section id="events" className="border-t border-ink-line bg-ink-soft py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Events & Gallery"
            title="What's on at Krishna this season."
            description="A running record of the year, on stage, on the field, and in the studio."
          />
          <Button href="#events" variant="ghost" className="shrink-0">
            View full calendar
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <EventCardSkeleton key={i} />)
            : EVENTS.map((event, i) => <EventCard key={event.id} event={event} index={i} />)}
        </div>
      </div>
    </section>
  )
}
