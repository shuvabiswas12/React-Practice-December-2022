import React, { useState } from "react";
import TextField from "./TextField";

interface IUser {
    email: string;
    fullName: string;
    password: string;
}

const Registration = () => {
    const [user, setUser] = useState<Partial<IUser>>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
    };

    const onInputChange = (v: string, t: "email" | "text" | "password") => {
        switch (t) {
            case "email":
                setUser((prevState) => ({
                    ...prevState,
                    email: v,
                }));
                break;
            case "text":
                setUser((prevState) => ({
                    ...prevState,
                    fullName: v,
                }));
                break;
            case "password":
                setUser((prevState) => ({
                    ...prevState,
                    password: v,
                }));
                break;
        }
    };

    return (
        <div className="container">
            <form className="w-50 mt-3" onSubmit={handleSubmit}>
                <TextField
                    label="Full Name"
                    type="text"
                    onChangeHandler={onInputChange}
                    autoFocus={true}
                />
                <TextField label="Email" type="email" onChangeHandler={onInputChange} />
                <TextField label="Password" type="password" onChangeHandler={onInputChange} />
                <TextField
                    label="Confirm Password"
                    type="password"
                    onChangeHandler={onInputChange}
                />
                <button className="btn btn-success">Register</button>
            </form>
        </div>
    );
};

export default Registration;
