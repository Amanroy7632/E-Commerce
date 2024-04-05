import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Context from './context/Context'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ThemeContextProvider } from './context/theme'
import {ToastContainer} from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import authStore from './features/authStore'
function Layout() {
  const [themeMode,setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
    // document.querySelector('html').classList.remove("light","dark");
    // document.querySelector('body').classList.add(themeMode);
  },[themeMode])
  return (
    <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
    <Context>
      <Provider store={store}  >
        
    <Header/>
    <Toaster/>
     
    <Outlet /> {/* {it uses header and footer as a base and put inputs dinamically} */}
    <Footer/>
    </Provider>
    </Context>
    </ThemeContextProvider>
  )
}

export default Layout
