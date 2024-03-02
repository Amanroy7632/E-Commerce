import React, { useEffect } from "react";
// import Item from "./Item";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrash,faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../cart/cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeToCart,
  increaseQty,
  decreaseQty,
  checkPromoCode,
  sortBy,
} from "../../features/cartSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutStepper from "../stepper/CheckOutStepper";
const prevUsedPromoCode = [];
function Cart({ ItemData }) {
  const [prmCode, setprmCode] = useState("");
  const productId = useParams();

  const data = useSelector((state) => state.cartItem);
  let items = data.cart;
  const dummyData = items;
  const dispatch = useDispatch();
  // console.log(items);
  const promoCodes = data.promoCode;
  const [tQty, setQty] = useState(items.length);
  const totalCost = () => {
    return items.reduce((acc, item) => acc + item.price * item.qty, 0);
  };
  const totalQty = () => {
    return items.reduce((acc, item) => acc + item.qty, 0);
  };
  useEffect(() => {
    setQty(items.reduce((acc, item) => acc + item.qty, 0));
  }, [tQty]);
  let [totalCalculatedCost, setTotalCost] = useState(totalCost());
  const checkValidPromoCode = (e) => {
    e.preventDefault();
    dispatch(checkPromoCode(prmCode));
  };
  const [option, setOption] = useState("");
  const optionHandler = () => {
    console.log(option);
    setOption(option);
  };
  function compareTo(a, b) {
    return a.qty - b.qty;
  }
  useEffect(() => {
    dispatch(sortBy(option));
    setOption("");
    console.log(items);
    // items.length>0? dummyData.sort(compareTo):""
  }, [option]);

  return items.length > 0 ? (
    <div className="pointer-events-auto w-full dark:bg-black dark:text-white overflow-hidden">
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl overflow-x-hidden dark:bg-black dark:text-white">
        <div className="flex-1 px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between rounded-s-full   ">
            <h2
              className="text-lg font-medium text-black dark:text-white mx-4"
              id="slide-over-title"
            >
              Your Cart
            </h2>
            <div className=" w-1/6 flex justify-between items-center max-sm:w-1/2 max-sm:justify-around">
              <div className="ml-3 flex h-7 items-center">
                {/* <span className="">ITEMS: {items.length}</span> */}

                <span className="-inset-0.5 text-gray-400 hover:text-gray-500 w-full">
                  {items.length} items
                </span>
                <select
                  name=""
                  id=""
                  className=" bg-transparent dark:bg-black -inset-0.5 dark:text-white  outline-none border-none cursor-pointer text-sm p-0 m-0"
                  onChange={(e) => {
                    setOption(e.target.value);
                  }}
                  value={option}
                >
                  <option value="">Sort By</option>
                  <option value="price">Price</option>
                  <option value="qty">Quantity</option>
                  <option value="date">Date</option>
                </select>

                {/* <button
                type="button"
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5">Items: {items.length}</span>
                <span className="sr-only">Close panel</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root row-span-1 ">
              <ul
                role="list"
                className="-my-6 divide-y divide-gray-200 dark:bg-gray-700 dark:text-white rounded-lg"
              >
                {items.map((item, index) => (
                  <li className="flex py-6 lg:px-6 max-sm:px-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md  dark:border-gray-200  ">
                      <img
                        src={item.thumbnail}
                        alt={item.thumbnail}
                        className="h-full w-full object-cover object-center duration-200 hover:h-32 hover:w-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="">
                        <div className="flex justify-between text-base font-medium dark:text-white max-sm:flex-col">
                          <h3>
                            <Link
                              to={`/products/${productId}/${item.title.replace(
                                "/",
                                "@"
                              )}/${item.id}`}
                              className="dark:text-white"
                            >
                              {item.title}
                            </Link>
                          </h3>
                          <p className="ml-4 px-3 max-sm:px-0 max-sm:ml-2">$ {item.price * item.qty}</p>
                        </div>
                        <div className="flex items-center mt-2.5 mb-5 ml-2">
                          <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="w-4 h-4 text-yellow-300 mr-1"
                            fill="currentColor"
                          >
                            <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
                          </svg>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            {item.rating}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-white ml-2 max-sm:hidden">
                          {item.description}
                        </p>
                        <p className="mt-1 text-sm text-gray-300  ml-2">
                          {item.discountPercentage}% Off
                        </p>
                      </div>
                      <div className="flex flex-1 items-center justify-between text-sm ">
                        <div className="col ">
                          <span
                            onClick={() => {
                              dispatch(decreaseQty(item));
                            }}
                            className=" cursor-pointer text-3xl p-3 max-sm:p-1"
                          >
                            -
                          </span>
                          <span className="  cursor-pointer text-xl px-3 text-gray-400 py-1  rounded-xl max-sm:p-1">
                            {item.qty}
                          </span>
                          <span
                            onClick={() => {
                              dispatch(increaseQty(item));
                            }}
                            className=" cursor-pointer text-3xl p-3 max-sm:p-1"
                          >
                            +
                          </span>
                        </div>

                        <div className="flex">
                          {/* <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button> */}
                          <span className="close px-3 text-2xl cursor-pointer  max-sm:my-1  rounded-lg focus:ring-red-400"
                          onClick={() => {
                            dispatch(removeToCart(item.id));
                          }}>
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              
                              className=" text-red-700 text-lg max-sm:text-sm"
                            />&nbsp;<span className="text-lg max-sm:text-sm">Remove</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>

                  //   <div className="row border-top border-bottom">
                  //   <div className="row main align-items-center flex justify-evenly items-center  border-b-2 border-blue-300 rounded-md max-sm:flex-col">
                  //     <div className="col-2 max-sm:w-full flex justify-center">
                  // <Link to={`/products/${productId}/${item.title.replace('/','@')}/${item.id}`}>
                  // <img
                  //   className="img-fluid lg:w-28 max-sm:object-fill max-sm:m-0"
                  //   src={item.thumbnail}
                  // />
                  // </Link>
                  //     </div>
                  //     <div className="col ">
                  //       <div className="row text-muted max-sm:p-3">{item.title}</div>
                  //       <div className="row max-sm:hidden">{item.description?item.description.substr(0,30):""}</div>
                  //       <div className="row max-sm:hidden">{item.discountPercentage}% Off</div>
                  //     </div>
                  // <div className="col ">
                  //   <span onClick={()=>{dispatch(decreaseQty(item))}}className=" cursor-pointer text-3xl p-3 " >-</span>
                  //   <span  className="  cursor-pointer text-xl px-3 py-1 border rounded-xl">
                  //     {item.qty}
                  //   </span>
                  //   <span onClick={()=>{dispatch(increaseQty(item))}} className=" cursor-pointer text-3xl p-3">+</span>
                  // </div>
                  //     <div className="col   max-sm:flex max-sm:justify-between">
                  //      <span className="max-sm:flex max-sm:justify-center max-sm:items-center ">
                  //        &euro; {item.price * item.qty}</span>
                  //  <span className="close p-4">
                  //   <FontAwesomeIcon icon={faTrash}
                  //   onClick={()=>{dispatch(removeToCart(item.id))}}
                  //      className=" text-3xl text-red-700 cursor-pointer  max-sm:my-1"/>
                  //   </span>
                  //     </div>
                  //   </div>
                  // </div>
                ))}

                {/* <!-- More products... --> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className=" dark:text-white">Subtotal</p>
            <p className=" dark:text-white">
              {/* &euro; */}
              ${" "}
              {items.reduce((acc, item) => acc + item.price * item.qty, 0)}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-white">
            Shipping and taxes calculated at checkout.
          </p>
          <form className="dark:text-black">
            <p className=" dark:text-white">SHIPPING COST</p>
            <select>
              <option className="text-muted ">
                Standard-Delivery- $ 5.00
              </option>
            </select>
            <p className=" dark:text-white">GIVE CODE</p>
            <input
              id="code"
              placeholder="Enter your code"
              value={prmCode}
              onChange={(e) => setprmCode(e.target.value)}
            />
          </form>
          <div className="mt-6">
            <a
              onClick={checkValidPromoCode}
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:text-white"
              >
                ⬅️<span className="text-muted">Back to shop</span>{" "}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
              {/* <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button> */}
            </p>
          </div>
        </div>
      </div>
      <CheckOutStepper />
    </div>
  ) : (
    <div className="dark:bg-black p-10">
    <h2 className="text-2xl font-semibold mb-4 dark:text-white text-black">Your cart is empty</h2>
    <p className="text-gray-700 mb-4 dark:text-white">Add something to your cart.</p>
    <Link to={"/category"} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out" >Add Item</Link>
  </div>
  );
  // <div className="container-all dark:bg-black dark:border-gray-700 ">
  // <div className="card dark:bg-black dark:border-gray-700">
  //   <div className="row dark:bg-black dark:border-gray-700">
  //     <div className="col-md-8 cart dark:bg-gray-800 dark:border-red-700 dark:text-white w-full ">
  //       <div className="title">
  //         <div className="row  flex flex-wrap h-1/12 overflow-hidden">
  //           <div className="col w-1/2 ">
  //             <h4>
  //               <b>Your Cart</b>
  //             </h4>
  //           </div>
  //           <div className="col align-self-center text-right text-muted w-1/2 ">
  //             {items.length} items
  //             <select name="" id="" className=" bg-transparent dark:bg-gray-800 dark:text-white w-auto outline-none border-none cursor-pointer"
  //             onChange={(e)=>{
  //              setOption(e.target.value)}}  value={option}>
  //               <option value="">Sort By</option>
  //               <option value="price">Price</option>
  //               <option value="qty">Quantity</option>
  //               <option value="date">Date</option>
  //             </select>
  //           </div>
  //         </div>
  //       </div>
  //       <ul role="list" className="-my-6 divide-y divide-gray-200">
  //       {items.map((item, index) => (
  //            <li className="flex py-6">
  //            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
  //              <img
  //                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
  //                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
  //                className="h-full w-full object-cover object-center"
  //              />
  //            </div>

  //            <div className="ml-4 flex flex-1 flex-col">
  //              <div>
  //                <div className="flex justify-between text-base font-medium text-gray-900">
  //                  <h3>
  //                    <a href="#">Throwback Hip Bag</a>
  //                  </h3>
  //                  <p className="ml-4">$90.00</p>
  //                </div>
  //                <p className="mt-1 text-sm text-gray-500">Salmon</p>
  //              </div>
  //              <div className="flex flex-1 items-end justify-between text-sm">
  //                <p className="text-gray-500">Qty 1</p>

  //                <div className="flex">
  //                  <button
  //                    type="button"
  //                    className="font-medium text-indigo-600 hover:text-indigo-500"
  //                  >
  //                    Remove
  //                  </button>
  //                </div>
  //              </div>
  //            </div>
  //          </li>

  //       //   <div className="row border-top border-bottom">
  //       //   <div className="row main align-items-center flex justify-evenly items-center  border-b-2 border-blue-300 rounded-md max-sm:flex-col">
  //       //     <div className="col-2 max-sm:w-full flex justify-center">
  //       //       <Link to={`/products/${productId}/${item.title.replace('/','@')}/${item.id}`}>
  //       //       <img
  //       //         className="img-fluid lg:w-28 max-sm:object-fill max-sm:m-0"
  //       //         src={item.thumbnail}
  //       //       />
  //       //       </Link>
  //       //     </div>
  //       //     <div className="col ">
  //       //       <div className="row text-muted max-sm:p-3">{item.title}</div>
  //       //       <div className="row max-sm:hidden">{item.description?item.description.substr(0,30):""}</div>
  //       //       <div className="row max-sm:hidden">{item.discountPercentage}% Off</div>
  //       //     </div>
  //       //     <div className="col ">
  //       //       <span onClick={()=>{dispatch(decreaseQty(item))}}className=" cursor-pointer text-3xl p-3 " >-</span>
  //       //       <span  className="  cursor-pointer text-xl px-3 py-1 border rounded-xl">
  //       //         {item.qty}
  //       //       </span>
  //       //       <span onClick={()=>{dispatch(increaseQty(item))}} className=" cursor-pointer text-3xl p-3">+</span>
  //       //     </div>
  //       //     <div className="col   max-sm:flex max-sm:justify-between">
  //       //      <span className="max-sm:flex max-sm:justify-center max-sm:items-center ">
  //       //        &euro; {item.price * item.qty}</span>
  //       //      <span className="close p-4">
  //       //       <FontAwesomeIcon icon={faTrash}
  //       //       onClick={()=>{dispatch(removeToCart(item.id))}}
  //       //          className=" text-3xl text-red-700 cursor-pointer  max-sm:my-1"/>
  //       //       </span>
  //       //     </div>
  //       //   </div>
  //       // </div>
  //       ))}
  //       </ul>
  //       <div className="back-to-shop">
  //         {/* <a href="#">⬅️</a> */}
  //         <Link to="/"className=" hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:text-white" >⬅️<span className="text-muted">Back to shop</span></Link>

  //       </div>
  //     </div>
  //     <div className="col-md-4 summary">
  //       <div>
  //         <h5>
  //           <b>Summary</b>
  //         </h5>
  //       </div>
  //       <hr />
  //       <div className="row">
  //         <div className="col" style={{ paddingLeft: "0" }}>
  //          TOTAL ITEMS { items.reduce((acc, item) =>acc+(item.qty ), 0) }
  //         </div>
  //         <div className="col text-right">&euro; {items.reduce((acc, item) =>acc+(item.price*item.qty ), 0)}</div>
  //       </div>
  //       <form >
  //         <p>SHIPPING COST</p>
  //         <select>
  //           <option className="text-muted">
  //             Standard-Delivery- &euro;5.00
  //           </option>
  //         </select>
  //         <p>GIVE CODE</p>
  //         <input id="code" placeholder="Enter your code"
  //         value={prmCode}
  //         onChange={(e)=>setprmCode(e.target.value)} />
  //       </form>
  //       <div
  //         className="row"
  //         style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
  //       >
  //         <div className="col">TOTAL PRICE</div>
  //         <div className="col text-right">&euro; {items.reduce((acc, item) =>acc+(item.price*item.qty ), 0)}</div>
  //       </div>
  //       <button onClick={checkValidPromoCode} className="btn-checkout">CHECKOUT</button>
  //     </div>
  //   </div>
  //   <CheckOutStepper/>
  // </div></div>:(<div><h2>Your Cart is Empty</h2></div>)
}

export default Cart;
