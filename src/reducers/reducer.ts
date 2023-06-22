import { AppAction, AppState } from "./types";

const initialState: AppState = {
    students: [],
    error: null,
    addStudentError: null,
};

export const reducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case "FETCH_STUDENTS_SUCCESS":
            return {
                ...state,
                students: action.payload,
                error: null,
            };
        case "FETCH_STUDENTS_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "ADD_STUDENT_SUCCESS":
            return {
                ...state,
                students: [...state.students, action.payload],
                error: null,
            };
        case "ADD_STUDENT_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "DELETE_STUDENT_SUCCESS":
            return {
                ...state,
                students: state.students.filter(
                    (student) => student.id !== action.payload
                ),
                error: null,
            };
        case "DELETE_STUDENT_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "UPDATE_STUDENT_SUCCESS":
            return {
                ...state,
                students: state.students.map((student) =>
                    student.id === action.payload.id ? action.payload : student
                ),
                error: null,
            };
        case "UPDATE_STUDENT_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
