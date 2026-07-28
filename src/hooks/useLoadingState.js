import { useEffect, useState } from 'react'

/**
 * Simulates an async data fetch so sections can show loading skeletons
 * before revealing real content. Swap the timeout for a real request
 * (e.g. fetch('/api/events')) when wiring up a backend.
 */
export function useLoadingState(delay = 700) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return isLoading
}
