import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import ItemCard from './ItemCard';
function FinalCart({ItemData}) {
  return (
    <div className=' bg-slate-400 w-full h-screen'>
      <h1 className='text-center'>Your Cart</h1>
      <div className="w-4/5 m-auto mt-2  h-4/5 flex">
        <div className='cards border border-red-600 w-2/3 h-full overflow-x-auto  justify-center'>
        
        {ItemData.map((data)=>{
          return <ItemCard key={data.id} data={data}/>
        })}
        </div>
        <div className="total-section border border-blue-700 w-1/5">
      iske ander total aayega
        </div>
      </div>
      
    </div>
  )
}

export default FinalCart
