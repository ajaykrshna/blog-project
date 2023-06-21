import React from "react";
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <h3 className="navbar--name">Your Name</h3>
            <div className="navbar--div">
                <div className="navbar--link--div">
                    <p className="navbar--links">Blog</p>
                    <p className="navbar--links">Projects</p>
                    <p className="navbar--links">About</p>
                    <p className="navbar--links">Newsletter</p>
                </div>
                <div className="nav-darktoggle">
                    Dark
                </div>
            </div>
        </nav>
    )
}

export default Navbar;