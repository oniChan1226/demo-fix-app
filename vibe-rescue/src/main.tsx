import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DemoProvider } from './context/DemoContext'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <DemoProvider>
        <App />
      </DemoProvider>
    </ThemeProvider>
  </StrictMode>,
)
