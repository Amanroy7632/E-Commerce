import { login as authLogin } from "../../features/authSlice";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {useForm} from "react-hook-form"
import React, { useState } from "react";
import Input from "../commonUI/Input";
import Button from "../commonUI/Button";
import authService from "../../appwrite/auth/auth";
import ProgressBar from "../loader/ProgressBar";
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {register,handleSubmit} =useForm()
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoaderActive,setLoaderActive]=useState(false)
  if (errorMessage) {
    setTimeout(() => {
      setErrorMessage("")
    }, 2500);
  }
  const login = async (data)=>{
    setLoaderActive(true)
      setErrorMessage("");
      try {
        const session =await authService.login(data)
        if (session) {
          const userData=await authService.getCurrentUser()
          if(userData){
            // console.log(userData);
            dispatch(authLogin(userData)); 
            navigate("/")
          }
        }
      } catch (error) {
        setErrorMessage(error.message)
      }
      finally{
        setLoaderActive(false)
      }
       //    for backend in moongoose
      // const url = "http://localhost:8000/api/v1/users/login";
      // try {
      //   const response= await fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(user),
      //   });
      //   if (response) {
      //      const userData=await response.json();
      //      if (userData) {
      //        dispatch(authLogin(userData));
      //        navigate("/")
      //      }
      //   }
      // } catch (error) {
      //    setErrorMessage(error.message);
      // }
  }

  const [isresponse, setResponse] = useState({});
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      password: password,
      username: username,
    };
    console.log(user);
    const url = "http://localhost:8000/api/v1/users/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      setResponse(data);
      if (isresponse) {
        alert("Login successful..");
        console.log(isresponse);
        const userName = isresponse.data?.user.fullname.split(" ");
        console.log(userName);
        document.getElementById("login").innerHTML = userName[0];
      }
    } catch (error) {
      console.log(`Error fetching ${url}`);
      setErrorMessage(error.message)
    }

    
    // Add your login logic here
    // if (username === 'admin' && password === 'password') {
    //   alert('Login successful!');
    // } else {
    //   setErrorMessage('Invalid username or password');
    // }
  };
  // let progress=70;
  // // const [progress,setProgress]=useState(0)
  // while (isLoaderActive && progress<100) {
  //   if (progress>=100) {
  //     progress=0
  //   }
  //    progress=(progress+Math.floor(Math.random()*12))
  //   // return <Loader/>
  // }
  return (
    <>
    {
      isLoaderActive?<ProgressBar/>:""
    }
    <div className=" flex items-center justify-center w-full dark:bg-black pt-3">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 dark:bg-gray-900 dark:text-white`}>
        <div className=" mb-2 flex justify-center">
          <span className=" inline-block w-full max-w-[100px]">
            Logo
          </span>
        </div>
        <h2 className=" text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className=" mt-2 text-center text-base text-black/60 dark:text-white">
          Don&apos;t have any account?&nbsp;
          <Link to={"/signup"} className=" font-medium text-pretty transition-all duration-200 hover:underline dark:text-white">
          Sign Up
          </Link>
        </p>
        {errorMessage && <p className=" text-red-600 mt-8 text-center" >{errorMessage}</p>}
        <form onSubmit={handleSubmit(login)} className=" mt-8 ">
           <div className=" space-y-5">
            <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email",
            {
              required:true,
              // validate:{
              //   matchPatern:(value)=>/^/.test(value) || "Email address must be a valid address"
              // }
            })}
            />
            <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password",{
              required:true,
            })} />
            <Button
             type="submit" 
            className=" w-full" >Sign in</Button>
           </div>
        </form>

      </div>
    </div>
    </>
    // <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-black dark:text-white">
    //   <div className="bg-white p-8 rounded shadow-lg w-96 dark:bg-gray-800">
    //     <h1 className="text-2xl font-bold mb-4">Login</h1>
    //     {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
    //     <form onSubmit={handleLogin}>
    //       <div className="mb-4">
    //         <label htmlFor="username" className="block text-sm font-medium">
    //           Username
    //         </label>
    //         <input
    //           type="text"
    //           id="username"
    //           name="username"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           className="border dark:bg-gray-800 dark:text-white border-gray-300 rounded-md px-3 py-2 w-full"
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label htmlFor="password" className="block text-sm font-medium">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="border dark:bg-gray-800 dark:text-white border-gray-300 rounded-md px-3 py-2 w-full"
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};
export default Login;
