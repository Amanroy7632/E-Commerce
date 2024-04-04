import React from 'react'

const Slide = ({data}) => {
  return (
    <div className=' outline-none relative border-none'>
       <div className=' text-black absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
          <h1 className=' sm:text-2xl lg:text-3xl font-bold leading-[1.2] '>{data.title.toUpperCase()}</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, magni?</p>
          <h3 className=' text-[24px] text-gray-500'>Starting at <strong className=' text-[20px] md:text-[24px] lg:text-[30px]'>${data.price}</strong>.00</h3>
          <div className=' border px-4 py-2 w-fit text-2xl rounded-md backdrop-blur-xl cursor-pointer bg-green-800 text-white duration-200 transition-all hover:bg-green-700'>
            Shop now
          </div>
       </div>
          <div className=' image-section'>
          <img src={data.imgSrc} alt="slide-image" className=' w-screen h-[400px] object-cover md:h-auto rounded-xl object-right md:object-left-bottom' width={2000} height={2000} />
          </div>
    </div>
  )
}

export default Slide
