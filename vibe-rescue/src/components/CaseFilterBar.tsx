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
]

export function CaseFilterBar({ activeTag, onTagChange }: CaseFilterBarProps) {
  return (
    <div className="mb-6">
      <h2 className="text-section">
        Which one looks like yours?
      </h2>
      <p className="text-section-desc mt-1.5">
        Filter by issue type.
      </p>
      <div className="mt-4 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filterTags.map((tag) => {
          const isActive = activeTag === tag
          const label = tag === 'all' ? 'All' : tagLabels[tag]

          return (
            <button
              key={tag}
              type="button"
              onClick={() => onTagChange(tag)}
              aria-pressed={isActive}
              className={`min-h-10 shrink-0 snap-start rounded-full border px-3.5 py-2 text-xs font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed sm:text-sm sm:px-4 ${
                isActive
                  ? 'border-fixed/50 bg-fixed/15 text-fixed'
                  : 'border-border bg-surface text-muted hover:border-border hover:text-text'
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
