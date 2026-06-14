export type ProcessStep = {
  step: number
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Share your project',
    description: 'Send your repo, Lovable link, or a screenshot of the error.',
  },
  {
    step: 2,
    title: 'I reproduce & diagnose',
    description: 'I trace the bug in your stack and identify the root cause.',
  },
  {
    step: 3,
    title: 'I fix & test',
    description: 'Code fix, local/staging verification, and deploy help if needed.',
  },
  {
    step: 4,
    title: 'You get the deliverables',
    description: 'Working code plus a written report explaining everything.',
  },
]

export const includedItems = [
  'Diagnosis',
  'Code fix',
  'Test steps',
  'Written report',
  'Revision window',
] as const

export const stackTools = ['Lovable', 'Bolt', 'Supabase', 'Vercel', 'Stripe'] as const
