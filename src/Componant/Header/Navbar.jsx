 import React from 'react'
import { NavLink } from 'react-router'
  



 const Navbar = () => {

    const activeStyle = ({ isActive }) => 
        isActive 
        ? 'm-2 font-bold text-[#6366f1] border-b-2 border-[#6366f1] pb-1' // Active color and underline
        : 'm-2 hover:text-[#6366f1] transition-colors'; // Normal state

const link = <>
        <li><NavLink to="/" className={activeStyle}>Home</NavLink></li>
        <li><NavLink to="/apps" className={activeStyle}>Apps</NavLink></li>
        <li><NavLink to="/installation" className={activeStyle}>Installation</NavLink></li>
    </>

   return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
       <div className='flex items-center'>
        <div>
            <img 
            className='w-8'
            src="/src/assets/logo.png" alt="heroLogo" />
        </div>
        <div>
           
                {/* <a className="text-[#6366f1] font-bold text-xl">Hero.Io</a> */}
                 <a className="text-[#6366f1] font-bold text-xl"> <NavLink to="/">Hero.Io</NavLink></a> 
        </div>
       </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {link}
    </ul>
  </div>
  <div className="navbar-end">
     <button className="flex items-center gap-2 px-5 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] hover:from-[#6d28d9] hover:to-[#9333ea] transition-all shadow-md">
  {/* GitHub Icon (Small size) */}
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
  <span>Contribute</span>
</button>
  </div>
</div>
   )
 }
 
 export default Navbar
 