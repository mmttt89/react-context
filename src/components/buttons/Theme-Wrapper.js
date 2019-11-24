import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import ThemeToggle from './ThemeToggle';

const ThemeWrapper = () => {
    const { lang } = useContext(LangContext);
    return (
        <div >
            Theme:
            <ThemeToggle themeName="light" caption={lang.THEME.LIGHT} />
            <ThemeToggle themeName="purple" caption={lang.THEME.PURPLE} />
            <ThemeToggle themeName="dark" caption={lang.THEME.DARK} />
            <ThemeToggle themeName="red" caption={lang.THEME.RED} />
            <ThemeToggle themeName="blue" caption={lang.THEME.BLUE} />
        </div>
    )
}
export default ThemeWrapper;
