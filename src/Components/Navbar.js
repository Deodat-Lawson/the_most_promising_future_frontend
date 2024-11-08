import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useUser } from "./context/userContext";

const Navbar = () => {

    const { user } = useUser();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>NORA</h2>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                {/*    {user && user.data.username ? (*/}
                {/*        <Link to="/services">Services</Link>*/}
                {/*) : (*/}
                {/*    <Link to="/register">Register</Link>*/}
                {/*)}</li>*/}

                    <Link to="/services">Services</Link>
                </li>
                <li>
                    {user && user.data.username ? (
                        <Link to="/logout">Logout</Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
