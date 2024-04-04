import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  useSubmit,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import User from "./components/user/User";
import Cart from "./components/cart/Cart";
import Category from "./components/category/Category";
import fetchProductDataSet from "./products/fetchProductDataSet";
import ProductDetail from "./components/productdetail/ProductDetail";
// import FinalCart from './components/cart/FinalCart'
import Github, { fetchGithubData } from "./components/github/Github";
import { fetchProductData } from "./components/category/Category";
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
import ShoppingCart from "./components/cart/ShoppingCart";
import ItemData from "./components/cart/ItemData";
import Products from "./components/category/Products";
import NewCart from "./components/cart/NewCart";
import Login from "./components/login/Login";

const data={
  products:[1,2,3,4,4]
}
function addToCart(product) {}
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="category" element={<Category />} 
      // loader={fetchProductData}
      >
        {/* Render nested routes within the Category component */}
        {/* <Route path="products" element={<Outlet />}> */}
          <Route path="products/:productId" element={<Products />} />
          {/* Add more nested routes for products if needed */}
        {/* </Route> */}
      </Route>
      <Route path="home/products/:productId" element={<ProductDetail />} />
      <Route path="products/:productId" element={<Products />} />
      <Route path="products/:productId/:title/:id" element={<ProductDetail />} />
      <Route path="about" element={< About/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="github" element={<Github />} loader={fetchGithubData} />
      <Route path="cart" element={<NewCart />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="cart" element={<NewCart/>} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <RouterProvider router={router} />
   
  </React.StrictMode>
);
