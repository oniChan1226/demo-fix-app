import { site } from '../config/site'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 md:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Every real fix comes with a written report — what was broken, why, and
          exactly what I changed.
        </p>
        <a
          href={site.fiverrUrl}
          className="inline-flex min-h-11 w-full min-w-[200px] items-center justify-center rounded-lg bg-broken px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-broken sm:w-auto"
          target={site.fiverrUrl.startsWith('http') ? '_blank' : undefined}
          rel={site.fiverrUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          Hire me on Fiverr
        </a>
        <p className="text-xs text-muted/60">
          © {new Date().getFullYear()} {site.authorName}. Demo site — no real data or APIs.
        </p>
      </div>
    </footer>
  )
}
