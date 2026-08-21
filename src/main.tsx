import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import { router } from './routes/router'
import { MockOperationsProvider } from './data/MockOperationsStore'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MockOperationsProvider><RouterProvider router={router} /></MockOperationsProvider>
  </StrictMode>,
)
