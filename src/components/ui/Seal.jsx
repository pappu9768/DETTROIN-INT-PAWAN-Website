/**
 * The recurring "Founder's Seal" motif: a brass medallion of tick marks
 * around a monogram. Used in the hero, as a section marker, and in the
 * footer, standing in for the generic numbered-step or icon pattern.
 */
export default function Seal({ className = '', spin = false, size = 96 }) {
  const ticks = Array.from({ length: 24 })

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`${className} ${spin ? 'animate-spin-slow' : ''}`}
      role="img"
      aria-label="Evergreen International Academy seal"
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="#C9A15A" strokeWidth="0.6" opacity="0.5" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#C9A15A" strokeWidth="0.6" opacity="0.35" />
      {ticks.map((_, i) => {
        const angle = (i / ticks.length) * 360
        return (
          <line
            key={i}
            x1="50"
            y1="4"
            x2="50"
            y2="9"
            stroke="#C9A15A"
            strokeWidth="1"
            opacity="0.6"
            transform={`rotate(${angle} 50 50)`}
          />
        )
      })}
      <text
        x="50"
        y="47"
        textAnchor="middle"
        fontFamily="'Fraunces', serif"
        fontSize="22"
        fill="#F4F1E6"
      >
        Kr
      </text>
      <text
        x="50"
        y="61"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="4.2"
        letterSpacing="2"
        fill="#C9A15A"
      >
        EST. 1998
      </text>
    </svg>
  )
}
