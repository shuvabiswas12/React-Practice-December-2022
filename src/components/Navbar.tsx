import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinks {
    title: string;
    url: string;
}

interface Props {
    brandName: string;
    notificationsValue: number;
    navLinks?: NavLinks[];
}

const Navbar = (props: Props) => {
    let { navLinks } = props;

    const notificationMessage = () => (
        <span className="badge rounded-pill bg-danger">{props.notificationsValue || ""}</span>
    );

    const getNavLinks = () => {
        if (navLinks === undefined || !navLinks.length) return "";
        else {
            return (
                <ul className="navbar-nav me-auto">
                    {navLinks.map((link) => (
                        <li className="nav-item" key={link.url}>
                            <NavLink
                                className="nav-link"
                                to={link.url}
                                key={link.title}
                                style={{ cursor: "pointer" }}
                            >
                                {" "}
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            );
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <b>{props.brandName}</b> {notificationMessage()}
                </a>
                {getNavLinks()}
            </div>
        </nav>
    );
};

export default Navbar;
