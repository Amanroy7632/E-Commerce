import { configureStore } from "@reduxjs/toolkit";
import { categoryProductSlice } from "../features/categoryProductSlice";
export const categoryProductStore=configureStore({
    reducer:{
       productItem: categoryProductSlice
    }
})