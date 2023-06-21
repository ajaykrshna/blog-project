import React from "react";
import '../styles/pageno.css'
import arrowleft from '../icons/arrow-left.svg'
import arrowright from '../icons/arrow-right.svg'

export default function PageNo(){
    return (
        <div className="pageno">
            <div className="prev">
                <img src={arrowleft} className="previcon" alt="prev icon"/>
                <p>Previous</p>
            </div>
            <div className="numbers">
                <div className="number">1</div>
                <div className="number">2</div>
                <div className="number">3</div>
            </div>
            <div className="next">
                <p>Next</p>
                <img src={arrowright} className="nexticon" alt="next icon"/>
            </div>

        </div>
    )
}