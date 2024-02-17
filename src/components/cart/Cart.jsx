import React from "react";
// import Item from "./Item";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock ,faClose ,faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import "../cart/cart.css";
import { useSelector,useDispatch } from "react-redux";
import { removeToCart,increaseQty,decreaseQty,checkPromoCode } from "../../features/cartSlice";
import { useState } from "react";
const prevUsedPromoCode=[]
function Cart({ ItemData }) {
  const [prmCode,setprmCode]=useState("");
  const data = useSelector((state) => state.cartItem);
  const items = data.cart;
  const dispatch = useDispatch()
  console.log(items);
  const promoCodes=data.promoCode;
  const totalCost=()=>{
    return items.reduce((acc, item) =>acc+(item.price*item.qty ), 0);
  }
  let [totalCalculatedCost,setTotalCost]=useState(totalCost());
  const checkValidPromoCode=(e)=>{
    e.preventDefault();
    dispatch(checkPromoCode(prmCode));
  }
  
  return (
    <div className="card ">
      <div className="row">
        <div className="col-md-8 cart ">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {items.length} items
              </div>
            </div>
          </div>{" "}
          {items.map((item, index) => (
            <div className="row border-top border-bottom ">
            <div className="row main align-items-center flex justify-evenly items-center border">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src={item.thumbnail}
                />
              </div>
              <div className="col">
                <div className="row text-muted">{item.title}</div>
                <div className="row">{item.description.substr(0,30)}</div>
              </div>
              <div className="col">
                <span onClick={()=>{dispatch(decreaseQty(item))}}className=" cursor-pointer text-3xl p-3" >-</span>
                <span  className=" border cursor-pointer text-2xl p-3">
                  {item.qty}
                </span>
                <span onClick={()=>{dispatch(increaseQty(item))}} className=" cursor-pointer text-3xl p-3">+</span>
              </div>
              <div className="col">
                &euro; {item.price * item.qty}<span className="close p-4">
                <FontAwesomeIcon icon={faDeleteLeft} 
                onClick={()=>{dispatch(removeToCart(item.id))}}
                   className=" text-3xl text-red-700 cursor-pointer"/></span>
              </div>
            </div>
          </div>
          ))}
          <div className="back-to-shop">
            <a href="#">⬅️</a>
            <span className="text-muted">Back to shop</span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: "0" }}>
              ITEMS {items.length }
            </div>
            <div className="col text-right">&euro; {totalCost()}</div>
          </div>
          <form >
            <p>SHIPPING COST</p>
            <select>
              <option className="text-muted">
                Standard-Delivery- &euro;5.00
              </option>
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code"
            value={prmCode}
            onChange={(e)=>setprmCode(e.target.value)} />
          </form>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">&euro; {totalCalculatedCost}</div>
          </div>
          <button onClick={checkValidPromoCode} className="btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
