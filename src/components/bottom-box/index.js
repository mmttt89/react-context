import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import "./styles.css";

const BottomBox = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="box-container" style={{ backgroundColor: theme.ui, color: theme.syntax }}>
            <div>
            </div>
        </div>
    )
}

export default BottomBox;