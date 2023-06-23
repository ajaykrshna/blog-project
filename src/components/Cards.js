import React from "react";
import '../styles/cardstyle.css'
import arrowupright from '../icons/arrow-up-right.svg'

function Cards({ darkMode }) {
    return (
        <div className="card">
            <div className="card--img">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="card--img--img" alt="thumbnail" />
            </div>
            <div className="card--date">
                <p>Sunday , 1 Jan 2023</p>
            </div>
            <div className="card--head">
                <h2 className={darkMode ? "card--head--text--dark" : "card--head--text--light"}>Bill Walsh leadership lessons</h2>
                <img src={arrowupright} className="card--head--icon" alt="arrow up right" />
            </div>
            <div className={darkMode ? "card--desc--dark" : "card--desc--light"}>
                <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
            </div>
            <div className="card--tags">
                <div className="card--tag">Leadership</div>
                <div className="card--tag">Management</div>
                <div className="card--tag">Presentation</div>
            </div>
        </div>
    )
}

export default Cards;