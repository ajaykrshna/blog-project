import React from "react";
import '../styles/navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h3 className="navbar--name">Your Name</h3>
            <div className="navbar--div">
                <div className="navbar--link--div">
                    <NavLink to='/blog' className="navbar--links" >Blog</NavLink>
                    <NavLink to='/projects' className="navbar--links" >Projects</NavLink>
                    <NavLink to='/about' className="navbar--links" >About</NavLink>
                    <NavLink to='/newsletter' className="navbar--links" >Newsletter</NavLink>
                </div>
                <div className="nav-darktoggle">
                    Dark
                </div>
            </div>
        </nav>
    )
}

export default Navbar;