import { site } from '../config/site'

type FiverrCtaProps = {
  variant?: 'primary' | 'outline' | 'compact'
  label?: string
  className?: string
}

const variantClasses = {
  primary:
    'bg-broken text-white hover:bg-red-500 focus-visible:outline-broken',
  outline:
    'border border-border bg-surface text-text hover:border-muted focus-visible:outline-fixed',
  compact:
    'bg-broken text-white hover:bg-red-500 focus-visible:outline-broken px-4 py-2',
}

export function FiverrCta({
  variant = 'primary',
  label = 'Order on Fiverr',
  className = '',
}: FiverrCtaProps) {
  const isCompact = variant === 'compact'

  return (
    <a
      href={site.fiverrUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center rounded-lg font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isCompact
          ? `${variantClasses.compact} text-ui`
          : `${variantClasses[variant]} px-6 py-3 text-ui`
      } ${className}`}
    >
      {label}
    </a>
  )
}
