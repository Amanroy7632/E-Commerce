import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../../features/authSlice'
import { useDispatch } from 'react-redux'
import {useForm} from "react-hook-form"
import {Button,Input} from "../commonUI/index.js"
import authService from '../../appwrite/auth/auth'
import ProgressBar from '../loader/ProgressBar'
import {toast} from "react-hot-toast"
const Signup = () => {
    const navigate = useNavigate()
    const {register,handleSubmit}=useForm()
    const dispatch = useDispatch()
    const [err,setErr]=useState('')
    const [isActiveProgress,setActiveProgress]=useState(false)
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
       setActiveProgress(true)
       try {
         const userData =await authService.createAccount(data)
        //  console.log(userData);
         if (userData) {
             const userData=await authService.getCurrentUser()
            //  console.log(userData);
             if (userData) {
                // console.log(userData);
                toast.success(`Welcome ${userData?.name} to SwiftBuy 🙏🏾`)
                dispatch(login(userData))
                navigate("/")
             }
         }
       } catch (error) {
        setErr(error.message)
       }
       finally{
        setActiveProgress(false)
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
    <>
    {
        isActiveProgress?<ProgressBar/>:null
    }
    <div className=' flex justify-center items-center dark:bg-black'>
      <div className={` mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 dark:bg-gray-900 dark:text-white`}>
        <div className=' mb-2 flex justify-center'>
            <span className=' inline-block w-full max-w-[100px]'>
                logo 
            </span>
        </div>
        <h2 className=' text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
        <p className=' mt-2 text-center text-base text-gray-500 dark:text-white'>
            Already hav an account?&nbsp;
            <Link to={"/login"} className=' font-medium text-pretty transition-all duration-200 hover:underline dark:text-white'>
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
    </>
  )
}

export default Signup



/* HTML: <div class="loader"></div> */
