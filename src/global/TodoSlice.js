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
        [API.Create.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.Create.pending]: (state) => {
            state.loading = true
        },
        [API.Create.fulfilled]: (state, action) => {
            state.loading = false,
            state.todos = [...action.payload]
        },
        [API.Update.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.Update.pending]: (state) => {
            state.loading = true
        },
        [API.Update.fulfilled]: (state, action) => {
            state.loading = false;
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id);
            state.todos[index] = {
                ...state.todos[index],
                ...action.payload
            };
        },
        [API.Delete.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.Delete.pending]: (state) => {
            state.loading = true
        },
        [API.Delete.fulfilled]: (state, action) => {
            state.loading = false;
            state.todos.filter(
                (todo) => todo.id !== action.payload.id);
        },
    },
});

export const TodoReducer = TodoSlice.reducer;



