import React from 'react';
import refresh from './../../assets/Refresh.svg'
import './Refresh.css';

const Refresh = (props) => {
        return (
            <div className="re" onClick={props.refresh}>
                <img src={refresh} className="re-icon" alt="refresh"/>
            </div>
        );
}
    

export default Refresh;