import { includedItems, processSteps, stackTools } from '../data/process'

export function HowItWorks() {
  return (
    <section className="px-4 py-12 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-section">How it works</h2>
          <p className="text-section-desc mx-auto max-w-lg">
            From broken app to working delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-border bg-surface p-4 sm:p-5"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-surface-elevated text-xs font-semibold text-fixed">
                {step.step}
              </span>
              <h3 className="mt-3 text-sm font-semibold tracking-tight text-heading">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border/60 bg-surface/50 px-4 py-3.5 text-center sm:px-6">
          <p className="text-sm text-muted">
            <span className="font-medium text-text">Included:</span>{' '}
            {includedItems.join(' · ')}
          </p>
          <p className="mt-1.5 text-xs tracking-wide text-muted/80">
            {stackTools.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  )
}
