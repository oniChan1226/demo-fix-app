import { includedItems, processSteps, stackTools } from '../data/process'

export function HowItWorks() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted md:text-base">
            From broken app to working delivery — a clear, predictable process.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-border bg-surface p-4 sm:p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-elevated text-sm font-bold text-fixed">
                {step.step}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border/60 bg-surface/50 px-4 py-4 text-center sm:px-6">
          <p className="text-sm text-muted">
            <span className="font-medium text-text">What&apos;s included:</span>{' '}
            {includedItems.join(' · ')}
          </p>
          <p className="mt-2 text-xs text-muted/80">
            Stack experience: {stackTools.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  )
}
