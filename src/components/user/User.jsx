import React from 'react'
// import { useParams } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {useSelector} from "react-redux"
function User() {
  const username =useSelector((state)=>state.auth?.userData)
  console.log(username);
    // const {userId}=useParams()
  return (
    <div>
       <h1 className='bg-grey-400 p-4 text-center text-3xl'><BiUser/><span>{username}</span></h1>
    </div>
  )
}

export default User
