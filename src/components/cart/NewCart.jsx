import { useState, useEffect } from "react";
// const data = [1, 2, 3];
import Loader from "../loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  removeToCart,
  increaseQty,
  decreaseQty,
  checkPromoCode,
  sortBy,
} from "../../features/cartSlice";
import { Link } from "react-router-dom";
function NewCart() {
  const data = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const items = data.cart;
  const [prmCode, setprmCode] = useState("");
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
  // console.log(data);
  // if(items.length==0){
  //   setTimeout(()=>{
  //    return <Loader/>
  //   },1000)
  // }
  if(items.length===0){
    return <div className=" flex  dark:bg-black dark:text-white h-[60vh]">
      <div className="heading-empty p-[7rem]">
      <h1 className=" pb-5 text-red-400 text-xl font-semibold">
    Your cart is empty.</h1>
    <p className=" pb-3 text-blue-600 font-semibold">Add Something ...</p>
    <Link to={"/"} className=" bg-green-500 text-white font-bold text-2xl pl-3 py-2" >
    <span className=" text-red-500  font-bold">&larr; </span> Add Items ..
    </Link>
      </div>
    </div>
  }
  return (
    <>
      <div className=" m-auto dark:bg-black dark:text-white flex max-sm:justify-evenly">
        <h1 className="text-3xl font-bold ml-[20%] max-sm:ml-[1%] pb-3">Your Cart</h1>
        <div className="ml-3 flex h-7 items-center">
                  {/* <h1 className=" text-2xl max-sm:hidden">Your Cart</h1> */}
                <span className="-inset-0.5 text-gray-400 hover:text-gray-500 w-full">
                  {items.length} items
                </span>
                <select
                  name=""
                  id=""
                  className=" bg-transparent dark:bg-[#19191A] -inset-0.5 dark:text-white  outline-none border-none cursor-pointer text-sm p-0 m-0"
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
              </div>
      </div>
      <div className=" cart-main-section flex justify-center dark:bg-black dark:text-white ">
        <div className="cart-container flex justify-evenly w-[70%] max-xl:flex-col max-sm:w-[95%]">
          <div className="cart-items w-[70%] flex flex-col max-xl:w-full max-md:rounded-3xl rounded-lg overflow-hidden ">
            {items.map((item) => {
              return (
                <div className=" item flex justify-evenly  border-b-2  py-[4rem] max-sm:py-[1rem] shadow-sm shadow-gray-500 dark:bg-[#19191A]">
                  <div className="image-container w-[25%] max-md:w-[35%] overflow-hidden flex justify-center items-center">
                    <img
                      className="w-full object-fit rounded-md"
                      src={item.image ? item.image[0] : item.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="decsription-section px-[2rem] max-sm:px-[1rem] py-[2rem] w-[65%]">
                    <h1 className=" text-2xl font-semibold">{item.title}</h1>
                    <p>{item.description}</p>
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
                        {item.rating}
                      </span>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <p className="text-green-500 text-xl font-bold">
                        ${item.price * item.qty}
                      </p>
                      <span className=" ">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className=" cursor-pointer text-red-700 border p-3 rounded-[6rem] bg-red-200"
                          onClick={() => {
                            dispatch(removeToCart(item.id));
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkout-section sticky top-[15vh] flex flex-col justify-between h-[63vh] max-md:h-[65vh] py-[2rem] w-[25%] max-xl:w-full max-md:py-0 p-4 max-xl:justify-evenly shadow-sm shadow-gray-500 dark:bg-[#19191A] border rounded-md border-[rgba(255,255,255,0.10)]">
            <div className="summary-section">
            
              <h1 className=" text-3xl font-bold py-2">Summary</h1>
              <p className=" text-xl font-semibold">
                Total Items :{" "}
                <span className=" text-blue-700 font-bold">{items.length}</span>
              </p>
            </div>
            <div className="checkout-section">
              <div className=" ">
                <h3 className="py-3 mb-2 font-semibold">
                  Total amount :{" "}
                  <span className=" font-bold">${totalCost()}</span>{" "}
                </h3>
              </div>
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
                <div className=" w-full flex justify-center">
                  <Link className=" flex justify-center items-center bg-green-600 border p-3 font-semibold text-white w-full">
                    Checkout Now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCart;
