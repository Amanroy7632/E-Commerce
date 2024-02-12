import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> {/* {it uses header and footer as a base and put inputs dinamically} */}
    <Footer/>
    </>
  )
}

export default Layout
