import React from 'react'
import './footer.css'
import {AiOutlineInstagram,AiOutlineTwitter} from'react-icons/ai'
import {FaFacebookF} from'react-icons/fa'





const Footer = () => {
    return (
        <div className="footer-section">
            <div className="Need-Help">
                <h4>Need Help</h4>
                <ul>
                    <li>About us</li>
                    <li>Our story</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li>Visit us</li>
                </ul>
            </div>
            <div className="About-Us">
                <h4>About Us</h4>
                <ul>
                    <li>About us</li>
                    <li>Our story</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li>Visit us</li>
                </ul>
            </div>
            <div className="Useful-Info">
                <h4>Useful Info</h4>
                <ul>
                    <li>About us</li>
                    <li>Our story</li>
                    <li>Careers</li>
                    <li>Affiliates</li>
                    <li>Visit us</li>
                </ul>
            </div>
            <div className="subscribe">
            <h4>Subscribe to our newsletter</h4>
            <form>
                <input type="search" placeholder='your.address@gmail.com'/>
                <button>join now</button>
            </form>
            <h4>We're Social</h4>
            <div className='footer-icons'>
                <span><AiOutlineInstagram /></span>
                <span><FaFacebookF/></span>
                <span><AiOutlineTwitter/></span>
            </div>
            </div>
        </div>
    )
}

export default Footer