import React, { ChangeEvent, useState } from "react";

interface Props {
    onSearchHandler: (value: string) => any;
}

const SearchBox = (props: Props) => {
    const placeholder = "Search by Title / Price.";

    const inputField = () => (
        <input
            onChange={(e) => props.onSearchHandler(e.target.value.trim())}
            type="text"
            placeholder={placeholder}
            className="form-control bg-dark text-white"
        />
    );

    return (
        <div className="container row w-50 mt-3 mb-4" style={{ margin: "0 auto" }}>
            {inputField()}
        </div>
    );
};

export default SearchBox;
