import {React,useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //      fetch("https://api.github.com/users/Amanroy7632")
    //     .then(res=> res= res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    //     .catch((error)=>(alert("Internet Error")));
    // },[])
    const openDownlaodLink=()=>{
        // window.location.href=data.repos_url;
    }
  return (
    
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
      {data ? (
        <div>
          <div className="text-center mb-4">
            <img src={data.avatar_url} alt="Avatar" className=" w-72  rounded-full mx-auto mb-2" />
            <h2 className="text-xl font-bold">{data.name}</h2>
            <p className="text-gray-600">@{data.login}</p>
          </div>
          <div>
            <p className="text-gray-700">{data.bio}</p>
            <div className="mt-4">
              <p className="text-gray-700">Followers: {data.followers}</p>
              <p className="text-gray-700">Following: {data.following}</p>
              <p className="text-gray-700">Public Repositories: {data.public_repos}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
    </div>
  )
}

export default Github

export const fetchGithubData= async ()=>{
   const res= await fetch("https://api.github.com/users/Amanroy7632")
   return res;
}
