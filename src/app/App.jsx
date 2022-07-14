import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Todos } from "../containers/Todos";
import { RootReducer } from "../global/RootReducer";

export const App = () => {
    return (
        <React.Fragment>
            <Provider store={RootReducer}>
                <Todos />
            </Provider>
        </React.Fragment>
    );
};


