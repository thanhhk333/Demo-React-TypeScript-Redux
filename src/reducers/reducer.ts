import { AppAction, AppState } from "./types";

const initialState: AppState = {
    tutorials: [],
    error: null,
    addTutorialError: null,
};

export const reducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case "FETCH_TUTORIALS_SUCCESS":
            return {
                ...state,
                tutorials: action.payload,
                error: null,
            };
        case "FETCH_TUTORIALS_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "ADD_TUTORIAL_SUCCESS":
            return {
                ...state,
                tutorials: [...state.tutorials, action.payload],
                error: null,
            };
        case "ADD_TUTORIAL_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "DELETE_TUTORIAL_SUCCESS":
            return {
                ...state,
                tutorials: state.tutorials.filter(
                    (tutorial) => tutorial.id !== action.payload
                ),
                error: null,
            };
        case "DELETE_TUTORIAL_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "UPDATE_TUTORIAL_SUCCESS":
            return {
                ...state,
                tutorials: state.tutorials.map((tutorial) =>
                    tutorial.id === action.payload.id
                        ? action.payload
                        : tutorial
                ),
                error: null,
            };
        case "UPDATE_TUTORIAL_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
