import React, { useState } from 'react'
import {BiUser} from "react-icons/bi"
import {useSelector} from "react-redux"
import LogoutBtn from '../header/LogoutBtn';
import { Link } from 'react-router-dom';
function User() {
  const username =useSelector((state)=>state.auth?.userData)
  const [showComponent ,setShowComponent] =useState(false);
  console.log(username);
    // const {userId}=useParams()
    const handleButtonClick = () => {
      setShowComponent(true);
    };
  
    const handleMouseLeave = () => {
      setShowComponent(false);
    };
  return (
    <div className=' relative flex justify-center'>
       <h1 onClick={handleButtonClick} onMouseOver={handleButtonClick} className='bg-grey-400 p-4 text-center text-3xl cursor-pointer'><BiUser/><span>{username}</span></h1>
       {
        showComponent && <div onMouseLeave={handleMouseLeave} className='absolute top-[6vh] left-[-70px] bg-gray-100  max-w-[20rem] w-[150px] flex justify-center items-center flex-col z-50 font-semibold p-2 dark:bg-black rounded-xl'><LogoutBtn/>
         <ul className=' flex justify-center items-center flex-col '>
          <li> <Link to={"/"} className=' dark:text-white hover:underline' onClick={handleMouseLeave}>Orders</Link> </li>
          <li> <Link to={"/"} className=' dark:text-white hover:underline' onClick={handleMouseLeave}>Wishlist</Link> </li>
          <li> <Link to={"/"} className=' dark:text-white hover:underline' onClick={handleMouseLeave}>Coupons</Link> </li>
          <li> <Link to={"/"} className=' dark:text-white hover:underline' onClick={handleMouseLeave}>Help Center</Link> </li>
         </ul>
        </div>
       } 
    </div>
  )
}

export default User
