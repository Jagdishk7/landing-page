import React from "react";
import "./cards.css";
import { AiFillStar } from "react-icons/ai";

const RatingCard = ({ price, heading, text,bottom }) => {
  return (
    <>
      <div className="rating-card">
        <div className="row">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h3 className="heading">{heading}</h3>
        <p>{text}</p>
        <h3 className="bottom-text">{bottom}</h3>
      </div>
    </>
  );
};

export default RatingCard;
