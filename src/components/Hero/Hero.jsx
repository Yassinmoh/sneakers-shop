import React from 'react'
import './hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <div className="sneker-img">
                <span>140$</span>
                <img src="./sneaker2-1.png"/>
                <div className="dot">
                    <span>Air Jordan 1</span>
                </div>
            </div>
            <div className="sneker-shaadow">
                <img src="./layer2.png"/>
            </div>
        </div>
    )
}

export default Hero