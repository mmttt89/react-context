import React, { useState } from 'react'
import "./buttons.css";

const Button = ({ theme, caption, ...props }) => {
    const [isfoucsed, setIsfoucsed] = useState(false);
    return (
        <button
            {...props}
            onMouseOver={() => setIsfoucsed(true)}
            onMouseOut={() => setIsfoucsed(false)}
            className="buttonA"
            style={{
                transition: "0.2s linear",
                backgroundColor: isfoucsed ? theme.syntax : theme.ui,
                color: isfoucsed ? theme.bg : theme.syntax
            }}>
            {caption}
        </button>
    )
}

export default Button;