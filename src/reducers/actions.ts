import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import { database } from "../firebase";
import { AppAction, Student } from "./types";
import { Dispatch } from "redux";

export const fetchStudents = () => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            const querySnapshot = await getDocs(
                collection(database, "students")
            );
            const studentsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Student[];
            dispatch({
                type: "FETCH_STUDENTS_SUCCESS",
                payload: studentsData,
            });
        } catch (error: unknown) {
            dispatch({
                type: "FETCH_STUDENTS_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};

export const addStudent = (student: Student) => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            const { id, ...studentData } = student;
            const docRef = await addDoc(
                collection(database, "students"),
                studentData
            );
            dispatch({
                type: "ADD_STUDENT_SUCCESS",
                payload: { id: docRef.id, ...studentData },
            });
        } catch (error: unknown) {
            dispatch({
                type: "ADD_STUDENT_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};

export const deleteStudent = (id: string) => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            await deleteDoc(doc(database, "students", id));
            dispatch({ type: "DELETE_STUDENT_SUCCESS", payload: id });
        } catch (error: unknown) {
            dispatch({
                type: "DELETE_STUDENT_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};

export const updateStudent = (student: Student) => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            const { id, ...data } = student;
            await updateDoc(doc(database, "students", id), data);
            dispatch({ type: "UPDATE_STUDENT_SUCCESS", payload: student });
        } catch (error: unknown) {
            dispatch({
                type: "UPDATE_STUDENT_FAILURE",
                payload: (error as Error).message,
            });
        }
    };
};
