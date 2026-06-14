import { ThemeToggle } from './ThemeToggle'
import { PageContainer } from './PageContainer'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-banner-border bg-banner-bg/95 backdrop-blur-sm">
      <PageContainer className="flex items-center gap-3 py-2.5 sm:py-3">
        <div
          className="flex min-w-0 flex-1 items-center gap-2.5"
          role="status"
          aria-label="Demo disclaimer"
        >
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-[10px] font-medium text-muted"
            aria-hidden="true"
          >
            i
          </span>
          <p className="truncate text-xs leading-normal text-muted sm:text-[0.8125rem]">
            <span className="font-medium text-heading">Demo only</span>
            <span className="hidden sm:inline">
              {' '}
              Simulated scenarios, not real errors.
            </span>
          </p>
        </div>
        <ThemeToggle />
      </PageContainer>
    </header>
  )
}
