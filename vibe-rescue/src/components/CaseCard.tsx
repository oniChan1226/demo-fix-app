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
      className={`scroll-mt-28 flex flex-col rounded-xl border bg-surface p-5 transition-[border-color,box-shadow] duration-300 sm:p-6 ${
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

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-card-title">{caseStudy.title}</h2>
        <ToggleSwitch
          id={caseStudy.id}
          isFixed={isFixed}
          onChange={handleToggle}
        />
      </div>

      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-lg border bg-surface-elevated transition-colors duration-300 ${
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
          <p className="text-ui mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 leading-relaxed">
            <span className="text-broken">{caseStudy.problem}</span>
            <span className="text-muted" aria-hidden="true">
              →
            </span>
            <span className="text-muted">{caseStudy.cause}</span>
            <span className="text-muted" aria-hidden="true">
              →
            </span>
            <span className="text-fixed">{caseStudy.fix}</span>
          </p>
        </div>
      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={() => setReportOpen((prev) => !prev)}
          aria-expanded={reportOpen}
          className="flex min-h-12 w-full items-center justify-between rounded-lg border border-border bg-surface-elevated px-4 py-3 text-left text-ui text-muted transition-colors hover:border-muted hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed"
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
