import React from 'react';
import Navbar from "./components/navbar/Navbar";
import BottomBox from './components/bottom-box';
import BookList from "./components/book-list/Book-List";
import ThemeWrapper from "./components/buttons/Theme-Wrapper";
import LangWrapper from "./components/buttons/Lang-Wrapper";
import LangContextProvider from './context/LangContext';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContextProvider>
          <LangContextProvider>
            <AuthContextProvider>
              <BookContextProvider>
                <Navbar />
                <BookList />
                <BottomBox />
                <ThemeWrapper />
                <LangWrapper />
              </BookContextProvider>
            </AuthContextProvider>
          </LangContextProvider>
        </ThemeContextProvider>
      </header>
    </div>
  );
}

export default App;
