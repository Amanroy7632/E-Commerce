import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import axios from "axios";
import Error from "../error/Error";
import { useLoaderData } from "react-router-dom";
function Category() {
  const {product,error,loading,errorMessage}=fetchProData("https://dummyjson.com/carts")
  
  console.log(product);
  console.log(errorMessage);
  const repoData=product;
  // setTimeout(()=>{
  //   console.log(product);
  // console.log(`Something went wrong :${error}`);
  // console.log(`Loading data: ${loading}`);
  // },3000)
  // const repoData=useLoaderData();
  // console.log(repoData);
  // const [repoData, setRepoData] = useState([]);
  const productDetail=useSelector(state=>state.cartItem)
  // const repoData=productDetail.carts;
  // console.log(repoData);
  // console.log(productDetail.categoryProduct);
  // const checkInternet=setInterval(() => {
  //   console.log("Hello ",Date.now());
  // }, 1000);

  // useEffect(() => {
    
  //   fetch("https://dummyjson.com/carts")
  //     .then((res) => (res = res.json()))
  //     .then((data) => {
    //       // console.log(data);
    //       setRepoData(data);
    //     })
    //     .catch((error) => console.log("Internet Error"));
    // }, []);
    // console.log(repoData.carts);
  if(loading) return <Loader/>
  if(error) return <Error errorMessage={errorMessage}/>
  return repoData && repoData.carts ? (
    <div className="min-h-screen bg-gray-100 py-8 dark:bg-black dark:border-gray-700 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 dark:text-white">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {repoData && repoData.carts
            ? repoData.carts.map((data) => (
                <CategoryCard
                  key={data.id}
                  data={data}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  ) : (
    // <Loader />
    ""
  );
}

export default Category;
const fetchProData=(urlPath)=>{
  const [product,setProduct]=useState([]);
  const [error,setError]=useState(false);
  const [errorMessage,setErrorMessage]=useState({});
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    ;(async ()=>{
      try {
        setLoading(true)
        setError(false)
        // const res= await fetch(urlPath)
        const res= await axios.get(urlPath)
        // console.log(res);
        setProduct(res.data);
        // setProduct(res)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true);
        setErrorMessage({
          errorMessage:"Connect to the internet",
          errorCode:400
        });
      }
    })()
  },[])
  return {
    product,
    error,
    loading,
    errorMessage
  }
}
export const fetchProductData= async ()=>{
  const res= await fetch("https://dummyjson.com/carts")
  return res;
}
