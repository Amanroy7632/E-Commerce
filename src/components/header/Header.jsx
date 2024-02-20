import React, { useState } from 'react'
import {Link,NavLink,BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserTie } from '@fortawesome/fontawesome-svg-core';
import { faUserTie,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Login from '../login/Login';
import { CartState } from '../../context/Context';
import { useSelector } from 'react-redux';
// import 'index.css'
function Header() {
    const {state}=CartState()
    const [visible,setVisible]=useState(false);
    const turnOnlogin=()=>{
        // console.log(visible);
        setVisible(!visible);
    }
    const data = useSelector((state) => state.cartItem);
    const items = data.cart;

  return (
    <>
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img
                    src="\src\assets\swiftbuy.png"
                    className="mr-3 h-12"
                    alt="Logo"
                />
            </Link>
            <div className="flex items-center lg:order-2">
                <Link
                    // to="/Login"
                    onClick={turnOnlogin}
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </Link>
                <Link
                    to="/cart"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                >
                    {/* Get started */}
                    <FontAwesomeIcon icon={faShoppingCart} />
                <sup className=' text-lg p-1'>{items.length}</sup> 
                </Link>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                        to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/category"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Category
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/about"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/contact"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/github"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Github
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
 {visible?<div className="login-container w-34px h-1/2 z-40 fixed top-20 left-1/4 bg-orange-900 " style={{backgroundColor:"#6E2C00"}} visible={visible}>
    <div className="close " ><h1 className=" text-3xl p-2 cursor-pointer text-right" onClick={turnOnlogin}>❌</h1></div>
    
<Login visible={visible}/>
</div>:""}
</>
  )
}

export default Header;
export const closeLogin=()=>{
    setVisible(!visible);
}