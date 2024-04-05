import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../../features/authSlice'
import { useDispatch } from 'react-redux'
import {useForm} from "react-hook-form"
import Input from '../commonUI/Input'
import Button from '../commonUI/Button'
import authService from '../../appwrite/auth/auth'
const Signup = () => {
    const navigate = useNavigate()
    const {register,handleSubmit}=useForm()
    const dispatch = useDispatch()
    const [err,setErr]=useState('')
    // const getCurrentUser =async()=>{
    //     const url="http://localhost:8000/api/v1/users/current-user"
    //     try {
    //         const response= await fetch(url,{
    //             method:"GET"
    //         })
    //         if(response){
    //             return response.json()
    //         }else{
    //             return null
    //         }
    //     } catch (error) {
    //         setErr(error.message)
    //     }
    // }
    const createUser= async(data)=>{
       setErr("")
       try {
         const userData =await authService.createAccount(data)
         if (userData) {
             const userData=await authService.getCurrentUser()
             if (userData) {
                dispatch(login(userData))
                navigate("/")
             }
         }
       } catch (error) {
        setErr(error.message)
       }
    //    for backend in moongoose
    //    const url="http://localhost:8000/api/v1/users/register"
    //    try {
    //      const response =await fetch(url,{
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(data)
    //      })
    //      if (response) {
    //         alert("User created successfully")
    //         dispatch(login(response.json()))
    //         navigate("/")
    //      }
    //    } catch (error) {
    //     setErr(error.message)
    //    }
    }
  return (
    <div className=' flex justify-center items-center'>
      <div className={` mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className=' mb-2 flex justify-center'>
            <span className=' inline-block w-full max-w-[100px]'>
                logo 
            </span>
        </div>
        <h2 className=' text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
        <p className=' mt-2 text-center text-base text-black/10'>
            Already hav an account?&nbsp;
            <Link to={"/login"} className=' font-medium text-pretty transition-all duration-200 hover:underline'>
            Sign in</Link>
        </p>
        {err && <p className=' text-red-600 mt-8 text-center'>{err}</p>}
         <form onSubmit={handleSubmit(createUser)}>
            <div className=' space-y-5'>
                <Input
                label="Name"
                placeholder="Enter your full name"
                {...register("name",{
                    required:true
                })}
                />
                <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                {...register("email",{
                    required:true,
                    validate:{
                        matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||"Email address must be a valid email address"
                    }
                })}
                />
                <Input
                label="Phone"
                type="number"
                placeholder="Enter your phone number"
                {...register("phone",{
                    required:true,
                    // validate:{
                    //     matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||"Email address must be a valid email address"
                    // }
                })}
                />
                <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required:true,
                    // validate:{
                    //     matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||"Email address must be a valid email address"
                    // }
                })}
                />
                <Button  type='submit' className=' w-full' >Submit</Button>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Signup
