import './Images.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(

    
    <div className="navigation">
        <p id="home"><Link to="/home">Home</Link></p>
        <p id='categary'><Link to="/Category">Category</Link></p>
        <p id="aboutus"><Link to="/about">About Us</Link></p>
        <p id='contactus'><Link to="/contact">Contact Us</Link></p>
        <img className="addtocart"src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137280611.jpg" alt="" />
    
    </div>
    )

}

export default Navbar;