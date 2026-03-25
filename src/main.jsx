 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { InstallProvider } from './Pages/context/InstallContext.jsx'

// --- এই দুইটা লাইন অবশ্যই এখানে দিন ---
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallProvider>
      {/* গ্লোবাল কন্টেইনার */}
      <ToastContainer position="top-right" autoClose={1500} theme="colored" />
      <RouterProvider router={router} />
    </InstallProvider>
  </StrictMode>
)