type PreviewProps = {
  isFixed: boolean
}

export function EnvVarsPreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="relative flex h-full w-full flex-col bg-[#111827]">
        <div className="flex items-center justify-between border-b border-gray-700 px-3 py-2">
          <span className="font-mono text-[10px] text-gray-400">vercel.com / deploy</span>
          <span className="rounded bg-green-500/20 px-2 py-0.5 text-[9px] font-medium text-green-400">
            Works locally ✓
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          <div className="w-full max-w-[220px] rounded-lg border border-gray-700 bg-[#1f2937] p-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-broken" />
              <span className="text-[10px] font-medium text-broken">Build Failed</span>
            </div>
            <p className="mt-2 font-mono text-[9px] leading-relaxed text-gray-400">
              Error: VITE_SUPABASE_URL is not defined
            </p>
            <p className="mt-1 font-mono text-[9px] text-gray-500">
              at config.ts:12
            </p>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-md border border-broken/40 bg-[#2a1515] px-3 py-2">
          <p className="text-[10px] font-medium text-broken">Missing environment variables on Vercel</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#111827]">
      <div className="flex items-center justify-between border-b border-gray-700 px-3 py-2">
        <span className="font-mono text-[10px] text-gray-400">vercel.com / deploy</span>
        <span className="rounded bg-fixed/20 px-2 py-0.5 text-[9px] font-medium text-fixed">
          Deployed ✓
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6L9 17l-5-5"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-semibold text-white">Production deployment ready</span>
        </div>
        <div className="space-y-1.5 rounded-lg border border-fixed/30 bg-fixed/5 p-3">
          <p className="text-[9px] font-semibold tracking-wide text-fixed uppercase">
            Env vars configured
          </p>
          {['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY', 'VITE_STRIPE_KEY'].map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-fixed">✓</span>
              <span className="font-mono text-[9px] text-gray-300">{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
