import React from 'react'
import './progressBar.css'
const ProgressBar = () => {
  return (
    <div className=" w-screen h-3 flex justify-center items-center dark:bg-black " >
      {/* <div className=" w-[75%] h-full overflow-hidden rounded-md ">
           <div className=" progress bg-green-600 w-3 h-full transition-all duration-300 " style={{width:`${progress}%`}}>
           </div>
      </div> */}
      <div className="progress w-[80%] h-3 rounded-lg shadow-lg shadow-orange-500 transition-all duration-200" style={{background:" linear-gradient(orange 0 0) 0/0% no-repeat lightblue;"}}></div>
   </div>
  )
}

export default ProgressBar
