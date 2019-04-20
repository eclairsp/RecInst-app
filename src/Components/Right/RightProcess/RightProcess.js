import React, { Component } from 'react';
import Loader from './../../Loader/Loader'
import './../Right.css'

class RightProcess extends Component {
    render () {
        return (
            <div className="right">
                <Loader />
                <div className="right-wrap">
                    <p className="status-text">
                        PROCESSING <br/>
                        <span className="sub-text">Doing our thing!!</span>
                    </p>
                </div>
            </div>
        );
    }    
}
    

export default RightProcess;