import React, { useState, useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { LangContext } from '../../context/LangContext';
import Button from '../buttons/Button';
import Field from "./Field";

const BookDetails = ({ theme, item }) => {
    const { removeBook } = useContext(BookContext);
    const { isRight, lang } = useContext(LangContext);
    const [isfoucsed, setIsfoucsed] = useState();
    return (
        <div className="li-wrapper" >
            <li
                onMouseOver={() => setIsfoucsed(true)}
                onMouseOut={() => setIsfoucsed(false)}
                style={{
                    flexDirection: isRight ? "row-reverse" : "row",
                    backgroundColor: isfoucsed ? theme.syntax : theme.ui,
                    color: isfoucsed ? theme.ui : theme.syntax
                }}
            >
                <Field isRight={isRight} item={item} caption={lang.booksList.TITLE} content={item.title} />
                <Field isRight={isRight} item={item} caption={lang.booksList.AUTHOR} content={item.author} />
            </li>
            <Button
                onClick={() => removeBook(item.id)}
                caption="-"
                theme={theme}
            />
        </div>
    )
}

export default BookDetails;