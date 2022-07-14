import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./TodoSlice";

export const RootReducer = configureStore({
    reducer: {
        todos: TodoReducer
    },
});



