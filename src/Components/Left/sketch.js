import "p5/lib/addons/p5.sound.js";
import "p5/lib/addons/p5.dom.js";
import p5 from "p5";

export default function sketch (p) {
    var pieces, radius, fft, mapMouseX, mapMouseY, toggleBtn, audio;
    var colorPalette = ["#000", "rgba(22, 59, 72, 0.5)", "#00a6e0", "#002a38"];
    var source = []
    
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.src){
            source.push(props.src)
        }
    };

    p.preload = function() {
        console.log(source[0])
        audio = p.loadSound(source[0]);
    }

    p.setup = function() {
    
        p.createCanvas(600, 400);
    
        toggleBtn = p.createButton("Play / Pause");
    
        toggleBtn.addClass("toggle-btn");
        
        toggleBtn.mousePressed(toggleAudio);
    
    
        fft = new p5.FFT();
    
        audio.loop();
    
    }
    
    p.draw = function() {
    
        p.background(colorPalette[0]);
    
        p.noFill();
    
        fft.analyze();
    
        var bass = fft.getEnergy("bass");
        var treble = fft.getEnergy("treble");
        var mid = fft.getEnergy("mid");
    
        var mapMid = p.map(mid, 0, 255, -radius, radius);
        var scaleMid = p.map(mid, 0, 255, 1, 1.5);
    
        var mapTreble = p.map(treble, 0, 255, -radius, radius);
        var scaleTreble = p.map(treble, 0, 255, 1, 1.5);
    
        var mapbass = p.map(bass, 0, 255, -100, 800);
        var scalebass = p.map(bass, 0, 255, 0, 0.8);
    
        mapMouseX = p.map(p.mouseX, 0, p.width, 4, 10);
        mapMouseY = p.map(p.mouseY, 0, p.height, p.windowHeight / 4, p.windowHeight);
    
        pieces = p.mapMouseX;
        radius = p.mapMouseY;
    
        p.translate(p.windowWidth / 2, p.windowHeight / 2);
    
        p.strokeWeight(1);
    
        for (let i = 0; i < pieces; i += 0.5) {
    
            p.rotate(p.TWO_PI / pieces);
    
    
            /*----------  BASS  ----------*/
            p.push();
            p.strokeWeight(5);
            p.stroke(colorPalette[1]);
            p.scale(scalebass);
            p.rotate(p.frameCount * -0.5);
            p.line(mapbass, radius / 2, radius, radius);
            p.line(-mapbass, -radius / 2, radius, radius);
            p.pop();
    
    
    
            /*----------  MID  ----------*/
            p.push();
            p.strokeWeight(0.5);
            p.stroke(colorPalette[2]);
            p.scale(scaleMid);
            p.line(mapMid, radius / 2, radius, radius);
            p.line(-mapMid, -radius / 2, radius, radius);
            p.pop();
    
    
            /*----------  TREMBLE  ----------*/
            p.push();
            p.stroke(colorPalette[3]);
            p.scale(scaleTreble);
            p.line(mapTreble, radius / 2, radius, radius);
            p.line(-mapTreble, -radius / 2, radius, radius);
            p.pop();
    
        }
    
    }
    
    
    function toggleAudio() {
        if (audio.isPlaying()) {
            audio.pause();
        } else {
            audio.play();
        }
    }
};