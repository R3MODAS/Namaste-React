import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "app",
    initialState: {
        userDetails: JSON.parse(localStorage.getItem("userDetails")) || null
    },
    reducers: {
        addUser: (state,action) => {
            state.userDetails = action.payload
            localStorage.setItem("userDetails", JSON.stringify(state.userDetails))
        },
        removeUser: (state) => {
            state.userDetails = null
            localStorage.removeItem("userDetails")
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer