import React, { useState, useContext } from 'react';
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from '../../context/ThemeContext';
import { LangContext } from '../../context/LangContext';
import Button from '../buttons/Button';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const { theme } = useContext(ThemeContext);
    const { lang, isRight } = useContext(LangContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addBook(title, author);
        setAuthor('');
        setTitle('');
    }

    return (
        <form className="form-data" onSubmit={handleSubmit}>
            <input
                style={{ textAlign: isRight ? "right" : "left" }}
                type="text"
                placeholder={lang.ADD_BOOK.BOOK_TITLE}
                value={title}
                onChange={e => setTitle(e.target.value)}
                required />
            <input
                style={{ textAlign: isRight ? "right" : "left" }}
                type="text"
                placeholder={lang.ADD_BOOK.BOOK_AUTHOR}
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required />
            <div className="button-container" style={{ background: theme.bg }}>
                <Button theme={theme} caption={lang.ADD_BOOK.INDEX} />
            </div>
        </form>
    )
}

export default NewBookForm;

