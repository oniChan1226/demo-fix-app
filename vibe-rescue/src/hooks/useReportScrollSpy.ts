import { useEffect, useState, type RefObject } from 'react'
import type { ReportSectionId } from '../data/reportSections'

type UseReportScrollSpyOptions = {
  sectionIds: ReportSectionId[]
  defaultSection?: ReportSectionId
}

export function useReportScrollSpy(
  scrollRef: RefObject<HTMLElement | null>,
  sectionRefs: RefObject<Map<ReportSectionId, HTMLElement | null>>,
  { sectionIds, defaultSection = 'symptom' }: UseReportScrollSpyOptions,
) {
  const [activeSection, setActiveSection] = useState<ReportSectionId>(defaultSection)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const root = scrollRef.current
    const refs = sectionRefs.current
    if (!root || !refs) return

    const updateProgress = () => {
      const max = root.scrollHeight - root.clientHeight
      setScrollProgress(max > 0 ? (root.scrollTop / max) * 100 : 0)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const topmost = visible[0]
        if (topmost) {
          const id = topmost.target.getAttribute('data-section-id') as ReportSectionId
          if (id) setActiveSection(id)
        }
      },
      {
        root,
        rootMargin: '-8% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    )

    for (const id of sectionIds) {
      const el = refs.get(id)
      if (el) observer.observe(el)
    }

    root.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => {
      observer.disconnect()
      root.removeEventListener('scroll', updateProgress)
    }
  }, [scrollRef, sectionRefs, sectionIds])

  return { activeSection, scrollProgress }
}
