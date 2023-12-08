import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen : true,
    isCommentOpen : false,
}

const appSlice = createSlice({
    name : "app",
    initialState : initialState,
    reducers : {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        },
        toggleComment : (state) => {
            state.isCommentOpen = !state.isCommentOpen;
        }
    }
})

export default appSlice.reducer;
export const {toggleMenu, closeMenu, toggleComment} = appSlice.actions;