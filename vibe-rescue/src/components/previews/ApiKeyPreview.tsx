type PreviewProps = {
  isFixed: boolean
}

export function ApiKeyPreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="flex h-full w-full flex-col bg-[#0d1117]">
        <div className="flex items-center justify-between border-b border-gray-800 px-3 py-2">
          <span className="font-mono text-[10px] text-gray-400">api/client.ts</span>
          <span className="rounded bg-broken/20 px-2 py-0.5 text-[9px] font-semibold text-broken">
            EXPOSED
          </span>
        </div>
        <div className="flex-1 overflow-auto p-3 font-mono text-[10px] leading-relaxed sm:text-xs">
          <p>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-300">API_KEY</span>{' '}
            <span className="text-gray-400">=</span>{' '}
            <span className="rounded bg-broken/20 px-1 text-red-400">
              {`"sk_live_${'•'.repeat(24)}"`}
            </span>
          </p>
          <p className="mt-2 text-gray-500">
            <span className="text-purple-400">export async function</span>{' '}
            <span className="text-yellow-300">fetchData</span>
            <span className="text-gray-400">() {'{'}</span>
          </p>
          <p className="pl-4 text-gray-300">
            <span className="text-purple-400">return</span> fetch(
            <span className="text-green-400">&quot;/api/data&quot;</span>, {'{'}
          </p>
          <p className="pl-8 text-gray-300">
            headers: {'{'} Authorization: API_KEY {'}'}
          </p>
          <p className="pl-4 text-gray-400">{'}'});</p>
          <p className="text-gray-400">{'}'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-gray-800 px-3 py-2">
        <span className="font-mono text-[10px] text-gray-400">api/client.ts</span>
        <span className="rounded bg-fixed/20 px-2 py-0.5 text-[9px] font-semibold text-fixed">
          SECURE
        </span>
      </div>
      <div className="flex-1 overflow-auto p-3 font-mono text-[10px] leading-relaxed sm:text-xs">
        <p>
          <span className="text-purple-400">const</span>{' '}
          <span className="text-blue-300">API_URL</span>{' '}
          <span className="text-gray-400">=</span>{' '}
          <span className="rounded bg-fixed/20 px-1 text-green-400">
            import.meta.env.VITE_API_URL
          </span>
        </p>
        <p className="mt-2 text-gray-500">
          <span className="text-purple-400">export async function</span>{' '}
          <span className="text-yellow-300">fetchData</span>
          <span className="text-gray-400">() {'{'}</span>
        </p>
        <p className="pl-4 text-gray-300">
          <span className="text-purple-400">return</span> fetch(
          <span className="text-green-400">{`\`\${API_URL}/data\``}</span>, {'{'}
        </p>
        <p className="pl-8 text-gray-300">
          credentials:{' '}
          <span className="text-green-400">&quot;include&quot;</span>
        </p>
        <p className="pl-4 text-gray-400">{'}'});</p>
        <p className="text-gray-400">{'}'}</p>
        <p className="mt-3 text-[9px] text-gray-500">
          // Keys handled server-side — never in client bundle
        </p>
      </div>
    </div>
  )
}
