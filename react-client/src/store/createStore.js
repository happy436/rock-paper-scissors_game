import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameDataReducer from "./gameData";
import languageReducer from "./language";
import usersReducer from "./users";

const rootReducer = combineReducers({
    language: languageReducer,
    users: usersReducer,
    gameData: gameDataReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
