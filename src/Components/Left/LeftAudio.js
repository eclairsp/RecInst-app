import React, { Component } from 'react';
// import P5Wrapper from 'react-p5-wrapper';
// import sketch from "./sketch";
import RecInst from './../../assets/RecInst.svg';
import './Left.css'

class LeftAudio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            togglePlay : false,
            buttonMessage : 'play'
        };

        this.audio = React.createRef();
        this.can = React.createRef();
    }

    // toggleClass = () => {
    //     if (this.state.togglePlay === true) {
    //         this.setState({
    //             togglePlay : !this.state.togglePlay,
    //             buttonMessage : 'play'
    //         })
    //         this.audio.current.pause()
    //     } else { 
    //         this.setState({
    //             togglePlay : !this.state.togglePlay,
    //             buttonMessage : 'pause'
    //         })
    //         this.audio.current.play()
    //     }
    // }

    componentDidUpdate () {
        this.doCanvas()
    }

    doCanvas = () => {
        this.can.current.width = 600;
        this.can.current.height = 400;
        const ctx = this.can.current.getContext("2d");

        const context = new AudioContext(); // (Interface) Audio-processing graph
        let src = context.createMediaElementSource(this.audio.current); // Give the audio context an audio source,
        // to which can then be played and manipulated
        const analyser = context.createAnalyser(); // Create an analyser for the audio context

        src.connect(analyser);
        analyser.connect(context.destination); 

        // analyser.fftSize = 32;
        // analyser.fftSize = 64;
        // analyser.fftSize = 128;
        // analyser.fftSize = 256;
        // analyser.fftSize = 512;
        // analyser.fftSize = 1024;
        // analyser.fftSize = 2048;
        // analyser.fftSize = 4096;
        // analyser.fftSize = 8192;
        analyser.fftSize = 16384;
        // analyser.fftSize = 32768;


        const bufferLength = analyser.frequencyBinCount; 
        this.audio.current.crossOrigin = "anonymous";
        const dataArray = new Uint8Array(bufferLength); // Converts to 8-bit unsigned integer array
        console.log('DATA-ARRAY: ', dataArray)

        const WIDTH = this.can.current.width;
        const HEIGHT = this.can.current.height;
        console.log('WIDTH: ', WIDTH, 'HEIGHT: ', HEIGHT)

        const barWidth = (WIDTH / bufferLength) * 13;
        console.log('BARWIDTH: ', barWidth)

        console.log('TOTAL WIDTH: ', (117*10)+(118*barWidth)) // (total space between bars)+(total width of all bars)

        let barHeight;
        let x = 0;

        function renderFrame() {
            requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering
    
            x = 0;
    
            analyser.getByteFrequencyData(dataArray); // Copies the frequency data into dataArray
            // Results in a normalized array of values between 0 and 255
            // Before this step, dataArray's values are all zeros (but with length of 8192)
    
            ctx.fillStyle = "#2C5DC7"; // Clears canvas before rendering bars (black with opacity 0.2)
            ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars
    
            let r, g, b;
            let bars = 118 // Set total number of bars you want per frame
    
            for (let i = 0; i < bars; i++) {
              barHeight = (dataArray[i] * 1.5);

              if (dataArray[i] > 210){ // pink
                r = 10
                g = 35
                b = 72
              } else if (dataArray[i] > 200){ // yellow
                r = 255
                g = 255
                b = 255
              } else if (dataArray[i] > 190){ // yellow/green
                r = 247
                g = 102
                b = 12
              } else if (dataArray[i] > 180){ // blue/green
                r = 232
                g = 4
                b = 133
              } else { // light blue
                r = 0
                g = 0
                b = 0
              }
    
              // if (dataArray[i] > 210){ // pink
              //   r = 255
              //   g = 255
              //   b = 255
              // } else if (dataArray[i] > 200){ // yellow
              //   r = 255
              //   g = 255
              //   b = 255
              // } else if (dataArray[i] > 190){ // yellow/green
              //   r = 255
              //   g = 255
              //   b = 255
              // } else if (dataArray[i] > 180){ // blue/green
              //   r = 255
              //   g = 255
              //   b = 255
              // } else { // light blue
              //   r = 255
              //   g = 255
              //   b = 255
              //   }

              // if (i === 0){
              //   console.log(dataArray[i])
              // }

                ctx.fillStyle = `rgb(${r},${g},${b})`;
                ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);
              // (x, y, i, j)
              // (x, y) Represents start point
              // (i, j) Represents end point

              x += barWidth + 20 // Gives 10px space between each bar
            }
        }

        renderFrame()

    }

    render () {

        let props = this.props

        return (
            <div className="left">
                <div className="wrap-left-audio">
					<img src={RecInst} className="logo" alt="logo-RecInst" onClick={props.refresh}/>
                    <p className="drop-text-diff">{props.message}</p>
                    <audio crossOrigin="anonymous" loop className="audio" controls src={props.src} ref={this.audio} ></audio>
                    {/* <button onClick={this.toggleClass}>{this.state.buttonMessage}</button> */}
                    <canvas ref={this.can}></canvas>
                </div>
        </div>
        );
    }
}

export default LeftAudio;