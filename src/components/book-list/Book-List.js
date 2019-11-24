import React, { useContext } from 'react';
import { LangContext } from "../../context/LangContext";
import { ThemeContext } from "../../context/ThemeContext";
import { BookContext } from '../../context/BookContext';
import BookDetails from "./Book-Details";
import NewBookForm from './New-Book-Form';
import "./book-list.css";

const BookList = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);
    const { books } = useContext(BookContext);
    return (
        <div className="book-container" style={{ background: theme.bg, color: theme.syntax }}>
            {
                books.length ?
                    <ul className="book-list">
                        {
                            books.map(item => <BookDetails key={item.id} item={item} theme={theme} />)
                        }
                    </ul>
                    :
                    <div style={{ padding: "10px 20px" }}>
                        {lang.booksList.empty}
                    </div>
            }
            <NewBookForm />
        </div>
    )
}

export default BookList;



