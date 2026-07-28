/**
 * Base shimmering block. Compose these into shape-specific skeletons
 * (see ProgramCardSkeleton / EventCardSkeleton) rather than using the
 * raw block directly in page markup.
 */
export function SkeletonBlock({ className = '' }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-ink-raised ${className}`}
      aria-hidden="true"
    />
  )
}

export function ProgramCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-line bg-ink-soft p-5">
      <SkeletonBlock className="h-40 w-full" />
      <SkeletonBlock className="h-5 w-1/3" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-4/5" />
    </div>
  )
}

export function EventCardSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <SkeletonBlock className="aspect-[3/4] w-full rounded-2xl" />
      <SkeletonBlock className="h-4 w-2/3" />
      <SkeletonBlock className="h-3 w-1/3" />
    </div>
  )
}
