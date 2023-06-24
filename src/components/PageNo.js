import React from "react";
import '../styles/pageno.css'
import arrowleft from '../icons/arrow-left.svg'
import arrowright from '../icons/arrow-right.svg'

export default function PageNo({ darkMode }) {
    return (
        <div className="pageno">
            <div className="prev">
                <img src={arrowleft} className={darkMode ? "previcon--dark" : "previcon--light"} alt="prev icon" />
                <a href="#" className={darkMode ? "prevlink--dark" : "prevlink--light"}>Previous</a>
            </div>
            <div className="numbers">
                <div className="number">1</div>
                <div className="number">2</div>
                <div className="number">4</div>
            </div>
            <div className="next">
                <a href="#" className={darkMode ? "prevlink--dark" : "prevlink--light"}>Next</a>
                <img src={arrowright} className={darkMode ? "nexticon--dark" : "nexticon--light"} alt="next icon" />
            </div>

        </div>
    )
}