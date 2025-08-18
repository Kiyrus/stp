import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/layout/theme-provider.tsx"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider
        defaultTheme="system"
        storageKey="vite-ui-theme"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
)
