import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar () {  

    return (
        <nav>
            <NavLink exact to="/testing">BookList</NavLink>
            <NavLink exact to="/form">Add New Book</NavLink>
        </nav>
    )
}

export default NavBar;