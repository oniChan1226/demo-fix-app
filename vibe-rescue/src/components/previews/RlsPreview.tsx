type PreviewProps = {
  isFixed: boolean
}

export function RlsPreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="relative flex h-full w-full flex-col bg-[#111827] p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-white">User Profiles</span>
          <span className="text-[9px] text-gray-500">0 rows</span>
        </div>
        <div className="flex-1 rounded-lg border border-gray-700 bg-[#1f2937]">
          <div className="border-b border-gray-700 px-3 py-2">
            <div className="flex gap-4 text-[9px] font-medium text-gray-400">
              <span>Name</span>
              <span>Email</span>
              <span>Role</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center py-6">
            <p className="text-[10px] text-gray-500">No data found</p>
            <p className="mt-1 text-[9px] text-gray-600">Table appears empty in production</p>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-md border border-red-200/20 bg-[#1e1e1e] p-2.5">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-mono text-[10px] font-medium text-red-400">Supabase Error</span>
          </div>
          <p className="font-mono text-[9px] text-red-300">
            new row violates row-level security policy
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#111827] p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-white">User Profiles</span>
        <span className="rounded bg-fixed/20 px-2 py-0.5 text-[9px] font-medium text-fixed">
          RLS policy applied
        </span>
      </div>
      <div className="flex-1 rounded-lg border border-fixed/30 bg-[#1f2937]">
        <div className="border-b border-gray-700 px-3 py-2">
          <div className="flex gap-4 text-[9px] font-medium text-gray-400">
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
          </div>
        </div>
        {[
          { name: 'Sarah K.', email: 'sarah@...', role: 'Admin' },
          { name: 'James L.', email: 'james@...', role: 'User' },
          { name: 'Maria P.', email: 'maria@...', role: 'User' },
        ].map((row) => (
          <div
            key={row.email}
            className="flex gap-4 border-b border-gray-700/50 px-3 py-2 text-[9px] text-gray-300"
          >
            <span className="w-16">{row.name}</span>
            <span className="w-20 text-gray-400">{row.email}</span>
            <span className="text-gray-400">{row.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
