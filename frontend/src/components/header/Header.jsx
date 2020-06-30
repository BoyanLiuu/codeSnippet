import React from "react";
//point to home page
import { Link } from "react-router-dom";
//import icon
import Logo from "../../Imgs/logo.png";
const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Logo} alt="logo" className="Logo" />
    </Link>

    {/* All the options will remain inside another div */}

    <div className="options">
      <Link className="option" to="/about">
        ABOUT
      </Link>
      <Link className="option" to="/blog">
        BLOG
      </Link>
      <Link className="option" to="/faq">
        FAQ
      </Link>
      <Link className="option" to="/login">
        Login
      </Link>
    </div>
  </div>
);

export default Header;
