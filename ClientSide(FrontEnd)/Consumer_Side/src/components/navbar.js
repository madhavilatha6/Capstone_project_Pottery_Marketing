import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navigation">
        <div className="displayflex">
          <img
            className="nav"
            src="https://sktperfectdemo.com/themepack/pottery/wp-content/themes/skt-pottery/images/logo.png"
          />
          <h4 id="home">
            <Link to="/home" className="hello">
              Home
            </Link>
          </h4>
          <h4 id="home">
            <Link to="/Category" className="hello">
              Category
            </Link>
          </h4>
          <h4 id="home">
            <Link to="/about" className="hello">
              About Us
            </Link>
          </h4>
          <h4 id="home">
            <Link to="/contact" className="hello">
              Contact Us
            </Link>
          </h4>
          {/* <input placeholder="search" className="bar" />
          <img
            className="searchlogo"
            src="https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg"
          /> */}
          
          <h4 className="cartpage">Cart</h4>
          <img
            className="addtocart"
            src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137280611.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
