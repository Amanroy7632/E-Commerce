import React, { useState } from 'react'
import {BiUser} from "react-icons/bi"
import {useSelector} from "react-redux"
import LogoutBtn from '../header/LogoutBtn';
import { Link } from 'react-router-dom';
function User() {
  const username =useSelector((state)=>state.auth?.userData?.name)
  const userFirstName=username.split(' ')
  // console.log(userFirstName);
  const [showComponent ,setShowComponent] =useState(false);
  // console.log(username);
    // const {userId}=useParams()
    const handleButtonClick = () => {
      setShowComponent(true);
    };
  
    const handleMouseLeave = () => {
      setShowComponent(false);
    };
  return (
    <div className=' relative flex justify-center items-center' onClick={handleButtonClick} onMouseOver={handleButtonClick}>
       <h1  className='bg-grey-400 py-3 text-center text-2xl cursor-pointer'><BiUser/></h1>
       <span>{username?userFirstName[0]:""}</span>
       {
        showComponent && <div onMouseLeave={handleMouseLeave} className='absolute top-[6vh] left-[-50px] bg-gray-100  max-w-[20rem] w-[150px] flex justify-center items-center flex-col z-50 font-semibold p-2 dark:bg-black rounded-xl'><LogoutBtn/>
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
