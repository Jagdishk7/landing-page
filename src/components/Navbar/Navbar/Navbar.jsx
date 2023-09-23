import React, { useState , useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          Restautant Landing Page
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li className="link-active">
              <NavLink to="/"  onClick={() => setShowMediaIcons(false)}>Landing</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Team</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}><BsFillCartFill/></NavLink>
            </li>
 
            
          </ul>
        </div>


        {/* 3rd social media links */}
        
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <div className="center" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </div>
          </div>
      
      </nav>
    </>
  );
};

export default Navbar;