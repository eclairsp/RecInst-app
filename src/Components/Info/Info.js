import React from 'react';
import info from './../../assets/Info.svg'
import './Info.css';

const Info = (props) => {
        return (
            <div className="tooltip" onClick = {props.modal}>
                <img src={info} className="tooltip-icon" alt="refresh"/>
            </div>
        );
}
    

export default Info;