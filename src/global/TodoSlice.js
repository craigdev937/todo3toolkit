import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    todos: [],
    loading: false,
    error: null
};

const TodoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [API.FetchAll.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.FetchAll.pending]: (state) => {
            state.loading = true
        },
        [API.FetchAll.fulfilled]: (state, action) => {
            state.loading = false,
            state.todos = [...action.payload]
        },
    },
});

export const TodoReducer = TodoSlice.reducer;


