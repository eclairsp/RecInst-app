import React, { Component } from 'react';
import Loader from './../../Loader/Loader'
import './../Right.css'

class RightUpload extends Component {
    render () {
        return (
            <div className="right">
                <Loader/>
                <div className="right-wrap">
                    <p className="status-text">
                        UPLOADING <br/>
                        <span className="sub-text">Wait a sec!</span>
                    </p>
                </div>
            </div>
        );
    }
}
    

export default RightUpload;