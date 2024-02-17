import React from "react";
import { CartState } from "../../context/Context";
// import { UseDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
function SingleProduct({ product }) {
  const { state, dispatch } = CartState();
  const dispatch1=useDispatch()
  // console.log(state.cart);


  return (
    // <li
    //   key={product.id}
    //   className="p-4 bg-gray-100 rounded shadow items-center"
    // >
    //   <img src={product["thumbnail"]} alt="" style={{ width: "200px" }} />
    //   <h4>{product.title}</h4>
    //   <p>${product.price}</p>
    //   <p>{product.discountPercentage} % Off</p>
    //   <p>{product.description}</p>
    //   {/* {
    //         console.log(`Status is: ${state.cart.some((p)=>p.id!==product.id)}`)
    //       } */}

    //   {state &&
    //     state.cart &&
    //     product &&
    //     (state.cart.some((p) => p.id === product.id) ? (
    //       <button
    //         className=" bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
    //         onClick={() => {
    //           dispatch({
    //             type: "REMOVE_FROM_CART",
    //             payload: product,
    //           });
    //           console.log(state.cart);
    //         }}
    //       >
    //         Remove from cart
    //       </button>
    //     ) : (
    //       <button
    //         className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
    //         onClick={() => {
    //           dispatch1(addToCart(product))
    //           // dispatch({
    //           //   type: "ADD_TO_CART",
    //           //   payload: product,
    //           // });
    //           // console.log(state.cart);
    //         }}
    //       >
    //         Add to Cart
    //       </button>
    //     ))}

    //   {/* <button
    //             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
    //             onClick={(e)=>{
    //                 e.preventDefault();
    //                 dispatch({
    //                     type:"ADD_TO_CART",
    //                     payload:product
    //                 })
    //                 // console.log(state.cart);
    //             }}
    //           >
    //             Add to Cart
    //           </button>
    //           <button
    //             className=" bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
    //             onClick={()=>{
    //                 // e.preventDefault();
    //                 dispatch({
    //                     type:"REMOVE_FROM_CART",
    //                     payload:product
    //                 })
    //                 console.log(state.cart);
    //             }}
    //           >
    //             Remove from cart
    //           </button> */}
    // </li>
    <div key={product.id} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/">
        <img className="p-8 rounded-t-lg  aspect-square m-auto" src={product["thumbnail"]} alt="product_image1" style={{width:"70%" }} />
    </a>
    <div className="px-5 pb-5">
        <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.description}
            </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
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
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
            >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                4.0
            </span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <a
                onClick={() => {
                            dispatch1(addToCart(product))
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
                Add to cart
            </a>
        </div>
    </div>
</div>
  );
}

export default SingleProduct;
