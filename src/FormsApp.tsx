import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Forms/Login";
import Registration from "./components/Forms/Registration";
import Navbar from "./components/Navbar";
import { Home } from "./components/ReactRouter/Home";

const FormsApp = () => {
    const navLinks = [
        { title: "Login", url: "/login" },
        { title: "Register", url: "/register" },
        { title: "Profile", url: "/profile" },
        { title: "Home", url: "/" },
    ];

    const routes = () => (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );

    return (
        <React.Fragment>
            <Navbar brandName="React Forms" notificationsValue={0} navLinks={navLinks} />
            {routes()}
        </React.Fragment>
    );
};

export default FormsApp;
