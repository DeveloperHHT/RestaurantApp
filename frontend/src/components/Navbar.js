import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/ingredients">Ingredients</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/database-view">Database</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
