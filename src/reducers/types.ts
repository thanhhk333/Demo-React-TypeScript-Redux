export interface Student {
    id: string;
    name: string;
    age: number;
    bio: string;
}

export interface AppState {
    students: Student[];
    error: string | null;
    addStudentError: string | null;
}

export interface FetchStudentsSuccessAction {
    type: "FETCH_STUDENTS_SUCCESS";
    payload: Student[];
}

export interface FetchStudentsFailureAction {
    type: "FETCH_STUDENTS_FAILURE";
    payload: string;
}

export interface AddStudentSuccessAction {
    type: "ADD_STUDENT_SUCCESS";
    payload: Student;
}

export interface AddStudentFailureAction {
    type: "ADD_STUDENT_FAILURE";
    payload: string;
}

export interface DeleteStudentSuccessAction {
    type: "DELETE_STUDENT_SUCCESS";
    payload: string;
}

export interface DeleteStudentFailureAction {
    type: "DELETE_STUDENT_FAILURE";
    payload: string;
}

export interface UpdateStudentSuccessAction {
    type: "UPDATE_STUDENT_SUCCESS";
    payload: Student;
}

export interface UpdateStudentFailureAction {
    type: "UPDATE_STUDENT_FAILURE";
    payload: string;
}

export type AppAction =
    | FetchStudentsSuccessAction
    | FetchStudentsFailureAction
    | AddStudentSuccessAction
    | AddStudentFailureAction
    | DeleteStudentSuccessAction
    | DeleteStudentFailureAction
    | UpdateStudentSuccessAction
    | UpdateStudentFailureAction;
