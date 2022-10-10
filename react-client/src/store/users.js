import { createAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";
import { generetaAuthError } from "../utils/generateAuthError";
import history from "../utils/history";

const testState = [
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Piter",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Wolvering",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 20, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 20, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Rick",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 22, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Leo",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 32, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Karen",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 23, lose: 13, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Missy228",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 23, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Jim",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 11, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Bill",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 13, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Alex",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Shepard",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Nami",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Lyly",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: nanoid(),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Qwer",
        history: {
            scissors: { win: 20, lose: 11, draw: 12 },
            rock: { win: 30, lose: 10, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 20, lose: 10, draw: 10 },
            random: { win: 20, lose: 10, draw: 10 }
        }
    },
    {
        _id: "qwerty",
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "Loli",
        history: {
            scissors: { win: 101, lose: 11, draw: 12 },
            rock: { win: 1, lose: 49, draw: 10 },
            spock: { win: 10, lose: 10, draw: 9 },
            lizard: { win: 10, lose: 10, draw: 10 },
            paper: { win: 10, lose: 10, draw: 10 },
            random: { win: 10, lose: 10, draw: 10 }
        }
    }
];

/* const initialState = localStorageService.getAccessToken()
    ? {
        entities: null,
        isLoading: true,
        error: null,
        auth: {
            userId: localStorageService.getUserId()
        },
        isLoggedIn: true,
        dataLoaded: false
    }
    : {
        entities: null,
        isLoading: false,
        error: null,
        auth: null,
        isLoggedIn: false,
        dataLoaded: false
    }; */

const initialState = localStorageService.getAccessToken()
    ? {
        entities: null,
        isLoading: true,
        error: null,
        auth: {
            userId: localStorageService.getUserId()
        },
        isLoggedIn: true,
        dataLoaded: false
    }
    : {
        entities: testState,
        isLoading: false,
        error: null,
        auth: {
            userId: "qwerty"
        },
        isLoggedIn: false,
        dataLoaded: false
    };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceved: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        userUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
            ] = action.payload;
        },
        authRequested: (state) => {
            state.error = null;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersRequested,
    usersReceved,
    usersRequestFiled,
    authRequestFailed,
    authRequestSuccess,
    userLoggedOut,
    userUpdateSuccessed
} = actions;

const authRequested = createAction("users/authRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");

export const login =
    ({ payload, redirect }) =>
        async (dispatch) => {
            const { email, password } = payload;
            dispatch(authRequested());
            try {
                const data = await authService.login({ email, password });
                localStorageService.setTokens(data);
                dispatch(authRequestSuccess({ userId: data.userId }));
                history.push(redirect);
            } catch (error) {
                const { code, message } = error.response.data.error;
                if (code === 400) {
                    const errorMessage = generetaAuthError(message);
                    dispatch(authRequestFailed(errorMessage));
                } else {
                    dispatch(authRequestFailed(error.message));
                }
            }
        };

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        history.push("/users");
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};
export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    history.push("/");
};
export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.get();
        dispatch(usersReceved(content));
    } catch (error) {
        dispatch(usersRequestFiled(error.message));
    }
};
export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested());
    try {
        const { content } = await userService.update(payload);
        dispatch(userUpdateSuccessed(content));
    } catch (error) {
        dispatch(userUpdateFailed(error.message));
    }
};
export const getCurrentUserData = () => (state) => {
    return state.users.entities
        ? state.users.entities.find((u) => u._id === state.users.auth.userId)
        : null;
};

export const getUsersList = () => (state) => state.users.entities;

export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === userId);
    }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getAuthErrors = () => (state) => state.users.error;
export default usersReducer;
