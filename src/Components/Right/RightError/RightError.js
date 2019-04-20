import React from 'react'
import './../Right.css'

const RightError = (props) => {
    return (
        <div className="right">
            <div className="right-wrap">
                <p className="elegant-shadow error-text">  
                    {props.errorMessage.line1} <br/>
                    {props.errorMessage.line2} <br/>
                    {props.errorMessage.line3} <br/>
                    {props.errorMessage.line4}
                </p>
            </div>
        </div>
    )
}

export default RightError;