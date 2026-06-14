import { useState } from 'react'
import type { CaseStudy } from '../data/cases'
import { tagLabels } from '../data/cases'
import { useDemo } from '../context/DemoContext'
import { CodeDiff } from './CodeDiff'
import { SampleReport } from './SampleReport'
import { ToggleSwitch } from './ToggleSwitch'

type CaseCardProps = {
  caseStudy: CaseStudy
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  const { globalMode, clearGlobalMode } = useDemo()
  const [localFixed, setLocalFixed] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)

  const isFixed =
    globalMode === 'fixed' ? true : globalMode === 'broken' ? false : localFixed

  const handleToggle = (fixed: boolean) => {
    clearGlobalMode()
    setLocalFixed(fixed)
  }

  return (
    <article
      id={caseStudy.id}
      className={`scroll-mt-28 flex min-w-0 flex-col rounded-xl border bg-surface p-4 transition-[border-color,box-shadow] duration-300 sm:p-6 ${
        isFixed
          ? 'border-fixed/50 shadow-[0_0_24px_rgba(34,197,94,0.15)]'
          : 'border-broken/50 shadow-[0_0_24px_rgba(239,68,68,0.15)]'
      }`}
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="text-caption rounded-full border border-border bg-surface-elevated px-2.5 py-1 font-medium tracking-wide text-muted"
          >
            {tagLabels[tag]}
          </span>
        ))}
        <span className="text-caption rounded-full border border-broken/30 bg-broken/10 px-2.5 py-1 font-medium text-broken">
          {caseStudy.severity}
        </span>
        <span className="text-caption rounded-full border border-border px-2.5 py-1 text-muted">
          ~{caseStudy.typicalFixTime}
        </span>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="text-card-title min-w-0 flex-1">{caseStudy.title}</h2>
        <ToggleSwitch
          id={caseStudy.id}
          isFixed={isFixed}
          onChange={handleToggle}
          className="w-full shrink-0 sm:w-auto"
        />
      </div>

      <div
        className={`relative min-h-[160px] overflow-hidden rounded-lg border bg-surface-elevated transition-colors duration-300 sm:min-h-[180px] sm:aspect-[16/10] ${
          isFixed ? 'border-fixed/30' : 'border-broken/30'
        }`}
        aria-live="polite"
        aria-label={`${caseStudy.title} preview — ${isFixed ? 'fixed' : 'broken'} state`}
      >
        {caseStudy.renderPreview(isFixed)}
      </div>

      {!isFixed && (
        <p className="text-caption mt-2.5 text-center text-muted">
          Tap <span className="font-medium text-fixed">Fixed</span> to see the result
        </p>
      )}

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-label">What was wrong</p>
          <p className="text-body mt-2">{caseStudy.whatWasWrong}</p>
        </div>

        <div className="rounded-lg border border-border/60 bg-surface-elevated/50 px-4 py-3">
          <p className="text-label">The fix</p>
          <dl className="text-ui mt-2 space-y-2 sm:space-y-0">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
              <dt className="sr-only">Problem</dt>
              <dd className="text-broken leading-relaxed">{caseStudy.problem}</dd>
              <span className="hidden text-muted sm:inline" aria-hidden="true">
                →
              </span>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
              <dt className="sr-only">Cause</dt>
              <dd className="text-muted leading-relaxed">{caseStudy.cause}</dd>
              <span className="hidden text-muted sm:inline" aria-hidden="true">
                →
              </span>
            </div>
            <div>
              <dt className="sr-only">Fix</dt>
              <dd className="text-fixed leading-relaxed">{caseStudy.fix}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={() => setReportOpen((prev) => !prev)}
          aria-expanded={reportOpen}
          className="flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-border bg-surface-elevated px-4 py-3 text-left text-ui text-muted transition-colors hover:border-muted hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed"
        >
          <span className="font-medium">Issue summary</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-200 ${reportOpen ? 'rotate-180' : ''}`}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {reportOpen && (
          <div className="mt-3">
            <SampleReport report={caseStudy.report} compact />
          </div>
        )}
      </div>

      <CodeDiff lines={caseStudy.diff} />
    </article>
  )
}
