import React from 'react'
import { Link,NavLink, Outlet } from 'react-router-dom'
function CategoryCard({data}) {
    const title="Img"
  return (
    
    <Link to={`/products/${data.id}`}>
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-80 border dark:bg-black dark:border-gray-700">
      <img src={data&&data.products ?(data.products[0].thumbnail):""} alt={title} className="w-48 h-48 object-cover m-auto" />
      <div className="p-4 flex flex-wrap justify-end items-center">
      
        <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white ">{data&&data.products ?(data.products[0].title):""}</h3>
        <a href="/products" className="bg-blue-100 text-blue-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Shop Now</a>
      </div>
    </div>
    {/* <Outlet/> */}
    </Link>
    
  )
}

export default CategoryCard
