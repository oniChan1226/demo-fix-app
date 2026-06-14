import { useState } from 'react'
import type { CaseStudy } from '../data/cases'
import { CodeDiff } from './CodeDiff'
import { ToggleSwitch } from './ToggleSwitch'

type CaseCardProps = {
  caseStudy: CaseStudy
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  const [isFixed, setIsFixed] = useState(false)

  return (
    <article
      className={`flex flex-col rounded-xl border bg-surface p-4 transition-shadow sm:p-5 ${
        isFixed
          ? 'border-fixed/50 shadow-[0_0_24px_rgba(34,197,94,0.15)]'
          : 'border-broken/50 shadow-[0_0_24px_rgba(239,68,68,0.15)]'
      }`}
    >
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-white">{caseStudy.title}</h2>
        <ToggleSwitch
          id={caseStudy.id}
          isFixed={isFixed}
          onChange={setIsFixed}
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

      <CodeDiff lines={caseStudy.diff} />
    </article>
  )
}
