import { site } from '../config/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-16 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(239,68,68,0.12), transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.08), transparent 40%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted uppercase">
          {site.title}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-tight">
          Broken AI App → Fixed &amp; Live
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          A demo of common bugs in vibe-coded apps and how they look after a proper fix.
          Built by{' '}
          <span className="font-medium text-text">{site.authorName}</span>.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted/80">
          This is an illustrative demo. Each case shows a typical broken state and the
          result after the fix.
        </p>
      </div>
    </section>
  )
}
