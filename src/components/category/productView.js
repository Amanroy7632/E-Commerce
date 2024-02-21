import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
export const useProductView=()=>{
    const {id:productId}=useParams();
    const [product,setProduct]=useState({});
    const [selectQty,setSelectQty]=useState(1);
    const handleQtyChange=({target:{value}})=>{
        setSelectQty(value);
    }
}

     useEffect(() => {
    fetch(`https://dummyjson.com/carts/${productId}`)
      .then((res) => (res = res.json()))
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => console.log("Internet Error"));
  }, []);
