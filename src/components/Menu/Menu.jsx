import React from 'react'
import './menu.css'
import { Link } from "react-router-dom";



const Menu = () => {
    return (
        <div className="menu">
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
        </div>
    )
}

export default Menu