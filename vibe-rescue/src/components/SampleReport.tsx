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
            <p className="text-label">Fix report</p>
            <p className="mt-1 text-sm font-semibold tracking-tight text-heading">
              {title}
            </p>
          </div>
          <span className="rounded bg-fixed/15 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-fixed">
            DELIVERED
          </span>
        </div>
      )}

      <div className={compact ? 'space-y-3' : 'space-y-4'}>
        <ReportSection label="Symptom" content={report.symptom} />
        <ReportSection label="Root cause" content={report.rootCause} />
        <div>
          <p className="text-label">What I changed</p>
          <ul className="mt-2 space-y-1.5">
            {report.changes.map((change) => (
              <li key={change} className="text-body flex gap-2">
                <span className="text-fixed">·</span>
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
      <p className="text-label">{label}</p>
      <p className="text-body mt-1.5">{content}</p>
    </div>
  )
}
