import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessages: (state, action) => {
            state.messages.push(action.payload);
            if (state.messages.length > 50) {
                state.messages.shift();
            }
        },
    },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
