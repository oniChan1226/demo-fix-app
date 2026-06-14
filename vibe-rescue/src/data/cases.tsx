import type { ReactNode } from 'react'
import { AuthPreview } from '../components/previews/AuthPreview'
import { ApiKeyPreview } from '../components/previews/ApiKeyPreview'
import { EnvVarsPreview } from '../components/previews/EnvVarsPreview'
import { RlsPreview } from '../components/previews/RlsPreview'
import { StripePreview } from '../components/previews/StripePreview'
import { WhiteScreenPreview } from '../components/previews/WhiteScreenPreview'

export type DiffLine = {
  type: 'context' | 'remove' | 'add'
  content: string
}

export type CaseTag = 'crash' | 'auth' | 'payments' | 'security' | 'deploy' | 'database'

export type FixReport = {
  symptom: string
  rootCause: string
  changes: string[]
  verify: string
  prevention: string
}

export type CaseStudy = {
  id: string
  title: string
  tags: CaseTag[]
  severity: 'Critical' | 'High'
  typicalFixTime: string
  whatWasWrong: string
  problem: string
  cause: string
  fix: string
  diff: DiffLine[]
  report: FixReport
  renderPreview: (isFixed: boolean) => ReactNode
}

export const tagLabels: Record<CaseTag, string> = {
  crash: 'Crash / white screen',
  auth: 'Login / auth',
  payments: 'Payments',
  security: 'Security',
  deploy: 'Deploy / env vars',
  database: 'Database / RLS',
}

