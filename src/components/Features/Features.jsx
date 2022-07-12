import React, { useState } from 'react'
import { featuresCard } from '../../data'
import './features.css'
const Features = () => {
    const [features, setFeatures] = useState(featuresCard)
    return (
        <div className="features-wrapper">
            {features.map((item, index) => (
                <div key={index} className="item">
                    <div className="item-icon flex-center">
                        <span>{item.icon}</span>
                    </div>
                    <div className="item-title flex-center">
                        <h4>{item.title}</h4>
                    </div>
                    <div className="item-desc flex-center">
                        <p>{item.discription}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Features