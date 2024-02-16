import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
function Cart({ ItemData }) {
  return (
    <div className="w-full h-screen  flex flex-wrap justify-center items-center overflow-y-auto">
      <div className="cart-item w-2/3 h-full border">
        <div className="heading flex justify-evenly items-center">
          <div><h1>Product</h1></div>
          <div><h1>Price</h1></div>
          <div><h1>Qty</h1></div>
          <div><h1>Total</h1></div>
        </div>
        {ItemData.map((data) => {
          return <Item data={data} key={data.id} />;
        })}
      </div>
      <div className="checkout w-1/3 h-full border bg-red-200 flex flex-wrap justify-center items-center">
        <div className="content P-3 border border-blue-400 p-12 w-full">
          <div className="line border border-black pt-2 bg-black mb-10 w-full h-1 "></div>
          <h2>CART TOTAL : </h2>
          <input type="checkbox" name="terms-condition" id="terms-condition" />
          <label htmlFor="terms-condition" className=" text-center p-4 ">
            I agree to{" "}
            <span className=" text-orange-500">Terms & Conditions</span>
          </label>{" "}
          <br />
          <br />
          <Link
            to="#"
            className="text-white bg-black hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-4"
          >
            Checkout&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faLock} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
