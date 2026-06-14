import { sampleDeliveryReport } from '../data/sampleDeliveryReport'
import { PageContainer } from './PageContainer'

export function DeliveryReportSection() {
  const report = sampleDeliveryReport

  return (
    <section id="report" className="scroll-mt-28 py-14 md:py-16">
      <PageContainer>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="text-section">Sample delivery report</h2>
            <p className="text-section-desc">
              What you receive after a fix. Real report content will replace this placeholder.
            </p>
          </div>

          <article className="rounded-xl border border-border bg-surface">
            <header className="border-b border-border px-5 py-5 sm:px-6 sm:py-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-label">Fix report</p>
                  <h3 className="mt-1.5 text-base font-semibold tracking-tight text-heading sm:text-lg">
                    {report.project}
                  </h3>
                </div>
                <p className="text-xs text-muted sm:text-sm">
                  Completed {report.completed}
                </p>
              </div>
              <p className="text-body mt-4">{report.summary}</p>
            </header>

            <div className="divide-y divide-border px-5 sm:px-6">
              {report.sections.map((section) => (
                <section key={section.title} className="py-5">
                  <h4 className="text-label">{section.title}</h4>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-body mt-3">
                      {paragraph}
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-3 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="text-body flex gap-2.5 pl-0.5"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <footer className="border-t border-border px-5 py-4 sm:px-6">
              <p className="text-xs leading-relaxed text-muted">
                Prepared by Fahad Khan. This is a sample layout for portfolio purposes.
              </p>
            </footer>
          </article>
        </div>
      </PageContainer>
    </section>
  )
}
