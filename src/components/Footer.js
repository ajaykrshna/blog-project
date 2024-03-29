import React from "react";
import '../styles/pageno.css'

export default function Footer({ darkMode }) {
    return (
        <footer className={darkMode ? "footer--dark" : "footer--light"}>
            <p>2023</p>
            <a href="https://twitter.com/ajaykrshnan">Twitter</a>
            <a href="https://linkedin.com/in/ajaykrshna">Linkedin</a>
            <a href="https://github.com/ajaykrshna">Github</a>
        </footer>
    )
}