import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./navbar.css";

const NavLink = ({ title }) => {
    const [isfoucsed, setIsfoucsed] = useState();
    const { theme } = useContext(ThemeContext);        
    return (
        <li
            onMouseOver={() => setIsfoucsed(true)}
            onMouseOut={() => setIsfoucsed(false)}
            style={{
                transition: "0.2s linear",
                backgroundColor: isfoucsed ? theme.syntax : theme.ui,
                color: isfoucsed ? theme.ui : theme.syntax
            }}
            className="nav-link">
            {title}
        </li>
    )
}

export default NavLink;