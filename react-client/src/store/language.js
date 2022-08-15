import { createSlice } from "@reduxjs/toolkit";
import languageService from "../services/language.service";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        languageRequested: (state) => {
            state.isLoading = true;
        },
        languageReceved: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        languageRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: languageReducer, actions } = languageSlice;
const { languageRequested, languageReceved, languageRequestFiled } = actions;

export const loadLanguagesList = () => async (dispatch, getState) => {
    dispatch(languageRequested());
    try {
        const { content } = await languageService.get();
        dispatch(languageReceved(content));
    } catch (error) {
        dispatch(languageRequestFiled(error.message));
    }
};
export const getLanguages = () => (state) => state.language.entities;
export const getLanguagesLoadingStatus = () => (state) =>
    state.language.isLoading;
export const getLanguageById = (id) => (state) => {
    if (state.language.entities) {
        return state.language.entities.find((l) => l._id === id);
    }
};
export default languageReducer;
