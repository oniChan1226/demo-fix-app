import { testimonials } from '../data/testimonials'

export function Testimonials() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Recent outcomes
          </h2>
          <p className="mt-2 text-sm text-muted">
            Anonymized results from AI app fix projects.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="w-[280px] shrink-0 snap-start rounded-xl border border-border bg-surface p-5 md:w-auto"
            >
              <p className="text-sm leading-relaxed text-text/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-3 text-xs font-medium text-fixed">{item.stack}</p>
              <p className="mt-1 text-xs text-muted">{item.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
