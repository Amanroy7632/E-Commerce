import React from 'react'
import { Outlet } from 'react-router-dom'
import Context from './context/Context'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Provider } from 'react-redux'
import { store } from './app/store'
function Layout() {

  return (
    <Context>
      <Provider store={store}>
    <Header/>
    <Outlet/> {/* {it uses header and footer as a base and put inputs dinamically} */}
    <Footer/>
    </Provider>
    </Context>
  )
}

export default Layout