export const cases: CaseStudy[] = [
  {
    id: 'white-screen',
    title: 'White screen on load',
    tags: ['crash'],
    severity: 'Critical',
    typicalFixTime: '2–4 hours',
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
    report: {
      symptom: 'App shows a blank white screen immediately after loading.',
      rootCause:
        'Dashboard component accessed data.user.name before the Supabase profile query resolved, causing a null reference crash.',
      changes: [
        'Added loading spinner while profile query is in flight',
        'Added error boundary / error state for failed or empty responses',
        'Used optional chaining (data?.user?.name) with a fallback value',
      ],
      verify: 'Refresh the app — dashboard loads with user stats instead of a white screen.',
      prevention: 'Always handle loading, error, and empty states for async Supabase queries.',
    },
    renderPreview: (isFixed) => <WhiteScreenPreview isFixed={isFixed} />,
  },
  {
    id: 'broken-auth',
    title: 'Broken authentication',
    tags: ['auth'],
    severity: 'Critical',
    typicalFixTime: '3–5 hours',
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
    report: {
      symptom: 'Login button spins forever or user gets stuck in a redirect loop.',
      rootCause:
        'Redirect logic ran before Supabase finished hydrating the JWT session from storage.',
      changes: [
        'Replaced premature session check with supabase.auth.getSession()',
        'Added path-aware redirect guards to prevent loop between /login and /dashboard',
        'Subscribed to onAuthStateChange for reliable session updates',
      ],
      verify: 'Sign in with valid credentials — lands on dashboard without looping back to login.',
      prevention: 'Never redirect based on session state until getSession() resolves.',
    },
    renderPreview: (isFixed) => <AuthPreview isFixed={isFixed} />,
  },
  {
    id: 'stripe-payment',
    title: 'Failed payment / Stripe',
    tags: ['payments'],
    severity: 'High',
    typicalFixTime: '2–3 hours',
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
    report: {
      symptom: 'Checkout button shows "Stripe error: Invalid API Key" toast.',
      rootCause:
        'VITE_STRIPE_PUBLISHABLE_KEY was not set in the deployment environment, so loadStripe received undefined.',
      changes: [
        'Added VITE_STRIPE_PUBLISHABLE_KEY to Vercel environment variables',
        'Added runtime guard with clear error if key is missing',
        'Verified checkout flow in Stripe test mode',
      ],
      verify: 'Complete a test payment — success screen appears with receipt confirmation.',
      prevention: 'Document all required env vars and validate them at app startup.',
    },
    renderPreview: (isFixed) => <StripePreview isFixed={isFixed} />,
  },
  {
    id: 'exposed-api-key',
    title: 'Exposed API key (security)',
    tags: ['security'],
    severity: 'Critical',
    typicalFixTime: '1–3 hours',
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
    report: {
      symptom: 'Secret API key visible in browser DevTools / client bundle.',
      rootCause: 'sk_live key was hardcoded directly in frontend source code.',
      changes: [
        'Removed hardcoded key from client-side code',
        'Moved secret handling to a server-side API route',
        'Rotated the compromised key in the provider dashboard',
      ],
      verify: 'Inspect built bundle — no secret keys present; API calls go through server proxy.',
      prevention: 'Never put sk_live or secret keys in frontend code — use server-side env only.',
    },
    renderPreview: (isFixed) => <ApiKeyPreview isFixed={isFixed} />,
  },
  {
    id: 'missing-env-vars',
    title: 'Missing env vars on deploy',
    tags: ['deploy'],
    severity: 'High',
    typicalFixTime: '1–2 hours',
    whatWasWrong:
      'App worked locally but crashed on Vercel because environment variables were never configured for production.',
    problem: 'Works locally, fails on deploy',
    cause: 'Env vars missing in Vercel project settings',
    fix: 'Configured all VITE_* vars in deployment platform',
    diff: [
      { type: 'context', content: '// .env.local (works on laptop)' },
      { type: 'remove', content: '// No env vars set on Vercel dashboard' },
      { type: 'add', content: '// Vercel → Settings → Environment Variables' },
      { type: 'add', content: 'VITE_SUPABASE_URL=https://xxx.supabase.co' },
      { type: 'add', content: 'VITE_SUPABASE_ANON_KEY=eyJ...' },
    ],
    report: {
      symptom: 'App runs fine on localhost but shows errors or blank screen after deploying to Vercel.',
      rootCause:
        'Environment variables existed in .env.local but were not added to the Vercel project settings.',
      changes: [
        'Added VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to Vercel env vars',
        'Redeployed with correct production environment',
        'Created .env.example documenting all required variables',
      ],
      verify: 'Visit production URL — app loads and connects to Supabase without errors.',
      prevention: 'Maintain .env.example and verify env vars in CI/deploy checklist.',
    },
    renderPreview: (isFixed) => <EnvVarsPreview isFixed={isFixed} />,
  },
  {
    id: 'supabase-rls',
    title: 'Supabase RLS blocks data',
    tags: ['database'],
    severity: 'High',
    typicalFixTime: '2–4 hours',
    whatWasWrong:
      'Data loaded locally but tables appeared empty in production because Row Level Security policies blocked access.',
    problem: 'Empty tables in production',
    cause: 'RLS enabled without correct read/write policies',
    fix: 'Added RLS policies for authenticated users',
    diff: [
      { type: 'context', content: '-- profiles table has RLS enabled' },
      { type: 'remove', content: '-- No SELECT policy for authenticated users' },
      { type: 'add', content: 'CREATE POLICY "Users read own profile"' },
      { type: 'add', content: '  ON profiles FOR SELECT' },
      { type: 'add', content: '  USING (auth.uid() = user_id);' },
    ],
    report: {
      symptom: 'User profiles table shows zero rows in production despite data existing in Supabase.',
      rootCause:
        'Row Level Security was enabled but no SELECT policy allowed authenticated users to read their data.',
      changes: [
        'Created SELECT policy for authenticated users on profiles table',
        'Added INSERT/UPDATE policies scoped to auth.uid()',
        'Tested data access in production with a real user session',
      ],
      verify: 'Sign in on production — profile data and table rows appear correctly.',
      prevention: 'Always test RLS policies with authenticated sessions before going live.',
    },
    renderPreview: (isFixed) => <RlsPreview isFixed={isFixed} />,
  },
]

export function getCasesByTag(tag: CaseTag | 'all'): CaseStudy[] {
  if (tag === 'all') return cases
  return cases.filter((c) => c.tags.includes(tag))
}

export function getFirstCaseIdForTag(tag: CaseTag | 'all'): string | undefined {
  return getCasesByTag(tag)[0]?.id
}
