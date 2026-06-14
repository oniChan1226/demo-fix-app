type PreviewProps = {
  isFixed: boolean
}

export function WhiteScreenPreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="relative h-full w-full bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-400 opacity-0" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-md border border-red-200 bg-[#1e1e1e] p-2.5 shadow-lg">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-mono text-[10px] font-medium text-red-400">
              Console Error
            </span>
          </div>
          <p className="font-mono text-[9px] leading-relaxed text-red-300 sm:text-[10px]">
            TypeError: Cannot read properties of null (reading &apos;name&apos;)
          </p>
          <p className="mt-1 font-mono text-[9px] text-gray-500 sm:text-[10px]">
            at Dashboard (App.tsx:42)
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full bg-[#111827] text-[10px] text-gray-200 sm:text-xs">
      <aside className="hidden w-16 shrink-0 border-r border-gray-700 bg-[#0d1117] p-2 sm:block">
        <div className="mb-3 h-2 w-full rounded bg-fixed/40" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-gray-700" />
          <div className="h-1.5 w-3/4 rounded bg-gray-700" />
          <div className="h-1.5 w-5/6 rounded bg-gray-700" />
        </div>
      </aside>
      <main className="flex min-w-0 flex-1 flex-col p-3">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-white sm:text-sm">Welcome back</p>
            <p className="text-[10px] text-gray-400">Dashboard loaded successfully</p>
          </div>
          <span className="rounded-full bg-fixed/20 px-2 py-0.5 text-[9px] font-medium text-fixed">
            Live
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2">
          {['Users', 'Revenue', 'Orders'].map((label) => (
            <div
              key={label}
              className="rounded-md border border-gray-700 bg-[#1f2937] p-2"
            >
              <p className="text-[9px] text-gray-400">{label}</p>
              <p className="mt-1 text-sm font-semibold text-white">
                {label === 'Users' ? '1,284' : label === 'Revenue' ? '$12.4k' : '342'}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
