import { motion, useReducedMotion } from 'motion/react'

type ToggleSwitchProps = {
  isFixed: boolean
  onChange: (isFixed: boolean) => void
  id: string
  className?: string
}

export function ToggleSwitch({ isFixed, onChange, id, className = '' }: ToggleSwitchProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className={`relative inline-flex w-full rounded-lg border border-border bg-surface-elevated p-1 sm:w-auto ${className}`}
      role="group"
      aria-label="Toggle between broken and fixed state"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-md"
        initial={false}
        animate={{
          left: isFixed ? 'calc(50% + 2px)' : '4px',
          backgroundColor: isFixed
            ? 'rgba(34, 197, 94, 0.15)'
            : 'rgba(239, 68, 68, 0.15)',
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 420, damping: 34 }
        }
      />
      <button
        type="button"
        id={`${id}-broken`}
        aria-pressed={!isFixed}
        onClick={() => onChange(false)}
        className={`relative z-10 min-h-11 min-w-0 flex-1 rounded-md px-3 py-2 text-ui font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-broken sm:min-w-[92px] sm:flex-none sm:px-4 ${
          !isFixed ? 'text-broken' : 'text-muted hover:text-text'
        }`}
      >
        Broken
      </button>
      <button
        type="button"
        id={`${id}-fixed`}
        aria-pressed={isFixed}
        onClick={() => onChange(true)}
        className={`relative z-10 min-h-11 min-w-0 flex-1 rounded-md px-3 py-2 text-ui font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed sm:min-w-[92px] sm:flex-none sm:px-4 ${
          isFixed ? 'text-fixed' : 'text-muted hover:text-text'
        }`}
      >
        Fixed
      </button>
    </div>
  )
}
