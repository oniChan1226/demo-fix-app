import type { CaseTag } from '../data/cases'
import { tagLabels } from '../data/cases'

type CaseFilterBarProps = {
  activeTag: CaseTag | 'all'
  onTagChange: (tag: CaseTag | 'all', firstCaseId?: string) => void
}

const filterTags: Array<CaseTag | 'all'> = [
  'all',
  'crash',
  'auth',
  'payments',
  'security',
  'deploy',
  'database',
  'api',
  'feature',
]

export function CaseFilterBar({ activeTag, onTagChange }: CaseFilterBarProps) {
  return (
    <div className="mb-8">
      <h2 className="text-section">Which one looks like yours?</h2>
      <p className="text-section-desc mt-1.5">
        Nine common issues in AI-built apps — filter by type.
      </p>
      <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
        {filterTags.map((tag) => {
          const isActive = activeTag === tag
          const label = tag === 'all' ? 'All' : tagLabels[tag]

          return (
            <button
              key={tag}
              type="button"
              onClick={() => onTagChange(tag)}
              aria-pressed={isActive}
              className={`text-ui min-h-11 rounded-full border px-3.5 py-2.5 font-medium tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed sm:px-4 ${
                isActive
                  ? 'border-fixed/50 bg-fixed/15 text-fixed'
                  : 'border-border bg-surface text-muted hover:border-muted hover:text-text'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
