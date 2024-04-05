import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {useSelector} from "react-redux"
import LogoutBtn from '../header/LogoutBtn';
function User() {
  const username =useSelector((state)=>state.auth?.userData)
  const [visible ,setVisible] =useState(false);
  console.log(username);
    // const {userId}=useParams()
    const handleClick=()=>{
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  return (
    <div>
       <h1 className='bg-grey-400 p-4 text-center text-3xl'><BiUser/><span>{username}</span></h1>
       <LogoutBtn/>
    </div>
  )
}

export default User
