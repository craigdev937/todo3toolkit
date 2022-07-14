import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const Todos = () => {
    const dispatch = useDispatch();
    const { loading, error, todos } 
        = useSelector((state) => state.todos);
    
    React.useEffect(() => {
        dispatch(API.FetchAll());
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error.message}</h1>;

    return (
        <React.Fragment>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <main key={todo.id}>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


