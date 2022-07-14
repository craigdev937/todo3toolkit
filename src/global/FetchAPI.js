import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:5000/todos";

class FetchClass {
    FetchAll = createAsyncThunk("todos/FetchAll", 
    async () => {
        const res = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const todos = await res.json();
        return [...todos];
    });
};

export const API = new FetchClass();


