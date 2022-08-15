import { createSlice } from "@reduxjs/toolkit";
import gameDataService from "../services/gameData.service";

const gameDataSlice = createSlice({
    name: "gameData",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        gameDataRequested: (state) => {
            state.isLoading = true;
        },
        gameDataReceved: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        gameDataRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: gameDataReducer, actions } = gameDataSlice;
const { gameDataRequested, gameDataReceved, gameDataRequestFiled } = actions;

export const loadGameData = () => async (dispatch, getState) => {
    dispatch(gameDataRequested());
    try {
        const { content } = await gameDataService.get();
        dispatch(gameDataReceved(content));
    } catch (error) {
        dispatch(gameDataRequestFiled(error.message));
    }
};
export const getGameData = () => (state) => state.gameData.entities;
export const getGameDataLoadingStatus = () => (state) =>
    state.gameData.isLoading;
export const getGameDataById = (id) => (state) => {
    if (state.gameData.entities) {
        return state.gameData.entities.find((g) => g._id === id);
    }
};
export default gameDataReducer;
