import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";
import Card3 from "../Card3";

const Contact1 = ({ heading, text }) => {
  return (
    <>
      <div className="contact-card">
        <h1 className="heading">Hours of Operation</h1>
        <div className="bottom-line">
          <p className="bold">MON-FRI</p>
          <p>10:00am - 01:00pm</p>
          <p>04:00pm - 10:30pm</p>
        </div>
        <div className="bottom-line">
          <p className="bold">SAT</p>
          <p>03:00pm - 10:30pm</p>
        </div>
        <div className="mb-2">
          <p className="bold">SUN</p>
          <p>We are closed</p>
        </div>
        <NavLink className={'btn2'}>Make a Reservation</NavLink>
      </div>
    </>
  );
};

export default Contact1;
