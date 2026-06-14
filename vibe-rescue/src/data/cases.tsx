import type { ReactNode } from 'react'
import { AuthPreview } from '../components/previews/AuthPreview'
import { ApiKeyPreview } from '../components/previews/ApiKeyPreview'
import { StripePreview } from '../components/previews/StripePreview'
import { WhiteScreenPreview } from '../components/previews/WhiteScreenPreview'

export type DiffLine = {
  type: 'context' | 'remove' | 'add'
  content: string
}

export type CaseStudy = {
  id: string
  title: string
  whatWasWrong: string
  problem: string
  cause: string
  fix: string
  diff: DiffLine[]
  renderPreview: (isFixed: boolean) => ReactNode
}

export const cases: CaseStudy[] = [
  {
    id: 'white-screen',
    title: 'White screen on load',
    whatWasWrong:
      'App crashed on load because a Supabase query returned null and wasn\'t handled.',
    problem: 'Blank screen on launch',
    cause: 'Unhandled null from Supabase query',
    fix: 'Added loading + error state with safe optional chaining',
    diff: [
      { type: 'context', content: 'const { data } = await supabase.from("profiles").select("*").single()' },
      { type: 'remove', content: 'return <Dashboard name={data.user.name} />' },
      { type: 'add', content: 'if (loading) return <Spinner />' },
      { type: 'add', content: 'if (error || !data) return <ErrorState message={error?.message} />' },
      { type: 'add', content: 'return <Dashboard name={data?.user?.name ?? "Guest"} />' },
    ],
    renderPreview: (isFixed) => <WhiteScreenPreview isFixed={isFixed} />,
  },
  {
    id: 'broken-auth',
    title: 'Broken authentication',
    whatWasWrong:
      'Auth redirect looped because the session wasn\'t being read correctly.',
    problem: 'Login button does nothing / infinite redirect',
    cause: 'Session check ran before JWT was hydrated',
    fix: 'Proper getSession() guard before redirect logic',
    diff: [
      { type: 'context', content: 'useEffect(() => {' },
      { type: 'remove', content: '  if (session) router.push("/dashboard")' },
      { type: 'remove', content: '  else router.push("/login")' },
      { type: 'add', content: '  supabase.auth.getSession().then(({ data }) => {' },
      { type: 'add', content: '    if (data.session && path === "/login") router.push("/dashboard")' },
      { type: 'add', content: '    if (!data.session && path !== "/login") router.push("/login")' },
      { type: 'add', content: '  })' },
      { type: 'context', content: '}, [session])' },
    ],
    renderPreview: (isFixed) => <AuthPreview isFixed={isFixed} />,
  },
  {
    id: 'stripe-payment',
    title: 'Failed payment / Stripe',
    whatWasWrong:
      'Stripe call failed due to a missing key. Fixed by configuring environment variables securely.',
    problem: 'Checkout throws error toast',
    cause: 'Stripe publishable key was undefined at runtime',
    fix: 'Configured VITE_STRIPE_KEY in environment variables',
    diff: [
      { type: 'context', content: 'import { loadStripe } from "@stripe/stripe-js"' },
      { type: 'remove', content: 'const stripe = await loadStripe(undefined)' },
      { type: 'add', content: 'const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY' },
      { type: 'add', content: 'if (!stripeKey) throw new Error("Missing Stripe key")' },
      { type: 'add', content: 'const stripe = await loadStripe(stripeKey)' },
    ],
    renderPreview: (isFixed) => <StripePreview isFixed={isFixed} />,
  },
  {
    id: 'exposed-api-key',
    title: 'Exposed API key (security)',
    whatWasWrong:
      'API key was hardcoded in the frontend and publicly exposed. Moved it to a secure environment variable.',
    problem: 'Secret key visible in client bundle',
    cause: 'Hardcoded sk_live key in source code',
    fix: 'Moved key to server-side / env-only access',
    diff: [
      { type: 'context', content: '// api/client.ts' },
      { type: 'remove', content: 'const API_KEY = "sk_live_••••..."' },
      { type: 'remove', content: 'fetch("/api/data", { headers: { Authorization: API_KEY } })' },
      { type: 'add', content: 'const API_URL = import.meta.env.VITE_API_URL' },
      { type: 'add', content: 'fetch(`${API_URL}/data`, { credentials: "include" })' },
    ],
    renderPreview: (isFixed) => <ApiKeyPreview isFixed={isFixed} />,
  },
]
