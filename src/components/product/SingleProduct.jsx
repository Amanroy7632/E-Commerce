import React from "react";
import { CartState } from "../../context/Context";
// import { UseDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart ,removeToCart } from "../../features/cartSlice";
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import {toast} from 'react-hot-toast'
function SingleProduct({ product }) {
  const state=useSelector(state=>state.cartItem)
  const dispatch1 = useDispatch();
  const generateStar=(rating)=>{
    const floorRating=Math.floor(rating)
    // console.log(floorRating);
        switch (floorRating) {
          case 5:
            return(
              <>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              </>
            )
          case 4:
            return(
              <>
              <AiFillStar className=" text-yellow-400 text-xl"/>
              <AiFillStar className=" text-yellow-400 text-xl"/>
              <AiFillStar className=" text-yellow-400 text-xl"/>
              <AiFillStar className=" text-yellow-400 text-xl"/>
              {/* <AiOutlineStar/> */}
              <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-4 h-4 text-yellow-400  text-xl"
            fill="currentColor"
          >
            <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
              </svg>
              </>
            )
            case 3:
            return(
              < >
              <AiFillStar className=" text-yellow-400 text-xl"/>
              <AiFillStar className=" text-yellow-400 text-xl"/>
              <AiFillStar className=" text-yellow-400 text-xl"/>
              {/* <AiOutlineStar/> */}
              <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-4 h-4 text-yellow-400 mr-1 text-xl"
            fill="currentColor"
          >
            <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
              </svg>
              <AiOutlineStar className=" text-yellow-400 text-xl"/>
              </>
            )
            case 2:
            return(
              < >
              <AiFillStar className=" text-yellow-400 text-xl"/>
              <AiFillStar className=" text-yellow-400 text-xl"/>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-4 h-4 text-yellow-400 mr-1 text-xl"
            fill="currentColor"
          >
            <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
              </svg>
              <AiOutlineStar className=" text-yellow-400 text-xl"/>
              <AiOutlineStar className=" text-yellow-400 text-xl"/>
              
              </>
            )
          default:
            return (
              <AiFillStar/>
            )
        }
  }
  return (  
    
    <div
    
      key={product.id}
      className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link to={`home/products/${product.id}`} >
        <img
          className=" rounded-t-lg w-4/5 aspect-square m-auto max-sm:p-0 max-sm:rounded-lg max-sm:w-2/3"
          src={product["thumbnail"]}
          alt="product_image1"
          style={{
            // width: "80%",
            backgroundBlendMode: "color-burn",
            objectFit:"cover",
          }}
        />
      </Link>
      <div className="px-5 pb-5 max-sm:pb-3  max-sm:pt-0">
        {/* <a href="/"> */}
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-sm:pt-0">
            {product.title}
          </h5>
        {/* </a> */}
        <div className="flex items-center mt-2.5 mb-5 max-sm:mt-1.2 max-sm:mb-1">
          {/* <svg
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
           */}
          {generateStar(product.rating)}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {product.rating}
          </span>
        </div>
         
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
           
          </span>
          {state &&
            state.cart &&
            product &&
            (state.cart.some((p) => p.id === product.id) ? (
           
               <a
               onClick={() => {
                 dispatch1(removeToCart(product.id));
                 toast.error("Item removed successfully")
               }}
               className="  text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer"
             >
               Remove from cart
             </a>
            ) : (
                <a
                onClick={() => {
                  dispatch1(addToCart(product));
                  toast.success ("Item added successfully")
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
              >
                Add to cart
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
