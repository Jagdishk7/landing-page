import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";



const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        {/* 1st logo part  */}
        <div className="logo">
          Designed by <a href="https://www.linkedin.com/in/jagdeesh-kushwaha-%E2%9A%9B%EF%B8%8F-0218aa230" className="link-active">Jagdeesh Kushwaha</a>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            "footer-link"
          }>
          <ul>

            <li>
              <NavLink to="/" ><FaFacebookF/></NavLink>
            </li>
            <li>
              <NavLink to="/" ><FaTwitter/></NavLink>
            </li>
            <li>
              <NavLink to="/" ><BiLogoGmail/></NavLink>
            </li>
            <li>
              <NavLink to="/" ><BiLogoGmail/></NavLink>
            </li>
           
            
          </ul>
        </div>


        {/* 3rd social media links */}
              
      </footer>
    </>
  );
};

export default Footer;