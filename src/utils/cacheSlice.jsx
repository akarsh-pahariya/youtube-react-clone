import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {
        searchCache: {},
    },
    reducers: {
        storeSearchCache: (state, action) => {
            state.searchCache = { ...state.searchCache, ...action.payload };
        },
    },
});

export const { storeSearchCache } = cacheSlice.actions;
export default cacheSlice.reducer;
