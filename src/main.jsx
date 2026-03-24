 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Routes/Routes.jsx'
 import { InstallProvider } from './Pages/context/InstallContext.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Context Provider-ke shobar opore rakhte hobe */}
    <InstallProvider>
      <RouterProvider router={router} />
    </InstallProvider>
  </StrictMode>
)