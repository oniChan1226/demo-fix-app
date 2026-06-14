import { ThemeToggle } from './ThemeToggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-banner-border bg-banner-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:py-3">
        <div
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5"
          role="status"
          aria-label="Demo disclaimer"
        >
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-bold text-muted"
            aria-hidden="true"
          >
            i
          </span>
          <p className="truncate text-xs leading-snug text-text sm:text-sm sm:leading-normal">
            <span className="font-medium text-heading">Demo only</span>
            <span className="hidden text-muted sm:inline">
              {' '}
              — simulated scenarios, not real errors or client data.
            </span>
            <span className="text-muted sm:hidden"> — not real errors.</span>
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
