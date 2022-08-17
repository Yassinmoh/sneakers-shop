import React from 'react'
import './hero.css'
import Fade from 'react-reveal/Fade';
const Hero = () => {
    return (
        <div className="hero">
            <div className="sneker-img">
                <span>140$</span>
                <Fade top>
                    <img src="./sneaker2-1.png" />
                </Fade>
                <div className="dot">
                    <span>Air Jordan 1 MID</span>
                </div>
            </div>
            <div className="sneker-shaadow">
                <img src="./layer2.png" />
            </div>
        </div>
    )
}

export default Hero