import { createSlice } from "@reduxjs/toolkit";
import gameDataService from "../services/gameData.service";

const initState = {
    achievements: [
        {
            title: "I am the best",
            description: "Win with each of game items 100 times",
            rules: {
                scissors: { win: 100 },
                rock: { win: 100 },
                paper: { win: 100 },
                lizard: { win: 100 },
                spock: { win: 100 },
                random: { win: 100 }
            }
        },
        {
            title: "Loser",
            description: "Lose 100 times",
            goal: 100,
            rules: {
                scissors: "lose",
                rock: "lose",
                paper: "lose",
                lizard: "lose",
                spock: "lose",
                random: "lose"
            }
        },
        {
            title: "Cut off",
            description: "Win with scissors ✌",
            rules: { scissors: { win: 100 } }
        },
        {
            title: "Smash them",
            description: "Win with rock ✊",
            rules: { rock: { win: 100 } }
        },
        {
            title: "Death note",
            description: "Win with paper 🤚",
            rules: { paper: { win: 100 } }
        },
        {
            title: "Ancient dragon",
            description: "Win with lizard 🤏",
            rules: { lizard: { win: 100 } }
        },
        {
            title: "I am Spock",
            description: "Win with spock 🖖",
            rules: { spock: { win: 100 } }
        },
        {
            title: "Probability theory",
            description: "Win with random ❔",
            rules: { random: { win: 100 } }
        }
    ],
    gameTypes: {
        "3 - classic": ["scissors", "paper", "rock"],
        "5 - add lizard, spock": ["lizard", "spock", "scissors", "paper", "rock"]
    },
    gameItems: {
        scissors: "✌",
        paper: "✋",
        rock: "✊",
        lizard: "🤏",
        spock: "🖖",
        random: "❔"
    },
    ratingScale: { lose: -2, win: 5 },
    rules: {
        scissors: {
            paper: "win",
            rock: "lose",
            scissors: "draw",
            lizard: "win",
            spock: "lose"
        },
        paper: {
            paper: "draw",
            rock: "win",
            scissors: "lose",
            lizard: "lose",
            spock: "win"
        },
        rock: {
            paper: "lose",
            rock: "draw",
            scissors: "win",
            lizard: "win",
            spock: "lose"
        },
        lizard: {
            paper: "win",
            rock: "lose",
            scissors: "lose",
            lizard: "draw",
            spock: "win"
        },
        spock: {
            paper: "lose",
            rock: "win",
            scissors: "win",
            lizard: "lose",
            spock: "draw"
        }
    }
};

const gameDataSlice = createSlice({
    name: "gameData",
    initialState: {
        entities: initState || null,
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
export const getAchievementsList = () => (state) =>
    state.gameData.entities.achievements;
export const getGameTypes = () => (state) => state.gameData.entities.gameTypes;
export const getGameRatingScale = () => (state) =>
    state.gameData.entities.ratingScale;
export const getRules = () => (state) => state.gameData.entities.rules;
export const getGameItems = () => (state) => state.gameData.entities.gameItems;
export const getGameDataLoadingStatus = () => (state) =>
    state.gameData.isLoading;

export default gameDataReducer;
