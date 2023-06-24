import React from "react";
import Newsletter from '../components/Newsletter'
import Cards from "../components/Cards";
import '../index.css'

function NewsletterPage({ darkMode }) {
    return (
        <div className="newsletterpage">
            <Newsletter darkMode={darkMode} />
            <div className="recent" style={{ marginTop: '60px' }}>
                <h2>All blog posts</h2>
            </div>
            <div className="main">
                <Cards darkMode={darkMode} />
                <Cards darkMode={darkMode} />
                <Cards darkMode={darkMode} />
                <Cards darkMode={darkMode} />
                <Cards darkMode={darkMode} />
                <Cards darkMode={darkMode} />
            </div>
        </div>
    )
}

export default NewsletterPage;