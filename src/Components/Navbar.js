import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useUser } from "./context/userContext";

const Navbar = () => {

    const { user } = useUser();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>The Most Promising Future</h2>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/login">{user && user.data.username ? user.data.username : "Login"}</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
