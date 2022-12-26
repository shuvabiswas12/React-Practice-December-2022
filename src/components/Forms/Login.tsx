import React, { useState } from "react";
import TextField from "./TextField";

interface IUser {
    email: string;
    password: string;
}

const Login = () => {
    // In order to using Partial<IUser> in the useState's type we can now pass single value in setState() functions.
    const [user, setUser] = useState<Partial<IUser>>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
    };

    const onInputChange = (v: string, t: "email" | "text" | "password") => {
        switch (t) {
            case "email":
                setUser({ email: v });
                break;
            case "password":
                setUser({ ...user, password: v });
                break;
        }
    };

    return (
        <div className="container">
            <form className="w-50 mt-3" onSubmit={handleSubmit}>
                <TextField
                    onChangeHandler={onInputChange}
                    label="Email Address"
                    type="email"
                    autoFocus={true}
                />
                <TextField onChangeHandler={onInputChange} label="Password" type="password" />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
