import React from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const Posts = () => {
    const params = useParams();
    // By using useSearchParams() we can able to access the queryStrings.
    // This useSearchParams() returns an array of items.
    const [searchParams] = useSearchParams();

    return (
        <h2>
            Year: {params.year} and Month: {params.month}
        </h2>
    );
};

export default Posts;
