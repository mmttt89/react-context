import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        activeTheme: "dark",
        light: { syntax: '#555', ui: "#ddd", ui1: "#bebebe", bg: "#eee" },
        dark: { syntax: '#ddd', ui: "#333", ui1: "#000", bg: "#555" },
        purple: { syntax: '#ddd', ui: "rgb(131, 72, 187)", ui1: "rgb(92, 6, 173)", bg: "rgb(102, 31, 168)" },
        red: { syntax: '#ddd', ui: "rgb(129, 32, 32)", ui1: "rgb(90, 0, 0)", bg: "rgb(189, 0, 0)" },
        blue: { syntax: '#ddd', ui: "rgb(75, 66, 116)", ui1: "rgb(19, 0, 105)", bg: "rgb(35, 0, 189)" },
    }

    toggleTheme = (themeName) => {
        this.setState({ activeTheme: themeName })
    }

    _changeTheme = () => {
        let { light, dark, purple, red, blue, activeTheme } = this.state;
        switch (activeTheme) {
            case "light": return light;
            case "dark": return dark;
            case "purple": return purple;
            case "red": return red;
            case "blue": return blue;
            default: return light
        }
    }

    render() {
        let theme = this._changeTheme();
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme, theme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;