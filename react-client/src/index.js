import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import history from "./utils/history";
import { Provider } from "react-redux";
import { createStore } from "./store/createStore";

const store = createStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
