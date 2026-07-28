import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has scrolled past a given threshold.
 * Used to toggle a "scrolled" visual state on the sticky navbar.
 */
export function useScrollTop(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
