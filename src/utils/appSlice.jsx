import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        showSidebar: true,
    },
    reducers: {
        toggleShowSidebar: (state) => {
            state.showSidebar = !state.showSidebar;
        },
        closSidebar: (state) => {
            state.showSidebar = false;
        },
    },
});

export const { toggleShowSidebar, closSidebar } = appSlice.actions;
export default appSlice.reducer;
