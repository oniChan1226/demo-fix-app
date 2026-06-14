import type { ReactNode } from 'react'
import { stackTools } from '../data/stackTools'
import { PageContainer } from './PageContainer'

function StackBadge({ name, icon }: { name: string; icon: ReactNode }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2.5 rounded-lg border border-border/60 bg-surface/80 px-4 py-2.5 text-muted shadow-sm backdrop-blur-sm"
      title={name}
    >
      {icon}
      <span className="text-ui font-medium tracking-tight">{name}</span>
    </div>
  )
}

function StackMarqueeGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="stack-marquee-group"
      aria-hidden={ariaHidden || undefined}
    >
      {stackTools.map((tool) => (
        <StackBadge key={tool.id} name={tool.name} icon={tool.icon} />
      ))}
    </div>
  )
}

export function LogoRow() {
  return (
    <section className="pb-12" aria-label="Built with common vibe-coding tools">
      <PageContainer>
        <p className="text-label mb-5 text-center">Common stack</p>
      </PageContainer>

      <div className="stack-marquee">
        <div className="stack-marquee-fade stack-marquee-fade-left" aria-hidden="true" />
        <div className="stack-marquee-fade stack-marquee-fade-right" aria-hidden="true" />

        <div className="stack-marquee-inner">
          <StackMarqueeGroup />
          <StackMarqueeGroup ariaHidden />
        </div>
      </div>
    </section>
  )
}
