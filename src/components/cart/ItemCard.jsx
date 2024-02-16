import React, { useState } from 'react'

function ItemCard({data}) {
    const [reoveData,setRemove]=useState(data);
    const setRemoveal=(e)=>{
console.log(e.target.ParentNode);
    }
  return (
    <div className="items border border-green-500 w-2/3 h-1/3 m-auto mt-2 flex">
       
       <div className="image border border-red-600 w-1/3">
             <img src={data.imageSrc} alt="" />
       </div>
       <div className="item-detail border border-gray-500 w-2/3 ">
            <div className='upperSection border border-yellow-200 w-full h-2/3'>
                <h3>{data.pname}</h3>
                <p>Ref:{data.ref}</p>
                <p>Price:💲{data.price}</p>
                {data.homeDelevry? <p>✅ Home Delivery</p>:<p>❌ Home Delivery</p>}
                
            </div>
            <div className='lowerSection border border-black w-full h-1/3 flex justify-center items-center'>
                <span className='p-3'>Qty: </span> <span className='p-1' style={{border:"2px solid grey",cursor:"pointer",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"}}>➖</span> 
                <input type="number" name="" id="" className='w-10 text-xl' />
                <span className='p-1' style={{border:"2px solid grey",cursor:"pointer",borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}}>➕</span>
                <span className='total p-4'>560</span>
                <span className='total-visible p-4'>678</span>
            </div>
       </div>
       <h1 className=' text-right border border-blue-700' onClick={setRemoveal}>❌</h1>
    </div>
  )
}

export default ItemCard
