import React from "react";
import '../styles/navbar.css'
import { NavLink } from "react-router-dom";

function Navbar({ toggleDarkMode, darkMode }) {
    return (
        <nav className={darkMode ? "navbardark" : "navbarlight"}>
            <h3 className="navbar--name">Your Name</h3>
            <div className="navbar--div">
                <div className={darkMode ? "navbar--link--div--dark" : "navbar--link--div--light"}>
                    <NavLink to='/blog' className={darkMode ? "navbar--links--dark" : "navbar--links--light"} >Blog</NavLink>
                    <NavLink to='/projects' className={darkMode ? "navbar--links--dark" : "navbar--links--light"} >Projects</NavLink>
                    <NavLink to='/about' className={darkMode ? "navbar--links--dark" : "navbar--links--light"} >About</NavLink>
                    <NavLink to='/newsletter' className={darkMode ? "navbar--links--dark" : "navbar--links--light"} >Newsletter</NavLink>
                </div>
                <div className={darkMode ? "nav-darktoggle--dark" : "nav-darktoggle--light"} onClick={toggleDarkMode}>
                    <div className={darkMode ? "nav-toggle--dark" : "nav-toggle--light"}></div>
                    <ion-icon name="sunny-outline" id={darkMode ? "sundark" : "sunlight"}></ion-icon>
                    <ion-icon name="moon-outline" id={darkMode ? "moondark" : "moonlight"}></ion-icon>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;