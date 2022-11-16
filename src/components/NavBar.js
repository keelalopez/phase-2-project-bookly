import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {  
    const linkStyles = {
        display: "inline-block",
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "red",
        textDecoration: "none",
        color: "white",
    };

    return (
        <nav>
            <NavLink exact to="/login" style={linkStyles}
                activeStyle={{background: "darkblue",}}>Log In</NavLink>
            
            <NavLink exact to="/" style={linkStyles} 
                activeStyle={{background: "darkblue",}}>Books</NavLink>

            <NavLink exact to="/form" style={linkStyles}
                activeStyle={{background: "darkblue",}}>Add New Book</NavLink>
            
        </nav>
    )
}

export default NavBar;