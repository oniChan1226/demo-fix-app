type ToggleSwitchProps = {
  isFixed: boolean
  onChange: (isFixed: boolean) => void
  id: string
}

export function ToggleSwitch({ isFixed, onChange, id }: ToggleSwitchProps) {
  return (
    <div
      className="inline-flex rounded-lg border border-border bg-surface-elevated p-1"
      role="group"
      aria-label="Toggle between broken and fixed state"
    >
      <button
        type="button"
        id={`${id}-broken`}
        aria-pressed={!isFixed}
        onClick={() => onChange(false)}
        className={`min-h-11 min-w-[88px] rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-broken ${
          !isFixed
            ? 'bg-broken/15 text-broken shadow-sm'
            : 'text-muted hover:text-text'
        }`}
      >
        Broken
      </button>
      <button
        type="button"
        id={`${id}-fixed`}
        aria-pressed={isFixed}
        onClick={() => onChange(true)}
        className={`min-h-11 min-w-[88px] rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed ${
          isFixed
            ? 'bg-fixed/15 text-fixed shadow-sm'
            : 'text-muted hover:text-text'
        }`}
      >
        Fixed
      </button>
    </div>
  )
}
