import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchStudents,
    deleteStudent,
    updateStudent,
} from "../reducers/actions";
import { AppState, Student } from "../reducers/types";

const List = () => {
    const dispatch = useDispatch();
    const students = useSelector((state: AppState) => state.students);
    const [editId, setEditId] = useState<string>("");
    const [editName, setEditName] = useState<string>("");
    const [editAge, setEditAge] = useState<number>(0);
    const [editBio, setEditBio] = useState<string>("");

    useEffect(() => {
        dispatch(fetchStudents() as any);
    }, [dispatch]);

    const handleDelete = (id: string) => {
        dispatch(deleteStudent(id) as any);
    };

    const handleEdit = (student: Student) => {
        setEditId(student.id);
        setEditName(student.name);
        setEditAge(student.age);
        setEditBio(student.bio);
    };

    const handleUpdate = () => {
        const updatedStudent: Student = {
            id: editId,
            name: editName,
            age: editAge,
            bio: editBio,
        };

        dispatch(updateStudent(updatedStudent) as any);

        setEditId("");
        setEditName("");
        setEditAge(0);
        setEditBio("");
    };

    return (
        <div className="container text-center m-5">
            <h1 className="text-start m-5">List Student</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Bio</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.bio}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(student.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-primary ms-2"
                                    onClick={() => handleEdit(student)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editId && (
                <div>
                    <h2>Edit Student</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <input
                        className="mx-2"
                        type="number"
                        placeholder="Age"
                        value={editAge}
                        onChange={(e) => setEditAge(Number(e.target.value))}
                    />
                    <input
                        type="text"
                        placeholder="Bio"
                        value={editBio}
                        onChange={(e) => setEditBio(e.target.value)}
                    />
                    <button
                        className="btn btn-success ms-2"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </div>
            )}
        </div>
    );
};

export default List;
