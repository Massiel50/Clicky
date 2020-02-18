import React from "react";
import "./style.css";

const Cards = props => (
  <div className="card"
  onClick={() => props.clickedImage(props.id)}>
      <img src={props.image} alt=""/>
  </div>
);

export default Cards;
