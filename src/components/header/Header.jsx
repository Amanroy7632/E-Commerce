import React, { useState } from "react";
import { Link, NavLink, BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserTie } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Login from "../login/Login";
// import { CartState } from "../../context/Context";
import { useSelector,useDispatch } from "react-redux";
import ThemeButton from "../theme/ThemeButton";
import "./header.css";
import { BiUser } from "react-icons/bi";
import { BiSolidContact } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import {AiOutlineHome,AiOutlineAppstore} from "react-icons/ai"
import { useParams } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import User from "../user/User";
function Header() {
  // const { state } = CartState();
  const authStatus =useSelector((state)=>state.auth?.status)
  console.log(authStatus);
  const {}=useParams()

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const turnOnlogin = () => {
    // console.log(visible);
    setVisible(!visible);
  };
  const data = useSelector((state) => state.cartItem);
  // console.log(data);
  const items = data.cart;
  let links;
  const menubarHandler = (e) => {
    e.preventDefault();
    const menuBar = document.querySelector(".menu-bar");
    menuBar.classList.toggle("active");
    setActive(!active);
    links = document.querySelectorAll("#navlinks");
    // console.log(menuBar);
  };
  const hideNavigationHandler = (e) => {
    e.preventDefault();
    const menuBar = document.querySelector(".menu-bar");
    menuBar.classList.toggle("active");
    setActive(!active);
  };
  const [showHeader,setShowHeader] =useState(true);
  const handleScroll=()=>{
     setShowHeader(!showHeader);
  }

  return (
    <>
      {
       showHeader? <header className=" sticky z-50 top-0  text-gray-900 dark:text-white dark:bg-gray-900 backdrop-blur-md">
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-black dark:border-gray-700">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="https://github.com/Amanroy7632/E-Commerce/blob/main/src/assets/swiftbuy.png?raw=true"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
            <div className="flex items-center lg:order-2 ">
              {
                authStatus ? <User/>:( <Link
                  id="login"
                  to={"/login"}
                  // onClick={turnOnlogin}
                  className=" text-gray-800 dark:hover:bg-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 max-sm:px-2 py-2 lg:py-2.5 mr-2 max-md:mr-0 focus:outline-none dark:text-white"
                >
                  Log in
                </Link>)
              }
             
              
              <Link
                to="/cart"
                className=" relative font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 max-sm:px-1 ml-1 max-md:mr-0 focus:outline-none dark:text-white "
              >
                {/* Get started */}
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className=" absolute top-0 font-bold text-orange-400">{items.length}</span>
                {/* <sup className=" text-lg p-1 overflow-hidden">
                  {items.length}
                </sup> */}
              </Link>
              {/* <div
                className="menu-bar flex justify-between flex-col cursor-pointer mr-4 lg:hidden"
                style={{
                  height: "24px",
                  width: "35px",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={menubarHandler}
              >
                <span className=" bg-black dark:bg-white rounded-sm"></span>
                <span className=" bg-black dark:bg-white rounded-sm"></span>
                <span className=" bg-black dark:bg-white rounded-sm"></span>
              </div> */}
              <div className=" flex max-sm:hidden">
                <ThemeButton />
              </div>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0 navbar-links">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-orange-400 "
                          : "text-gray-700 dark:text-white "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-orange-700"
                          : "text-gray-700 dark:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-orange-700"
                          : "text-gray-700 dark:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-orange-700"
                          : "text-gray-700 dark:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-orange-700"
                          : "text-gray-700 dark:text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>:""
      }
      {/* <input type="text" name="" id="" placeholder="Q Search for Products,Brands and more" className=" px-4 py-4 dark:bg-black dark:text-white text-xl hidden max-md:flex justify-center items-center sticky top-0 z-50  bg-slate-200" /> */}
      
      {
        <div className=" hidden  bg-white dark:bg-black dark:text-white max-md:flex  w-full h-[3rem] justify-center fixed bottom-0 z-20 backdrop-blur-lg font-bold">
          <ul className=" flex justify-evenly items-center w-full  ">
            
            <li id="navlinks" onClick={hideNavigationHandler}>
              {" "}
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700 dark:text-white"
                  }    hover:text-orange-700 lg:p-0 `
                }
              >
                {/* Category */}
                <AiOutlineAppstore  className=" w-[2rem] h-[2rem]"/>
              </NavLink>
            </li>
            {/* <li id="navlinks" onClick={hideNavigationHandler}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700 dark:text-white"
                  }   hover:text-orange-700 lg:p-0 `
                }
              >
                <BiUser className=" w-[2rem] h-[2rem]" />
              </NavLink>
            </li> */}
            
            <li id="navlinks" onClick={hideNavigationHandler}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700 dark:text-white"
                  }   hover:text-orange-700 lg:p-0 `
                }
              >
                {/* Contact */}
                <BiSolidContact className=" w-[2rem] h-[2rem]" />
              </NavLink>
            </li>
            <li id="navlinks" onClick={hideNavigationHandler}>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block  duration-200 w-full ${
                    isActive
                      ? "text-orange-700 "
                      : "text-gray-700 dark:text-white "
                  } hover:text-orange-700 lg:p-0 `
                }
              >
                {/* Home */}
                <AiOutlineHome className=" w-[2rem] h-[2rem]"/>
              </NavLink>
            </li>
            <li id="navlinks" onClick={hideNavigationHandler}>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700 dark:text-white"
                  }  hover:text-orange-700 lg:p-0 `
                }
              >
                {/* Github */}
                <FaGithub className=" w-[2rem] h-[2rem]" />
              </NavLink>
            </li>
            <li className="flex">
              <ThemeButton />
            </li>
          </ul>
        </div>
      }
      {visible ? (
        <div
          className="login-container w-34px h-1/2 z-40 fixed top-20 left-1/4 bg-orange-900 "
          style={{ backgroundColor: "#6E2C00" }}
          visible={visible}
        >
          <div className="close ">
            <h1
              className=" text-3xl p-2 cursor-pointer text-right"
              onClick={turnOnlogin}
            >
              ❌
            </h1>
          </div>

          <Login visible={visible} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
export const closeLogin = () => {
  setVisible(!visible);
};
