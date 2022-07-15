import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    todos: [],
    loading: false,
    isError: null
};

const TodoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: {
        [API.FetchAll.rejected]: (state, action) => {
            state.loading = false,
            state.isError = action.payload
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
            state.isError = action.payload
        },
        [API.Create.pending]: (state) => {
            state.loading = true
        },
        [API.Create.fulfilled]: (state, action) => {
            state.loading = false,
            state.todos.push(action.payload)
        },
        [API.Update.rejected]: (state, action) => {
            state.loading = false,
            state.isError = action.payload
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
            state.isError = action.payload
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

export const { reset } = TodoSlice.actions;
export const TodoReducer = TodoSlice.reducer;



