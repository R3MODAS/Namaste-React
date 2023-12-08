import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen : true
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
        }
    }
})

export default appSlice.reducer;
export const {toggleMenu, closeMenu} = appSlice.actions;