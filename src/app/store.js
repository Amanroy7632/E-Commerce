import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import authSlice from '../features/authSlice'
export const store=configureStore({
    reducer:{
        cartItem: cartSlice,
        auth:authSlice
    }
})