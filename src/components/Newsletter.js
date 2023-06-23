import React, { useState } from "react";
import '../styles/blog.css'

function Newsletter({ darkMode }) {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value)
        setSubscribed(false)
    }

    const handleClick = (event) => {
        event.preventDefault()
        email && setSubscribed(true)
    }

    const successNewsletter = (
        <div className="newslettersuccess">
            Thanks for subscribing!
        </div>
    )
    return (
        <div className="newsletter">
            <p className="newsletter--heading">Newsletter</p>
            <h1 className={darkMode ? "newsletter--headingstories--dark" : "newsletter--headingstories--light"}>Stories and interviews</h1>
            <p className={darkMode ? "newsletter--desc--dark" : "newsletter--desc--light"}>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            <form className="newsletter--form">
                <input
                    className={darkMode ? "newsletter--email--dark" : "newsletter--email--light"}
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />
                <button className="newsletter--button" onClick={handleClick}>Subscribe</button>
            </form>
            {(subscribed) && successNewsletter}
            <p className={darkMode ? "newsletter--privacy--dark" : "newsletter--privacy--light"}>We care about your data in our privacy policy</p>
        </div>
    )
}

export default Newsletter;