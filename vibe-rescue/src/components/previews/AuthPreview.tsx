type PreviewProps = {
  isFixed: boolean
}

export function AuthPreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#111827] p-4">
        <div className="w-full max-w-[200px] rounded-lg border border-gray-700 bg-[#1f2937] p-4">
          <p className="text-xs font-semibold text-white">Sign in</p>
          <div className="mt-3 space-y-2">
            <div className="h-7 rounded border border-gray-600 bg-gray-800 px-2 py-1.5 text-[10px] text-gray-500">
              email@example.com
            </div>
            <div className="h-7 rounded border border-gray-600 bg-gray-800 px-2 py-1.5 text-[10px] text-gray-500">
              ••••••••
            </div>
          </div>
          <button
            type="button"
            disabled
            className="mt-3 flex w-full items-center justify-center gap-2 rounded bg-gray-600 py-1.5 text-[10px] font-medium text-gray-400"
          >
            <span className="h-3 w-3 animate-spin rounded-full border border-gray-400 border-t-transparent" />
            Redirecting…
          </button>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-[10px] text-broken">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 4.5h1.5v4h-1.5v-4zm0 5.5h1.5v1.5h-1.5V10z"
              fill="currentColor"
            />
          </svg>
          Redirect loop detected
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full bg-[#111827]">
      <div className="flex w-2/5 flex-col justify-center border-r border-gray-700 p-3">
        <p className="text-[10px] font-semibold text-white">Sign in</p>
        <div className="mt-2 h-6 rounded border border-gray-600 bg-gray-800" />
        <div className="mt-1.5 h-6 rounded border border-gray-600 bg-gray-800" />
        <div className="mt-2 flex h-6 items-center justify-center rounded bg-fixed text-[9px] font-medium text-white">
          Sign in
        </div>
        <p className="mt-2 text-center text-[9px] text-fixed">✓ Authenticated</p>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-fixed/30 text-[9px] font-bold text-fixed">
            FK
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white">Dashboard</p>
            <p className="text-[9px] text-gray-400">Signed in as user@example.com</p>
          </div>
          <span className="ml-auto rounded-full bg-fixed/20 px-1.5 py-0.5 text-[8px] text-fixed">
            Signed in
          </span>
        </div>
        <div className="flex-1 rounded border border-gray-700 bg-[#1f2937] p-2">
          <div className="h-2 w-1/2 rounded bg-gray-600" />
          <div className="mt-2 h-1.5 w-full rounded bg-gray-700" />
          <div className="mt-1 h-1.5 w-4/5 rounded bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
