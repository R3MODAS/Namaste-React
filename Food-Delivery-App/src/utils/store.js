import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice"
import locationReducer from "./locationSlice"

const store = configureStore({
    reducer: {
        toggle : toggleReducer,
        location: locationReducer
    }
})

export default store