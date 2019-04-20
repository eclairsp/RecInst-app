import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import RecInst from './../../assets/RecInst.svg';
import './Left.css'

class Left extends Component {

    state = {
        toggleUploadAnimation : false
    }

    toggleClass = () => {
        this.setState({
            toggleUploadAnimation : !this.state.toggleUploadAnimation
        })
    }

    render () {

        let props = this.props

        return (
            <div className="left">
                <div className="wrap-left">
                    <img src={RecInst} className="logo" alt="logo-RecInst" onClick={props.refresh}/>
                    <p className="info"> 
                        Want to know the instruments playing in your audio files. <br/>
                        Upload the audio an we will try to guess. 
                    </p>                    
                </div> 
                <Dropzone onDrop={acceptedFiles => props.file(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div {...getRootProps()}  className="upload-main" onMouseEnter={this.toggleClass} onMouseLeave={this.toggleClass}>
                            <input {...getInputProps()}/>
                            <svg className={`upload-icon ${this.state.toggleUploadAnimation && 'show'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                width="516.375px"
                                height="516.375px"
                                viewBox="0 0 516.375 516.375">
                                <g
                                id="g8">
                                    <g
                                id="g6">
                                        <path className="arrow-upload"
                                d="M 344.25,306 258.188,219.938 172.125,306 l 15.3,13.388 61.2,-61.2 V 468.562 H 267.75 V 258.188 l 61.2,61.2 z"
                                id="polygon2" />
                                        <path className="cloud"
                                d="M457.088,189.337c-9.562-47.812-53.551-84.15-103.275-84.15c-17.213,0-32.513,3.825-45.9,11.475    c-22.949-42.075-66.937-68.85-116.662-68.85c-74.587,0-133.875,59.288-133.875,133.875c0,1.913,0,5.737,0,7.65    C22.95,204.638,0,237.15,0,277.312c0,53.55,42.075,95.625,95.625,95.625H229.5v-19.125H95.625c-42.075,0-76.5-34.425-76.5-76.5    c0-36.337,24.862-66.938,59.288-74.587c-1.913-7.65-1.913-13.388-1.913-21.038c0-63.112,51.638-114.75,114.75-114.75    c49.725,0,91.8,32.513,109.013,76.5c15.3-11.475,34.425-19.125,53.55-19.125c45.9,0,82.237,34.425,86.062,78.413    c32.513,7.65,57.375,38.25,57.375,74.587c0,42.075-34.425,76.5-76.5,76.5H286.875v19.125H420.75    c53.55,0,95.625-42.075,95.625-95.625C516.375,237.15,491.513,202.725,457.088,189.337z"
                                id="path4" />
                                    </g>
                                </g>
                            </svg>
                            <p className="drop-text">{props.message}</p>
                        </div>
                        </section>
                    )}
                </Dropzone>
                <p className="mobile-drop-text">Click to select files.</p>
        </div>
        );
    }
}

export default Left;