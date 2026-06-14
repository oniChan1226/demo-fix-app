type PreviewProps = {
  isFixed: boolean
}

export function IncompleteFeaturePreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="flex h-full w-full flex-col bg-[#111827] p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="truncate text-[10px] font-semibold text-white sm:text-xs">Settings</p>
          <span className="shrink-0 rounded bg-yellow-500/20 px-2 py-0.5 text-[8px] font-medium text-yellow-400">
            TODO
          </span>
        </div>
        <div className="flex-1 space-y-2 rounded-lg border border-dashed border-gray-600 bg-[#1f2937]/50 p-3">
          <div className="h-6 w-2/3 rounded bg-gray-700" />
          <div className="h-6 w-full rounded bg-gray-700/60" />
          <button
            type="button"
            disabled
            className="mt-2 w-full rounded border border-gray-600 py-2 text-[9px] text-gray-500 sm:text-[10px]"
          >
            Save changes — not wired up
          </button>
          <p className="text-center text-[8px] text-gray-600 sm:text-[9px]">
            // AI left placeholder — onClick is empty
          </p>
        </div>
        <p className="mt-2 flex items-center justify-center gap-1 text-[9px] text-broken">
          <span aria-hidden="true">⚠</span> Button does nothing
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#111827] p-3 sm:p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="truncate text-[10px] font-semibold text-white sm:text-xs">Settings</p>
        <span className="shrink-0 rounded bg-fixed/20 px-2 py-0.5 text-[8px] font-medium text-fixed">
          Live
        </span>
      </div>
      <div className="flex-1 space-y-2 rounded-lg border border-fixed/30 bg-[#1f2937] p-3">
        <label className="block text-[9px] text-gray-400">Display name</label>
        <div className="rounded border border-gray-600 bg-gray-800 px-2 py-1.5 text-[10px] text-white">
          Fahad Khan
        </div>
        <label className="block text-[9px] text-gray-400">Email notifications</label>
        <div className="flex items-center gap-2">
          <span className="h-4 w-7 rounded-full bg-fixed/40" />
          <span className="text-[9px] text-gray-300">Enabled</span>
        </div>
        <button
          type="button"
          className="mt-1 w-full rounded bg-fixed py-2 text-[9px] font-medium text-white sm:text-[10px]"
        >
          Save changes
        </button>
      </div>
      <p className="mt-2 text-center text-[9px] text-fixed">✓ Saved to Supabase</p>
    </div>
  )
}
