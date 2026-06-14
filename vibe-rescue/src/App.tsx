import { useRef, useState } from 'react'
import { Hero } from './components/Hero'
import { LogoRow } from './components/LogoRow'
import { Footer } from './components/Footer'
import { CaseCard } from './components/CaseCard'
import { HowItWorks } from './components/HowItWorks'
import { WhatToSend } from './components/WhatToSend'
import { CaseFilterBar } from './components/CaseFilterBar'
import { DeliveryReportSection } from './components/DeliveryReportSection'
import { StickyMobileCta } from './components/StickyMobileCta'
import { SiteHeader } from './components/SiteHeader'
import { PageContainer } from './components/PageContainer'
import {
  getCasesByTag,
  getFirstCaseIdForTag,
  type CaseTag,
} from './data/cases'

export default function App() {
  const footerRef = useRef<HTMLElement>(null)
  const [activeTag, setActiveTag] = useState<CaseTag | 'all'>('all')

  const filteredCases = getCasesByTag(activeTag)

  const handleTagChange = (tag: CaseTag | 'all') => {
    setActiveTag(tag)
    const firstId = getFirstCaseIdForTag(tag)
    if (firstId) {
      requestAnimationFrame(() => {
        document.getElementById(firstId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <LogoRow />
      <HowItWorks />

      <main className="pb-24 md:pb-16">
        <PageContainer className="scroll-mt-28 pt-4">
          <section id="cases">
            <CaseFilterBar activeTag={activeTag} onTagChange={handleTagChange} />

            {filteredCases.length === 0 ? (
              <p className="rounded-xl border border-border bg-surface p-10 text-center text-body text-muted">
                No cases match this filter.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {filteredCases.map((caseStudy) => (
                  <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            )}
          </section>
        </PageContainer>

        <DeliveryReportSection />
        <WhatToSend />
      </main>

      <Footer footerRef={footerRef} />
      <StickyMobileCta footerRef={footerRef} />
    </div>
  )
}
