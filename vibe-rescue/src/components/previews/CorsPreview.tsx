type PreviewProps = {
  isFixed: boolean
}

export function CorsPreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="flex h-full w-full flex-col bg-[#111827]">
        <div className="flex items-center justify-between border-b border-gray-700 px-3 py-2">
          <span className="font-mono text-[10px] text-gray-400">Network · fetch /api/users</span>
          <span className="rounded bg-broken/20 px-2 py-0.5 text-[9px] font-medium text-broken">
            Failed
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3 p-3 sm:p-4">
          <div className="rounded-lg border border-broken/40 bg-[#2a1515] p-3">
            <p className="font-mono text-[9px] font-semibold text-broken sm:text-[10px]">
              CORS policy blocked
            </p>
            <p className="mt-1.5 font-mono text-[8px] leading-relaxed text-red-300/90 sm:text-[9px]">
              No &apos;Access-Control-Allow-Origin&apos; header on api.example.com
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-[#1f2937] p-3">
            <p className="font-mono text-[9px] font-semibold text-gray-300 sm:text-[10px]">
              GET /api/users → 500 Internal Server Error
            </p>
            <p className="mt-1.5 font-mono text-[8px] text-gray-500 sm:text-[9px]">
              Response: {`{ "error": "Cannot read properties of undefined" }`}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#111827]">
      <div className="flex items-center justify-between border-b border-gray-700 px-3 py-2">
        <span className="font-mono text-[10px] text-gray-400">Network · fetch /api/users</span>
        <span className="rounded bg-fixed/20 px-2 py-0.5 text-[9px] font-medium text-fixed">
          200 OK
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6L9 17l-5-5"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] font-semibold text-white sm:text-xs">API responding</span>
        </div>
        <div className="flex-1 rounded-lg border border-fixed/30 bg-fixed/5 p-3">
          <p className="font-mono text-[9px] text-fixed sm:text-[10px]">200 · application/json</p>
          <p className="mt-2 font-mono text-[8px] leading-relaxed text-gray-300 sm:text-[9px]">
            {`{ "users": [{ "id": 1, "name": "Sarah" }, ...] }`}
          </p>
        </div>
        <p className="mt-2 text-center text-[9px] text-gray-500">CORS headers + server route fixed</p>
      </div>
    </div>
  )
}
