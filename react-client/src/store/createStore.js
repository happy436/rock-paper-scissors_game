import { combineReducers, configureStore } from "@reduxjs/toolkit";
/* import languageReducer from "./language"; */

const rootReducer = combineReducers({
    /* language: languageReducer, */
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}