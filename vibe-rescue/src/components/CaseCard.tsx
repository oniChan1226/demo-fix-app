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
      className={`scroll-mt-28 flex flex-col rounded-xl border bg-surface p-4 transition-shadow sm:p-5 ${
        isFixed
          ? 'border-fixed/50 shadow-[0_0_24px_rgba(34,197,94,0.15)]'
          : 'border-broken/50 shadow-[0_0_24px_rgba(239,68,68,0.15)]'
      }`}
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-surface-elevated px-2 py-0.5 text-[10px] font-medium text-muted"
          >
            {tagLabels[tag]}
          </span>
        ))}
        <span className="rounded-full border border-broken/30 bg-broken/10 px-2 py-0.5 text-[10px] font-medium text-broken">
          {caseStudy.severity}
        </span>
        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted">
          ~{caseStudy.typicalFixTime}
        </span>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-heading">{caseStudy.title}</h2>
        <ToggleSwitch
          id={caseStudy.id}
          isFixed={isFixed}
          onChange={handleToggle}
        />
      </div>

      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-lg border bg-surface-elevated ${
          isFixed ? 'border-fixed/30' : 'border-broken/30'
        }`}
        aria-live="polite"
        aria-label={`${caseStudy.title} preview — ${isFixed ? 'fixed' : 'broken'} state`}
      >
        {caseStudy.renderPreview(isFixed)}
      </div>

      {!isFixed && (
        <p className="mt-2 text-center text-xs text-muted">
          Tap <span className="font-medium text-fixed">Fixed</span> to see the result
        </p>
      )}

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">
            What was wrong
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text/90">
            {caseStudy.whatWasWrong}
          </p>
        </div>

        <div className="rounded-lg border border-border/60 bg-surface-elevated/50 px-3 py-2.5">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">
            The fix
          </p>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm leading-relaxed">
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

      <div className="mt-4">
        <button
          type="button"
          onClick={() => setReportOpen((prev) => !prev)}
          aria-expanded={reportOpen}
          className="flex min-h-11 w-full items-center justify-between rounded-lg border border-border bg-surface-elevated px-3 py-2 text-left text-sm text-muted transition-colors hover:border-border hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed"
        >
          <span className="font-medium">View sample report</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className={`shrink-0 transition-transform ${reportOpen ? 'rotate-180' : ''}`}
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
          <div className="mt-2">
            <SampleReport report={caseStudy.report} compact />
          </div>
        )}
      </div>

      <CodeDiff lines={caseStudy.diff} />
    </article>
  )
}
