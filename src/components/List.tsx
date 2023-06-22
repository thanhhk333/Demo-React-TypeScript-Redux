import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchTutorials,
    deleteTutorial,
    updateTutorial,
} from "../reducers/actions";
import { AppState, Tutorial } from "../reducers/types";

const List = () => {
    const dispatch = useDispatch();
    const tutorials = useSelector((state: AppState) => state.tutorials);
    const [editId, setEditId] = useState<string>("");
    const [editName, setEditName] = useState<string>("");
    const [editAge, setEditAge] = useState<number>(0);
    const [editBio, setEditBio] = useState<string>("");

    useEffect(() => {
        dispatch(fetchTutorials() as any);
    }, [dispatch]);

    const handleDelete = (id: string) => {
        dispatch(deleteTutorial(id) as any);
    };

    const handleEdit = (tutorial: Tutorial) => {
        setEditId(tutorial.id);
        setEditName(tutorial.name);
        setEditAge(tutorial.age);
        setEditBio(tutorial.bio);
    };

    const handleUpdate = () => {
        const updatedTutorial: Tutorial = {
            id: editId,
            name: editName,
            age: editAge,
            bio: editBio,
        };

        dispatch(updateTutorial(updatedTutorial) as any);

        setEditId("");
        setEditName("");
        setEditAge(0);
        setEditBio("");
    };

    return (
        <div className="container text-center m-5">
            <h1>List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Bio</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tutorials.map((tutorial) => (
                        <tr key={tutorial.id}>
                            <td>{tutorial.name}</td>
                            <td>{tutorial.age}</td>
                            <td>{tutorial.bio}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(tutorial.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-primary ms-2"
                                    onClick={() => handleEdit(tutorial)}
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
                    <h2>Edit Tutorial</h2>
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
