export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Added to cart", action.payload.id);
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            console.log("Removed from cart", action.payload.id);
            return { ...state, cart: state.cart.filter((c) => (c.id !== action.payload.id)) }
        case 'SORT_BY_QTY':
            const sortByField = action.payload; // Get the field to sort by from the payload
            // Implement sorting logic based on the specified field
            const sortedCart = [...state.cart].sort((a, b) => a[sortByField] - b[sortByField]);
            return { ...state, cart: sortedCart };
        default:
            return state;
    }
};
// console.log(Date.);
