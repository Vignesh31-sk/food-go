import React from "react";
import "./FoodGo.css";
import burger from "../images/pizza3.png";

const FoodGo = () => {
  return (
    <body>
      <div className="container">
        <h1 id="title">Food Go</h1>
        <img src={burger} className="img" alt="Burger"></img>
      </div>
    </body>
  );
};

export default FoodGo;
