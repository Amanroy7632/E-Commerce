const products = [
    {
      pname:"Redmi Note 13 Pro 5G (8GB RAM, 128GB, Coral Purple)",
      id:1,
      price:"25999",
      ref:"12356",
      homeDelevry:true,
      imageSrc:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShvoWX_D9-DhgL-EdHxlG6Vqy8Ri7sVzZ3zkKkmRzIEt_sQ-BoKLiWyHgbJ9bK1qM4iMci1RKjHoMjFu5JaardbViq7OL-r81sFQ0sEv_CtyVThqtofd12"
  },
  {
      pname:"Samsung Galaxy S24 Ultra - 512 GB - Titanium Gray",
      id:2,
      price:"129999",
      ref:"12356",
      homeDelevry:false,
      imageSrc:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsJh85eOZrwIVd-MFioR669ekIWZ99Oz1PQpEedGx_vxAzGFJNaWpuB7lRVxOiiJAVtfFCdzyt3kU1E6aR1xtWcWZVcOzsGqsAgsKz0oh-lnjQBsIfxpSS"
  },
  {
      pname:"Apple Iphone 12 128 GB Black",
      id:3,
      price:"54900",
      ref:"12356",
      homeDelevry:true,
      imageSrc:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuTLofES66LaKx7QXtSvMO7dB1NnCSIjU013y3UawpA6nOP8nmcioWqdqHCn4cRhxSJOrRi4v5DF3XpEcBvgGdrvubu8rdJaXyUrXHPBRVuR0FTUt2mv9nnA"
  },
  {
      pname:"Pens",
      id:4,
      price:"2906.52",
      ref:"12356",
      homeDelevry:true,
      imageSrc:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqBaDz9BuI-TPR-Pq2T7j2oXoa1y0LHthEARYKHEWaFsxxL50F5oG0uaEifQRKBhTO7JYjVaMRtRvOq8xu3WDrhg1GxDLaimLntub8i_MJ1wRglIBNHadPcg"
  }
  ];
  import React, { useState } from "react";
import { CartState } from "../../context/Context";
import {  useSelector } from "react-redux";
  const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const {state}=CartState()
    let itemData=state.cart;
    const data=useSelector(state=>state.cartItem)
    const items=data.cart;
    console.log(items);
  
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    const removeFromCart = (productId) => {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    };
  
    const calculateTotal = () => {
      return cartItems.reduce((acc, item) => acc + parseInt(item.price), 0);
    };
    const clearCart=()=>{}
  
    return (
      
      // <div className="container mx-auto p-4">
      //   <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      //   {itemData.length === 0 ? (
      //     <p>Your cart is empty.</p>
      //   ) : (
      //     <ul className="list-disc">
      //       {itemData.map((item) => (
      //         <li key={item.ref} className="flex justify-between mb-2">
      //           <span><img src={item.imageSrc} alt="" /></span>
      //           <span>{item.pname} - ${item.price}</span>
      //           <button
      //             className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
      //             onClick={() => removeFromCart(item.id)}
      //           >
      //             Remove
      //           </button>
      //         </li>
      //       ))}
      //       <li className="text-right font-bold">Total: ${calculateTotal()}</li>
      //     </ul>
      //   )}
      // </div>

      <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-200 py-2">
              <div>
              <span><img src={item.imageSrc} alt="" /></span>
                <p className="font-semibold">{item.pname}</p>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
              <button onClick={() => removeItem(index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button onClick={clearCart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Clear Cart</button>
        </div>
      )}
    </div>
    
    );
  };
  
  export default ShoppingCart;  