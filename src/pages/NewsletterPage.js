import React from "react";
import Newsletter from '../components/Newsletter'
import Cards from "../components/Cards";


function NewsletterPage() {
    return (
        <div className="newsletterpage">
            <Newsletter />
            <div className="recent" style={{marginTop : '60px'}}>
                <h2>All blog posts</h2>
            </div>
            <div className="main">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default NewsletterPage;