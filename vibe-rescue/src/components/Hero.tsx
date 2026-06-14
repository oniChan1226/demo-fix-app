import { site } from '../config/site'
import { useDemo } from '../context/DemoContext'
import { FiverrCta } from './FiverrCta'
import { PageContainer } from './PageContainer'

export function Hero() {
  const { globalMode, setGlobalMode } = useDemo()

  const toggleGlobalDemo = () => {
    setGlobalMode(globalMode === 'fixed' ? 'broken' : 'fixed')
  }

  return (
    <section className="relative overflow-hidden pb-8 pt-8 md:pb-10 md:pt-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(239,68,68,0.12), transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.08), transparent 40%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <PageContainer className="relative text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-display">
            Broken AI App → Fixed &amp; Live
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-section-desc">
            {site.gigTagline}{' '}
            <span className="font-medium text-text">{site.authorName}</span>
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap">
            <FiverrCta label="Order on Fiverr" />
            <a
              href="#cases"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed"
            >
              See common issues
            </a>
            <a
              href="#report"
              className="inline-flex min-h-10 items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed"
            >
              View sample report
            </a>
            <button
              type="button"
              onClick={toggleGlobalDemo}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${globalMode === 'fixed' ? 'bg-fixed' : 'bg-broken'}`}
                aria-hidden="true"
              />
              {globalMode === 'fixed' ? 'Show all broken' : 'Show all fixed'}
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
