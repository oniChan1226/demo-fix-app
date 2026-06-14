import { site } from '../config/site'
import { FiverrCta } from './FiverrCta'

type FooterProps = {
  footerRef?: React.RefObject<HTMLElement | null>
}

export function Footer({ footerRef }: FooterProps) {
  return (
    <footer
      ref={footerRef}
      className="border-t border-border px-4 py-12 md:py-16"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p className="max-w-md text-sm leading-relaxed text-muted md:text-[0.9375rem]">
          Every fix includes a written report — what broke, why, and what changed.
        </p>
        <FiverrCta label="Hire me on Fiverr" />
        <p className="text-xs text-muted/60">
          © {new Date().getFullYear()} {site.authorName}. Demo site — no real data or APIs.
        </p>
      </div>
    </footer>
  )
}
