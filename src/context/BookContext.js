import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the wind', author: "MRV", id: 1 },
        { title: 'book of Eli', author: "MRV", id: 2 },
        { title: 'the final empire', author: "MRV", id: 3 },
        { title: 'کتاب جنگل', author: "ضص ثضصثضصثضصث", id: 4 },
    ])

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: Math.random() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
