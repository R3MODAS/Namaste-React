import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice"
import locationReducer from "./locationSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
    reducer: {
        toggle : toggleReducer,
        location: locationReducer,
        cart: cartReducer
    }
})

export default store