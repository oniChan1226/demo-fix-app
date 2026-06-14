import { useRef, useState } from 'react'
import { Hero } from './components/Hero'
import { LogoRow } from './components/LogoRow'
import { Footer } from './components/Footer'
import { CaseCard } from './components/CaseCard'
import { HowItWorks } from './components/HowItWorks'
import { CaseFilterBar } from './components/CaseFilterBar'
import { SampleReport } from './components/SampleReport'
import { Testimonials } from './components/Testimonials'
import { StickyMobileCta } from './components/StickyMobileCta'
import { SiteHeader } from './components/SiteHeader'
import {
  cases,
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

  const featuredReport = cases[0].report

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <LogoRow />
      <HowItWorks />

      <main className="px-4 pb-24 md:pb-16">
        <section id="cases" className="mx-auto max-w-6xl scroll-mt-28 pt-4">
          <CaseFilterBar activeTag={activeTag} onTagChange={handleTagChange} />

          {filteredCases.length === 0 ? (
            <p className="rounded-xl border border-border bg-surface p-8 text-center text-muted">
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

        <section className="mx-auto mt-16 max-w-3xl">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-heading md:text-2xl">
              What you receive
            </h2>
            <p className="mt-2 text-sm text-muted">
              Every order includes a written fix report like this one.
            </p>
          </div>
          <SampleReport
            report={featuredReport}
            title={cases[0].title}
          />
        </section>
      </main>

      <Testimonials />
      <Footer footerRef={footerRef} />
      <StickyMobileCta footerRef={footerRef} />
    </div>
  )
}
