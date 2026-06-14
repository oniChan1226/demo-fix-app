import { includedItems, processSteps, stackTools } from '../data/process'
import { PageContainer } from './PageContainer'

const stepIcons = [
  // Share
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16V4m0 0L8 8m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Diagnose
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  // Fix
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 6.3a4 4 0 00-5.4 5.4L5 16l3 3 4.3-4.3a4 4 0 005.4-5.4l-2.1 2.1-3.3-3.3 2.1-2.1z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Deliver
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  ),
] as const

export function HowItWorks() {
  return (
    <section className="relative py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, transparent, rgba(34,197,94,0.04) 40%, rgba(239,68,68,0.03) 70%, transparent)',
        }}
      />

      <PageContainer className="relative">
        <div className="mb-12 text-center md:mb-14">
          <p className="text-label">Simple process</p>
          <h2 className="text-section mt-2">How it works</h2>
          <p className="text-section-desc mx-auto mt-2 max-w-lg">
            From broken app to working delivery — four clear steps, no guesswork.
          </p>
        </div>

        {/* Desktop: horizontal journey */}
        <ol className="hidden lg:grid lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, index) => (
            <li key={step.step} className="relative flex flex-col items-center px-3 text-center">
              {index < processSteps.length - 1 && (
                <span
                  className="pointer-events-none absolute left-[calc(50%+1.75rem)] top-7 h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-border via-fixed/30 to-border"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
                <span className="text-fixed">{stepIcons[index]}</span>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-heading text-[10px] font-bold text-bg">
                  {step.step}
                </span>
              </div>

              <div className="mt-5 w-full rounded-xl border border-border/80 bg-surface/90 p-5 backdrop-blur-sm">
                <h3 className="text-card-title">{step.title}</h3>
                <p className="text-body mt-2 text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="space-y-0 lg:hidden">
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1

            return (
              <li key={step.step} className="relative flex gap-4 pb-8 last:pb-0">
                {!isLast && (
                  <span
                    className="absolute bottom-0 left-[1.6875rem] top-14 w-px bg-gradient-to-b from-fixed/40 to-border"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
                    <span className="text-fixed">{stepIcons[index]}</span>
                  </div>
                  <span className="text-caption mt-1.5 font-semibold tabular-nums text-muted">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>

                <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-4 sm:p-5">
                  <h3 className="text-card-title">{step.title}</h3>
                  <p className="text-body mt-2 text-muted">{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>

        {/* Included strip */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface md:mt-12">
          <div className="border-b border-border bg-surface-elevated/60 px-5 py-4 sm:px-6">
            <p className="text-label text-center">Every order includes</p>
          </div>
          <div className="px-5 py-6 sm:px-8 sm:py-7">
            <ul className="flex flex-wrap justify-center gap-2.5">
              {includedItems.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-fixed/25 bg-fixed/8 px-3.5 py-2 text-ui text-text"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0 text-fixed"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 8.5l2.5 2.5 6.5-6.5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-caption mt-5 text-center leading-relaxed text-muted">
              <span className="font-medium text-text">Stacks I work with:</span>{' '}
              {stackTools.join(' · ')} and more
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
