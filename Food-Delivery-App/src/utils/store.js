import { configureStore } from "@reduxjs/toolkit"
import appReducer from "@/slices/appSlice"
import locationReducer from "@/slices/locationSlice"
import userReducer from "@/slices/userSlice"

export const store = configureStore({
    reducer: {
        app: appReducer,
        location: locationReducer,
        user: userReducer
    }
})

