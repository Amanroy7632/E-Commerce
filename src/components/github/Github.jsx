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
    
    <div className='w-full border border-red-300 p-5 flex flex-wrap justify-evenly'>
        <div className="container w-full border flex flex-wrap justify-between ">
           <div className="avtar-img flex justify-center items-center border">
            <img src={data.avatar_url} alt="Github Picture" className='w-full h-1/2 object-cover border border-red-600 h-full' />
           </div>
           <div className="content border">
               <h1>{data?data.name:""}</h1>
               <h2>Repos Link: {data.repos_url}</h2>
               <button onClick={openDownlaodLink}>Download Repo</button>
           </div> 
        </div>

        {/* {data.followers}
        {data.avtar_url} */}
      
    </div>
  )
}

export default Github

export const fetchGithubData= async ()=>{
   const res= await fetch("https://api.github.com/users/Amanroy7632")
   return res;
}
