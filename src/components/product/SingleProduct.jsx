import React from "react";
import { CartState } from "../../context/Context";
function SingleProduct({ product }) {
  const { state, dispatch } = CartState();
  console.log(state.cart);

  // console.log(dispatch);

  return (
    <li
      key={product.id}
      className="p-4 bg-gray-100 rounded shadow items-center"
    >
      <img src={product.imageSrc} alt="" style={{ width: "200px" }} />
      <h4>{product.pname}</h4>
      <p>${product.price}</p>
      {/* {
            console.log(`Status is: ${state.cart.some((p)=>p.id!==product.id)}`)
          } */}

      {state &&
        state.cart &&
        product &&
        (state.cart.some((p) => p.id === product.id) ? (
          <button
            className=" bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
              console.log(state.cart);
            }}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
              console.log(state.cart);
            }}
          >
            Add to Cart
          </button>
        ))}

      {/* <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={(e)=>{
                    e.preventDefault();
                    dispatch({
                        type:"ADD_TO_CART",
                        payload:product
                    })
                    // console.log(state.cart);
                }}
              >
                Add to Cart
              </button>
              <button
                className=" bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={()=>{
                    // e.preventDefault();
                    dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:product
                    })
                    console.log(state.cart);
                }}
              >
                Remove from cart
              </button> */}
    </li>
  );
}

export default SingleProduct;
