import type { ReactNode } from 'react'
import { stackTools } from '../data/stackTools'
import { PageContainer } from './PageContainer'

function StackBadge({ name, icon }: { name: string; icon: ReactNode }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2.5 rounded-lg border border-border/60 bg-surface/80 px-4 py-2.5 text-muted shadow-sm backdrop-blur-sm"
      title={name}
      aria-hidden="true"
    >
      {icon}
      <span className="text-ui font-medium tracking-tight">{name}</span>
    </div>
  )
}

export function LogoRow() {
  const loop = [...stackTools, ...stackTools]

  return (
    <section className="pb-12" aria-label="Built with common vibe-coding tools">
      <PageContainer>
        <p className="text-label mb-5 text-center">Common stack</p>
      </PageContainer>

      <div className="stack-marquee relative">
        <div className="stack-marquee-fade stack-marquee-fade-left" aria-hidden="true" />
        <div className="stack-marquee-fade stack-marquee-fade-right" aria-hidden="true" />

        <div className="stack-marquee-track">
          {loop.map((tool, index) => (
            <StackBadge key={`${tool.id}-${index}`} name={tool.name} icon={tool.icon} />
          ))}
        </div>
      </div>

      <p className="sr-only">{stackTools.map((t) => t.name).join(', ')}</p>
    </section>
  )
}
