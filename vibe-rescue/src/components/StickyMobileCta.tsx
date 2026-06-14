import { useEffect, useState } from 'react'
import { FiverrCta } from './FiverrCta'

type StickyMobileCtaProps = {
  footerRef: React.RefObject<HTMLElement | null>
}

export function StickyMobileCta({ footerRef }: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [footerRef])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/95 backdrop-blur-sm safe-bottom md:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <p className="min-w-0 flex-1 text-xs leading-snug text-muted">
          AI app fixes
        </p>
        <FiverrCta variant="compact" label="Hire on Fiverr" className="shrink-0" />
      </div>
    </div>
  )
}
