/**
 * Sample delivery report content.
 * Replace `body` with markdown string when the real report is ready.
 */
export type DeliveryReportSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export type DeliveryReport = {
  id: string
  project: string
  completed: string
  summary: string
  sections: DeliveryReportSection[]
  /** Future: raw markdown passed to a renderer */
  markdown?: string
}

export const sampleDeliveryReport: DeliveryReport = {
  id: 'sample-report',
  project: 'Client dashboard (Lovable + Supabase)',
  completed: '12 June 2026',
  summary:
    'You reported a blank screen after sign in. The profile query was returning null on first load and the dashboard tried to read fields before checking. I added loading and error handling so the page waits for data or shows a clear message instead of crashing.',
  sections: [
    {
      title: 'What you reported',
      paragraphs: [
        'After logging in, the app showed a white screen. Console showed a TypeError on the dashboard page.',
      ],
    },
    {
      title: 'What I found',
      paragraphs: [
        'Dashboard.tsx rendered user.name from the Supabase profile response without checking if data existed. On a slow connection or missing profile row, data was null and React threw before anything appeared on screen.',
      ],
    },
    {
      title: 'What I changed',
      items: [
        'Dashboard.tsx: loading state while the profile query runs',
        'Dashboard.tsx: error screen if the query fails or returns empty',
        'Dashboard.tsx: optional chaining on profile fields with a Guest fallback',
      ],
    },
    {
      title: 'How to confirm',
      items: [
        'Sign in with a test account',
        'Dashboard should load with stats, or show an error message instead of a blank page',
        'Hard refresh once to confirm it still works on cold load',
      ],
    },
  ],
}
