import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { addToCart,removeToCart } from '../../features/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../loader/Loader';
import toast from 'react-hot-toast';
const ProductDetail = () => {
    const dataList=useSelector(state=>state.cartItem);
    const dispatch=useDispatch();
    const {productId,title,id}=useParams();
    const products=dataList.products;
    console.log(products);
    const itemDetail=dataList.categoryProduct.carts.filter((item)=>(item.id===parseInt(productId)));;
    // console.log(itemDetail[0].products.filter((item)=>(item.id===parseInt(id))));
    // const product=itemDetail[0].products.filter((item)=>(item.id===parseInt(id)));

    // console.log(product);
    
    console.log(productId,title,id);
    const [product,setProduct]=useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${productId}`)
      .then((res) => (res = res.json()))
      .then((data) => {
        console.log(data.products);
        const result=data.products.filter((item)=>(item.id===parseInt(id)));
        // console.log(result);
        // setProduct(data.filter((item)=>(item.id===parseInt(id))));
        setProduct(result);
      })
      .catch((error) => console.log("Internet Error"));
  }, []);
    // const product = [{
    //     // Replace with your actual product data
    //     id: 1,
    //     name: 'Awesome Product',
    //     price: 29.99,
    //     description: 'This is a great product...',
    //     thumbnail: 'data:image/jpeg;base64,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',
    //     features: ['Feature 1', 'Feature 2', 'Feature 3'],
    //   }];
  return (
    product && product[0]?
    <div className="container mx-auto px-4 pb-16  w-full h-screen  dark:bg-black dark:text-white">
      {/* Hero section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8  h-2/3 ">
        <img
          src={product[0].thumbnail}
          alt={product[0].name}
          className="object-fit h-full w-64 md:w-1/2 p-4 rounded-3xl"
        />
        
        <div className=' pl-2'>
          <h2 className="text-2xl font-semibold mb-2 dark:text-white text-black">{product[0].title}</h2>
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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-4 h-4 text-yellow-300 mr-1"
            fill="currentColor"
          >
            <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {product.rating}
          </span>
        </div>
          <p className="text-gray-600 line-clamp-3 dark:text-white">{product[0].discountPercentage} % off</p>
          <span className="text-2xl font-semibold text-green-600 mt-4">
            <p className=' pt-3 text-red-500'><del>$ {product[0].price}</del> {" "}
            <span className="text-2xl font-semibold text-green-600 mt-4">&nbsp; $ {Math.floor(product[0].price-(product[0].price * product[0].discountPercentage)/100)} /- </span></p>
          </span>
          {
           dataList&& dataList.cart && dataList.cart.some((data)=>data.id===product[0].id)?(
            <button className="bg-red-500 hover:bg-red-600 text-white  flex justify-center items-center font-semibold py-2 px-4 rounded-md mt-9"
            onClick={(e)=>{
              e.preventDefault();
              dispatch(removeToCart(product[0].id));
              toast.error("Item removed Successfully")}}>
             Remove From Cart
        </button>
           ):(
                <button className="bg-green-500 hover:bg-green-600 text-white flex justify-center items-center font-semibold py-2 px-4 rounded-md mt-9"
          onClick={(e)=>{
            e.preventDefault();
            dispatch(addToCart(product[0]))
            toast.success("Item added Successfully")}}>
        Add to Cart
      </button>
            )
          }
        </div>
        
      </div>
       
      {/* Additional sections (optional) */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Features</h3>
        <ul className="list-disc space-y-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ipsam autem, doloribus suscipit repudiandae deserunt vel exercitationem debitis quia aperiam illo, maxime explicabo corporis deleniti impedit dicta illum assumenda! Cum.
            Tenetur, necessitatibus. Nam debitis rem doloribus unde eligendi omnis, quae, veritatis voluptas ex dolore eos ab odit commodi enim ad error tenetur. Quis eum sint a quos beatae impedit autem!
          {/* {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))} */}
        </ul>
      </div>

      {/* Add to cart button (optional) */}
      {/* <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md">
        Add to Cart
      </button> */}
    </div>:<Loader/>
  );
};

export default ProductDetail;
