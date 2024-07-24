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
    },
});

export const { toggleShowSidebar } = appSlice.actions;
export default appSlice.reducer;
