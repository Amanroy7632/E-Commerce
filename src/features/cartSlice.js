import { createSlice ,nanoid} from "@reduxjs/toolkit";
import ItemData from "../../src/components/cart/ItemData"
import { products } from "../products/productData";
const initialState={
    cart:[],
    products:products,
    totalQty:0,
    totalPrice:0,
    promoCode:[{id:1,code:"Aman",off:15,isValid:true},{id:1,code:"Aman7632",off:10,isValid:true}]
};
export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let getIndex=state.cart.findIndex((item)=>(item.id === action.payload.id))
            getIndex>=0?state.cart[getIndex].qty+=1:state.cart.push({...action.payload,qty:1})
        },
        removeToCart:(state,action)=>{
            // console.log("Am Working");
           state.cart= state.cart.filter(item=>item.id !== action.payload)
        },
        increaseQty:(state,action)=>{
            let getIndex=state.cart.findIndex((item)=>(item.id === action.payload.id))
            getIndex>=0?state.cart[getIndex].qty+=1:state.cart[getIndex]
        },
        decreaseQty:(state,action)=>{
            let getIndex=state.cart.findIndex((item)=>(item.id === action.payload.id))
            getIndex>=0 && state.cart[getIndex].qty>1?state.cart[getIndex].qty-=1:state.cart[getIndex]
        },
        checkPromoCode:(state,action)=>{
            state.promoCode.filter((pCode)=>(pCode.code===action.payload.code && pCode.isValid)?(
                alert(`Congratulations you got ${pCode.off}% Off` )
                
                ):(alert("Invalid Code")))
        },
        updateToCart:(state,action)=>{
            state.todos.filter((todo)=>{
                return todo.id === action.payload?({...todo,qty:action.payload}):todo
            })
        }
        
    }
})
// we need to export the functionality seprately 
export const {addToCart,updateToCart,removeToCart,increaseQty,decreaseQty,checkPromoCode} =cartSlice.actions
export default cartSlice.reducer