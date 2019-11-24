import React, { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import LangToggle from './LangToggle';

const LangWrapper = () => {
    const { lang } = useContext(LangContext);
    return (
        <div >
        language:
        <LangToggle langName="farsi" caption={lang.LANG.FARSI}/>
        <LangToggle langName="english" caption={lang.LANG.ENGLISH}/>
      </div>
    )
}
export default LangWrapper;
