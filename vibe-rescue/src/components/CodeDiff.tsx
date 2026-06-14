import { useState } from 'react'
import type { DiffLine } from '../data/cases'

type CodeDiffProps = {
  lines: DiffLine[]
}

function DiffLineRow({ line, lineNumber }: { line: DiffLine; lineNumber: number }) {
  const prefix =
    line.type === 'remove' ? '-' : line.type === 'add' ? '+' : ' '
  const bgClass =
    line.type === 'remove'
      ? 'bg-broken/10 text-red-400'
      : line.type === 'add'
        ? 'bg-fixed/10 text-green-400'
        : 'text-muted/80'

  return (
    <div className={`flex font-mono text-[11px] leading-5 sm:text-xs ${bgClass}`}>
      <span className="w-8 shrink-0 select-none pr-2 text-right text-muted/50">
        {lineNumber}
      </span>
      <span className="w-4 shrink-0 select-none">{prefix}</span>
      <code className="min-w-0 flex-1 pr-2 break-all whitespace-pre-wrap">
        {line.content}
      </code>
    </div>
  )
}

export function CodeDiff({ lines }: CodeDiffProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex min-h-11 w-full items-center justify-between rounded-lg border border-border bg-surface-elevated px-3 py-2 text-left text-sm text-muted transition-colors hover:border-border hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed"
      >
        <span className="font-medium">View fix (code)</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
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
      {open && (
        <div className="mt-2 overflow-x-auto rounded-lg border border-border bg-code-bg py-2 [-webkit-overflow-scrolling:touch]">
          <div className="min-w-[min(100%,280px)]">
            {lines.map((line, index) => (
              <DiffLineRow key={`${index}-${line.content}`} line={line} lineNumber={index + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
