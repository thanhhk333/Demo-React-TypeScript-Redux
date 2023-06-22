import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import { database } from "../firebase";
import { AppAction, Tutorial } from "./types";
import { Dispatch } from "redux";

export const fetchTutorials = () => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            const querySnapshot = await getDocs(
                collection(database, "tutorials")
            );
            const tutorialsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Tutorial[];
            dispatch({
                type: "FETCH_TUTORIALS_SUCCESS",
                payload: tutorialsData,
            });
        } catch (error: unknown) {
            dispatch({
                type: "FETCH_TUTORIALS_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};

export const addTutorial = (tutorial: Tutorial) => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            const { id, ...tutorialData } = tutorial;
            const docRef = await addDoc(
                collection(database, "tutorials"),
                tutorialData
            );
            dispatch({
                type: "ADD_TUTORIAL_SUCCESS",
                payload: { id: docRef.id, ...tutorialData },
            });
        } catch (error: unknown) {
            dispatch({
                type: "ADD_TUTORIAL_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};

export const deleteTutorial = (id: string) => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            await deleteDoc(doc(database, "tutorials", id));
            dispatch({ type: "DELETE_TUTORIAL_SUCCESS", payload: id });
        } catch (error: unknown) {
            dispatch({
                type: "DELETE_TUTORIAL_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};

export const updateTutorial = (tutorial: Tutorial) => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            const { id, ...data } = tutorial;
            await updateDoc(doc(database, "tutorials", id), data);
            dispatch({ type: "UPDATE_TUTORIAL_SUCCESS", payload: tutorial });
        } catch (error: unknown) {
            dispatch({
                type: "UPDATE_TUTORIAL_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};
