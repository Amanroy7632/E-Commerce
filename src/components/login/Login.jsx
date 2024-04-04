// import React, { useState } from "react";
// import "./login.css";
// // import { closeLogin } from "../header/Header";
// function Login({visible}) {
//     // const[isvisible,setVisible]=useState(visible)
//     function setLoginFalse(){
//         document.querySelector(".form-box").classList.toggle("hide");
//         visible=false;
//         console.log("Check is Login Active",visible);
//     }
    
//   return (
//     <div className="form-box">
//         <div className="close absolute top-1 right-1">
//             {/* <h1 className=" text-3xl p-2 cursor-pointer" onClick={setLoginFalse}>❌</h1> */}
//             </div>
//       <div className="form-value">
//         <form action="login.php" method="post">
//           <h2>Login </h2>
//           {/* <p>Login</p> */}
//           {/* <span>Login</span> */}
//           {/* <span className=" mt-8">X</span> */}
          
//           <div className="inputbox">
//             <ion-icon name="mail-outline"></ion-icon>
//             <input type="email" name="username" required />
//             <label for="email">Email</label>
//           </div>
//           <div className="inputbox">
//             <ion-icon name="lock-closed-outline"></ion-icon>
//             <input type="password" name="pass" required />
//             <label for="password">Password</label>
//           </div>
//           <div className="forget">
//             <label for="">
//               <input type="checkbox" />
//               Remember Me <a href="">Forget Password</a>
//             </label>
//           </div>
//           <button name="login">Log in</button>
//           <div className="register">
//             <p>
//               Don't have an account ?<a href="signup.html">register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
// import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isresponse, setResponse] = useState({});
  const handleLogin = async(e) => {
    e.preventDefault();
    const user={
      password:password,
      username:username
        }
        console.log(user);
    const url="http://localhost:8000/api/v1/users/login";
   try {
    const response= await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(user)
    })
    const data = await response.json()
    console.log(data);
    setResponse(data)
   } catch (error) {
     console.log(`Error fetching ${url}`);
   }

   if (isresponse) {
      alert("Login successful..")
      console.log(isresponse.data?.user.fullname);
      const userName=isresponse.data?.user.fullname.split(" ");
      console.log(userName);
      document.getElementById("login").innerHTML =userName[0];
   }
    // Add your login logic here
    // if (username === 'admin' && password === 'password') {
    //   alert('Login successful!');
    // } else {
    //   setErrorMessage('Invalid username or password');
    // }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-black dark:text-white">
      <div className="bg-white p-8 rounded shadow-lg w-96 dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleLogin} >
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border dark:bg-gray-800 dark:text-white border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border dark:bg-gray-800 dark:text-white border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login