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

    Create = createAsyncThunk("todo/Create", 
    async (payload) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title,
                description: payload.description
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const todo = await res.json();
        return todo;
    });

    Update = createAsyncThunk("todo/Update", 
    async (payload) => {
        const res = await fetch(`${URL}/${payload.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title,
                description: payload.description
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const todo = await res.json();
        return todo;
    });

    Delete = createAsyncThunk("todo/Delete", 
    async (id) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    });
};

export const API = new FetchClass();


