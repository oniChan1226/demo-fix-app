import { sampleDeliveryReport } from '../data/sampleDeliveryReport'
import { downloadSampleReport } from '../lib/downloadSampleReport'
import { PageContainer } from './PageContainer'

function ReportSectionHeading({ children }: { children: string }) {
  return (
    <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted">
      {children}
    </h4>
  )
}

function ReportParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-3 space-y-3">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-body leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function ReportList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="text-body flex gap-3 leading-relaxed">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fixed" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function DeliveryReportSection() {
  const report = sampleDeliveryReport

  return (
    <section id="report" className="scroll-mt-28 py-14 md:py-20">
      <PageContainer>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-section">Sample delivery report</h2>
            <p className="text-section-desc">
              The same format you receive after every fix on Fiverr.
            </p>
            <button
              type="button"
              onClick={downloadSampleReport}
              className="text-ui mt-6 inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 font-medium text-text transition-colors hover:border-muted hover:bg-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download sample report
            </button>
          </div>

          <article className="rounded-xl border border-border bg-surface">
            <header className="border-b border-border px-4 py-6 sm:px-8 sm:py-8">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.25em] text-muted">
                Fix report
              </p>
              <h3 className="text-section mt-3">{report.issueTitle}</h3>
              <p className="text-caption mt-3 leading-relaxed text-muted">
                {report.disclaimer}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <span className="inline-flex w-fit rounded-md bg-fixed/15 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-fixed">
                  Fixed &amp; verified
                </span>
                <dl className="text-caption flex flex-col gap-1 text-muted sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
                  <div>
                    <dt className="sr-only">Stack</dt>
                    <dd>Stack: {report.stack}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Severity</dt>
                    <dd>Severity: {report.severity}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Turnaround</dt>
                    <dd>Turnaround: {report.turnaround}</dd>
                  </div>
                </dl>
              </div>
            </header>

            <div className="space-y-8 px-4 py-8 sm:px-8">
              <section>
                <ReportSectionHeading>The symptom</ReportSectionHeading>
                <ReportParagraphs paragraphs={report.symptom} />
              </section>

              <section>
                <ReportSectionHeading>What was actually wrong</ReportSectionHeading>
                <ReportParagraphs paragraphs={report.whatWasWrong} />
              </section>

              <section>
                <ReportSectionHeading>What I changed</ReportSectionHeading>
                <ReportList items={report.whatChanged} />
              </section>

              <section>
                <ReportSectionHeading>How to verify the fix</ReportSectionHeading>
                <ReportList items={report.howToVerify} />
              </section>

              <section>
                <ReportSectionHeading>How to keep it from happening again</ReportSectionHeading>
                <ReportParagraphs paragraphs={report.prevention} />
              </section>
            </div>

            <footer className="border-t border-border bg-surface-elevated/40 px-4 py-6 sm:px-8">
              <p className="text-body leading-relaxed text-text/90">{report.orderNote}</p>
              <p className="text-ui mt-5 font-medium text-heading">{report.authorLine}</p>
              <p className="text-caption mt-1 text-muted">{report.authorSubline}</p>
            </footer>
          </article>
        </div>
      </PageContainer>
    </section>
  )
}
