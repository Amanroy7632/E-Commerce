import React from 'react'

function Item({data}) {
  return (
    <div className=' w-full h-1/4 border border-blue-800 flex justify-between items-center'>
      <div className="product w-1/4 border border-red-400">
        <div className="img-container w-full h-2/3">
            {/* <img src={data.imageSrc} alt="j" className=' w-28' /> */}
        </div>
        <div className="detail w-full h-1/3 text-center">
            <h1>{data.pname}</h1>
            <h2>{data.imageSrc}</h2>
        </div>
      </div>
      <div className="price w-1/4 border border-red-400 text-center">
           <h1>{data.price}</h1>
      </div>
      <div className="qty w-1/4 border border-red-400 text-center">
          <h1>Quantity</h1>
      </div>
      <div className="tital w-1/4 border border-red-400 text-center">
       <h1>Rs 890</h1>
      </div>
    </div>
  )
}

export default Item
