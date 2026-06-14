export type Testimonial = {
  id: string
  quote: string
  stack: string
  outcome: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'lovable-auth',
    quote: 'Fixed auth loop for a Lovable SaaS — live in 48h',
    stack: 'Lovable · Supabase',
    outcome: 'Login flow restored, redirect loop eliminated',
  },
  {
    id: 'bolt-stripe',
    quote: 'Recovered Stripe checkout on a Bolt storefront',
    stack: 'Bolt · Stripe',
    outcome: 'Checkout working, env vars configured on Vercel',
  },
  {
    id: 'api-security',
    quote: 'Found exposed API key and moved secrets server-side',
    stack: 'Cursor · React',
    outcome: 'Hardcoded key removed, secure env pattern applied',
  },
]
