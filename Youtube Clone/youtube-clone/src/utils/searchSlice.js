import {createSlice, current} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        suggestions : {},
        results : null || JSON.parse(localStorage.getItem("searchResults"))
    },
    reducers : {
        cacheResults : (state,action) => {
            // { "ip" : ["iphone", "iphone 11"]} -> This will be the Result that will be stored here
            state.suggestions = Object.assign(state.suggestions, action.payload);
        },
        searchResults : (state,action) => {
            state.results = action.payload;
            localStorage.setItem("searchResults", JSON.stringify(state.results));
        }
    }
})

export default searchSlice.reducer;
export const {cacheResults, searchResults} = searchSlice.actions;