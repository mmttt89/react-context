import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import { LangContext } from "../../context/LangContext";
import { AuthContext } from "../../context/AuthContext";
import { BookContext } from '../../context/BookContext';
import NavLink from "./Nav-Link";
import "./navbar.css";

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const { lang, isRight } = useContext(LangContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { books } = useContext(BookContext);
    return (
        <div className="navbar-container" >
            <nav style={
                {
                    backgroundColor: theme.ui,
                    color: theme.syntax,
                    flexDirection: isRight ? "row-reverse" : "row"
                }
            }>
                <ul className="list-container"
                    style={
                        {
                            flexDirection: isRight ? "row-reverse" : "row"
                        }
                    }>
                    <NavLink title={lang.home} />
                    <NavLink title={lang.about} />
                    <NavLink title={lang.inbox} />
                </ul>
                <span className="log-status" onClick={toggleAuth}>
                    <h5>
                        {isAuthenticated ? lang.logIn : lang.logOut}
                    </h5>
                </span>
            </nav>
            <div className="text-status"
                style={
                    {
                        backgroundColor: theme.ui1,
                        color: theme.syntax
                    }
                }>
                {`${lang.booksList.YOU_HAVE_CURRENTLY} ${books.length} ${lang.booksList.AVAILABLE}`}
            </div>
        </div>
    )
}

// class Navbar extends React.Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <div className="navbar-container" >
//                             <nav>
//                                 <div onClick={toggleAuth}>
//                                     {isAuthenticated ? "Logged-in" : "Logged-out"}
//                                 </div>
//                                 <ul className="list-container" style={{ backgroundColor: theme.ui, color: theme.syntax }}>
//                                     <li>Home</li>
//                                     <li>Inbox</li>
//                                     <li>About</li>
//                                 </ul>
//                             </nav>
//                         </div>
//                     )
//                 }}
//                 </ ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//         )
//     }
// }
export default Navbar;