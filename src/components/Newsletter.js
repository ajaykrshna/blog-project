import React from "react";
import '../styles/blog.css'

function Newsletter(){
    return(
        <div className="newsletter">
            <p className="newsletter--heading">Newsletter</p>
            <h1 className="newsletter--headingstories">Stories and interviews</h1>
            <p className="newsletter--desc">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            <form className="newsletter--form">
                <input 
                className="newsletter--email"
                type="email"
                placeholder="Enter your email"
                />
                <button className="newsletter--button">Subscribe</button>
            </form>
            <p className="newsletter--privacy">We care about your data in our privacy policy</p>
        </div>
    )
}

export default Newsletter;