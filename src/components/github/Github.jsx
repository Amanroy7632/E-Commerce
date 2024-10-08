import {React,useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
function Github() {
    const data=useLoaderData()
    // console.log(data);
   
    const openDownlaodLink=()=>{
        // window.location.href=data.repos_url;
    }
  return data? (
    
    // <div className='w-full border border-red-300 p-5 flex flex-wrap justify-evenly'>
    //     <div className="container w-full border flex flex-wrap justify-between ">
    //        <div className="avtar-img flex justify-center items-center border">
    //         <img src={data.avatar_url} alt="Github Picture" className='w-full h-1/2 object-cover border border-red-600 h-full' />
    //        </div>
    //        <div className="content border">
    //            <h1>{data?data.name:""}</h1>
    //            <h2>Repos Link: {data.repos_url}</h2>
    //            <a href='Resume.aman' download={data.repos_url}> Download Repo</a>
    //            {/* <button onClick={openDownlaodLink}  download="">Download Repo</button> */}
    //        </div> 
    //     </div>

    //     {/* {data.followers}
    //     {data.avtar_url} */}
      
    // </div>
    <div className="min-h-screen bg-gray-100 flex lg:items-center justify-center dark:bg-black dark:border-gray-700 ">
    <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md dark:bg-gray-800 dark:border-gray-700 ">
      <Link to="https://portfolio-eight-rose-19.vercel.app/" target='_blanck' className='dark:text-white'> 
        
      PortFolio
      </Link>
      {data ? (
        <div>
          <div className="text-center mb-4">
            <img src={data.avatar_url} alt="Avatar" className=" w-72  rounded-full mx-auto mb-2" />
            <h2 className="text-xl font-bold text-gray-700 dark:text-white">{data.name}</h2>
            <p className="text-gray-600 dark:text-yellow-50">@{data.login}</p>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white">{data.bio}</p>
            <div className="mt-4">
              <p className="text-gray-700 dark:text-white">Followers: {data.followers}</p>
              <p className="text-gray-700 dark:text-white">Following: {data.following}</p>
              <p className="text-gray-700 dark:text-white">Public Repositories: {data.public_repos}</p>
            </div>
            {/* <div className='flex flex-wrap'>
              <ul>
              {

                repoData.map((data)=>( data.id!==754739870 && data.id!==753187765?<p>{data.name}</p>:""))
              }
              </ul>
            </div> */}
            {/* <p>Get Repo</p> */}
            {/* <Link to={data.repos_url}>Get Repo</Link> */}
          </div>
        </div>
      ) : (
        <p className="text-center dark:text-white">Loading...</p>
      )}
    </div>
    </div>
  ):<Loader />
}

export default Github

export const fetchGithubData= async ()=>{
   const res= await fetch("https://api.github.com/users/Amanroy7632")
   return res;
}
