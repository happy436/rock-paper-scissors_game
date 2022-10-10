import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameDataReducer from "./gameData";
import usersReducer from "./users";

const rootReducer = combineReducers({
    users: usersReducer,
    gameData: gameDataReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
