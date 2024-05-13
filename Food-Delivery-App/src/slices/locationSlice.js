import { createSlice } from "@reduxjs/toolkit"

const locationSlice = createSlice({
    name: "location",
    initialState: {
        userLocation: JSON.parse(localStorage.getItem("userLocation")) || null
    },
    reducers: {
        addLocation: (state, action) => {
            state.userLocation = action.payload
            localStorage.setItem("userLocation", JSON.stringify(state.userLocation))
        }
    }
})

export const { addLocation } = locationSlice.actions
export default locationSlice.reducer