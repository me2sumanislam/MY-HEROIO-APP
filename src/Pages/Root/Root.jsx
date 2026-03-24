import React from 'react'
import Navbar from '../../Componant/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Componant/Footer/Footer'

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default Root
