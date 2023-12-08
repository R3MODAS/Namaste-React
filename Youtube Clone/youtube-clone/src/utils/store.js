import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice";
import youtubeReducer from "./youtubeSlice";

const store = configureStore({
    reducer : {
        app: appReducer,
        youtube : youtubeReducer
    }
})

export default store;
