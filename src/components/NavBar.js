import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {  
    const linkStyles = {
        display: "inline-block",
        width: "150px",
        padding: "12px",
        background: "darkblue",
        textDecoration: "none",
        color: "white",
        "border-radius": "3px",
        margin: "0px 5px 30px 5px",
        "text-align": "center",
        "font-size": "16px",
        "box-shadow": "0 3px 3px rgba(212, 185, 150, 5)"
    };

    return (
        <nav classsName="navbar">
            <NavLink exact to="/login" style={linkStyles}
                activeStyle={{background: "aqua", color: "darkblue"}}>Log In</NavLink>
            
            <NavLink exact to="/" style={linkStyles} 
                activeStyle={{background: "aqua", color: "darkblue"}}>Books</NavLink>

            <NavLink exact to="/form" style={linkStyles}
                activeStyle={{background: "aqua", color: "darkblue"}}>Add New Book</NavLink>
            
        </nav>
    )
}

export default NavBar;