import { Hero } from './components/Hero'
import { LogoRow } from './components/LogoRow'
import { Footer } from './components/Footer'
import { CaseCard } from './components/CaseCard'
import { cases } from './data/cases'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoRow />

      <main className="px-4 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
