import { includedItems, processSteps, stackTools } from '../data/process'
import { PageContainer } from './PageContainer'

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16">
      <PageContainer>
        <div className="mb-10 text-center">
          <h2 className="text-section">How it works</h2>
          <p className="text-section-desc mx-auto max-w-lg">
            From broken app to working delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="h-full rounded-xl border border-border bg-surface p-5 sm:p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-elevated text-ui font-semibold text-fixed">
                {step.step}
              </span>
              <h3 className="text-card-title mt-4">{step.title}</h3>
              <p className="text-body mt-2">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border/60 bg-surface/50 px-5 py-4 text-center sm:px-6">
          <p className="text-ui text-muted">
            <span className="font-medium text-text">Included:</span>{' '}
            {includedItems.join(' · ')}
          </p>
          <p className="text-caption mt-2 tracking-wide text-muted/80">
            {stackTools.join(' · ')}
          </p>
        </div>
      </PageContainer>
    </section>
  )
}
