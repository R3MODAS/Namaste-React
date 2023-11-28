import {createSlice, current} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {},
    reducers : {
        cacheResults : (state,action) => {
            // { "ip" : ["iphone", "iphone 11"]} -> This will be the Result that will be stored here
            state = Object.assign(state, action.payload);
        }
    }
})

export default searchSlice.reducer;
export const {cacheResults} = searchSlice.actions;