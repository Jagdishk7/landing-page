import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

const Contact2 = () => {
  return (
    <>
    <div className="contact-card">
      <div className="center column upper">
        <h2 className="heading2">Drop us a line</h2>
        <p className="para2">Dont be shy let us know if you have any questions</p>
        <NavLink className={'btn2'}>contact us</NavLink>

      </div>
      <div className="center column">
        <h2 className="heading2">Our Newsletter</h2>
        <p className="para2">Dialogue is an essential part of any script</p>
        <div className="contact-form"><input type="text" placeholder="First Name" name="" id="" />
        <input type="text" placeholder="Last Name" name="" id="" />
        <input type="email" placeholder="Email" name="" id="" />
                <NavLink className={'btn2'}>contact us</NavLink>
</div>
      </div>
    </div>

    </>
  );
};

export default Contact2;
