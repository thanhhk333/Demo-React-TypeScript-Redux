export interface Tutorial {
    id: string;
    name: string;
    age: number;
    bio: string;
}

export interface AppState {
    tutorials: Tutorial[];
    error: string | null;
    addTutorialError: string | null;
}

export interface FetchTutorialsSuccessAction {
    type: "FETCH_TUTORIALS_SUCCESS";
    payload: Tutorial[];
}

export interface FetchTutorialsFailureAction {
    type: "FETCH_TUTORIALS_FAILURE";
    payload: string;
}

export interface AddTutorialSuccessAction {
    type: "ADD_TUTORIAL_SUCCESS";
    payload: Tutorial;
}

export interface AddTutorialFailureAction {
    type: "ADD_TUTORIAL_FAILURE";
    payload: string;
}

export interface DeleteTutorialSuccessAction {
    type: "DELETE_TUTORIAL_SUCCESS";
    payload: string;
}

export interface DeleteTutorialFailureAction {
    type: "DELETE_TUTORIAL_FAILURE";
    payload: string;
}

export interface UpdateTutorialSuccessAction {
    type: "UPDATE_TUTORIAL_SUCCESS";
    payload: Tutorial;
}

export interface UpdateTutorialFailureAction {
    type: "UPDATE_TUTORIAL_FAILURE";
    payload: string;
}

export type AppAction =
    | FetchTutorialsSuccessAction
    | FetchTutorialsFailureAction
    | AddTutorialSuccessAction
    | AddTutorialFailureAction
    | DeleteTutorialSuccessAction
    | DeleteTutorialFailureAction
    | UpdateTutorialSuccessAction
    | UpdateTutorialFailureAction;
