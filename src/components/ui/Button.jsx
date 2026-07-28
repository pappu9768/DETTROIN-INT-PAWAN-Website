import { forwardRef } from 'react'

const VARIANTS = {
  primary:
    'bg-brass text-ink hover:bg-brass-bright focus-visible:outline-parchment shadow-[0_10px_30px_-12px_rgba(201,161,90,0.55)]',
  ghost:
    'bg-transparent text-parchment border border-ink-line hover:border-brass/60 hover:text-brass',
}

/**
 * Base button used for every call-to-action on the site. Renders as an
 * <a> when `href` is provided so links stay semantic, or a native
 * <button> otherwise.
 */
const Button = forwardRef(function Button(
  { as, href, variant = 'primary', className = '', children, ...props },
  ref
) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
  const classes = `${base} ${VARIANTS[variant]} ${className}`

  if (href || as === 'a') {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  )
})

export default Button
