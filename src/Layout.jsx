import React from 'react'
import { Outlet } from 'react-router-dom'
import Context from './context/Context'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function Layout() {
  return (
    <Context>
    <Header/>
    <Outlet/> {/* {it uses header and footer as a base and put inputs dinamically} */}
    <Footer/>
    </Context>
  )
}

export default Layout
