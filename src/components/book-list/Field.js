import React from 'react';
import "./book-list.css";

const Field = ({ isRight, caption, content }) => {
    return (
        <div style={{
            padding: "0 10px",
            display: "flex",
            flex: 1,
            flexDirection: isRight ? "row-reverse" : "row",
            textAlign: isRight ? "right" : "left"
        }}>
            <span style={{ fontWeight: "bold" }}>
                {caption}
            </span>
            <span style={{ padding: "0 10px" }}>:</span>
            <span
                style={{ flex: 1, }}>
                {content}
            </span>
        </div>
    )
}

export default Field;



