import { createContext, useContext, useState, type ReactNode } from 'react'

type GlobalMode = 'broken' | 'fixed' | null

type DemoContextValue = {
  globalMode: GlobalMode
  setGlobalMode: (mode: GlobalMode) => void
  clearGlobalMode: () => void
}

const DemoContext = createContext<DemoContextValue | null>(null)

export function DemoProvider({ children }: { children: ReactNode }) {
  const [globalMode, setGlobalMode] = useState<GlobalMode>(null)

  return (
    <DemoContext.Provider
      value={{
        globalMode,
        setGlobalMode,
        clearGlobalMode: () => setGlobalMode(null),
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export function useDemo() {
  const context = useContext(DemoContext)
  if (!context) {
    throw new Error('useDemo must be used within DemoProvider')
  }
  return context
}
