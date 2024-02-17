import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
export const store=configureStore({
    reducer:{
        cartItem: cartSlice
    }
})