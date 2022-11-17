import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

function NavBar ({handleDropDownChange}) {  
    const linkStyles = {
        display: "inline-block",
        width: "150px",
        padding: "12px",
        background: "darkblue",
        textDecoration: "none",
        color: "white",
        borderRadius: "3px",
        margin: "0px 5px 30px 5px",
        textAlign: "center",
        fontSize: "16px",
        boxShadow: "0 3px 3px rgba(212, 185, 150, 5)"
    };

    return (
        <nav classsname="navbar">
            <NavLink exact to="/login" style={linkStyles}
                activeStyle={{background: "aqua", color: "darkblue"}}>Log In</NavLink>
            
            <NavLink exact to="/" style={linkStyles} 
                activeStyle={{background: "aqua", color: "darkblue"}}>Books</NavLink>

            <NavLink exact to="/form" style={linkStyles}
                activeStyle={{background: "aqua", color: "darkblue"}}>Add New Book</NavLink>
            
            <NavLink exact to="/quote" style={linkStyles}
                activeStyle={{background: "aqua", color: "darkblue"}}>Random Quote</NavLink>
            
            <Dropdown handleDropDownChange={handleDropDownChange}/>
            
            
        </nav>
    )
}

export default NavBar;