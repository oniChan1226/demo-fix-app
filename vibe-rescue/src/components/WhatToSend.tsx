import { whatToSend } from '../data/gigContent'
import { FiverrCta } from './FiverrCta'
import { PageContainer } from './PageContainer'

export function WhatToSend() {
  return (
    <section className="py-10 md:py-12">
      <PageContainer>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-section">What to send me</h2>
            <p className="text-section-desc">
              Three things to get started on Fiverr. No need for everything upfront.
            </p>
          </div>
          <ol className="space-y-4">
            {whatToSend.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-surface px-5 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-ui font-semibold text-fixed">
                  {index + 1}
                </span>
                <div>
                  <p className="text-card-title text-base">{item.title}</p>
                  <p className="text-body mt-1 text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex justify-center">
            <FiverrCta label="Start on Fiverr" />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
