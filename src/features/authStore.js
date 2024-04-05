import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const authStore = configureStore({
    reducer:{
        auth: authSlice
    }
})
export default authStore