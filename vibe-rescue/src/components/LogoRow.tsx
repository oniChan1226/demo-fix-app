import type { ReactNode } from 'react'
import { PageContainer } from './PageContainer'

type LogoProps = {
  name: string
  children: ReactNode
}

function Logo({ name, children }: LogoProps) {
  return (
    <div
      className="flex shrink-0 items-center gap-2.5 rounded-lg border border-border/60 bg-surface/60 px-4 py-2.5 text-muted transition-colors hover:border-border hover:text-text"
      title={name}
    >
      {children}
      <span className="text-ui font-medium tracking-tight">{name}</span>
    </div>
  )
}

export function LogoRow() {
  return (
    <section className="pb-12" aria-label="Built with common vibe-coding tools">
      <PageContainer>
        <p className="text-label mb-5 text-center">Common stack</p>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden">
          <Logo name="Lovable">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
              />
            </svg>
          </Logo>
          <Logo name="Bolt">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
            </svg>
          </Logo>
          <Logo name="Cursor">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 3l14 7-6.5 1.5L11 20 5 3z" fill="currentColor" />
            </svg>
          </Logo>
          <Logo name="Supabase">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.5 3.61v7.22L12 18.62 5.5 15.01V7.79L12 4.18z"
                fill="currentColor"
              />
            </svg>
          </Logo>
        </div>
      </PageContainer>
    </section>
  )
}
