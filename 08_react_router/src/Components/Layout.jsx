import React from 'react'
import { Headers } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Headers />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout