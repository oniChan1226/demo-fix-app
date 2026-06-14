import type { FixReport } from '../data/cases'

type SampleReportProps = {
  report: FixReport
  title?: string
  compact?: boolean
}

export function SampleReport({ report, title, compact = false }: SampleReportProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-code-bg ${
        compact ? 'p-3' : 'p-4 sm:p-5'
      }`}
    >
      {title && (
        <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
          <div>
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">
              Fix Report
            </p>
            <p className="mt-0.5 text-sm font-medium text-heading">{title}</p>
          </div>
          <span className="rounded bg-fixed/15 px-2 py-1 font-mono text-[10px] text-fixed">
            DELIVERED
          </span>
        </div>
      )}

      <div className={compact ? 'space-y-3' : 'space-y-4'}>
        <ReportSection label="Symptom" content={report.symptom} />
        <ReportSection label="Root cause" content={report.rootCause} />
        <div>
          <p className="text-[10px] font-semibold tracking-wide text-muted uppercase">
            What I changed
          </p>
          <ul className="mt-1.5 space-y-1">
            {report.changes.map((change) => (
              <li
                key={change}
                className="flex gap-2 text-sm leading-relaxed text-text/90"
              >
                <span className="text-fixed">•</span>
                <span>{change}</span>
              </li>
            ))}
          </ul>
        </div>
        <ReportSection label="How to verify" content={report.verify} />
        <ReportSection label="Prevention" content={report.prevention} />
      </div>
    </div>
  )
}

function ReportSection({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-wide text-muted uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-text/90">{content}</p>
    </div>
  )
}
