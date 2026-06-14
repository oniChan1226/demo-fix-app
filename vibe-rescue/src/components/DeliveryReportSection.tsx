import { useCallback, useMemo, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  getReportSectionContent,
  reportSectionDefs,
  type ReportSectionId,
} from '../data/reportSections'
import { sampleDeliveryReport } from '../data/sampleDeliveryReport'
import { useReportScrollSpy } from '../hooks/useReportScrollSpy'
import { easeOut } from '../lib/motion'
import { PageContainer } from './PageContainer'

function ReportSectionHeading({ children }: { children: string }) {
  return (
    <h4 className="report-section-heading">{children}</h4>
  )
}

function ReportParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-3 space-y-3">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="report-body-text">
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
        <li key={item} className="report-body-text flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fixed" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function DeliveryReportSection() {
  const report = sampleDeliveryReport
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Map<ReportSectionId, HTMLElement | null>>(new Map())
  const reduceMotion = useReducedMotion()

  const sectionIds = useMemo(
    () => reportSectionDefs.map((section) => section.id),
    [],
  )

  const { activeSection, scrollProgress } = useReportScrollSpy(scrollRef, sectionRefs, {
    sectionIds,
  })

  const activeMeta = reportSectionDefs.find((section) => section.id === activeSection)

  const setSectionRef = useCallback(
    (id: ReportSectionId) => (node: HTMLElement | null) => {
      sectionRefs.current.set(id, node)
    },
    [],
  )

  const scrollToSection = (id: ReportSectionId) => {
    sectionRefs.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
              onClick={() => {
                void import('../lib/downloadSampleReport').then(({ downloadSampleReport }) =>
                  downloadSampleReport(),
                )
              }}
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
              Download sample report (PDF)
            </button>
          </div>

          <article className="overflow-hidden rounded-xl border border-border bg-surface">
            <header className="border-b border-border px-4 py-6 sm:px-8 sm:py-8">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.25em] text-muted">
                Fix report
              </p>
              <h3 className="text-section mt-3 text-balance">{report.issueTitle}</h3>
              <p className="report-body-text text-caption mt-3 text-muted">
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

            <div className="relative border-b border-border bg-surface-elevated/30">
              <div
                className="sticky top-0 z-10 border-b border-border/80 bg-surface/95 px-4 py-3 backdrop-blur-md sm:px-8"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex min-h-[2.75rem] items-center justify-between gap-4">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={activeSection}
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: easeOut }}
                      className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-fixed"
                    >
                      {activeMeta?.headingUpper}
                    </motion.p>
                  </AnimatePresence>
                  <span className="text-caption shrink-0 tabular-nums text-muted">
                    {Math.round(scrollProgress)}%
                  </span>
                </div>

                <div
                  className="mt-2.5 h-1 overflow-hidden rounded-full bg-border/80"
                  role="progressbar"
                  aria-valuenow={Math.round(scrollProgress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Report scroll progress"
                >
                  <motion.div
                    className="h-full rounded-full bg-fixed"
                    animate={{ width: `${scrollProgress}%` }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.15, ease: easeOut }}
                  />
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {reportSectionDefs.map((section) => {
                    const isActive = section.id === activeSection
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`text-caption rounded-full border px-2.5 py-1 font-medium transition-colors ${
                          isActive
                            ? 'border-fixed/40 bg-fixed/12 text-fixed'
                            : 'border-transparent text-muted hover:border-border hover:text-text'
                        }`}
                      >
                        {section.heading}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div
                ref={scrollRef}
                className="report-scroll-body max-h-[min(70vh,36rem)] overflow-y-auto overscroll-contain px-4 py-6 sm:px-8 sm:py-8"
              >
                <div className="space-y-10">
                  {reportSectionDefs.map((section) => {
                    const content = getReportSectionContent(report, section.id)
                    const isActive = section.id === activeSection

                    return (
                      <section
                        key={section.id}
                        ref={setSectionRef(section.id)}
                        data-section-id={section.id}
                        className={`report-section scroll-mt-4 rounded-lg border px-4 py-5 transition-colors duration-300 sm:px-5 ${
                          isActive
                            ? 'border-fixed/25 bg-fixed/[0.03]'
                            : 'border-transparent bg-transparent'
                        }`}
                      >
                        <ReportSectionHeading>{section.heading}</ReportSectionHeading>
                        {section.type === 'list' ? (
                          <ReportList items={content} />
                        ) : (
                          <ReportParagraphs paragraphs={content} />
                        )}
                      </section>
                    )
                  })}
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface to-transparent"
                aria-hidden="true"
              />
            </div>

            <footer className="border-t border-border bg-surface-elevated/40 px-4 py-6 sm:px-8">
              <p className="report-body-text">{report.orderNote}</p>
              <p className="text-ui mt-5 font-medium text-heading">{report.authorLine}</p>
              <p className="text-caption mt-1 text-muted">{report.authorSubline}</p>
            </footer>
          </article>
        </div>
      </PageContainer>
    </section>
  )
}
