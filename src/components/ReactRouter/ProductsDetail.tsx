import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ProductsDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    // navigate(-1) means one step go back
    // navigate(1) means one step go forward
    // navigate("/route") means go into the specific routes

    return (
        <React.Fragment>
            <h2>Items - {params.id}</h2>
            <button className="btn btn-danger" onClick={() => navigate(-1)}>
                Back
            </button>
        </React.Fragment>
    );
};

export default ProductsDetail;
