type PreviewProps = {
  isFixed: boolean
}

export function StripePreview({ isFixed }: PreviewProps) {
  if (!isFixed) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-[#111827] p-4">
        <div className="w-full max-w-[220px] rounded-lg border border-gray-700 bg-[#1f2937] p-4">
          <p className="text-xs font-semibold text-white">Checkout</p>
          <p className="mt-1 text-[10px] text-gray-400">Pro Plan — $29.00/mo</p>
          <div className="mt-3 h-8 rounded border border-gray-600 bg-gray-800" />
          <button
            type="button"
            className="mt-3 w-full rounded bg-indigo-600 py-2 text-[10px] font-medium text-white opacity-60"
          >
            Pay $29.00
          </button>
        </div>
        <div
          className="absolute bottom-4 left-1/2 flex w-[90%] max-w-[260px] -translate-x-1/2 items-start gap-2 rounded-lg border border-broken/50 bg-[#2a1515] px-3 py-2 shadow-lg"
          role="alert"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-0.5 shrink-0 text-broken"
            aria-hidden="true"
          >
            <path
              d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM7.25 4.5h1.5v4h-1.5v-4zm0 5.5h1.5v1.5h-1.5V10z"
              fill="currentColor"
            />
          </svg>
          <div>
            <p className="text-[10px] font-medium text-broken">Payment failed</p>
            <p className="text-[9px] text-red-300">
              Stripe error: Invalid API Key provided
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#111827] p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fixed/20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 6L9 17l-5-5"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="mt-3 text-sm font-semibold text-white">Payment successful</p>
      <p className="mt-1 text-xs text-gray-400">Pro Plan — $29.00</p>
      <div className="mt-4 w-full max-w-[220px] rounded-lg border border-fixed/30 bg-fixed/5 p-3 text-center">
        <p className="text-[10px] text-fixed">Receipt sent to user@example.com</p>
      </div>
    </div>
  )
}
