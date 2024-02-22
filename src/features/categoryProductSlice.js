import { createSlice } from "@reduxjs/toolkit";
import { products } from "../products/productData";
import { categoryProductData } from "../products/categoryProductData";
// const [products, setRepoData] = useState([]);
//   useEffect(() => {
//     //  fetch("https://dummyjson.com/products")
//     fetch("https://dummyjson.com/carts")
//       .then((res) => (res = res.json()))
//       .then((data) => {
//         console.log(data);
//         setRepoData(data);
//       })
//       .catch((error) => console.log("Internet Error"));
//   }, []);
console.log(categoryProductData);
const initialState={
    products:categoryProductData,
    totalQty:0,
    totalPrice:0,
    promoCode:[{id:1,code:"Aman",off:15,isValid:true},{id:1,code:"Aman7632",off:10,isValid:true}]
}
export const categoryProductSlice=createSlice({
    name:"Category",
    initialState,
    reducers:{
        // addToCart:(state,action)=>{
        //     let getIndex=state.cart.findIndex((item)=>(item.id === action.payload.id))

        // }
    }
})
export default categoryProductSlice.reducer