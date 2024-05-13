import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLocationSidebarOpen: false,
        isLoginSidebarOpen: false
    },
    reducers: {
        toggleLocationSidebar: (state) => {
            state.isLocationSidebarOpen = !state.isLocationSidebarOpen
        },
        toggleLoginSidebar: (state) => {
            state.isLoginSidebarOpen = !state.isLoginSidebarOpen
        }
    }
})

export const { toggleLocationSidebar, toggleLoginSidebar } = appSlice.actions
export default appSlice.reducer