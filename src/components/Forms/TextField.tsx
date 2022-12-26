import React from "react";

interface TextFieldType {
    label: string;
    type: "email" | "text" | "password";
    autoFocus?: boolean;
    onChangeHandler: (value: string, type: "email" | "text" | "password") => any;
}

const TextField = (props: TextFieldType) => {
    const id = props.label.replace(" ", "_").trim();
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {props.label.trim()}
            </label>
            <input
                type={props.type.trim()}
                className="form-control"
                id={id}
                autoFocus={props.autoFocus}
                onChange={(e) => props.onChangeHandler(e.target.value.trim(), props.type)}
            />
        </div>
    );
};

export default TextField;
