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
    <div className="mb-8">
      <h2 className="text-section">Which one looks like yours?</h2>
      <p className="text-section-desc mt-1.5">Filter by issue type.</p>
      <div className="mt-5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filterTags.map((tag) => {
          const isActive = activeTag === tag
          const label = tag === 'all' ? 'All' : tagLabels[tag]

          return (
            <button
              key={tag}
              type="button"
              onClick={() => onTagChange(tag)}
              aria-pressed={isActive}
              className={`text-ui min-h-11 shrink-0 snap-start rounded-full border px-4 py-2.5 font-medium tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fixed sm:px-5 ${
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
