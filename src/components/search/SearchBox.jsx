import {BiSearch} from "react-icons/bi"
import { useState } from "react"
const SearchBox = ({search,setSearch,filteredItemName}) => {
    const [visible,setVisible]=useState(false);
    // const [item,setItem]=useState(null)
    const handleMouseEnter=()=>{
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 2000);
    }
    const handleItemSelect=(id)=>{
        // setItem(id)
        setSearch(filteredItemName[id])
    }
  return (
    <>
    <div className=" hidden h-[5rem] max-md:flex justify-center items-center sticky top-0 z-10 dark:bg-black  bg-gray-300 overflow-hidden pt-5 ">
       {/* { visible? <input type="text" className=" text-xl py-1 px-5 w-[100%] h-full dark:bg-slate-600 bg-gray-100 flex justify-center items-center transition-all duration-300" placeholder=" Search for Products, Details etc .."  />:""} */}
       <input type="text" className=" text-xl py-1 px-5 w-[100%] h-full dark:bg-slate-600 bg-gray-100 flex justify-center items-center transition-all duration-300" placeholder=" Search for Products, Details etc .." 
       value={search}
       onChange={(e)=>{setSearch(e.target.value); setVisible(true)}}
       onMouseLeave={()=>{setVisible(false)}} />

        <div className=" absolute right-0  top-2 p-1.5 backdrop-blur-xl">
          <BiSearch className=" text-4xl"
        //   onMouseEnter={handleMouseEnter} 
          />
        </div>
        
      </div>
      {visible?<div className=" px-5 h-[10rem] overflow-scroll">
        <ul className=" flex flex-col gap-1">
      {filteredItemName.map((country, index) => (
        <li className=" hover:bg-blue-300 dark:text-gray-200 " onClick={(e)=>{handleItemSelect(index)
        }} key={index}>{country}</li>
      ))}
    </ul>
      </div>:""}
    </>
  )
}

export default SearchBox
