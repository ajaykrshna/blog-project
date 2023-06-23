import React, { useState } from "react";
import '../styles/blog.css'

function Newsletter() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        setSubscribed(true)
    }

    const successNewsletter = (
        <div className="newslettersuccess">
            Thanks for subscribing!
        </div>
    )
    return (
        <div className="newsletter">
            <p className="newsletter--heading">Newsletter</p>
            <h1 className="newsletter--headingstories">Stories and interviews</h1>
            <p className="newsletter--desc">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            <form className="newsletter--form">
                <input
                    className="newsletter--email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />
                <button className="newsletter--button" onClick={handleClick}>Subscribe</button>
            </form>
            {subscribed && successNewsletter}
            <p className="newsletter--privacy">We care about your data in our privacy policy</p>
        </div>
    )
}

export default Newsletter;