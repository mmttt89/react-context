import React, { useContext } from 'react'
import { LangContext } from "../../context/LangContext";

const LangToggle = ({ langName, caption }) => {
    const { toggleLang, activeLang } = useContext(LangContext);
    return (

        <button
        className="toggle-button"
            style={{
                backgroundColor: (activeLang == langName) ? "#4caf50" : "#bebebe",              
            }}
            onClick={() => toggleLang(langName)}>
            {caption}
        </button>
    )
}

export default LangToggle;