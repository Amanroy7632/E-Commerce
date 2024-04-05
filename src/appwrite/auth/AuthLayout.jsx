import React, { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Protected({children,authentication=true}) {
    const navigate = useNavigate()
    const authStatus=useSelector((state)=>state.auth.status)
    const [loader,setLoader]=useState(true)
    useEffect(()=>{
        if (authentication && authStatus!==authentication) {
            navigate("/login")
        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,authentication,navigate])
  return loader? <h1>loading ....</h1>:<>{children}</>
}

export default Protected
