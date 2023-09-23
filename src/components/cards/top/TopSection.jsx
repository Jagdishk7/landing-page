import React from "react";
import { NavLink } from "react-router-dom";
import "./TopSection.css";

const TopSection = ({ heading, text }) => {
  return (
    <>
      <section id="top-section">
        <div className="top-section container">
          <h1>{heading}</h1>
          <p>{text}</p>
          <div className="row"><NavLink className="btn1" to={"/"}>
            View Menu{" "}
          </NavLink>
          <NavLink className="btn2" to={"/"}>
            Reservation{" "}
          </NavLink></div>
        </div>
      </section>
    </>
  );
};

export default TopSection;
