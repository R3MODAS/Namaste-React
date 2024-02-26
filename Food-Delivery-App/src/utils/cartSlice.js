import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    },
    reducers: {
        addItem: (state,action) => {
            state.cartItems = [...state.cartItems, action.payload];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearItem: (state) => {
            state.cartItems.length = 0
            localStorage.removeItem("cartItems")
        }
    }
})

export default cartSlice.reducer
export const {addItem, clearItem} = cartSlice.actions