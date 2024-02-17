import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, useSubmit } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Cart from './components/cart/Cart'
import fetchProductDataSet from './products/fetchProductDataSet'
// import FinalCart from './components/cart/FinalCart'
import Github, { fetchGithubData } from './components/github/Github'
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },{
//         path:"/about",
//         element:<About/>
//       },{}
//     ]
//   }
// ])
// import { cartContextProvider } from './context/cartContext'
import ShoppingCart from './components/cart/ShoppingCart'
import ItemData  from './components/cart/ItemData'

function addToCart(product){

}
const router=createBrowserRouter(
createRoutesFromChildren(
  
  <Route path='/' element={<Layout/>}>
    
    <Route path='' element={
    <Home/>} />
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userId' element={<User/>}/>
    <Route path='github' element={<Github/>}
    loader={fetchGithubData}/>
    <Route path='cart' element={<Cart ItemData={ItemData}/>}/>
    {/* <Route path='cart' element={<FinalCart ItemData={ItemData}/>}/> */}
    {/* <Route path='cart' element={<ShoppingCart ItemData={ItemData}/>}/> */}
    
    
  </Route>

)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)

