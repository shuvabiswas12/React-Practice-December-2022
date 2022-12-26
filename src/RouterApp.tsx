import React from "react";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About } from "./components/ReactRouter/About";
import { Home } from "./components/ReactRouter/Home";
import NotFound from "./components/ReactRouter/NotFound";
import Posts from "./components/ReactRouter/Posts";
import Products from "./components/ReactRouter/Products";
import ProductsDetail from "./components/ReactRouter/ProductsDetail";

export const RouterApp = () => {
    const routesUrl = () => (
        <Routes>
            {/* There are two different way to write route parameter. */}

            {/* Way-01 */}
            {/* <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path="/products" element={<Products />} /> */}

            {/* Way-02 */}
            <Route path="/products">
                <Route index element={<Products />} />
                <Route path=":id" element={<ProductsDetail />} />
            </Route>

            {/* Others normal routes*/}
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />

            {/* Optional route params */}
            <Route path="/posts">
                <Route index element={<Posts />} />
                <Route path=":year" element={<Posts />} />
                <Route path=":month" element={<Posts />} />
                <Route path=":year/:month" element={<Posts />} />
            </Route>

            {/* Redirect route */}
            {/* Redirect from to different routes */}
            <Route path="/redirect" element={<Navigate to="/" replace />} />

            {/* Not Found routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );

    const routesNav = () => (
        <nav>
            <Link to="/products">Products</Link> <br />
            <Link to="/about">About</Link> <br />
            <Link to="/posts">Posts</Link> <br />
            <Link to="/redirect">Redirect</Link> <br />
            <Link to="/">Home</Link> <br />
        </nav>
    );

    return (
        <div>
            <Navbar brandName="React Router" notificationsValue={0} />
            {routesNav()}
            <br />
            {routesUrl()}
        </div>
    );
};
