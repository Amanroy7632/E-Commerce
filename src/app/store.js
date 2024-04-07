import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import authSlice from '../features/authSlice'
import {combineReducers} from "@reduxjs/toolkit"
const mainReducer=  combineReducers({
    cartItem:cartSlice,
    auth:authSlice
})
export const store=configureStore({
    // reducer:{
    //     cartItem: cartSlice,
    //     auth:authSlice

    // }
    reducer:mainReducer
})