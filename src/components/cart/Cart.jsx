import React, { useEffect } from "react";
// import Item from "./Item";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import "../cart/cart.css";
import { useSelector,useDispatch } from "react-redux";
import { removeToCart,increaseQty,decreaseQty,checkPromoCode,sortBy } from "../../features/cartSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
const prevUsedPromoCode=[]
function Cart({ ItemData }) {
  const [prmCode,setprmCode]=useState("");
  const productId=useParams();
 
  const data = useSelector((state) => state.cartItem);
  let items = data.cart;
  const dummyData=items;
  const dispatch = useDispatch()
  // console.log(items);
  const promoCodes=data.promoCode;
  const [tQty,setQty]=useState(items.length)
  const totalCost=()=>{
    return items.reduce((acc, item) =>acc+(item.price*item.qty ), 0);
  }
  const totalQty=()=>{
    return items.reduce((acc, item) =>acc+(item.qty ), 0);
  }
  useEffect(()=>{
    setQty(items.reduce((acc, item) =>acc+(item.qty ), 0))
  },[tQty])
  let [totalCalculatedCost,setTotalCost]=useState(totalCost());
  const checkValidPromoCode=(e)=>{
    e.preventDefault();
    dispatch(checkPromoCode(prmCode));
  }
  const [option ,setOption]=useState("");
  const optionHandler=()=>{
    console.log(option);
    setOption(option);
  }
  function compareTo(a,b){
    return a.qty - b.qty;
  }
  useEffect(()=>{
    
    dispatch(sortBy(option));
    setOption("")
    console.log(items);
    // items.length>0? dummyData.sort(compareTo):""
  },[option])
  
  return (
    items.length>0?
    <div className="container-all dark:bg-black dark:border-gray-700 ">
    <div className="card dark:bg-black dark:border-gray-700">
      <div className="row dark:bg-black dark:border-gray-700">
        <div className="col-md-8 cart dark:bg-gray-800 dark:border-red-700 dark:text-white w-full ">
          <div className="title">
            <div className="row  flex flex-wrap h-1/12 overflow-hidden">
              <div className="col w-1/2 ">
                <h4>
                  <b>Your Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted w-1/2 ">
                {items.length} items 
                <select name="" id="" className=" bg-transparent dark:bg-gray-800 dark:text-white w-auto outline-none border-none cursor-pointer"
                onChange={(e)=>{ 
                 setOption(e.target.value)}}  value={option}>
                  <option value="">Sort By</option>
                  <option value="price">Price</option>
                  <option value="qty">Quantity</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
          </div>
          {items.map((item, index) => (
            <div className="row border-top border-bottom">
            <div className="row main align-items-center flex justify-evenly items-center  border-b-2 border-blue-300 rounded-md max-sm:flex-col">
              <div className="col-2 max-sm:w-full flex justify-center">
                <Link to={`/products/${productId}/${item.title.replace('/','@')}/${item.id}`}>
                <img
                  className="img-fluid lg:w-28 max-sm:object-fill max-sm:m-0"
                  src={item.thumbnail}
                />
                </Link>
              </div>
              <div className="col ">
                <div className="row text-muted max-sm:p-3">{item.title}</div>
                <div className="row max-sm:hidden">{item.description?item.description.substr(0,30):""}</div>
                <div className="row max-sm:hidden">{item.discountPercentage}% Off</div>
              </div>
              <div className="col ">
                <span onClick={()=>{dispatch(decreaseQty(item))}}className=" cursor-pointer text-3xl p-3 " >-</span>
                <span  className="  cursor-pointer text-xl px-3 py-1 border rounded-xl">
                  {item.qty}
                </span>
                <span onClick={()=>{dispatch(increaseQty(item))}} className=" cursor-pointer text-3xl p-3">+</span>
              </div>
              <div className="col   max-sm:flex max-sm:justify-between">
               <span className="max-sm:flex max-sm:justify-center max-sm:items-center ">
                 &euro; {item.price * item.qty}</span>
               <span className="close p-4">
                <FontAwesomeIcon icon={faDeleteLeft} 
                onClick={()=>{dispatch(removeToCart(item.id))}}
                   className=" text-3xl text-red-700 cursor-pointer  max-sm:my-1"/>
                </span>
              </div>
            </div>
          </div>
          ))}
          <div className="back-to-shop">
            {/* <a href="#">⬅️</a> */}
            <Link to="/"className=" hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:text-white" >⬅️<span className="text-muted">Back to shop</span></Link>
            
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
             TOTAL ITEMS { items.reduce((acc, item) =>acc+(item.qty ), 0) }
            </div>
            <div className="col text-right">&euro; {items.reduce((acc, item) =>acc+(item.price*item.qty ), 0)}</div>
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
            <div className="col text-right">&euro; {items.reduce((acc, item) =>acc+(item.price*item.qty ), 0)}</div>
          </div>
          <button onClick={checkValidPromoCode} className="btn-checkout">CHECKOUT</button>
        </div>
      </div>
    </div></div>:(<div><h2>Your Cart is Empty</h2></div>)
  );
}

export default Cart;
