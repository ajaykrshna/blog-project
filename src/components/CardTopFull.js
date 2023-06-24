import React from "react";
import '../styles/cardstyle.css'
import arrowupright from '../icons/arrow-up-right.svg'
import { Link } from "react-router-dom";

function CardTopFull() {
    return (
        <div className="card1">
            <div className="card--img3">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="card--img--img3" alt="thumbnail" />
            </div>
            <div className="card--details3">
                <div className="card--date1">
                    <p>Sunday , 1 Jan 2023</p>
                </div>
                <div className="card--head1">
                    <h2 className="card--head--text1">Bill Walsh leadership lessons</h2>
                    <Link to='/blog'><img src={arrowupright} className="card--head--icon4" alt="arrow up right" /></Link>
                </div>
                <div className="card--desc1">
                    <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                </div>
                <div className="card--tags">
                    <div className="card--tag">Leadership</div>
                    <div className="card--tag">Management</div>
                    <div className="card--tag">Presentation</div>
                </div>
            </div>
        </div>
    )
}

export default CardTopFull;