import { testimonials } from '../data/testimonials'
import { PageContainer } from './PageContainer'

export function Testimonials() {
  return (
    <section className="py-12 md:py-16">
      <PageContainer>
        <div className="mb-10 text-center">
          <h2 className="text-section">Recent outcomes</h2>
          <p className="text-section-desc">Anonymized fix results.</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="w-[300px] shrink-0 snap-start rounded-xl border border-border bg-surface p-6 md:w-auto"
            >
              <p className="text-body leading-relaxed tracking-tight text-text/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="text-ui mt-4 font-medium text-fixed">{item.stack}</p>
              <p className="text-caption mt-1.5 text-muted">{item.outcome}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
