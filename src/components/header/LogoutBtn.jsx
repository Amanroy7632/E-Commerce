import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../features/authSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const LogoutBtn = () => {
    const authStatus =useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const navItems=[
        {
            name:"Home",
            slug:"/",
            active:true 
        },
        {
            name:"Login",
            slug:"/login",
            active:!authStatus 
        },
        {
            name:"Signup",
            slug:"/signup",
            active:!authStatus 
        }
    ]
    const dispatch = useDispatch();
    const logoutHandler=()=>{
       dispatch(logout())
    }
  return (
    <button onClick={logoutHandler} className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      Logout
    </button>
  )
}

export default LogoutBtn
