import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import history from "./utils/history";
import { Provider } from "react-redux";
import { createStore } from "./store/createStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);
