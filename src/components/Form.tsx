import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../reducers/actions";
import { AppState } from "../reducers/types";
import { Student } from "../reducers/types";

const Form = () => {
    const addTutorialError = useSelector(
        (state: AppState) => state.addStudentError
    );
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.trim() === "" || age.trim() === "" || bio.trim() === "") {
            return;
        }

        const student: Student = {
            id: "", // Cần chỉ định giá trị cho 'id' khi tạo một student mới
            name,
            age: Number(age),
            bio,
        };

        dispatch(addStudent(student) as any);

        setName("");
        setAge("");
        setBio("");
    };

    return (
        <div className="container text-center">
            <h1 className="my-5">Add New</h1>
            {addTutorialError && (
                <p>Error adding student: {addTutorialError}</p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="row row-cols-1 row-cols-md-4 g-4 text-center justify-content-center ">
                    <div className=" mb-3 ">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bio" className="form-label">
                            Bio
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success ms-2 ">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
