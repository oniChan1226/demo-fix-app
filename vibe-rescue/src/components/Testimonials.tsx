import { testimonials } from '../data/testimonials'
import { PageContainer } from './PageContainer'

export function Testimonials() {
  return (
    <section className="py-12 md:py-14">
      <PageContainer>
        <div className="mb-8 text-center">
          <h2 className="text-section">
            Recent outcomes
          </h2>
          <p className="text-section-desc">
            Anonymized fix results.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="w-[280px] shrink-0 snap-start rounded-xl border border-border bg-surface p-5 md:w-auto"
            >
              <p className="text-sm leading-relaxed tracking-tight text-text/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-3 text-xs font-medium text-fixed">{item.stack}</p>
              <p className="mt-1 text-xs text-muted">{item.outcome}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
