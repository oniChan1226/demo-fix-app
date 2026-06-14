type PreviewProps = {
  isFixed: boolean
}

export function BuildErrorPreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="flex h-full w-full flex-col bg-[#0d1117]">
        <div className="flex items-center justify-between border-b border-gray-800 px-3 py-2">
          <span className="font-mono text-[10px] text-gray-400">vercel · build logs</span>
          <span className="rounded bg-broken/20 px-2 py-0.5 text-[9px] font-medium text-broken">
            Failed
          </span>
        </div>
        <div className="flex-1 overflow-auto p-3 font-mono text-[8px] leading-relaxed sm:text-[9px]">
          <p className="text-gray-500">Running &quot;npm run build&quot;...</p>
          <p className="mt-2 text-broken">error TS2307: Cannot find module &apos;@/lib/utils&apos;</p>
          <p className="text-gray-500">  → src/components/Dashboard.tsx:3:24</p>
          <p className="mt-2 text-broken">error TS2322: Type &apos;string | undefined&apos; is not assignable</p>
          <p className="text-gray-500">  → src/pages/Settings.tsx:18:5</p>
          <p className="mt-3 text-broken font-semibold">Build failed — 2 errors</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-gray-800 px-3 py-2">
        <span className="font-mono text-[10px] text-gray-400">vercel · build logs</span>
        <span className="rounded bg-fixed/20 px-2 py-0.5 text-[9px] font-medium text-fixed">
          Ready
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6L9 17l-5-5"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-semibold text-white">Build completed</span>
        </div>
        <div className="mt-3 space-y-1 font-mono text-[9px] text-gray-400">
          <p className="text-fixed">✓ TypeScript — 0 errors</p>
          <p className="text-fixed">✓ Vite build — 847ms</p>
          <p className="text-fixed">✓ Deployed to production</p>
        </div>
      </div>
    </div>
  )
}
