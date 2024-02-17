export const cartReducer =(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            console.log("Added to cart",action.payload.id);
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case "REMOVE_FROM_CART":
            console.log("Removed from cart",action.payload.id);
                return {...state,cart:state.cart.filter((c)=>(c.id!==action.payload.id))}
        default:
            return state;
    }
};
