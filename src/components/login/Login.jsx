import React, { useState } from "react";
import "./login.css";
// import { closeLogin } from "../header/Header";
function Login({visible}) {
    // const[isvisible,setVisible]=useState(visible)
    function setLoginFalse(){
        document.querySelector(".form-box").classList.toggle("hide");
        visible=false;
        console.log("Check is Login Active",visible);
    }
    
  return (
    <div className="form-box">
        <div className="close absolute top-1 right-1">
            {/* <h1 className=" text-3xl p-2 cursor-pointer" onClick={setLoginFalse}>❌</h1> */}
            </div>
      <div className="form-value">
        <form action="login.php" method="post">
          <h2>Login </h2>
          {/* <p>Login</p> */}
          {/* <span>Login</span> */}
          {/* <span className=" mt-8">X</span> */}
          
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" name="username" required />
            <label for="email">Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" name="pass" required />
            <label for="password">Password</label>
          </div>
          <div className="forget">
            <label for="">
              <input type="checkbox" />
              Remember Me <a href="">Forget Password</a>
            </label>
          </div>
          <button name="login">Log in</button>
          <div className="register">
            <p>
              Don't have an account ?<a href="signup.html">register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
