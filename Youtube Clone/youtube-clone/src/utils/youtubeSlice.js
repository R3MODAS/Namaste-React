import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestions : {},
    results : null || JSON.parse(localStorage.getItem("searchResults"))
}

const youtubeSlice = createSlice({
    name : "youtube",
    initialState : initialState,
    reducers : {
        cacheResults : (state,action) => {
           state.suggestions = Object.assign(state.suggestions, action.payload);
        },
        clearcacheResults : (state) => {
            state.suggestions = {};
        },
        searchResults : (state,action) => {
            state.results = action.payload;
            localStorage.setItem('searchResults',JSON.stringify(state.results));
        }
    }
})

export default youtubeSlice.reducer;
export const {cacheResults, clearcacheResults, searchResults} = youtubeSlice.actions;