import type { ReactNode } from 'react'

export type StackTool = {
  id: string
  name: string
  icon: ReactNode
}

const iconClass = 'shrink-0'

export const stackTools: StackTool[] = [
  {
    id: 'lovable',
    name: 'Lovable',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'bolt',
    name: 'Bolt',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'cursor',
    name: 'Cursor',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path d="M5 3l14 7-6.5 1.5L11 20 5 3z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'supabase',
    name: 'Supabase',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path
          d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.5 3.61v7.22L12 18.62 5.5 15.01V7.79L12 4.18z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'vercel',
    name: 'Vercel',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path d="M12 2L22 20H2L12 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 16V8l5.5 8H8z" fill="currentColor" />
        <path d="M14 8h2v8h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.25" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.25" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'stripe',
    name: 'Stripe',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path
          d="M4 10.5c0-2.2 1.8-3.5 4.8-3.5 2.2 0 4.4.5 4.4 2.2 0 1.6-1.4 2.1-3.8 2.5-2.9.5-5.4 1.1-5.4 4.2 0 2.5 2.1 4.1 5.6 4.1 1.9 0 3.6-.4 5-1.1v-3.4c-1.2.7-2.6 1.1-4.2 1.1-1.7 0-2.5-.6-2.5-1.5 0-1 .9-1.3 3.1-1.7 3-.5 5.4-1.2 5.4-4.4 0-2.7-2.2-4.2-5.8-4.2-2 0-4.2.5-5.8 1.4v3.3c1.4-.9 3.1-1.4 4.9-1.4 1.6 0 2.4.5 2.4 1.3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path d="M12 2l8 14.5-3.5 7.5L12 17l-4.5 7L4 16.5 12 2z" fill="currentColor" fillOpacity="0.85" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10v6M8 10h3.5c1.4 0 2.5 1.1 2.5 2.5S12.9 15 11.5 15H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 15.5c.8.7 1.8 1 2.8 1 1.2 0 2-.6 2-1.5 0-2.2-4.5-1.5-4.5-3.5 0-1.2 1.1-2 2.8-2 1 0 1.9.3 2.6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path
          d="M12 6c-3.5 0-5.5 1.75-6 5.25 1.2-1.6 2.6-2.2 4.2-1.7 0.9 0.3 1.5 0.9 2.2 1.6 1.2 1.2 2.5 2.5 5.4 2.5 3.5 0 5.5-1.75 6-5.25-1.2 1.6-2.6 2.2-4.2 1.7-0.9-0.3-1.5-0.9-2.2-1.6C16.2 7.3 14.9 6 12 6zm-6 6c-3.5 0-5.5 1.75-6 5.25 1.2-1.6 2.6-2.2 4.2-1.7 0.9 0.3 1.5 0.9 2.2 1.6 1.2 1.2 2.5 2.5 5.4 2.5 3.5 0 5.5-1.75 6-5.25-1.2 1.6-2.6 2.2-4.2 1.7-0.9-0.3-1.5-0.9-2.2-1.6C10.2 13.3 8.9 12 6 12z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
        <path
          d="M12 2.5l7.5 4.3v8.4L12 19.5 4.5 15.2V6.8L12 2.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 8v8M9.5 10.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]
