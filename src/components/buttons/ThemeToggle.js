import React, { useContext } from 'react'
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = ({ themeName, caption }) => {
    const { toggleTheme, activeTheme } = useContext(ThemeContext);    
    return (
        <button
        className="toggle-button"
            style={{
                backgroundColor: (activeTheme == themeName) ? "#4caf50" : "#bebebe",
                color: (activeTheme == themeName) ? "#fff" : "#313131",
            }}
            onClick={() => toggleTheme(themeName)}
        >
            {caption}
        </button>
    )
}

export default ThemeToggle;