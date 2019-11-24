import React, { createContext } from 'react';
import enData from "./en.json";
import faData from "./fa.json";

export const LangContext = createContext();

export default class LangContextProvider extends React.Component {
    state = {
        activeLang: "farsi",
        isRight: true,
        en: enData,
        fa: faData,
    }

    _toggleLang = langName => {
        let isRight = false;
        if (langName == "farsi") {
            isRight = true
        }
        this.setState({ activeLang: langName, isRight })
    }

    _changeLang = () => {
        let { en, fa, activeLang } = this.state;
        switch (activeLang) {
            case "english": return en;
            case "farsi": return fa;
            default: return en
        }
    }
    render() {
        let lang = this._changeLang();

        return (
            <LangContext.Provider value={{ ...this.state, lang, toggleLang: this._toggleLang }}>
                {this.props.children}
            </LangContext.Provider>
        )
    }
}
